import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { ProtoflioComponent } from './protoflio/protoflio.component';
import { ServicesComponent } from './services/services.component';
import { TestmonialComponent } from './testmonial/testmonial.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutmeComponent},
  {path:"contact",component:ContactComponent},
  {path:"protofolio",component:ProtoflioComponent},
  {path:"services",component:ServicesComponent},
  {path:"testmonila",component:TestmonialComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
