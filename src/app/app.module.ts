import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateVarComponent } from './template-var/template-var.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { ContentChildDemoComponent } from './content-child-demo/content-child-demo.component';
import { MyCards2Component } from './my-cards2/my-cards2.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StaticPropertyComponent } from './static-property/static-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateVarComponent,
    ContentChildComponent,
    MyCardsComponent,
    ContentChildDemoComponent,
    MyCards2Component,
    ViewChildComponent,
    MyCounterComponent,
    StaticPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
