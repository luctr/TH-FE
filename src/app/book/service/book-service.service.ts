import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Book} from "../../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  API=`${environment.API}`

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.API+'/books')
  }
  createBook(book:Book):Observable<Book>{
    return this.httpClient.post<Book>(this.API+'/books',book)
  }
  updateBook(id:number,book:Book):Observable<Book>{
    return this.httpClient.put<Book>(this.API+"/books/"+id,book)
  }
  deleteBook(id:number):Observable<Book>{
    return this.httpClient.delete<Book>(this.API+'/books/'+id)
  }
  getBookById(id:number):Observable<Book>{
    return this.httpClient.get<Book>(this.API+'/books/'+id)
  }
}
