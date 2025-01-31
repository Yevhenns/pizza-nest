import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async deleteById(productId: string, userId: string) {
    const adminId = process.env.ADMIN_ID;

    if (adminId !== userId) {
      throw new Error('Unauthorized: Only admin can delete products');
    }

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
