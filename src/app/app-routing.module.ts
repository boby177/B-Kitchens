import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuPagesComponent } from "./pages/menu-pages/menu-pages.component";
import { MenuComponent } from "./pages/menu/menu.component";

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'menu', component: MenuComponent},
    {path:'menu/:id', component: MenuPagesComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}