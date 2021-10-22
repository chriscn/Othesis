import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";

@Injectable()
export class AppService {
    getRoot() {
        const information = JSON.parse(readFileSync('package.json', 'utf-8'));

        return {
            "name": information['name'],
            "version": information['version'],
            "description": information['description'],
            "author": information['author'],
            "license": information['license']
        };
    }
}
