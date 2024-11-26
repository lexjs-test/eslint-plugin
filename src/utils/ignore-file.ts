import { includeIgnoreFile, type FlatConfig } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function ignoreFile(file: string, meta: ImportMeta): string {
  const __filename = fileURLToPath(meta.url);
  const __dirname = path.dirname(__filename);
  const gitignorePath = path.resolve(__dirname, file);
  return includeIgnoreFile(gitignorePath);
}
