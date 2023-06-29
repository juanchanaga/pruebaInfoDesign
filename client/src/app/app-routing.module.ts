import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TramosComponent} from "./components/tramos/tramos.component";
import {ClienteComponent} from "./components/cliente/cliente.component";
import {TramosClienteComponent} from "./components/tramos-cliente/tramos-cliente.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: '/tramos',
    pathMatch: "full"
  },
  {
    path: "tramos",
    component: TramosComponent
  },
  {
    path: "cliente",
    component: ClienteComponent
  },
  {
    path: "tramos-cliente",
    component: TramosClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
