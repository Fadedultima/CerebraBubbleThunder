import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CerebraComponent } from './components/cerebra/cerebra.component';
import { CerebrasComponent } from './components/cerebras/cerebras.component';
import { AddCerebraComponent } from './components/add-cerebra/add-cerebra.component';
import { EditCerebraComponent } from './components/edit-cerebra/edit-cerebra.component';
import { ProfileComponent } from './components/profile/profile.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBRIJoWGMaQxVyE6pN721edw0-Req64JpY",
    authDomain: "test-3d841.firebaseapp.com",
    databaseURL: "https://test-3d841.firebaseio.com",
    storageBucket: "test-3d841.appspot.com",
    messagingSenderId: "61641328919"
  };

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'cerebras', component:CerebrasComponent},
  {path: 'cerebra/:id', component:CerebraComponent},
  {path: 'add-cerebra', component:AddCerebraComponent},
  {path: 'edit-cerebra/:id', component:EditCerebraComponent},
  {path: 'profile', component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CerebraComponent,
    CerebrasComponent,
    AddCerebraComponent,
    EditCerebraComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
