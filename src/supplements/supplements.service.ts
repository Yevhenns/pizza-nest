import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Supplement } from './schemas/supplements.schema';
import { Model } from 'mongoose';

@Injectable()
export class SupplementsService {
  constructor(
    @InjectModel(Supplement.name) private supplementModel: Model<Supplement>,
  ) {}

  findAll(): Promise<Supplement[]> {
    return this.supplementModel.find().exec();
  }

  async deleteById(supplementId: string, userId: string) {
    const adminId = process.env.ADMIN_ID;

    if (adminId !== userId) {
      throw new Error('Unauthorized: Only admin can delete supplements');
    }

    const deletedSupplement = await this.supplementModel
      .findByIdAndDelete(supplementId)
      .exec();

    if (!deletedSupplement) {
      throw new Error('Supplement not found');
    }

    return {
      message: 'Supplement deleted successfully',
      supplement: deletedSupplement,
    };
  }
}
