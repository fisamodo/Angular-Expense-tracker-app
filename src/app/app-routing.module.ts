import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SamplePageOneComponent } from './sample-page-one/sample-page-one.component';
import { SamplePageTwoComponent } from './sample-page-two/sample-page-two.component';


const routes: Routes = [
  {path:'', component: TestPageComponent, children:[
    {path:'budgetCalculator', component: MainPageComponent},
    {path:'services', component: SamplePageOneComponent},
    {path:'something', component: SamplePageTwoComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

