import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports:[PowerService]
  // exports: hacemos accesible la dependencia a otros modulos
})
export class PowerModule {}
