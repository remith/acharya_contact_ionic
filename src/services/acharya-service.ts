import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
//import { AcharyaModal } from './acharya-modal.ts'

@Injectable()
export class AcharyaService {

    //public Acharya = new AcharyaModal;
    private headers = new Headers({'Content-Type':'application/json'});
    http: Http;
    archaryaServiceURL= "http://api.yiiangularbasic.com/index.php?r=acharyalistrest";
    
    constructor(http: Http){
       this.http = http;

    }
     
    getAcharyas(): Observable<any[]> {
            return this.http.get(this.archaryaServiceURL)
            .map(this.extractData)
            .catch(this.handleError);
    }
 
//Insert Acharya Details
    signUp(username: string, email:string, phone:string): Promise<any> {
        let body = JSON.stringify({
            username: username,
            email: email,
            phone: phone
        });
     return this.http
    .post(this.archaryaServiceURL+'/create', body, this.headers)
    .toPromise()
    .then(
            res =>{
            console.log(res.json().data);
             res.json().data as any}
        )
    .catch( this.handleError);
}

    getAcharyabySalutation(salutation: String): Observable<any[]> {
        console.log("AcharyaService-> InsidegetAcharyabySalutation "+ salutation);
        console.log(this.archaryaServiceURL+"?salutation="+salutation);
            return this.http.get(this.archaryaServiceURL+"?salutation="+salutation)
            .map(this.extractData)
            .catch(this.handleError);
    }


    getAcharyabyCountry(country: String): Observable<any[]> {
        console.log("AcharyaService-> InsidegetAcharyabyCountry "+ country);
        console.log(this.archaryaServiceURL+"?country="+country);
        return this.http.get(this.archaryaServiceURL+"?country="+country)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res:Response) {

        let body = res.json();
        console.log(body);
        return body || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}