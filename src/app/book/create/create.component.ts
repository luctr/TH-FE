import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../service/book-service.service";
import {Book} from "../../model/book";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  book:Book ={
    id : 0,
    title: "",
    author: "",
    description: "",
  }
  bookForm: FormGroup = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    }
  );
  constructor(private bookService:BookServiceService,
              private router:Router
              ) { }

  ngOnInit(): void {
  }

  create(){
    this.book.title = this.bookForm.value.title;
    this.book.author = this.bookForm.value.author;
    this.book.description = this.bookForm.value.description;
    this.bookService.createBook(this.book).subscribe(data=>{
      this.router.navigate([''])
    })
  }

}
