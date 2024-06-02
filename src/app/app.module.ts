import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CoreModule } from "./core.module";
import { RouteModule } from "./route.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouteModule,
        CoreModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

}