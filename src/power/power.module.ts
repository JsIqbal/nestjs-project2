import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // can be used in this same module
  exports: [PowerService] // can be used across different modules
})
export class PowerModule {}
