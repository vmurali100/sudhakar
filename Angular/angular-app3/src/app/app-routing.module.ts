// Step 1: Importing Defaults
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Step 2: Importing Required Component
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

// Step 3: Configuring the Routes
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent }
];

// Step 4 : Configuring Ng Module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Step 5 :Exporting Routing Module
export class AppRoutingModule {}
