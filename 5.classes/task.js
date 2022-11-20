class PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix(){
    this.state = this.state * 1,5;
  }

  set state(curentState) {
    if (curentState <= 0) {
        this.state = 0;
    }
    if (curentState >= 100){
        this.state = 100;
    }
    this.state = curentState;
  }

  get state(){
    return this.state;
  }
}
