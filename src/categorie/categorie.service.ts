import { Injectable } from '@nestjs/common';
import { Categorie } from './categorie.entity';
import { Repository, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategorieService {
    constructor(
        @InjectRepository(Categorie)
        private CategorieRepository: Repository<Categorie>,
    ) {}

    async findAll(): Promise<Categorie[]> {
        return await this.CategorieRepository.find();
    }

    async create(categorie: Categorie): Promise<Categorie> {
        return await this.CategorieRepository.save(categorie);
    }

    async update(id: number, categorie: Categorie): Promise<any> {
        return await this.CategorieRepository.update(categorie.id, categorie);
    }

    async delete(id): Promise<any> {
        return await this.CategorieRepository.delete(id);
    }
}
