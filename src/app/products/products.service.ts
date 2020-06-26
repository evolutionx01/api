import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>
  ) {}

  async insertProduct(
    title: string,
    desc: string,
    brand: string,
    category: string,
    images: any,
    quanties: any
  ) {
    const newProduct = new this.productModel({
      title,
      description: desc,
      brand,
      category,
      images,
      quanties
    });
    const result = await newProduct.save();
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      category: prod.category,
      brand: prod.brand,
      images: prod.images,
      quanties: prod.quanties
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      brand: product.brand,
      images: product.images,
      quanties: product.quanties
    };
  }

  async updateProduct(
    productId: string,
    title: string,
    desc: string,
    brand: string,
    category: string,
    images: any,
    quanties: any
  ) {
    const updatedProduct = await this.findProduct(productId);
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (brand) {
      updatedProduct.brand = brand;
    }
    if (category) {
      updatedProduct.category = category;
    }
    if (images) {
      updatedProduct.images = images;
    }
    if (quanties) {
      updatedProduct.quanties = quanties;
    }
    await new this.productModel(updatedProduct).save();
    return updatedProduct;
  }

  async deleteProduct(prodId: string) {
    const result = await this.productModel.deleteOne({ _id: prodId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
