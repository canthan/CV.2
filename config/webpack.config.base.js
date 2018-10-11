const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = require('./paths');

const APP_DIR = path.resolve(__dirname, '../src');

var config = env => {
	return {
		entry: APP_DIR + '/index.jsx',
		resolve: {
			modules: [paths.appNodeModules, paths.appSrc],
			extensions: [
				'.js',
				'.json',
				'.jsx',
				'.ts',
				'.tsx',
				'.d.ts',
				'.scss',
				'.css',
				'.less',
			],
		},
		module: {
			loaders: [
				{
					test: /\.(js?|jsx?)/,
					include: paths.appSrc,
					loader: 'babel-loader',
				},
				{
					test: /\.tsx?$/,
					use: 'awesome-typescript-loader',
				},
				{
					test: /\.(css?)/,
					use: [
						'style-loader',
						{ loader: 'css-loader', options: { importLoaders: 1 } },
					],
				},
				{
					test: /\.(scss?)/,
					include: APP_DIR,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
						},
					],
				},
				{
					test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
					loader: 'file-loader',
					options: {
						name(file) {
							if (env.development) {
								return '[path][name].[ext]';
							}
							return '[hash].[ext]';
						},
					},
				},
			],
		},
		plugins: [
			new CopyWebpackPlugin(
				[
					{
						context: 'src',
						from: {
							glob: 'assets/**/*',
							dot: true,
						},
						to: '',
					},
				],
				{
					ignore: ['.gitkeep'],
					debug: 'warning',
				}
			),
		],
		node: {
			fs: 'empty',
			child_process: 'empty',
		},
	};
};

module.exports = config;
