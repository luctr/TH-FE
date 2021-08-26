import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../service/book-service.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books:Book[] = []

  constructor(private bookService:BookServiceService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.bookService.getAll().subscribe((data:Book[])=>{
      console.log(data)
      this.books = data;
    })
  }

}
