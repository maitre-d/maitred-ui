const path = require('path');

// eslint-disable-next-line no-unused-vars
module.exports = (wallaby) => {
	const local = path.resolve(wallaby.localProjectDir, './src');
	const local_modules = path.resolve(wallaby.localProjectDir, './node_modules');

	process.env.NODE_PATH = [
		local,
		local_modules
	].join(path.delimiter);

	return {
		name: 'Maitred UI',

		autoDetect: true,

		hints: {
			ignoreCoverageForFile: /ignore file coverage/
		},

		files: [
			'src/**/*.js',
			'src/**/*.svelte'
		],

		tests: [
			'test/**/*.js',
		],

		runMode: 'onsave'
	};
};