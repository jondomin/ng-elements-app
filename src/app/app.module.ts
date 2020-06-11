import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Type } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';
import { HeroComponent } from './hero/hero.component';
import { DebugComponent } from './debug/debug.component';

@NgModule({
  declarations: [HelloWorldComponent, HeroComponent, DebugComponent],
  entryComponents: [HelloWorldComponent, HeroComponent, DebugComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    this.createElement('app-hello-world', HelloWorldComponent);
    this.createElement('app-hero', HeroComponent);
    this.createElement('app-debug', DebugComponent);
  }
  createElement(name: string, component: Type<any>) {
    const element = createCustomElement(component, {
      injector: this.injector,
    });
    customElements.define(name, element);
  }

  ngDoBootstrap() {}
}
