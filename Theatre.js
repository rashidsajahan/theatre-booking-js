let row1 = new Array(12).fill(0);
let row2 = new Array(16).fill(0);
let row3 = new Array(20).fill(0);

const readline = require("readline");
const r1 = readline.createInterface({
          input: process.stdin,
          output: process.stdout
          });

const fs = require('fs');          

console.log('\n\
-------------------------------------------------\n\
     ***** Welcome to the New Theatre! *****\n\
-------------------------------------------------')

mainMenu();

function mainMenu(){
    console.log("------------------------------------------------- \n\
                Please select an option: \n\
                1) Buy a ticket \n\
                2) Print seating area \n\
                3) Cancel ticket \n\
                4) List available seats \n\
                5) Save to file \n\
                6) Load from file \n\
                7) Print ticket information and total price \n\
                8) Sort tickets by price \n\
                0) Quit \n\
                -------------------------------------------------")

     r1.question("Enter option: ", (input) => {
          
     switch (input){
          case "0":
              console.log("\n\
                         ------------------------------------------------- \n\
                                ***** Thank you come again! ***** \n\
                         -------------------------------------------------");
              process.exit(0);
          case "1":
               console.log("***** Welcome to buy ticket section! *****");
              buyTicket();
              break;
          case "2":
               console.log("***** Welcome to print_seating_area section! *****");
               printSeatingArea();
               break;
          case "3":
               console.log("***** Welcome to cancel_ticket section! *****");
               cancelTicket();
               break;
          case "4":
               console.log("***** Welcome to show_available section! *****");
               showAvailable();
               break;
          case "5":
               console.log("***** Welcome to save section! *****");
               save();
               break;   
          case "6":
               console.log("***** Welcome to load section! *****");
               load();
               break;
          case "7":
               // showTicketsInfo();
               console.log("***** Welcome to show_tickets_info section! *****");
               break;
          case "8":
               console.log("Welcome to sort_tickets section! *****");
               // sortTickets();
               break;
          default:
               console.log("Invalid option, Try again!!!");
               mainMenu();
      }
     //  r1.close();
     })
     
}

function buyTicket(){

     r1.question('Input row number? ', (rowNumber) => {
          rowNumber = parseInt(rowNumber);
          if (rowNumber === 1) { // Checking row 1
            r1.question('Enter your seat number: ', (seatNumber) => {
              seatNumber = parseInt(seatNumber);
              if (0 < seatNumber && seatNumber <= row1.length) { // Checking seat in row 1
                if (row1[seatNumber - 1] === 0) { // Updating the array to book the seat
                  row1[seatNumber - 1] = 1;
                  console.log(`Row: ${rowNumber} Seat: ${seatNumber} is booked successfully.`);
                  mainMenu();
                } else if (row1[seatNumber - 1] === 1) {
                  console.log('Seat is already booked');
                  r1.question("Enter 'r' to retry booking or Enter any other key to go to main menu: ", (esc) => {
                    if (esc.toLowerCase() === 'r') {
                      buyTicket();
                    } else {
                      mainMenu();
                    }
                  });
                }
              } else {
                console.log('Error: This seat number does not exist!');
                buyTicket();
              }
            });
          }
          
          else if (rowNumber === 2) { // Checking row 1
               r1.question('Enter your seat number: ', (seatNumber) => {
                 seatNumber = parseInt(seatNumber);
                 if (0 < seatNumber && seatNumber <= row2.length) { // Checking seat in row 1
                   if (row2[seatNumber - 1] === 0) { // Updating the array to book the seat
                     row2[seatNumber - 1] = 1;
                     console.log(`Row: ${rowNumber} Seat: ${seatNumber} is booked successfully.`);
                     mainMenu();
                   } else if (row2[seatNumber - 1] === 1) {
                     console.log('Seat is already booked');
                     r1.question("Enter 'r' to retry booking or Enter any other key to go to main menu: ", (esc) => {
                       if (esc.toLowerCase() === 'r') {
                         buyTicket();
                       } else {
                         mainMenu();
                       }
                     });
                   }
                 } else {
                   console.log('Error: This seat number does not exist!');
                   buyTicket();
                 }
               });
             }
             
             else if (rowNumber === 3) { // Checking row 3
               r1.question('Enter your seat number: ', (seatNumber) => {
                 seatNumber = parseInt(seatNumber);
                 if (0 < seatNumber && seatNumber <= row3.length) { // Checking seat in row 1
                   if (row3[seatNumber - 1] === 0) { // Updating the array to book the seat
                     row3[seatNumber - 1] = 1;
                     console.log(`Row: ${rowNumber} Seat: ${seatNumber} is booked successfully.`);
                     mainMenu();
                   } else if (row3[seatNumber - 1] === 1) {
                     console.log('Seat is already booked');
                     r1.question("Enter 'r' to retry booking or Enter any other key to go to main menu: ", (esc) => {
                       if (esc.toLowerCase() === 'r') {
                         buyTicket();
                       } else {
                         mainMenu();
                       }
                     });
                   }
                 } else {
                   console.log('Error: This seat number does not exist!');
                   buyTicket();
                 }
               });
             }

          else {
            console.log('Error: This row number does not exist!');
            buyTicket();
          }
        });
     
}



