import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import {
  CreateProductDto,
  CreateProductListDto,
} from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  // findAll
  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  // createProduct
  async createProduct(dto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(dto);
    return createdProduct.save();
  }

  // createProductList
  async createProductList(dto: CreateProductListDto): Promise<Product[]> {
    return this.productModel.insertMany(dto.products);
  }

  // updateProduct
  async updateProduct(productId: string, dto: UpdateProductDto) {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(productId, dto, { new: true })
      .exec();

    if (!updatedProduct) {
      throw new Error('Product not found');
    }

    return {
      message: 'Product updated successfully',
      product: updatedProduct,
    };
  }

  // deleteById
  async deleteById(productId: string) {
    const deletedProduct = await this.productModel
      .findByIdAndDelete(productId)
      .exec();

    if (!deletedProduct) {
      throw new Error('Product not found');
    }

    return {
      message: 'Product deleted successfully',
      product: deletedProduct,
    };
  }
}
