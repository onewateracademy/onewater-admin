import{HttpRequest,HttpInterceptor, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { throwError, from } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {



    intercept(req: HttpRequest<any>, next:HttpHandler){

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) =>{
                console.log(error);
                alert(error.error.message);
                return throwError(error);
            })
        );
    }
}