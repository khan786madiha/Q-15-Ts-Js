// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.


let guestsArr: string[] = ["Tehreem" , "Merum" , "Konain" , "Habiba" , "Uswa"]

let canNotAttend: string = "Konain"
console.log(canNotAttend + ' ' + "can not make it, for Dinner");

let newGuest: string = "Zoya"
guestsArr[guestsArr.indexOf(canNotAttend)] = newGuest;
console.log(guestsArr);
guestsArr.map((item) => (
console.log(`Dear ${item}, You Are cordinally invited to a Dinner`)
));
guestsArr.map((item) => (
    console.log(`Dear ${item}, you are still invited to the party!`)
    ));