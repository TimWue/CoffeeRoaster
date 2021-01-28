import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivComponent } from './archiv/archiv.component';
import { OptionComponent } from './option/option.component';
import { RoastComponent } from './roast/roast.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: 'roasting', component : RoastComponent},
  {path:'archiv', component : ArchivComponent},
  {path:'option', component : OptionComponent},
  { path: '**', component : StartComponent},
  {path: 'start', component : StartComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
