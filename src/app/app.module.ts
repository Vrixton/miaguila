import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "../app/configs/app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MapComponent } from "./components/map/map.component";
import { HomeComponent } from "./pages/home/home.component";
import { NewAguilaComponent } from "./pages/new-aguila/new-aguila.component";
import { TravelToolComponent } from "./components/travel-tool/travel-tool.component";
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MapComponent,
    HomeComponent,
    NewAguilaComponent,
    TravelToolComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAqkTSlnBmsl3uXN4OPuNJBFprwGh7QR3Y"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
