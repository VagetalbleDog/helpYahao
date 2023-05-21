import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { foodModule } from './food/food.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "cid418sh",
    database: "canteenSystem",
    port: 3306,
    entities: [User],
    synchronize: true,
    autoLoadEntities: true,
  }),
UserModule,foodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
