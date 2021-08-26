import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../../model/book";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookServiceService} from "../service/book-service.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  id: any;

  // @ts-ignore
  bookForm: FormGroup

  book: Book = {
    id: 0,
    title: "",
    author: "",
    description: "",
  }

  constructor(
    private bookService: BookServiceService,
    private activeRouter: ActivatedRoute,
    private router: Router) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id')
    })
  }

  ngOnInit(): void {
    this.getBook(this.id)
  }

  getBook(id:number){
    this.bookService.getBookById(id).subscribe(data=>{
      this.bookForm = new FormGroup({
        id:new FormControl(data.id),
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description),
      })
    })
  }
  deleteBook(id: number){
    console.log(id)
    this.bookService.deleteBook(id).subscribe(data =>{
      this.router.navigate([''])
    })
  }

}
