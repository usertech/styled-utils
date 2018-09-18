module.exports = {
	use: [
		'@usertech/neutrino-preset-eslint-prettier',
		[
			'@neutrinojs/react',
			{
				html: {
					title: '@usertech/styled-utils',
				},
				babel: {
					plugins: [['babel-plugin-styled-components', { fileName: false }]],
				},
			},
		],
		(neutrino) => neutrino.config.resolve.modules.add(neutrino.options.source),
		(neutrino) => neutrino.config.output.publicPath('/'),
	],
};
