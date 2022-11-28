/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages; // Assigns the ages in the same order as the ages array rather than doing them all separately like the previous commented out code.
console.log(john, mary, joe); // Prints 30 26 27

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia); // Prints designer developer accountant

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); // Prints english french

let [, , maryNative, marySecondary] = languages; // Commas used to skip over items in languages array, in this case we're skipping english and french
console.log(maryNative, marySecondary); // Prints spanish german

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
}

let { firstLanguage, thirdLanguage } = languages2
console.log(firstLanguage, thirdLanguage); // Prints english german

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits; // using rest to log remaining items of the array after first two assigned
console.log(favourite); // Prints apple
console.log(secondFavourite); // Prints orange
console.log(others); // Prints ["banana", "peach", "cherry"]

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(favouriteFoods); // Prints pizza \n pasta \n {sarah: 'vegetarian', andrea: 'steak'}