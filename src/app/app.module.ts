import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatRadioModule} from '@angular/material/radio'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxEchartsModule } from 'ngx-echarts';
import { InfoComponent } from './info/info.component';
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
import { StartComponent } from './start/start.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './customReUseStrategy';
import { ReviewComponent } from './info/review/review.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './services/config.service';
import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { environment as env } from '../environments/environment';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: env.mqtt.server,
  port: env.mqtt.port,
  protocol: (env.mqtt.protocol === "wss") ? "wss" : "ws",
  path: '',
};

// This is for configfile
// https://juristr.com/blog/2018/01/ng-app-runtime-config/
const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    GraphComponent,
    RoastComponent,
    ArchivComponent,
    OptionComponent,
    HeaderComponent,
    ArchivItemComponent,
    ArchivDetailComponent,
    SimpleGraphComponent,
    RatingItemComponent,
    StartComponent,
    ReviewComponent,
    
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
    }),
    HttpClientModule,
    MatPaginatorModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy},
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
