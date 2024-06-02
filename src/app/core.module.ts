import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { authInterceptor } from "./interceptors/auth.interceptor";

@NgModule({
    providers: [AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: authInterceptor }
    ]
})

export class CoreModule {

}