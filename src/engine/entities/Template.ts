import { Injectable, Scope } from "@nestjs/common";

export class Template {    
    constructor (
        public readonly id: string
    ) {}
}