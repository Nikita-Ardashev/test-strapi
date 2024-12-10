import { register } from 'module';
import { config } from 'process';

export default () => ({
	'schemas-to-ts': {
		enabled: true,
		config: {
			destinationFolder: 'src/types',
		},
	},
	// 'users-permissions': {
	// 	config: {
	// 		register: {
	// 			allowedFields: ['confirmed'],
	// 		},
	// 	},
	// },
});
