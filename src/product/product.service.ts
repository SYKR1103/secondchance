import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class ProductService {

    constructor (

      @InjectRepository(Product)
      private productRepo : Repository<Product>

    ) {}

    async createProduct(product : CreateProductDto) {
      const newproduct = await this.productRepo.create(product)
      await this.productRepo.save(newproduct)
      return newproduct
    }

    async getProductById(id : string) {
      const foundproduct = await this.productRepo.findOneBy({id})
      if (foundproduct) {
        throw new HttpException("not found", HttpStatus.NOT_FOUND)
      }
    }
    async getProducts() {
      return this.productRepo.find()
    }
    async updateProductById(id : string, product : CreateProductDto) {
      await this.productRepo.update(id, product)
      const updatedProduct = this.productRepo.findOneBy({id})
      if (updatedProduct) {
        throw new HttpException("not found", HttpStatus.NOT_FOUND)
      }
     }
    async deleteProductById(id : string) {
      
      const deleteproduct = this.productRepo.delete({id})
      if (!deleteproduct) {
        throw new HttpException("not found", HttpStatus.NOT_FOUND)

      console.log('done')
      return "deleted"
      }
    }


}
