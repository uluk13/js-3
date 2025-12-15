const moviesAndSeries = [
  {
    title: "Breaking Bad",
    year: 2008,
    genre: "Crime",
    rating: 9.5,
    seasons: 5,
    duration: 47,
    finished: true,
    actors: ["Bryan Cranston", "Aaron Paul"],
    country: "USA"
  },
  {
    title: "Game of Thrones",
    year: 2011,
    genre: "Fantasy",
    rating: 9.2,
    seasons: 8,
    duration: 55,
    finished: true,
    actors: ["Emilia Clarke", "Kit Harington"],
    country: "USA"
  },
  {
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.7,
    seasons: 4,
    duration: 50,
    finished: false,
    actors: ["Millie Bobby Brown", "Finn Wolfhard"],
    country: "USA"
  },
  {
    title: "Sherlock",
    year: 2010,
    genre: "Detective",
    rating: 9.1,
    seasons: 4,
    duration: 90,
    finished: true,
    actors: ["Benedict Cumberbatch", "Martin Freeman"],
    country: "UK"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    seasons: 0,
    duration: 152,
    finished: true,
    actors: ["Christian Bale", "Heath Ledger"],
    country: "USA"
  },
  {
    title: "Friends",
    year: 1994,
    genre: "Comedy",
    rating: 8.9,
    seasons: 10,
    duration: 22,
    finished: true,
    actors: ["Jennifer Aniston", "Courteney Cox"],
    country: "USA"
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    seasons: 0,
    duration: 136,
    finished: true,
    actors: ["Keanu Reeves", "Laurence Fishburne"],
    country: "USA"
  },
  {
    title: "The Witcher",
    year: 2019,
    genre: "Fantasy",
    rating: 8.1,
    seasons: 3,
    duration: 60,
    finished: false,
    actors: ["Henry Cavill", "Anya Chalotra"],
    country: "USA"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
    seasons: 0,
    duration: 169,
    finished: true,
    actors: ["Matthew McConaughey", "Anne Hathaway"],
    country: "USA"
  },
  {
    title: "Money Heist",
    year: 2017,
    genre: "Crime",
    rating: 8.2,
    seasons: 5,
    duration: 45,
    finished: true,
    actors: ["Úrsula Corberó", "Álvaro Morte"],
    country: "Spain"
  }
];

moviesAndSeries.forEach(i => {
  console.log(`${i.title} — рейтинг: ${i.rating}`);
});


console.log(moviesAndSeries.map(i => {
  return` ${i.title} (${i.year}) - ${i.seasons} сезонов`
}));

console.log(moviesAndSeries.filter((i) => i.finished === false));

console.log(moviesAndSeries.find((i) => i.seasons >= 5));

console.log(moviesAndSeries.some((i) => i.rating >= 9 ));

console.log(moviesAndSeries.every((i) => i.year >=2000));

const rating = moviesAndSeries.reduce((a,b) => a + b.rating, 0) / moviesAndSeries.length;
console.log("Средний рейтинг:",rating.toFixed(2));


console.log(moviesAndSeries.sort((a,b) => b.rating - a.rating));





