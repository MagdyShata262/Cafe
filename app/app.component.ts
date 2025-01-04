import { Component, HostBinding } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,

} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  constructor(private contexts: ChildrenOutletContexts) {}
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
    console.log("gsgagtr")
    console.log("gsgagtrffffffffffffffffffffffffhhhhhhhhhhhhhhh")
    console.log("gsgagtr")
    console.log("gsgagtr1111111111111111111")
    console.log("gsgagtr1111111111111111111")
    console.log("gsgagtr1111111111111111111")
    console.log("gsgagtr1111111111111111111")
    console.log("gsgagtr1111111111111111111000000000000000000")
    console.log("gsgagtr1111111111111111111000000000000000000")
    console.log("gsgagtr1111111111111111111000000000000000000")
    console.log("gsgagtr1111111111111111111000000000000000000")
    console.log("gsgagtr11111111111111111110000000000000000")


  }

  title = 'my-app';
}
