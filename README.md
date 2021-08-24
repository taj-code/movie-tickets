
user input:
Have list of movies available (similar to contact list)
when they click, it will bring up show times available
click on the show time to generate ticket with price

Specs

```
Description: Ticket
Test: When we create a ticket with name, time and age, we get a Ticket with that data
Code: new Ticket("Test Movie", 18, "12:00")
Expected: Ticket {name: "Test Movie", age: 18, time: "12:00"}
```
```
description: movieResult
Test: It should populate movie info when movie name is input
code: movieResult("DeadPool")
Expected: {name: "DeadPool", rating: "R", firstRelease: false, times: ["12:00", "4:00", "7:00"]}
```
```
Describe: movieRating(rating, age)
Test: If somebody is over 18, they can see an R-rated movie
Code: movieRating('R', 19)
Expected result: true
```
```
Describe: movieRating(rating, age)
Test: If somebody is 17, they cannot see an R-rated movie
Code: canSeeMovie('R', 17)
Expected result: false
```