#!/usr/bin/env node

import { Command } from 'commander';
import { convertDisqusToWxr } from './converter';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();

program
  .name('disqus-to-wxr')
  .description('Convert Disqus XML Export to WordPress WXR format')
  .version('1.0.0')
  .argument('<input>', 'Input Disqus XML file')
  .argument('[output]', 'Output WXR XML file (optional, defaults to input filename with -wxr suffix)')
  .option('-t, --title <title>', 'Site title', 'Converted from Disqus')
  .option('-u, --url <url>', 'Site URL', 'http://example.com')
  .option('-d, --description <description>', 'Site description', 'Converted comments from Disqus')
  .action(async (input: string, output: string | undefined, options) => {
    try {
      if (!fs.existsSync(input)) {
        console.error(`Error: Input file "${input}" not found`);
        process.exit(1);
      }

      const outputFile = output || input.replace(/\.xml$/i, '-wxr.xml');
      
      console.log(`Converting ${input} to ${outputFile}...`);
      
      await convertDisqusToWxr(input, outputFile, {
        title: options.title,
        url: options.url,
        description: options.description
      });
      
      console.log('Conversion completed successfully!');
    } catch (error) {
      console.error('Error during conversion:', error);
      process.exit(1);
    }
  });

program.parse();
