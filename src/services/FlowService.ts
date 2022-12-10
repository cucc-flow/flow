import { Injectable } from '@nestjs/common';
import { Flow } from '../engine/Flow';

@Injectable()
export class FlowService {
	constructor(
        public flow: Flow
    ) {
	}
}
