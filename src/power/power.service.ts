import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower(watt: number) {
        console.log(`Power consumption of ${watt}!`);
    }
}
