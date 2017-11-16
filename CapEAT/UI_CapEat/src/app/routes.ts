import { Routes } from '@angular/router';

import { MenuComponent } from './Menu/menu.component';
import { BewellComponent } from './Menu/bewell.component';
import { HomeComponent } from './Home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { AddCartComponent} from './Addcart/addcart.component';
import { DialogComponent } from './Dialogue/dialogue.component';
import { MapComponent} from './map/map.component';
import { HistoryComponent } from './history/history.component';
import { CateringComponent } from './catering/catering.component';
import { SpecialComponent } from './special/special.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { LunchComponent } from './Menu/lunch.component';
import { BreakfastComponent } from './Menu/breakfast.component';
import {AboutComponent} from './about/about.component';
import {CharityComponent} from './charity/charity.component';



export const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'bewell', component: BewellComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: '', component: HomeComponent },
  { path: 'dialog', component: DialogComponent },
  {path: 'addCart/:serviceName', component: AddCartComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'maps', component: MapComponent },
  {path: 'catering', component: CateringComponent },
  {path: 'special', component: SpecialComponent },
  {path: 'nutrition', component: NutritionComponent },
  {path: 'thankyou', component: ThankyouComponent },
  {path: 'about', component: AboutComponent },
  {path: 'charity', component: CharityComponent },
];
