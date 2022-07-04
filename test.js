const person = [
  {
    name: "milad",
    lastName: "mohammadpour",
    age: 27,
    degree: "diplom",
    mark: 20,
  },
  {
    name: "nader",
    lastName: "mahmodi",
    age: 30,
    degree: "lisans",
    mark: 19,
  },
  {
    name: "naser",
    lastName: "mahmodi",
    age: 29,
    degree: "sikl",
    mark: 18,
  },
  {
    name: "mohammad",
    lastName: "bagery",
    age: 26,
    degree: "diplom",
    mark: 17,
  },
  {
    name: "fati",
    lastName: "safaei",
    age: 22,
    degree: "lisans",
    mark: 19,
  },
  {
    name: "mehran",
    lastName: "mohammadi",
    age: 25,
    degree: "lisans",
    mark: 14,
  },
  {
    name: "mostafa",
    lastName: "nori",
    age: 26,
    degree: "lisans",
    mark: 13,
  },
  {
    name: "behzad",
    lastName: "vali",
    age: 27,
    degree: "sikl",
    mark: 19,
  },
  {
    name: "hamid",
    lastName: "kiani",
    age: 31,
    degree: "lisans",
    mark: 15,
  },
  {
    name: "behnam",
    lastName: "gahremani",
    age: 35,
    degree: "lisans",
    mark: 17,
  },
];

// const list = person.map((e) => {
//   return (
//     " This is " +
//     e.name +
//     " " +
//     e.lastName +
//     " " +
//     " Im " +
//     " " +
//     e.age +
//     "." +
//     " I have " +
//     "" +
//     e.degree
//   );
// });
// const filterperson = person.filter((e) => {
//   return e.age < 27 && e.degree === "diplom";
// });

// const filtername = person.filter((e) => {
//   return !e.name.includes("n");
// });
// const sorting = person.map((e) => {
//   return { name: e.name, lastName: e.lastName };
// });
// const sortable = person.sort((a, b) => {
//   return a.age - b.age;
// });
// const sortable = person.sort((a, b) => (a.name > b.name ? 1 : -1));
// let groupedPeople = person.reduce(function (a, b) {
//   let key = b["age"];
//   if (!a[key]) {
//     a[key] = [];
//   }
//   a[key].push(b);
//   return a;
// }, {});
let groupedPeople = person.reduce(function (a, b) {
  let key = b["degree"];
  if (!a[key]) {
    a[key] = 0;
  }

  a[key] = a[key] + 1;

  return a;
}, {});
console.log(groupedPeople);
// const count = {};
// for (const key in groupedPeople) {
//   count[key] = groupedPeople[key].length;
// }
// console.log(count);
