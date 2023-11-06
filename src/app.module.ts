import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SpecialdbModule } from './specialdb/specialdb.module';
import { ConfigModule } from '@nestjs/config/dist';
import * as Joi from "@hapi/joi"

@Module({
  imports: [ProductModule, SpecialdbModule, ConfigModule.forRoot({

    validationSchema : Joi.object({

      // .env에서 정의된 변수 그대로 사용

     POSTGRES_HOST : Joi.string().required(),     
     POSTGRES_PORT :     Joi.number().required(), 
     POSTGRES_USER :      Joi.string().required(),
     POSTGRES_PASSWORD :      Joi.string().required(),
     POSTGRES_DB :      Joi.string().required()

    })


  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
