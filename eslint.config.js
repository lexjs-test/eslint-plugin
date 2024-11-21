import * as tseslint from 'typescript-eslint';
import plugin from './plugin/index.js';

export default tseslint.config(
  plugin.configs.recommended,
  plugin.configs.typescript,
);