// printing seat - X-booked seats, O-available seats
function printSeatingArea(){

// printing the given design
console.log("  ***********\n\
     *  STAGE  *\n\
     ***********");

for (let i = 0; i < (row3.length - row1.length)/2; i++) {   //spacing
     process.stdout.write(" ");
}

for (let i=0; i< row1.length/2; i++){   //first half
if(row1[i] == 0){   //row1
     process.stdout.write("O");
}else{
     process.stdout.write("X");
}
}
process.stdout.write(" ");     //middle space
for(let i = row1.length/2; i < row1.length; i++){   //second half
if(row1[i] == 0){   //row1
     process.stdout.write("O");
}else{
     process.stdout.write("X");
}
}

console.log();
for (let i = 0; i < (row3.length - row2.length)/2; i++) {
     process.stdout.write(" ");
}

for (let i = 0; i < row2.length/2; i ++){
if(row2[i] == 0){   //row1
     process.stdout.write("O");
}else{
     process.stdout.write("X");
}
}
process.stdout.write(" ");
for (let i = row2.length/2; i < row2.length; i++){
if(row2[i] == 0){   //row2
     process.stdout.write("O");
}else{
     process.stdout.write("X");
}
}
console.log();
for (let i = 0; i < row3.length/2; i++){
if(row3[i] == 0){   //row1
     process.stdout.write("O");
}else{
     process.stdout.write("X");
}
}
process.stdout.write(" ");
for (let i = row3.length/2; i < row3.length; i++){
if(row3[i] == 0){   //row1
     process.stdout.write("O");
}else{
     process.stdout.write("X");
}
}
console.log();

mainMenu();
}



