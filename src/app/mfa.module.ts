import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Type } from '@angular/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

export interface LoadableApp {
  EntryComponent: Type<any>;
}

@NgModule({
  imports: [AppModule]
})
export class MfaModule {
  constructor(private resolver: ComponentFactoryResolver) {}

  public resolve(): ComponentFactory<AppComponent> {
    return this.resolver.resolveComponentFactory(AppComponent);
  }
}