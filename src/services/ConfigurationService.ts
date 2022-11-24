import * as fs from 'fs';

import { Injectable } from '@nestjs/common';
import { IApplication } from '../interfaces/IApplication';
import { ILayer } from '../interfaces/ILayer';
import { ITemplate } from '../interfaces/ITemplate';

@Injectable()
export class ConfigurationService {
	public Application: IApplication;
	public get Palette(): ITemplate[] {
		return this.Application.palette;
	}

	public get Layers(): ILayer[] {
		return this.Application.layers;
	}

	constructor() {
		this.Application = JSON.parse(
			fs.readFileSync(process.env.NODE_CONFIG, 'utf8'),
		) as any as IApplication;
	}
}
