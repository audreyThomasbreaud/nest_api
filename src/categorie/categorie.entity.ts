import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Articles } from '../articles/articles.entity';

@Entity()
export class Categorie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Articles, articles => articles.id)
    articles: Articles [];

}
