import { Module } from '@nestjs/common';
import { Categorie } from './categorie.entity';
import { CategorieController } from './categorie.controller';
import { CategorieService } from './categorie.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Categorie]),
],
controllers: [CategorieController],
providers: [CategorieService],
exports: [CategorieService],
})
export class CategorieModule {}
