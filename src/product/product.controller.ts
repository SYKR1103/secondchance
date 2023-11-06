import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() CreateProductDto : CreateProductDto) {
    return await this.productService.createProduct(CreateProductDto)
  }

  @Get(":id")
  async getProductById(@Param("id") id: string) {
    return await this.productService.getProductById(id)
  }
  
  @Get("all")
  async getProducts() {
    return await this.productService.getProducts()
  }

  @Patch(":id")
  async updateProductById(@Param("id") id:string, @Body()  CreateProductDto : CreateProductDto) {
    return await this.productService.updateProductById(id, CreateProductDto)
  }

  @Delete(":id")

  async deleteProductById(@Param("id") id:string) {
    return await this.productService.deleteProductById(id)  
  
  }
}


