import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css'],
})
export class PageTableComponent implements OnInit {
  public listWords!: any[];
  keywordForm!: FormGroup;
  // public test = ["Coucou", "Hello"];

  constructor(
    private wordService: WordService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.keywordForm = this.fb.group({
      keyword: ['', Validators.required],
    });

    // fetch("http://localhost:8080/signe-language")
    //   .then((datas) => datas.json())
    //   .then((response) => {
    //     console.log(response);
    //     this.listWords = response;
    //   })
  }

  onSubmitForm() {
    const keyword = this.keywordForm.value.keyword;
    console.log(keyword);
    this.wordService.getWordsByWord(keyword).subscribe((resp) => {
      console.log(" ----- Resp -----");
      console.log(resp);
      console.log(" ***** Resp ****");
      this.listWords = resp;
    });
  }
}
