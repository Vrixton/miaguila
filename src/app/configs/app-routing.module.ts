import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { NewAguilaComponent } from "../pages/new-aguila/new-aguila.component";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home" }
  },
  {
    path: "pedir-aguila/origen",
    component: NewAguilaComponent,
    data: { title: "Pedir Aguila" }
  },
  {
    path: "pedir-aguila/destino",
    component: NewAguilaComponent,
    data: { title: "Pedir Aguila" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
