import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categorie } from '../categorie/categorie.entity';
import { User } from '../user/user.entity';

@Entity()

export class Articles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    content: string;

    @ManyToOne(type => User, user => user.name)
    user: User;

    @ManyToOne(type => Categorie, categorie => categorie.name)
    categorie: Categorie;

}
