import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HelloworldComponent } from './helloworld/helloworld.component';



const routes: Routes = [{path:"",redirectTo:"/hello",pathMatch:"full"},{path:'hello',component:HelloComponent}
,{path:"hello/:id",component:HelloworldComponent},
{path:'world',component:WorldComponent},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
