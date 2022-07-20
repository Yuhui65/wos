import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';

//html ->  <app-page-update-word></app-page-update-word>
@Component({
  selector: 'app-page-update-word',
  templateUrl: './page-update-word.component.html',
  styleUrls: ['./page-update-word.component.css']
})
export class PageUpdateWordComponent implements OnInit {
  updateWordForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wordService: WordService,
    private fb: FormBuilder,
    private router: Router) { }

  // $(document).ready(function(){})

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.wordService.getWordById(param['id-word']).subscribe((word: Word) => {
        this.updateWordForm = this.fb.group({
          id: [word.id],
          word: [word.word, Validators.required],
          link: [word.link, Validators.required],
        })
      })
    })
  }

  onSubmitForm() {
    const wordToUpdate = this.updateWordForm.value;

    this.wordService.updateWord(wordToUpdate).subscribe((resp) => {
      this.router.navigateByUrl('/word-list');
    })
  }

}
