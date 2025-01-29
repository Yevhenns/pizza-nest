import { Module } from '@nestjs/common';
import { SupplementsService } from './supplements.service';
import { SupplementsController } from './supplements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Supplement, SupplementSchema } from './schemas/supplements.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Supplement.name, schema: SupplementSchema },
    ]),
  ],
  controllers: [SupplementsController],
  providers: [SupplementsService],
})
export class SupplementsModule {}
