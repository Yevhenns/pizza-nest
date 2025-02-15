import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Supplement } from './schemas/supplements.schema';
import { Model } from 'mongoose';
import { CreateSupplementDto } from './dto/createSupplement.dto';
import { UpdateSupplementDto } from './dto/updateSupplement.dto';

@Injectable()
export class SupplementsService {
  constructor(
    @InjectModel(Supplement.name) private supplementModel: Model<Supplement>,
  ) {}

  // findAll
  findAll(): Promise<Supplement[]> {
    return this.supplementModel.find().exec();
  }

  // createSupplement
  async createSupplement(dto: CreateSupplementDto): Promise<Supplement> {
    const createdSupplement = new this.supplementModel(dto);
    return createdSupplement.save();
  }

  // updateSupplement
  async updateSupplement(supplementId: string, dto: UpdateSupplementDto) {
    const updatedSupplement = await this.supplementModel
      .findByIdAndUpdate(supplementId, dto, { new: true })
      .exec();

    if (!updatedSupplement) {
      throw new Error('Supplement not found');
    }

    return {
      message: 'Supplement updated successfully',
      product: updatedSupplement,
    };
  }

  // deleteById
  async deleteById(supplementId: string) {
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
