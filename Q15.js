"use strict";
// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
let guestsArr = ["Tehreem", "Merum", "Konain", "Habiba", "Uswa"];
let canNotAttend = "Konain";
console.log(canNotAttend + ' ' + "can not make it, for Dinner");
let newGuest = "Zoya";
guestsArr[guestsArr.indexOf(canNotAttend)] = newGuest;
console.log(guestsArr);
guestsArr.map((item) => (console.log(`Dear ${item}, You Are cordinally invited to a Dinner`)));
guestsArr.map((item) => (console.log(`Dear ${item}, you are still invited to the party!`)));
// 2ND WAY
// let guests: string[] = [
//     "Alice",
//     "Bob",
//     "Charlie",
//     "David"
// ];
// // Assuming Charlie can't make it and Emily is the new person you're inviting
// const unableToAttend = "Charlie";
// const newInvitee = "Emily";
// // Replace the guest who can't make it with the new person
// const index = guests.indexOf(unableToAttend);
// if (index !== -1) {
//     guests[index] = newInvitee;
// }
// // Print the first set of invitation messages
// console.log("First set of invitation messages:");
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you are invited to the party!`);
// });
// // Print the second set of invitation messages
// console.log("\nSecond set of invitation messages:");
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you are still invited to the party!`);
// });
