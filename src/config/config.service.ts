// import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

// @Injectable()

// export type EnvConfig = Record<string, string>;

export class ConfigService {
    private readonly envConfig: {[key: string]: string};

    constructor(filePath: any) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    get(key: string): string {
        return this.envConfig[key];
    }

}

    // private readonly envConfig: EnvConfig;

    // constructor(filePath: string) {
    //     const config = dotenv.parse(fs.readFileSync(filePath));
    //     this.envConfig = this.validateInput(config);
    // }

    // private validateInput(envConfig: EnvConfig): EnvConfig {
    //     const envVarsSchema: Joi.ObjectSchema = Joi.object({
    //         NODE_ENV: Joi.string()
    //             .valid('development', 'production', 'test', 'provision')
    //             .default('development'),
    //         PORT: Joi.number().default(3000),
    //         API_AUTH_ENABLED: Joi.boolean().required(),
    //         DATABASE_USER: Joi.string().required(),
    //         DATABASE_PASSWORD: Joi.string().required(),
    //     });

    //     const {error, value: validatedEnvConfig} = envVarsSchema.validate(envConfig);

    //     if (error) {
    //         throw new Error(`Config validation error: ${error.message}`);
    //     }
    //     return validatedEnvConfig;
    // }

    // get(key: string): string {
    //     return this.envConfig[key];
    //   }

    // get isApiAuthEnabled(): boolean {
    //     return Boolean(this.envConfig.API_AUTH_ENABLED);
    //   }

    // get(isApiAuthEnabled): boolean {
    //     return Boolean(this.envConfig.API_AUTH_ENABLED);
    // }
