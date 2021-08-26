import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactJsx from 'vite-react-jsx';
import { VitePWA as vitePWA } from 'vite-plugin-pwa';
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter';

// https://vitejs.dev/config/
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
	resolve: {
		alias: [
			{ find: 'pages', replacement: '/src/pages' },
			{ find: 'components', replacement: '/src/components' },
			{ find: 'assets', replacement: '/src/assets' },
		],
	},
}));
