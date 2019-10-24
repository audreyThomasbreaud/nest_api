import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.entity';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Get()
    async GetArticles(): Promise<Articles[]> {
        return this.articlesService.findAll();
    }

}
