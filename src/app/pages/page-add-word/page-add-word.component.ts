import { Router } from '@angular/router';
import { WordService } from './../../services/word.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Word } from 'src/app/models/word.model';

@Component({
  selector: 'app-page-add-word',
  templateUrl: './page-add-word.component.html',
  styleUrls: ['./page-add-word.component.css']
})
export class PageAddWordComponent implements OnInit {
  newWordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private wordService: WordService,
    private router: Router) { }

  ngOnInit(): void {
    this.newWordForm = this.fb.group({
      word: ['', Validators.required],
      link: ['', Validators.required]
    })
  }

  onSubmitForm() {
    const newWord = new Word(
      this.newWordForm.value.word,
      this.newWordForm.value.link
    );

    this.wordService.createNewWord(newWord).subscribe(() => {
      console.log("Le mot a été créé !!!");
      this.router.navigateByUrl('/word-list');
    });

  }

}
