
import { UserComponent } from "./components/user/user.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { USER_ROUTES } from './components/user/user-routing.module'

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "user/:id",
    component: UserComponent,
    children: USER_ROUTES
  },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
