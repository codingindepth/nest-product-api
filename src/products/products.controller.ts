import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Put,
} from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('name') productName: string,
    @Body('description') productDesc: string,
    @Body('addedon') productAddedDate: string,
  ) {
   
    return this.productsService.addProduct(productName,productDesc,productAddedDate)
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getProductById(prodId);
  }

  @Put(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body('name') productName: string,
    @Body('description') productDesc: string,
    @Body('addedon') productAddedDate: string,
  ) {
    return this.productsService.updateProduct(productId,productName,productDesc,productAddedDate);
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    console.log('On delete');
    console.log(prodId)
     return this.productsService.deleteProduct(prodId);
  }
}