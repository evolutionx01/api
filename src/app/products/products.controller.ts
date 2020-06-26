import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete
} from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('brand') prodBrand: string,
    @Body('category') prodCategory: string,
    @Body('images') prodImages: any,
    @Body('quanties') prodQuanties: any
  ) {
    const generatedId = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodBrand,
      prodCategory,
      prodImages,
      prodQuanties
    );
    return { id: generatedId };
  }

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getProducts();
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('brand') prodBrand: string,
    @Body('category') prodCategory: string,
    @Body('images') prodImages: any,
    @Body('quanties') prodQuanties: any
  ) {
    const updatedProduct = await this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDesc,
      prodBrand,
      prodCategory,
      prodImages,
      prodQuanties
    );
    return updatedProduct;
  }

  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
    await this.productsService.deleteProduct(prodId);
    return { message: 'product deleted successfully' };
  }
}
