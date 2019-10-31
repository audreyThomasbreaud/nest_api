import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.UserRepository.find();
    }

    async findOne(id: number, user: User): Promise<any> {
        return await this.UserRepository.find(user);
    }

    async create(user: User): Promise<User> {
        return await this.UserRepository.save(user);
    }

    async update(id: number, user: User): Promise<any> {
        return await this.UserRepository.update(user.id, user);
    }

    async delete(id): Promise<any> {
        return await this.UserRepository.delete(id);
    }
}
