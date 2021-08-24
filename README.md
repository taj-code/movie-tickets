
user input:
Have list of movies available (similar to contact list)
when they click, it will bring up show times available
click on the show time to generate ticket with price

Specs
```
description: movieResult
Test: It should populate movie info when movie name is input
code: movieResult("DeadPool")
Expected: {name: "DeadPool", rating: "R", firstRelease: false, times: ["12:00", "4:00", "7:00"], price: "10"}
```