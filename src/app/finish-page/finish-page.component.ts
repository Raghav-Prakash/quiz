import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.less']
})
export class FinishPageComponent {

  constructor(
    private location: LocationStrategy
  ) {
    this.preventBackButton();
  }

  /**
   * Prevent back button functionality in the browser.
   */
  private preventBackButton() {
    history.pushState(null, null, window.location.href);

    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

}
