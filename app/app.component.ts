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
    console.log("gsgagtr11111111111111111110000000000000000001")
    console.log("gsgagtr11111111111111111110000000000000000002")
    console.log("gsgagtr11111111111111111110000000000000000003")
    console.log("gsgagtr11111111111111111110000000000000000004")
    console.log("gsgagtr11111111111111111110000000000000000005")
    console.log("gsgagtr11111111111111111110000000000000000006")
    console.log("gsgagtr11111111111111111110000000000000000007")
    console.log("gsgagtr11111111111111111110000000000000000008")

  }

  title = 'my-app';
}
