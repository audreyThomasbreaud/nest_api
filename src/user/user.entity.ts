import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Articles } from '../articles/articles.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ select: false })
    password: string;

    @OneToMany(type => Articles, articles => articles.id)
    articles: Articles [];
}
