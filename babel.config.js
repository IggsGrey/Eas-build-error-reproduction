module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					alias: {
						'@assets': './src/assets',
						'@components': './src/components',
						'@modules': './src/modules',
						'@lib': './src/lib',
						'@constants': './src/constants',
						'@screens': './src/screens',
						'@navigation': './src/navigation',
						'@services': './src/services',
						'@routes': './src/routes',
						'@root': './src/root',
					},
				},
			],
		],
	};
};
