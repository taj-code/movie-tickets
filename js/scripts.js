// Business logic for Ticket

function Ticket(name, age, time, price) {
  this.name = name;
  this.age = age;
  this.time = time;
  this.price= price;
}


const movies = [
  {
    name: "Blues Brothers",
    rating: "R",
    firstRelease: false,
    times: ["12:00", "4:00", "7:00"],
    price: "10",
  },
  {
    name: "DeadPool",
    rating: "R",
    firstRelease: false,
    times: ["12:00", "4:00", "7:00"],
    price: "10",
  },
  {
    name: "Free Guy",
    rating: "PG-13",
    firstRelease: true,
    times: ["4:00", "7:00"],
    price: "10",
  }
]

function movieResult (movieName) {
  for (let i=0; i < movies.length; i++) {
    const name = movies[i].name;
    if (name === movieName) {
      return movies[i];
    }
  }
}


// Ticket.prototype.selectedTime = function() {
//   if (this.time === "12:00" || this.time === "4:00" || this.time === "7:00") {

//   }
// }