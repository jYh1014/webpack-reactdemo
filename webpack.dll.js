var path = require('path');
var webpack = require('webpack');
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
	devtool: false,
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	entry: {
		vendor: [
			'react',
			'react-dom',
			'antd',
			'redux',
			'prop-types',
			'react-redux',
			'ttk-rc-select',
			'ttk-rc-intro',
			'moment',
			'md5',
			'immutable',
			'history',
			'fastclick',
			'classnames',
			'omit.js',
			'react-keydown',
			'react-resizable',
			'react-json-tree',
			'react-viewer',
			'whatwg-fetch',
			'fixed-data-table-2'
		]
	},
	output: {
		path: path.join(__dirname, 'vendor'),
		filename: '[name].dll.js',
		library: '[name]_lib',
		// library 与 DllPlugin 中的 name 一致
	},
	plugins: [
		new webpack.DllPlugin({
			context: __dirname,
			name: '[name]_lib',
			path: path.join(__dirname, 'vendor', '[name].manifest.json'),
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: './',
    }),
	],
};