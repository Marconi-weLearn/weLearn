import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importo modulo npm bootstrap
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UnitComponent } from './unit/unit.component';
import { WidgetComponent } from './widget/widget.component';
import { CoursesService } from './services/courses.service';
import { Slash2underscorePipe } from './slash2underscore.pipe';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';
import { WidgetHtmlComponent } from './widget-html/widget-html.component';
import { WidgetCodeComponent } from './widget-code/widget-code.component';
import { LoggerService } from './services/logger.service';
import { SessionsService } from './services/sessions.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UnitComponent,
    WidgetComponent,
    Slash2underscorePipe,
    WidgetHtmlComponent,
    WidgetCodeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    LoggerService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    SessionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
