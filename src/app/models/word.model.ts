export class Word {
  id?: string;
  word: string;
  link: string;

  constructor(paramWord: string, paramLink: string) {
    this.word = paramWord;
    this.link = paramLink;
  }
}
