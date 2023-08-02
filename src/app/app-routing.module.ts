import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateVarComponent } from './template-var/template-var.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { StaticPropertyComponent } from './static-property/static-property.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'template-variable',
    component: TemplateVarComponent
  },
  {
    path: 'content-child',
    component: ContentChildComponent
  },
  {
    path: 'view-child',
    component: ViewChildComponent
  },
  {
    path: 'static',
    component: StaticPropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
