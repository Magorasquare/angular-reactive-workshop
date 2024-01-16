import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';

import { CoreDataModule } from '@workshop/core-data';
import { MaterialModule } from '@workshop/material';
import { UiLoginModule } from '@workshop/ui-login';
import { UiToolbarModule } from '@workshop/ui-toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateModule } from 'libs/core-data/src/lib/state/state.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreDataModule,
    HttpClientModule,
    LayoutModule,
    NxModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    UiLoginModule,
    UiToolbarModule,
    MaterialModule,
    StateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
