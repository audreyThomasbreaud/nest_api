import { Controller, Get } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { Categorie } from './categorie.entity';
import { Put, Post, Delete, Param, Body} from '@nestjs/common';

@Controller('categorie')
export class CategorieController {
    constructor(private categorieService: CategorieService) {}

    @Get()
    async GetCategorie(): Promise<Categorie[]> {
        return this.categorieService.findAll();
    }

    @Post('create')
    async create(@Body() categorieData: Categorie): Promise<any> {
        return this.categorieService.create(categorieData);
    }

    @Put('update/:id')
    async update(@Param('id') id: number, @Body() categorieData: Categorie): Promise<any> {
        return this.categorieService.update(id, categorieData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number): Promise<any> {
        return this.categorieService.delete(id);
    }

}
