// the class WrongGreeter is doing 4 things 
// takes a list of guests
// loops over each guest
// formats the name
// returning a string with a greeting

// this example does not follow the single responsibility principle

const guests = ['kevin', 'kilo', 'kilta'];

class WrongGreeter {
    static greet(guests){
        const greetings = guests.map((guest) => {
            let guestName = guest.toLowerCase();
            guestName = guestName.charAt(0).toUpperCase() + guestName.slice(1);
            return `Hello ${guestName}!`
        });
        return greetings;
    }
}

console.log(WrongGreeter.greet(guests));

// refactor 

// in the refactor, we have put the formatting logic in its own class
// the formatting class has 3 formatting methods that can be used independently from each other.
// this makes the app loosely coupled.

class Formatter {
    static sentenceCase(string) {
        const lowerCaseString = this.lowerCase(string);
        const capitalized  = this.capitalize(lowerCaseString);

        return capitalized;
    }

    static lowerCase(string) {
        return string.toLowerCase();
    }

    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
} 

class RightGreeter {
    constructor(guests, GreetFormatter = Formatter) {
        this.guests = guests;
        this.formatter = GreetFormatter;
    }

    greet() {
        const greetings = this.guests.map((guest) => {
            const formattedGuestName = this.formatter.sentenceCase(guest);
            return `Hello ${formattedGuestName} using single responsibility!`
        })
        return greetings;
    }
}

const eventGreeter = new RightGreeter(guests);
console.log(eventGreeter.greet());