import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat} from './cats/entity/cats.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'login_lecture',
      entities: [Cat, User],
      synchronize: true,
    }),
    CatsModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
