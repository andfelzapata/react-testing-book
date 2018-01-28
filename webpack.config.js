
const path = require('path')

module.exports = {
	entry: [
		'./src/index.jsx',
		'./src/index.html'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: ''
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				include: path.join(__dirname, 'src'),
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'file-loader?name=[name].[ext]'
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			app: path.resolve(__dirname, 'src'),
			home: path.resolve(__dirname, 'src/home/'),
			state: path.resolve(__dirname, 'src/state/'),
			utilities: path.resolve(__dirname, 'src/utilities/'),
			components: path.resolve(__dirname, 'src/components/'),
		}
	},
}