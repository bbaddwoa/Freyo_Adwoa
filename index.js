const userInput = prompt(
  "Please enter flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

typeof userInput === "string"; //check to ensure user input is a string and not an integer
const flavors = userInput.split(","); // recognizes comma as a delimiter to separate in array

const flavorCount = (arr) => {
  const obj = {};
  for (const flavor of arr) {
    if (flavor in obj) {
      obj[flavor] += 1;
    } else {
      obj[flavor] = 1;
    }
  }
  return obj;
};
console.table(flavorCount(flavors));

// //console.log("does this work")

// // Number 3
// let froyo1 = prompt("Choose Froyo flavor: vanilla, strawberry, coffee")

// const froyoflavors = {
//      name: "froyo stand",
//      flavors: ["vanilla", "strawberry", "coffee"],
// };
// // Number 4
// // const func = (froyo1) => {
// //     for (let i = 0; i < froyoflavors.flavors.length; i++){
// //         if (froyo1 === froyoflavors.flavors[i]){
// //             return froyo1
// //         }
// //     }
// // };
// // console.log(func(froyo1));

// // Number 5
// const trackFlavors = [];

// const func2 = (froyo1) => {
//     for (let i = 0; i < froyoflavors.flavors.length; i++){
//         if (froyo1 === froyoflavors.flavors[i]){
//             trackFlavors.push(froyo1)
//             return trackFlavors
//         }
//     }
// };
// console.log(func2(trackFlavors));
