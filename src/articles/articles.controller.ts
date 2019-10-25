import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.entity';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Get()
    async GetArticles(): Promise<Articles[]> {
        return this.articlesService.findAll();
    }

    @Post('create')
    async create(@Body() articlesData: Articles): Promise < any> {
        return this.articlesService.create(articlesData);
    }

    @Put('update/:id')
    async update(@Param('id') id: number, @Body() articlesData: Articles): Promise<any> {
        return this.articlesService.update(id, articlesData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number): Promise <any> {
        return this.articlesService.delete(id);
    }

}
