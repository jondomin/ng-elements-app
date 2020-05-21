import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [HelloWorldComponent],
  entryComponents: [HelloWorldComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const helloWorld = createCustomElement(HelloWorldComponent, {
      injector: this.injector,
    });
    customElements.define('app-hello-world', helloWorld);
  }

  ngDoBootStrap() {}
}
