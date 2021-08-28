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
			{ find: 'assets', replacement: '/src/assets' },
			{ find: 'components', replacement: '/src/components' },
			{ find: 'hooks', replacement: '/src/hooks' },
			{ find: 'layouts', replacement: '/src/layouts' },
			{ find: 'pages', replacement: '/src/pages' },
			{ find: 'store', replacement: '/src/store' },
			{ find: 'styled', replacement: '/src/styled' },
			{ find: 'utils', replacement: '/src/utils' },
		],
	},
}));
