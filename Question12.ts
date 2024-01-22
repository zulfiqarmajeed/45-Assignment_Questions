// Greetings: Start with the array you used in Exercise 11, but instead of
// just printing each person’s name, print a message to them. The text of
// each message should be the same, but each message should be personalized
// with the person’s name.

let friendname: string[] = ["Rohan","Talal","Waleed","Ibriheem"];

for (let a = 0; a < friendname.length; a++) {
    let message = (`Hello ${friendname[a]}, Can you come my home and starts our groups study`);
    console.log(message);
}