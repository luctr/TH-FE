import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookServiceService} from "../service/book-service.service";
import {Book} from "../../model/book";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id: any;

  // @ts-ignore
  bookForm: FormGroup;


  book: Book = {
    id: 0,
    title: "",
    author: "",
    description: "",
  }

  constructor(private bookService: BookServiceService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
      this.getBook(this.id)
    })
  }

  ngOnInit(): void {

  }

  update() {
    this.book.title = this.bookForm.value.title;
    this.book.author = this.bookForm.value.author;
    this.book.description = this.bookForm.value.description;
    this.bookService.updateBook(this.id, this.book).subscribe(data => {
      this.router.navigate([''])
    })


  }

  getBook(id: number) {
    this.bookService.getBookById(id).subscribe(data => {
      this.bookForm = new FormGroup({
        id: new FormControl(data.id),
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description),

      })
    })

  }
}
