// Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.

let Guestlist: string[] = ["Albert Einstein", "Maya Angelou","Elon Musk"];

for (let c = 0; c < Guestlist.length; c++) {
    let message = (`Dear ${Guestlist[c]},\n\tYou are invited to dinner. It would be an honor to have to join us.\n\tSincerely, Your Host`);
    console.log(message);
}