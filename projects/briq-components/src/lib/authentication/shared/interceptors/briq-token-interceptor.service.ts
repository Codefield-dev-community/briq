import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BriqTokenService } from '../services/briq-token.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class BriqTokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: BriqTokenService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('login')) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.tokenService.getToken()}`
      }
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        return throwError('Token is invalid');
      })
    );
  }
}
