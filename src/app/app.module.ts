import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HelloworldComponent } from './helloworld/helloworld.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent,
    PagenotfoundComponent,
    HelloworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
