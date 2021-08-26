import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Book} from "../../model/book";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  // @ts-ignore
  bookForm: FormGroup

  book: Book = {
    id: 0,
    title: "",
    author: "",
    description: "",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
