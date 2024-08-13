import { TaskAssembler } from '@idl/assembler';
import { LoadTask } from '@idl/schemas/tasks';

describe(`[auto generated] Verify direction formatting for ENVI Task Legacy`, () => {
  it(`[auto generated] upper case`, async () => {
    // test code to extract tokens from
    const code = [
      `{`,
      `  "name": "MLEFCReportToROI",`,
      `  "baseClass": "ENVITaskFromProcedure",`,
      `  "routine": "mlEFCReportToROI",`,
      `  "displayName": "ML EFC Report to ROI",`,
      `  "description": "This task will convert an ENVI Feature Counting (EFC) report file to an ROI for use with the new and improved chip to points. The class anmes must start with positive or negative (case insensitive). You don't have to have both present, but you cannot have mor than two classes.",`,
      `  "version": "5.3",`,
      `  "parameters": [`,
      `    {`,
      `      "name": "INPUT_RASTER",`,
      `      "displayName": "Training Data Source Raster",`,
      `      "dataType": "ENVIRASTER",`,
      `      "direction": "input",`,
      `      "parameterType": "required",`,
      `      "description": "Specify the original raster that was used to find training data."`,
      `    },`,
      `    {`,
      `      "name": "INPUT_EFC_REPORT_FILE",`,
      `      "displayName": "EFC Report File",`,
      `      "dataType": "ENVIURI",`,
      `      "direction": "input",`,
      `      "parameterType": "required",`,
      `      "description": "Specify the ENVI Feature Counting report file (must have a .txt extension)."`,
      `    },`,
      `    {`,
      `      "name": "  OUTPUT_ROI",`,
      `      "displayName": "Output ROI",`,
      `      "dataType": "  ENVIROI",`,
      `      "direction": "output",`,
      `      "parameterType": "required",`,
      `      "description": "The output ROI file that will contain the pixel locations of our training data."`,
      `    }`,
      `  ]`,
      `}`,
    ];

    // extract tokens
    const parsed = await LoadTask('my_file.task', code.join(''));

    // format code
    const formatted = TaskAssembler(parsed, {
      style: { control: 'upper' },
      autoFix: false,
      formatter: 'fiddle',
    });

    // verify formatting
    if (formatted === undefined) {
      expect(formatted).toEqual(undefined);
    } else {
      // define expected problems
      const expectedFormatting: string[] = [
        `{`,
        `  "version": "5.3",`,
        `  "name": "MLEFCReportToROI",`,
        `  "displayName": "ML EFC Report to ROI",`,
        `  "description": "This task will convert an ENVI Feature Counting (EFC) report file to an ROI for use with the new and improved chip to points. The class anmes must start with positive or negative (case insensitive). You don't have to have both present, but you cannot have mor than two classes.",`,
        `  "baseClass": "ENVITaskFromProcedure",`,
        `  "routine": "mlEFCReportToROI",`,
        `  "parameters": [`,
        `    {`,
        `      "name": "input_raster",`,
        `      "displayName": "Training Data Source Raster",`,
        `      "description": "Specify the original raster that was used to find training data.",`,
        `      "direction": "INPUT",`,
        `      "parameterType": "REQUIRED",`,
        `      "dataType": "ENVIRASTER"`,
        `    },`,
        `    {`,
        `      "name": "input_efc_report_file",`,
        `      "displayName": "EFC Report File",`,
        `      "description": "Specify the ENVI Feature Counting report file (must have a .txt extension).",`,
        `      "direction": "INPUT",`,
        `      "parameterType": "REQUIRED",`,
        `      "dataType": "ENVIURI"`,
        `    },`,
        `    {`,
        `      "name": "output_roi",`,
        `      "displayName": "Output ROI",`,
        `      "description": "The output ROI file that will contain the pixel locations of our training data.",`,
        `      "direction": "OUTPUT",`,
        `      "parameterType": "REQUIRED",`,
        `      "dataType": "ENVIROI"`,
        `    }`,
        `  ]`,
        `}`,
      ];

      // verify formatting
      expect(formatted.split(`\n`)).toEqual(expectedFormatting);
    }
  });

  it(`[auto generated] lower`, async () => {
    // test code to extract tokens from
    const code = [
      `{`,
      `  "name": "MLEFCReportToROI",`,
      `  "baseClass": "ENVITaskFromProcedure",`,
      `  "routine": "mlEFCReportToROI",`,
      `  "displayName": "ML EFC Report to ROI",`,
      `  "description": "This task will convert an ENVI Feature Counting (EFC) report file to an ROI for use with the new and improved chip to points. The class anmes must start with positive or negative (case insensitive). You don't have to have both present, but you cannot have mor than two classes.",`,
      `  "version": "5.3"   ,`,
      `  "parameters":   [`,
      `    {`,
      `      "name": "INPUT_RASTER",`,
      `      "displayName": "Training Data Source Raster",`,
      `      "dataType": "ENVIRASTER",`,
      `      "direction": "INPUT",`,
      `      "parameterType": "REQUIRED",`,
      `      "description": "Specify the original raster that was used to find training data."`,
      `    },`,
      `    {`,
      `      "name": "INPUT_EFC_REPORT_FILE",`,
      `      "displayName": "EFC Report File",`,
      `      "dataType": "ENVIURI",`,
      `      "direction": "INPUT",`,
      `      "parameterType": "REQUIRED",`,
      `      "description": "Specify the ENVI Feature Counting report file (must have a .txt extension)."`,
      `    },`,
      `    {`,
      `      "name": "OUTPUT_ROI",`,
      `      "displayName": "Output ROI",`,
      `      "dataType": "ENVIROI",`,
      `      "direction": "OUTPUT",`,
      `      "parameterType": "REQUIRED",`,
      `      "description": "The output ROI file that will contain the pixel locations of our training data."`,
      `    }`,
      `  ]`,
      `}`,
    ];

    // extract tokens
    const parsed = await LoadTask('my_file.task', code.join(''));

    // format code
    const formatted = TaskAssembler(parsed, {
      style: { control: 'lower' },
      autoFix: false,
      formatter: 'fiddle',
    });

    // verify formatting
    if (formatted === undefined) {
      expect(formatted).toEqual(undefined);
    } else {
      // define expected problems
      const expectedFormatting: string[] = [
        `{`,
        `  "version": "5.3",`,
        `  "name": "MLEFCReportToROI",`,
        `  "displayName": "ML EFC Report to ROI",`,
        `  "description": "This task will convert an ENVI Feature Counting (EFC) report file to an ROI for use with the new and improved chip to points. The class anmes must start with positive or negative (case insensitive). You don't have to have both present, but you cannot have mor than two classes.",`,
        `  "baseClass": "ENVITaskFromProcedure",`,
        `  "routine": "mlEFCReportToROI",`,
        `  "parameters": [`,
        `    {`,
        `      "name": "input_raster",`,
        `      "displayName": "Training Data Source Raster",`,
        `      "description": "Specify the original raster that was used to find training data.",`,
        `      "direction": "input",`,
        `      "parameterType": "required",`,
        `      "dataType": "ENVIRASTER"`,
        `    },`,
        `    {`,
        `      "name": "input_efc_report_file",`,
        `      "displayName": "EFC Report File",`,
        `      "description": "Specify the ENVI Feature Counting report file (must have a .txt extension).",`,
        `      "direction": "input",`,
        `      "parameterType": "required",`,
        `      "dataType": "ENVIURI"`,
        `    },`,
        `    {`,
        `      "name": "output_roi",`,
        `      "displayName": "Output ROI",`,
        `      "description": "The output ROI file that will contain the pixel locations of our training data.",`,
        `      "direction": "output",`,
        `      "parameterType": "required",`,
        `      "dataType": "ENVIROI"`,
        `    }`,
        `  ]`,
        `}`,
      ];

      // verify formatting
      expect(formatted.split(`\n`)).toEqual(expectedFormatting);
    }
  });

  it(`[auto generated] ignore`, async () => {
    // test code to extract tokens from
    const code = [
      `{`,
      `  "name": "MLEFCReportToROI",`,
      `  "baseClass": "ENVITaskFromProcedure",`,
      `  "routine": "mlEFCReportToROI",`,
      `  "displayName": "ML EFC Report to ROI",`,
      `  "description": "This task will convert an ENVI Feature Counting (EFC) report file to an ROI for use with the new and improved chip to points. The class anmes must start with positive or negative (case insensitive). You don't have to have both present, but you cannot have mor than two classes.",`,
      `  "version": "5.3",`,
      `  "parameters": [`,
      `    {`,
      `      "name": "INPUT_RASTER",`,
      `      "displayName": "Training Data Source Raster",`,
      `      "dataType": "ENVIRASTER",`,
      `      "direction": "INPUT",`,
      `      "parameterType": "REQUIRED",`,
      `      "description": "Specify the original raster that was used to find training data."`,
      `    },`,
      `    {`,
      `      "name": "INPUT_EFC_REPORT_FILE",`,
      `      "displayName": "EFC Report File",`,
      `      "dataType": "ENVIURI",`,
      `      "direction": "input",`,
      `      "parameterType": "required",`,
      `      "description": "Specify the ENVI Feature Counting report file (must have a .txt extension)."`,
      `    },`,
      `    {`,
      `      "name": "OUTPUT_ROI",`,
      `      "displayName": "Output ROI",`,
      `      "dataType": "ENVIROI",`,
      `      "direction": "OUTPUT",`,
      `      "parameterType": "REQUIRED",`,
      `      "description": "The output ROI file that will contain the pixel locations of our training data."`,
      `    }`,
      `  ]`,
      `}`,
    ];

    // extract tokens
    const parsed = await LoadTask('my_file.task', code.join(''));

    // format code
    const formatted = TaskAssembler(parsed, {
      style: { control: 'none' },
      autoFix: false,
      formatter: 'fiddle',
    });

    // verify formatting
    if (formatted === undefined) {
      expect(formatted).toEqual(undefined);
    } else {
      // define expected problems
      const expectedFormatting: string[] = [
        `{`,
        `  "version": "5.3",`,
        `  "name": "MLEFCReportToROI",`,
        `  "displayName": "ML EFC Report to ROI",`,
        `  "description": "This task will convert an ENVI Feature Counting (EFC) report file to an ROI for use with the new and improved chip to points. The class anmes must start with positive or negative (case insensitive). You don't have to have both present, but you cannot have mor than two classes.",`,
        `  "baseClass": "ENVITaskFromProcedure",`,
        `  "routine": "mlEFCReportToROI",`,
        `  "parameters": [`,
        `    {`,
        `      "name": "input_raster",`,
        `      "displayName": "Training Data Source Raster",`,
        `      "description": "Specify the original raster that was used to find training data.",`,
        `      "direction": "INPUT",`,
        `      "parameterType": "REQUIRED",`,
        `      "dataType": "ENVIRASTER"`,
        `    },`,
        `    {`,
        `      "name": "input_efc_report_file",`,
        `      "displayName": "EFC Report File",`,
        `      "description": "Specify the ENVI Feature Counting report file (must have a .txt extension).",`,
        `      "direction": "input",`,
        `      "parameterType": "required",`,
        `      "dataType": "ENVIURI"`,
        `    },`,
        `    {`,
        `      "name": "output_roi",`,
        `      "displayName": "Output ROI",`,
        `      "description": "The output ROI file that will contain the pixel locations of our training data.",`,
        `      "direction": "OUTPUT",`,
        `      "parameterType": "REQUIRED",`,
        `      "dataType": "ENVIROI"`,
        `    }`,
        `  ]`,
        `}`,
      ];

      // verify formatting
      expect(formatted.split(`\n`)).toEqual(expectedFormatting);
    }
  });
});
