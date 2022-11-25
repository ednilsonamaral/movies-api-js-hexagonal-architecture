import local from './local.js';
import docker from './docker.js';
import env from './env.js';

import EnvEnum from './envEnum.js';

const configByEnv = { local, docker, env };
const envList = EnvEnum.values();

export default {
	loadEnvironment: () => {
		const EnvEnum = process.env.NODE_ENV || 'local';
		console.log(`Loading config for ${EnvEnum} environment`);

		let config = env;

		if (!envList.some((e) => e === process.env.NODE_ENV)) {
			config = configByEnv[EnvEnum.toLowerCase()];
		}

		return { ...config };
	},
};
