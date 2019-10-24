import { Injectable } from '@nestjs/common';
import { Articles } from './articles.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Articles)
        private ArticleRepository: Repository<Articles>,
    ) {}

    async findAll(): Promise<Articles[]> {
        return await this.ArticleRepository.find();
    }
}
