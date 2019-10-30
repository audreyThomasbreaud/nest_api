import { Controller, Get } from '@nestjs/common';
import { UserService} from './user.service';
import { User } from './user.entity';
import { Put, Post, Delete, Param, Body} from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async GetUser(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('create')
    async create(@Body() userData: User): Promise<any> {
        return this.userService.create(userData);
    }

    @Put('update/:id')
    async update(@Param('id') id: number, @Body() userData: User): Promise<any> {
        return this.userService.update(id, userData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number): Promise<any> {
        return this.userService.delete(id);
    }
}
