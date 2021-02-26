import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivComponent } from './archiv/archiv.component';
import { OptionComponent } from './option/option.component';
import { RoastComponent } from './roast/roast.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: 'roasting', component : RoastComponent, data: {reuse:true}},
  {path:'archiv', component : ArchivComponent, data: {reuse:false}},
  {path:'option', component : OptionComponent, data: {reuse:false}},
  { path: '**', component : StartComponent, data: {reuse:false}},
  {path: 'start', component : StartComponent, data: {reuse:false}  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
