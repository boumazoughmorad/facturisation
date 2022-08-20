import {
    HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../modules/user/user-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userAuthService: UserAuthService,
    private router:Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }

    const token = this.userAuthService.getToken();

    req = this.addToken(req, token as any);

    return next.handle(req).pipe(
        catchError(
            (err:HttpErrorResponse) => {
                if(err.status === 401) {
                  this.router.navigateByUrl('/user/login');
                } 
                else if(err.status === 403) {
                  this.router.navigateByUrl('/error403');
                    
                }else if(err.status == 0){
                  this.router.navigateByUrl('/error500');
                }
               
                
                return throwError(err.error);
            }
        )
    );
  }


  private addToken(request:HttpRequest<any>, token:string) {
      return request.clone(
          {
              setHeaders: {
                  Authorization : `Bearer ${token}`
              }
          }
      );
  }
}