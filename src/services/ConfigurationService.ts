import * as fs from 'fs';

import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
	constructor() {
		//this.Application = JSON.parse(
		//	fs.readFileSync(process.env.NODE_CONFIG || './node_config.json', 'utf8'),
		//) as any as IApplication;
	}
}
