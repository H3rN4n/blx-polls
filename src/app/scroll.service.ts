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
      container: 'poll-container',
      target: 'poll-section',
      duration: 650,
      easing: 'easeOutElastic',
      offset: 20
    };

    this._scrollToService.scrollTo(config);
  }

  public triggerScrollToContact() {
    const config: ScrollToConfigOptions = {
      target: 'contact-container'
    };

    this._scrollToService.scrollTo(config);
  }
}
