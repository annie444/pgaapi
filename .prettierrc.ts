import type { Config } from 'prettier';

const config: Config = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  objectWrap: 'collapse',
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'always',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: true,
};

export default config;
