import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";

@NgModule({
    providers: [
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor }
    ]
})

export class CoreModule {

}