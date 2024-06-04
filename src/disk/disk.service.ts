import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){}

    read() {
        this.powerService.supplyPower(10);
        console.log(`Disk is reading...`);

        return 'data';
    }
}
