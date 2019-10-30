import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { Articles } from './articles/articles.entity';
import { ConfigModule } from './config/config.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { CategorieModule } from './categorie/categorie.module';
import { Categorie } from './categorie/categorie.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog',
      entities: [Articles, User, Categorie],
      synchronize: true,
    }),
    ArticlesModule,
    ConfigModule,
    UserModule,
    CategorieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
