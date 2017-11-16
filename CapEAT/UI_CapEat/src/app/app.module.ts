import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { HomeComponent } from './Home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './Menu/menu.component';
import { BewellComponent } from './Menu/bewell.component';
import { MenuService } from './Services/menu.service';
import { BewellService } from './Services/bewell.service';
import { AddCartComponent } from './Addcart/addcart.component';
import { DialogComponent } from './Dialogue/dialogue.component';
import { MapComponent } from './map/map.component';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';
import { CateringComponent } from './catering/catering.component';
import { SpecialComponent } from './special/special.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { LoginService } from './Services/login.service';
import { HistoryService } from './Services/history.service';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { LunchComponent } from './Menu/lunch.component';
import { BreakfastComponent } from './Menu/breakfast.component';
import { LunchService } from './Services/lunch.service';
import { BreakfastService } from './Services/breakfast.service';
import {PaymentService} from './Services/payments.service';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './calendarutils/module';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true }),
    FormsModule,
    CommonModule,
    CalendarModule.forRoot(),
    DemoUtilsModule

  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    BewellComponent,
    AddCartComponent,
    DialogComponent,
    MapComponent,
    PaymentComponent,
    HistoryComponent,
    CateringComponent,
    SpecialComponent,
    NutritionComponent,
    ThankyouComponent,
    LunchComponent,
    BreakfastComponent
  ],
  providers: [
    MenuService,
    BewellService,
    LoginService,
    HistoryService,
    LunchService,
    BreakfastService,
    HomeComponent,
    AddCartComponent,
    PaymentService

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
