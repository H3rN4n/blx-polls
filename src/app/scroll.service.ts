import { Injectable } from '@angular/core';
import {
  ScrollToService,
  ScrollToConfigOptions
} from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private _scrollToService: ScrollToService) {}

  public triggerScrollToPoll() {
    const config: ScrollToConfigOptions = {
      target: 'poll-container',
      duration: 850,
      easing: 'easeOutElastic',
      offset: 10
    };

    this._scrollToService.scrollTo(config);
  }

  public triggerScrollToContact() {
    const config: ScrollToConfigOptions = {
      target: 'form-section',
      duration: 650,
      easing: 'easeOutElastic',
      offset: 20
    };

    this._scrollToService.scrollTo(config);
  }
}
