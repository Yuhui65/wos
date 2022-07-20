import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';
import { DomSanitizer} from '@angular/platform-browser';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ActivatedRoute, Route, Router } from '@angular/router';
// import { Word } from 'src/app/models/word.model';
// import { WordService } from 'src/app/services/word.service';


@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.component.html',
  styleUrls: ['./page-video.component.css']
})
export class PageVideoComponent implements OnInit {
  // public link!: string;
  public link: any;
  constructor( private activatedRoute: ActivatedRoute,private wordService: WordService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.wordService.getWordById(param['id-word']).subscribe((word: Word) => {
        console.log(word.link);
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(word.link);
        // this.link = word.link;
      })
    })
  }
}

