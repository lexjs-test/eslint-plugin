import importPlugin from 'eslint-plugin-import';
import * as tseslint from 'typescript-eslint';
export default tseslint.config(importPlugin.flatConfigs.recommended, {
    rules: {
        'import/no-cycle': 'error',
        'import/no-duplicates': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'export' },
            { blankLine: 'always', prev: 'export', next: '*' },
            { blankLine: 'any', prev: 'export', next: 'export' },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
});
