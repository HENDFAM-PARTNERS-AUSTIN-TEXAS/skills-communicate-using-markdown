/**
 *
 * Source code from npm module "get-port" so its not compiled to stupid ESM
 *
 * https://www.npmjs.com/package/get-port
 *
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 */

import * as net from 'net';
import * as os from 'os';

class Locked extends Error {
  constructor(port) {
    super(`${port} is locked`);
  }
}

const lockedPorts = {
  old: new Set(),
  young: new Set(),
};

// On this interval, the old locked ports are discarded,
// the young locked ports are moved to old locked ports,
// and a new young set for locked ports are created.
const releaseOldLockedPortsIntervalMs = 1000 * 15;

const minPort = 1024;
const maxPort = 65_535;

// Lazily create timeout on first use
let timeout;

const getLocalHosts = () => {
  const interfaces = os.networkInterfaces();

  // Add undefined value for createServer function to use default host,
  // and default IPv4 host in case createServer defaults to IPv6.
  const results = new Set([undefined, '0.0.0.0']);

  for (const _interface of Object.values(interfaces)) {
    for (const config of _interface as any) {
      results.add(config.address);
    }
  }

  return results;
};

const checkAvailablePort = (options) =>
  new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);

    server.listen(options, () => {
      const { port } = server.address() as any;
      server.close(() => {
        resolve(port);
      });
    });
  });

const getAvailablePort = async (options, hosts) => {
  if (options.host || options.port === 0) {
    return checkAvailablePort(options);
  }

  for (const host of hosts) {
    try {
      await checkAvailablePort({ port: options.port, host }); // eslint-disable-line no-await-in-loop
    } catch (error) {
      if (!['EADDRNOTAVAIL', 'EINVAL'].includes(error.code)) {
        throw error;
      }
    }
  }

  return options.port;
};

const portCheckSequence = function* (ports) {
  if (ports) {
    yield* ports;
  }

  yield 0; // Fall back to 0 if anything else failed
};

export default async function getPorts(options?: any) {
  let ports;
  let exclude = new Set();

  if (options) {
    if (options.port) {
      ports = typeof options.port === 'number' ? [options.port] : options.port;
    }

    if (options.exclude) {
      const excludeIterable = options.exclude;

      if (typeof excludeIterable[Symbol.iterator] !== 'function') {
        throw new TypeError('The `exclude` option must be an iterable.');
      }

      for (const element of excludeIterable) {
        if (typeof element !== 'number') {
          throw new TypeError(
            'Each item in the `exclude` option must be a number corresponding to the port you want excluded.'
          );
        }

        if (!Number.isSafeInteger(element)) {
          throw new TypeError(
            `Number ${element} in the exclude option is not a safe integer and can't be used`
          );
        }
      }

      exclude = new Set(excludeIterable);
    }
  }

  if (timeout === undefined) {
    timeout = setTimeout(() => {
      timeout = undefined;

      lockedPorts.old = lockedPorts.young;
      lockedPorts.young = new Set();
    }, releaseOldLockedPortsIntervalMs);

    // Does not exist in some environments (Electron, Jest jsdom env, browser, etc).
    if (timeout.unref) {
      timeout.unref();
    }
  }

  const hosts = getLocalHosts();

  for (const port of portCheckSequence(ports)) {
    try {
      if (exclude.has(port)) {
        continue;
      }

      let availablePort = await getAvailablePort({ ...options, port }, hosts); // eslint-disable-line no-await-in-loop
      while (
        lockedPorts.old.has(availablePort) ||
        lockedPorts.young.has(availablePort)
      ) {
        if (port !== 0) {
          throw new Locked(port);
        }

        availablePort = await getAvailablePort({ ...options, port }, hosts); // eslint-disable-line no-await-in-loop
      }

      lockedPorts.young.add(availablePort);

      return availablePort;
    } catch (error) {
      if (
        !['EADDRINUSE', 'EACCES'].includes(error.code) &&
        !(error instanceof Locked)
      ) {
        throw error;
      }
    }
  }

  throw new Error('No available ports found');
}

export function portNumbers(from, to) {
  if (!Number.isInteger(from) || !Number.isInteger(to)) {
    throw new TypeError('`from` and `to` must be integer numbers');
  }

  if (from < minPort || from > maxPort) {
    throw new RangeError(`'from' must be between ${minPort} and ${maxPort}`);
  }

  if (to < minPort || to > maxPort) {
    throw new RangeError(`'to' must be between ${minPort} and ${maxPort}`);
  }

  if (from > to) {
    throw new RangeError('`to` must be greater than or equal to `from`');
  }

  const generator = function* (from2: any, to2: any) {
    for (let port = from2; port <= to2; port++) {
      yield port;
    }
  };

  return generator(from, to);
}
