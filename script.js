class Movie {
  #rating;

  constructor(title, year, genre, rating) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.#rating = rating;
  }

  getRating() {
    return this.#rating;
  }
}

class Series extends Movie {
  constructor(title, year, genre, rating, seasons) {
    super(title, year, genre, rating);
    this.seasons = seasons;
  }

  getInfo() {
    return `${this.title} (${this.year}) — ${
      this.seasons
    } сезонов, рейтинг ${this.getRating()}`;
  }
}

const series = new Series("Breaking Bad", 2008, "Crime", 9.5, 5);
console.log(series.getInfo());
