import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-page-list-words',
  templateUrl: './page-list-words.component.html',
  styleUrls: ['./page-list-words.component.css']
})
export class PageListWordsComponent implements OnInit {
  public listWords!: Word[];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getAllWords().subscribe((resp) => {
      console.log(resp);
      this.listWords = resp;
      })
  }

  onClickDeleteWord(wordId: string | undefined) {
    console.log(wordId);
    if (wordId) {
      this.wordService.deleteWord(wordId).subscribe({
        next: (resp) => {
          this.listWords = this.listWords.filter(word => word.id !== wordId);
          console.log(this.listWords);
        },
        error: (err) => { console.error(err)}
      })

    }
  }

}
