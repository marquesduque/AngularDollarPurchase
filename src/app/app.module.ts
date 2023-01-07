
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';
import { appService } from './app.service';
import { purchaseModule } from './purchase/purchase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { purchaseComponent } from './purchase/purchase.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { listComponent } from './purchase/list/list.component';
import { listModule } from './purchase/list/list.module';
import { DatePipe } from '@angular/common';



const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 9,
  objectStoresMeta: [{
    store: 'purchase',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'address', keypath: 'address', options: { unique: false } },
      { name: 'zipcode', keypath: 'zipcode', options: { unique: false } },
      { name: 'dollar', keypath: 'dollar', options: { unique: false } }

    ]
  }]
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    purchaseModule,
    listModule,
    MatDialogModule,
    CurrencyMaskModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    purchaseComponent,
    listComponent
  ],
  providers: [appService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

