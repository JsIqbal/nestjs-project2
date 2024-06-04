import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(private cpuService: CpuService, private diskService: DiskService) {}

    @Get()
    run() {
        const cpu = this.cpuService.compute(12, 25);
        const disk = this.diskService.read();
    
        return { cpu, disk };
    }
}
