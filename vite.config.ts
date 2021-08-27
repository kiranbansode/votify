import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactJsx from 'vite-react-jsx';
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter';
// Gives linting error if not converted to camelCase.
import { VitePWA as vitePWA } from 'vite-plugin-pwa';

export default defineConfig((configEnv) => ({
	plugins: [
		reactRefresh(),
		reactJsx(),
		vitePWA(),
		linterPlugin({
			include: ['./src/**/*.ts', './src/**/*.tsx'],
			linters: [new EsLinter({ configEnv }), new TypeScriptLinter()],
		}),
	],
	// Absolute import (aliases)
	resolve: {
		alias: [
			{ find: 'pages', replacement: '/src/pages' },
			{ find: 'components', replacement: '/src/components' },
			{ find: 'assets', replacement: '/src/assets' },
			{ find: 'utils', replacement: '/src/utils' },
			{ find: 'store', replacement: '/src/store' },
			{ find: 'hooks', replacement: '/src/hooks' },
			{ find: 'styled', replacement: '/src/styled' },
		],
	},
}));
