import { CancellationToken } from '@idl/cancellation-tokens';
import { GlobalTokens, ICompileOptions } from '@idl/data-types/core';
import { LogManager } from '@idl/logger';
import { IDL_INDEX_OPTIONS, IDLIndex } from '@idl/parsing/index';
import { ILocalTokens } from '@idl/parsing/syntax-tree';

IDL_INDEX_OPTIONS.IS_TEST = true;

describe(`[auto generated] Find them in`, () => {
  it(`[auto generated] normal procedures`, async () => {
    // create index
    const index = new IDLIndex(
      new LogManager({
        alert: () => {
          // do nothing
        },
      }),
      0
    );

    // test code to extract tokens from
    const code = [
      `pro define_these_structures`,
      `compile_opt idl2`,
      `fhdr = {WAVFILEHEADER, $`,
      `  friff: bytarr(4), $ ; A four char string`,
      `  fsize: 0ul, $`,
      `  fwave: bytarr(4) $ ; A four char string`,
      `}`,
      ``,
      `end`,
    ];

    // extract tokens
    const tokenized = await index.getParsedProCode(
      'not-real',
      code,
      new CancellationToken(),
      { postProcess: true }
    );

    // define expected local variables
    const expectedVars: ILocalTokens = {
      func: {},
      pro: {
        define_these_structures: {
          fhdr: {
            type: 'v',
            name: 'fhdr',
            pos: [2, 0, 4],
            meta: {
              display: 'fhdr',
              isDefined: true,
              usage: [[2, 0, 4]],
              docs: '',
              source: 'user',
              type: [
                {
                  name: 'WAVFILEHEADER',
                  display: 'WAVFILEHEADER',
                  args: [],
                  meta: {},
                },
              ],
            },
          },
        },
      },
      main: {},
    };

    // verify results
    expect(tokenized.local).toEqual(expectedVars);

    // define expected global variables
    const expectedGlobal: GlobalTokens = [
      {
        type: 'p',
        name: 'define_these_structures',
        pos: [0, 4, 23],
        meta: {
          source: 'user',
          args: {},
          docs: '\n```idl\ndefine_these_structures\n```\n',
          docsLookup: {},
          display: 'define_these_structures',
          kws: {},
          private: false,
          struct: [],
        },
        file: 'not-real',
      },
    ];

    // verify results
    expect(tokenized.global).toEqual(expectedGlobal);

    // define expected compile options
    const expectedCompile: ICompileOptions = {
      func: {},
      pro: { define_these_structures: ['idl2'] },
      main: [],
    };

    // verify results
    expect(tokenized.compile).toEqual(expectedCompile);
  });
});
