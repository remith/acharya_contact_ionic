import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class AcharyaService {

    http: Http;
    archaryaServiceURL= "http://192.168.33.10/Acharyalocal/connection.php";


    constructor(http: Http){
       this.http = http;

    }
     
    getAcharyas(): Observable<any[]> {
            return this.http.get(this.archaryaServiceURL)
            .map(this.extractData)
            .catch(this.handleError);
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