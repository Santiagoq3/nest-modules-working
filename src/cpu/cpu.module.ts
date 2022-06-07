import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { CpuService } from './cpu.service';

@Module({
  imports: [PowerModule],
  // imports: tenemos conectado el cpu module y power module. ahora tenemos acceso a todos los servicios de powerModule
  providers: [CpuService],
  exports: [CpuService]
})
export class CpuModule {}
