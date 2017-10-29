import { ClothingModel, LocationModel, SettlingModel} from '../shared/models';

export class NapModel {
    startTime: Number;
    finishTime: Number;
    clothing: ClothingEnum[];
    location: LocationEnum;
    settling: SettlingEnum[];
    temperature: number;

    constructor() {
        this.startTime = Date.now();
    }
}

export enum SettlingEnum {
    pacifier,
    music,
    rocked,
    handsOn
}