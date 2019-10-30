import { Injectable } from '@nestjs/common';
import { Articles } from './articles.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from 'src/categorie/categorie.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Articles)
        private ArticleRepository: Repository<Articles>,
    ) {}

    async findAll(): Promise<Articles[]> {
        return await this.ArticleRepository.find({ select: ['id', 'user', 'categorie'], relations: ['user', 'categorie']  });
    }

    async create(articles: Articles): Promise<Articles> {
        // return await this.ArticleRepository.save(articles);
        return await this.ArticleRepository.save(articles);
    }

    async update(id: number, articles: Articles): Promise<any> {
        return  await this.ArticleRepository.update(articles.id, articles);
    }

    async delete(id): Promise<any> {
        return await this.ArticleRepository.delete(id);
    }
    }
