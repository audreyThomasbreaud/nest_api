import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Articles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    content: string;

    @Column()
    auteur: string;

}
