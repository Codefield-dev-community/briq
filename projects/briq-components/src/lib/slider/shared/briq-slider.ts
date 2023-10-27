import { BriqSlide } from '@briq/slider/shared/briq-slide';

export class BriqSlider {

  constructor(
    public slides: BriqSlide[],
    public nextRoute: any[]
  ) {
  }
}
