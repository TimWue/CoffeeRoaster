import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivComponent } from './archiv/archiv.component';
import { OptionComponent } from './option/option.component';
import { RoastComponent } from './roast/roast.component';

const routes: Routes = [
  {path: 'roasting', component : RoastComponent},
  {path:'archiv', component : ArchivComponent},
  {path:'option', component : OptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