function cancelTicket(){

     r1.question('Input row number? ', (rowNumber) => {
          rowNumber = parseInt(rowNumber);
          if (rowNumber === 1) { // Checking row 1
            r1.question('Enter your seat number: ', (seatNumber) => {
              seatNumber = parseInt(seatNumber);
              if (0 < seatNumber && seatNumber <= row1.length) { // Checking seat in row 1
                if (row1[seatNumber - 1] === 1) { // Updating the array to book the seat
                  row1[seatNumber - 1] = 0;
                  console.log(`Row: ${rowNumber} Seat: ${seatNumber} is cancelled successfully.`);
                  mainMenu();
                } else if (row1[seatNumber - 1] === 0) {
                  console.log("Seat is already available, You can't cancel the booking.");
                  r1.question("Enter 'r' to retry booking or Enter any other key to go to main menu: ", (esc) => {
                    if (esc.toLowerCase() === 'r') {
                      cancelTicket();
                    } else {
                      mainMenu();
                    }
                  });
                }
              } else {
                console.log('Error: This seat number does not exist!');
                cancelTicket();
              }
            });
          }
          
          else if (rowNumber === 2) { // Checking row 1
               r1.question('Enter your seat number: ', (seatNumber) => {
                 seatNumber = parseInt(seatNumber);
                 if (0 < seatNumber && seatNumber <= row2.length) { // Checking seat in row 1
                   if (row2[seatNumber - 1] === 1) { // Updating the array to book the seat
                     row2[seatNumber - 1] = 0;
                     console.log(`Row: ${rowNumber} Seat: ${seatNumber} is cancelled successfully.`);
                     mainMenu();
                   } else if (row2[seatNumber - 1] === 0) {
                     console.log('Seat is already available. You can\'t cancel the seat.');
                     r1.question("Enter 'r' to retry booking or Enter any other key to go to main menu: ", (esc) => {
                       if (esc.toLowerCase() === 'r') {
                         cancelTicket();
                       } else {
                         mainMenu();
                       }
                     });
                   }
                 } else {
                   console.log('Error: This seat number does not exist!');
                   cancelTicket();
                 }
               });
             }
             
             else if (rowNumber === 3) { // Checking row 3
               r1.question('Enter your seat number: ', (seatNumber) => {
                 seatNumber = parseInt(seatNumber);
                 if (0 < seatNumber && seatNumber <= row3.length) { // Checking seat in row 1
                   if (row3[seatNumber - 1] === 1) { // Updating the array to book the seat
                     row3[seatNumber - 1] = 0;
                     console.log(`Row: ${rowNumber} Seat: ${seatNumber} is cancelled successfully.`);
                     mainMenu();
                   } else if (row3[seatNumber - 1] === 0) {
                     console.log('Seat is already available. You can\'t cancel the seat.');
                     r1.question("Enter 'r' to retry booking or Enter any other key to go to main menu: ", (esc) => {
                       if (esc.toLowerCase() === 'r') {
                         cancelTicket();
                       } else {
                         mainMenu();
                       }
                     });
                   }
                 } else {
                   console.log('Error: This seat number does not exist!');
                   cancelTicket();
                 }
               });
             }

          else {
            console.log('Error: This row number does not exist!');
            cancelTicket();
          }
        });
}


// printing available seats.
function showAvailable(){
     process.stdout.write("Seats available in row 1: ");
        for (let i = 0; i < row1.length; i++) {     //printing row 1 available seats
            if(row1[i] == 0){
                if(i < (row1.length-1)){
                    process.stdout.write((i + 1) + ", ");   //printing coma(,) after numbers before until last
                }else {
                    process.stdout.write((i + 1) + ".");    //printing dot(.) after final number
                }
            }
        }
        console.log();
        process.stdout.write("Seats available in row 2: ");
        for (let i = 0; i < row2.length; i++) {     //printing row 2 available seats
            if(row2[i] == 0){
                if(i < (row2.length-1)){
                    process.stdout.write((i + 1) + ", ");
                }else {
                    process.stdout.write((i + 1) + ".");
                }
            }
        }
        console.log();
        process.stdout.write("Seats available in row 3: ");
        for (let i = 0; i < row3.length; i++) {     //printing row 3 available seats
            if(row3[i] == 0){
                if(i < (row3.length-1)){
                    process.stdout.write((i + 1) + ", ");
                }else {
                    process.stdout.write((i + 1) + ".");
                }
            }
        }
        console.log();
        mainMenu();
}


function save(){

  let line1 = "Row1 : " + row1
  let line2 = "Row2 : " + row2
  let line3 = "Row3 : " + row3

  fs.writeFile('TheatreSeats.txt', line1 + '\n' + line2 + "\n" + line3, function (err) {
    if (err) throw err;
    console.log(`file is written successfully.`);
    mainMenu();
  });
  
}

function load(){

  fs.readFile('TheatreSeats.txt', 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data);
  
    mainMenu();
});

}