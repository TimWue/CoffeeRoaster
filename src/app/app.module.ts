import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatRadioModule} from '@angular/material/radio'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxEchartsModule } from 'ngx-echarts';
import { InfoComponent } from './info/info.component';
import { ControlComponent } from './control/control.component';
import { ParameterComponent } from './parameter/parameter.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { RoastComponent } from './roast/roast.component';
import { ArchivComponent } from './archiv/archiv.component';
import { OptionComponent } from './option/option.component';
import { HeaderComponent } from './header/header.component';
import { ArchivItemComponent } from './archiv/archiv-item/archiv-item.component';
import { ArchivDetailComponent } from './archiv/archiv-detail/archiv-detail.component';
import { SimpleGraphComponent } from './archiv/archiv-detail/simple-graph/simple-graph.component';
import { RatingItemComponent } from './archiv/archiv-detail/rating-item/rating-item.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    InfoComponent,
    ControlComponent,
    ParameterComponent,
    GraphComponent,
    RoastComponent,
    ArchivComponent,
    OptionComponent,
    HeaderComponent,
    ArchivItemComponent,
    ArchivDetailComponent,
    SimpleGraphComponent,
    RatingItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxChartsModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
