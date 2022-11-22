class PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix(){
      this.state *=  1.5;
    }

  set state(сurrentState) {
     if (сurrentState < 0) {
         this._state = 0;
       }
     else if (сurrentState > 100){
         this._state = 100;
       } else {
         this._state = сurrentState;
       }
    }

  get state( ){
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }   
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "book";
        this.author = author;
    }   
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
    }   
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
    }   
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
    }   
}

class Library{
    constructor(name){
      this.name =  name;
      this.books = []; 
    }
   
    //addBook(book){
      //this.book = new PrintEditionItem;
      //this.books.push(book)
       
     // if (this.book.state <= 30){
      //   delete this.books(book);
      // }
   // }
    addBook(book) {
        this.book = new PrintEditionItem;
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){
       this.type = type;
       this.value = value;
       if (this.value === this.book.name){
          return this.book;
       } else {
          return null;
       }
       
    }
    
    giveBookByName(bookName){
       this.bookName = bookName;
       if (bookName === this.book.name){
        
       }
    }


}