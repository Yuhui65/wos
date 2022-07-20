import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../models/word.model';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = "http://localhost:8080/signe-language";
  }

  getAllWords(): Observable<Word[]> {
    return this.http.get<Word[]>(`${this.urlApi}/get-list`)
  }

  createNewWord(newWord: Word) {
    return this.http.post(
      `${this.urlApi}/save`,
      newWord)
  }

  getWordById(wordId: string): Observable<Word> {
    return this.http.get<Word>(`${this.urlApi}/findById/${wordId}`)
  }

  getWordsByWord(word: string): Observable<Word[]>{
    return this.http.get<Word[]>(`${this.urlApi}/findByWord/${word}`)
  }

  updateWord(word: Word): Observable<any> {
    const body = {
      word: word.word,
      link: word.link,
    }

    return this.http.put<any>(`${this.urlApi}/update/${word.id}`,
      body)
  }

  deleteWord(wordId: string) {
    return this.http.delete (`${this.urlApi}/delete/${wordId}`)
  }
}

