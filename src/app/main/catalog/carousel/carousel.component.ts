import {Component, Input, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import {CatalogService} from "../../services/catalog.service";

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel.component.html',
})
export class NgbdCarouselBasic {
  @Input() item: any;

  // @ts-ignore
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  constructor(config: NgbCarouselConfig, public catalogService: CatalogService) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = 0;

  }

  ngOnInit(): void {
    this.catalogService.videoSlide$.subscribe((value) => {
      this.carousel.next();
    });
  }

  ngAfterViewInit() {


  }


}
