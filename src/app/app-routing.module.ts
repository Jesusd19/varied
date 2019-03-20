import { UserDetailsComponent } from "./components/user/user-details.component";
import { UserEditComponent } from "./components/user/user-edit.component";
import { UserComponent } from "./components/user/user.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserNewComponent } from "./components/user/user-new.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "user/:id",
    component: UserComponent,
    children: [
      { path: "new", component: UserNewComponent },
      { path: "edit", component: UserEditComponent },
      { path: "details", component: UserDetailsComponent },
      { path: "**", pathMatch: "full", redirectTo: "new" }
    ]
  },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
