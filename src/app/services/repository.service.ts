import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';
import { MultipleMeasurement } from '../models/multipleMeasurement';
import { ArchivService } from './archiv.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }


  postRoast(name : String, bean : String, comment : String, rating : number, date : Date, data : MultipleMeasurement[]){
    const body = {
      "name": name,
      "bean": bean,
      "comment": comment,
      "rating": rating,
      "dateTime": date,
      "data" : data
  }
    console.log('Send to server: ' + JSON.stringify(body));
    this.http.post<any>('http://localhost:8080/roast/add', body).subscribe(data => {
        console.log('Answer from server: ' + JSON.stringify(data));
    });
  }

  /*
  getRoasts(): ArchivItem []{
    let itemList : ArchivItem [];
    this.http.get<ArchivItem []>('http://localhost:8080/roast/all').subscribe((data : ArchivItem[])=> {
       itemList = data;
    });
    return itemList;
  }
*/
getArchivItem(): Observable<ArchivItem[]> {
  return this.http.get<ArchivItem[]>('http://localhost:8080/roast/all')
}

deleteArchivItem(id : number){
  let params = new HttpParams();
  params = params.append('id', id.toString());
  this.http.delete<ArchivItem>('http://localhost:8080/roast/delete', {params: params}).subscribe(data => {
    console.log('Deleted Item: ' + JSON.stringify(data));
});
}

}
