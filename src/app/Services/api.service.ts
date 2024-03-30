import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl:string = 'https://localhost:44361/api/';

constructor(private http : HttpClient) { }

InitiatePostRequest(url:string, postObj:any){
  console.log(url, postObj)
  return this.http.post(`${this.apiUrl}${url}`, postObj ,{headers: new HttpHeaders({"Content-Type":"application/json"})});
}

InitiateGetRequest(url:string){
  return this.http.get(`${this.apiUrl}${url}`);
  }
  
  initiatePutRequest(url:string,postObj:string){
  return this.http.put(`${this.apiUrl}${url}`,postObj);
  }
  
  initiateDeleteRequest(url:string){
    return this.http.delete(`${this.apiUrl}${url}`);
  }


}
