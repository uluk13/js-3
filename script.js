

const students = [
  {
    id: 1,
    name: "Tom",
    age: 18,
    city: "Bishkek",
    grades: [5, 4, 3, 5],
    hobbies: ["football", "gaming"],
    isGraduated: false,
  },
  {
    id: 2,
    name: "Anna",
    age: 20,
    city: "Osh",
    grades: [3, 2, 4, 3],
    hobbies: ["reading", "painting", "yoga"],
    isGraduated: true,
  },
  {
    id: 3,
    name: "Bob",
    age: 19,
    city: "Karakol",
    grades: [5, 5, 5, 4],
    hobbies: [],
    isGraduated: false,
  },
  {
    id: 4,
    name: "Lisa",
    age: 22,
    city: "Bishkek",
    grades: [4, 5, 5, 5],
    hobbies: ["volleyball", "travel"],
    isGraduated: true,
  },
  {
    id: 5,
    name: "John",
    age: 21,
    city: "Talas",
    grades: [2, 3, 2, 4],
    hobbies: ["movies", "football"],
    isGraduated: false,
  },
  {
    id: 6,
    name: "Mila",
    age: 23,
    city: "Osh",
    grades: [5, 4, 4, 5],
    hobbies: ["reading", "cooking"],
    isGraduated: true,
  },
  {
    id: 7,
    name: "Alex",
    age: 19,
    city: "Naryn",
    grades: [3, 3, 4, 3],
    hobbies: ["music", "football"],
    isGraduated: false,
  },
  {
    id: 8,
    name: "Kate",
    age: 20,
    city: "Bishkek",
    grades: [4, 4, 5, 5],
    hobbies: ["dance", "photography"],
    isGraduated: true,
  },
  {
    id: 9,
    name: "Nick",
    age: 18,
    city: "Talas",
    grades: [5, 5, 4, 5],
    hobbies: ["gaming", "reading"],
    isGraduated: false,
  },
  {
    id: 10,
    name: "Sara",
    age: 21,
    city: "Osh",
    grades: [4, 5, 3, 4],
    hobbies: ["travel", "yoga"],
    isGraduated: true,
  },
];

const cards = document.querySelectorAll(".card");

for (let i = 0; i < students.length && i < cards.length; i++) {
  const s = students[i];
  const card = cards[i];

  const name = card.querySelector(".name");
  const age = card.querySelector(".age");
  const city = card.querySelector(".city");
  const grades = card.querySelector(".grades");
  const hobbies = card.querySelector(".hobbies");

  name.innerText = s.name;
  age.innerText = "Возраст: " + s.age;
  city.innerText = "Город: " + s.city;
  grades.innerText = "Оценки: " + s.grades;
  hobbies.innerText = "Хобби: " + s.hobbies;

  let statusDot = card.querySelector(".status");
  statusDot.style.backgroundColor = s.isGraduated === true ? "green" : "red";
}

// Функция поиска студента по имени (регистр не важен)
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  const searchName = searchInput.value.trim().toLowerCase();

  if (!searchName) {
    alert("Пожалуйста, введите имя студента");
    return;
  }

  let foundIndex = -1;

  for (let i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase() === searchName) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex !== -1) {
    alert(`Индекс найденного пользователя: ${foundIndex}`);
  } else {
    alert("Пользователь не найден");
  }
});



console.log(students.map(s => s.name));


console.log(students.filter(s => s.age <= 19));



console.log(students.filter(s => s.isGraduated).length);


console.log([...students].reverse());


console.log(students.map(s => ({
  id: s.id,
  name: s.name,
  grade: s.grades.reduce((a, b) => a + b) / s.grades.length
})));


const youngest = students.reduce((a, b) => b.age < a.age ? b : a);
const oldest = students.reduce((a, b) => b.age > a.age ? b : a);

const result = oldest.age - youngest.age;

console.log("Самый младший:", youngest);
console.log("Самый старший:", oldest);
console.log("Разница в возрасте:", result);



