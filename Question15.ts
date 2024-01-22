// Changing Guest List: You just heard that one of your guests can’t make 
//the dinner, so you need to send out a new set of invitations. You’ll have
// to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it
// with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is
// still in your list.

let guestlist1: string[] = ["Rohan","Talal","Waleed","Ibraheem"];
let guestWhocantMakeit: string = "Guest2";
console.log(`${guestWhocantMakeit} can't make it to the dinner.`);
var indexofguestwhocannotmakeit: number = guestlist1.indexOf(guestWhocantMakeit);

if (indexofguestwhocannotmakeit !== -1) {
    let newpersontoinvite: string = "newgest";
    guestlist1[indexofguestwhocannotmakeit] = newpersontoinvite;
    console.log("Updated Invitation list:");

    for (let guest of guestlist1) {
        console.log(`Dear ${guest}, you are invited to the  dinner.`);

    }
} else {
    console.log(`${guestWhocantMakeit} is not in the guest list.`);
}