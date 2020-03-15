import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { NewAguilaComponent } from "../pages/new-aguila/new-aguila.component";
import { RoutesComponent } from "../pages/routes/routes.component";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home" }
  },
  {
    path: "pedir-aguila",
    component: NewAguilaComponent,
    data: { title: "Pedir Aguila" }
  },
  {
    path: "pedir-aguila",
    component: NewAguilaComponent,
    data: { title: "Pedir Aguila" }
  },
  {
    path: "rutas",
    component: RoutesComponent,
    data: { title: "Routes" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
