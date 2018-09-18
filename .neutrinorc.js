module.exports = {
	use: [
		'@usertech/neutrino-preset-eslint-prettier',
		[
			'@neutrinojs/library',
			{
				name: '@usertech/styled-utils',
			},
		],
	],
};
