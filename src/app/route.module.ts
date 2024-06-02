import { NgModule } from "@angular/core";
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Notfound404Component } from "./notfound404/notfound404.component";

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
    { path: '**', component: Notfound404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class RouteModule {

}