//2.1
let myMovie = {
    title: "The longest day",
    year: 1964
};
console.log(myMovie);


//2.2
function addPropToMovie() {
    myMovie.rating = 5;
    myMovie.summary = "World War II movie about the Normandy landings"
}
addPropToMovie();
console.log("After adding properties:", myMovie);

//2.3
function updateRatingAndYear(newRating, newYear) {
    myMovie.rating = newRating;
    myMovie.year = newYear;
}
updateRatingAndYear(4, 1962);
console.log("After updating rating and year:", myMovie);

//2.4
function deleteSummary() {
    delete myMovie.summary;
}
deleteSummary();
console.log("After deleting summary:", myMovie);