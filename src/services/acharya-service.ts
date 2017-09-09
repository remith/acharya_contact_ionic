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
    private archaryaServiceURL= "http://api.yiiangularbasic.com/index.php?r=acharyalistrest";
    public responseData:string;

    constructor(http: Http){
       this.http = http;
       this.getAcharyas();
    }
  // Get Acharya Details   
    /*getAcharyas(): Promise<any> {
            const url = this.archaryaServiceURL+'/view';
            console.log(url);
            return this.http.get(url)
            .toPromise()
            .then( 
                  response =>{
            this.responseData=response.json().data;
            console.log(this.responseData);
            response.json().data as any
            })         
            .catch(this.handleError);
            
    }*/
   /*getAcharyas(): Promise<any> {
            const url = this.archaryaServiceURL+'/view';
            
              return this.http.get(url)
             .toPromise()
             .then(response => {
                 //console.log('showing response in getacharyas');
                 //console.log(response.json());
                
                this.responseData=this.extractData(response);
                //console.log(this.responseData);
                this.responseData as any;

             })
             .catch(this.handleError);
         }*/

     getAcharyas(): Observable<any> 
     {
        const url = this.archaryaServiceURL+'/view';
            
              return this.http
              .get(url)
              .map(response => response.json());
            }

         //getAcharyas():Observable<any>{}


        /*interface ItemsResponse 
         {
              results: string[];
        }*/
    /* getAcharyas(){

         
         const url = this.archaryaServiceURL+'/view';
             this.http.get(url).subscribe(response=>{
             this.responseData=response.json().data;
         })    
             console.log('crossed respdata');
             console.log(this.responseData);
             return this.responseData;
     }*/
    /*
    this.http.get('/api/items').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
*/

 /*   getAcharyas(): Observable<any[]> {
            const url = this.archaryaServiceURL+'/view';
            console.log(url);        
            return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }*/


 
//Insert Acharya Details
    signUp(name: string, email:string, phone:string): Promise<any> {
        //signUp(name: string, email:string, phone:string) {
        //console.log(name+' '+email+ ' '+phone);

       
        let body = JSON.stringify({
            name: name,
            email: email,
            phone: phone
        });
         //this.javascriptAbort();
        //this.http.post(this.archaryaServiceURL+'/create',body,this.headers).subscribe();
        return this.http.post(this.archaryaServiceURL+'/create',body,this.headers)
        .toPromise()
        .then(response=>{
            this.responseData=response.json().data;
            response.json().data as any
            })         
        .catch(this.handleError);
        
            /* return this.http.post(this.archaryaServiceURL+'/create', body, this.headers)
            .toPromise()
            .then(
                    response =>{
            //            console.log(res.json().data);
                         this.responseData=response.json().data;
                         console.log(this.responseData);
                         response.json().data as any
                         }
                    )
                .catch( this.handleError);*/
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

    private handleError(error:any): Promise<any> {
      console.error('An error occurred', error); 
      return Promise.reject(error.message || error);
    }

    /*private javascriptAbort()
        {
           throw new Error('This is not an error. This is just to abort javascript');
        }*/
}