import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, take, exhaustMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export class AuthInterceptor implements HttpInterceptor {
  authService: AuthService = inject(AuthService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.userSubject.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }

        const modifiedRequest = req.clone({ params: new HttpParams().set('auth', user.token) });

        return next.handle(modifiedRequest);
      })
    );
  }
}
