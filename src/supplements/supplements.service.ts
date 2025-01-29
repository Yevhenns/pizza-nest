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
}
