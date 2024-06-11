

const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your full name')
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let username = 'rutela';
let age = 56;
let present = false;

// Objects
const person = {
    username: 'rutela', 
    age: 60,
    present: true,
    child: {
        name: 'Mickey Mouse',
        friend: {
            name: 'Biggie',
        }
    }
}
console.log(person.username);
person.age = 64;
console.log(person);


// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue'
  }
  
  const bottles = [bottle1, bottle2,];
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[0]
  bottles[1].size;
  
  const date = new Date();
  date.getDay();
  
  // If/Else
//   const age = 18;
  if (age>=18) {
    'You are true;'
  } else {'You are false';  
  }
  
  // For Loop
  for (let i = 0; i <= 5; i++){
   console.log('We did it!', i);
  }
  

  // Functions
// Defining a function
function login(username, password) {
  // validate username and password
  if(!username || !password) {
    return 'Username or password not provided';
  }
  // verify username and password
if (username == 'Rutela' && password == '1234') {
  return 'User is logged in';
} else {
  return 'Invalid username or password';
}
}
// Invoking a function
login('Rutela', );


// Basic Arithmetic Operations
11+12;
1+0.5;
43-12;
45/7;
5*3;
14%3

Math.round(45/24);
Math.floor(45/24);
45%24
Math.random() * 1000;
Math.max(34,32,37);
2*(3+4)-5/2
Number('2') + 2



// Strings in JavaScript
// Concatenation
const firstname = 'Ruth';
const middlename = 'Afi';
const lastname = 'Agbozo';
firstname +' ' + middlename +' ' + lastname;

// Template literal
`${firstname} ${middlename} ${lastname}`;


// String Methods


let fullName = "ruth afi agbozo"
fullName.length

for(let i =0; i< fullName.length; i++){
  console.log(i)
}

fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(9)
fullName.slice(5,15)
fullName.split("")
fullName.replace("agbozo", "ahiabu")
fullName.indexOf("afi")


// String Conversion
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount = 18000
console.log(`GHS${amount}`)
amount.toString()


// Write a function that will add a participant to our Google Classroom

const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (email === undefined || email === null) {
    return 'email not provided'
  }
  // check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided'
  }
  // Add email to participants
  participants.push(email);
  return 'Participant added';
}

addParticipant('ruth.agbozo.93@gmail.com');
addParticipant('ruth.agbozo.93gmail.com')
addParticipant();
addParticipant('ruth.agbozo.93@gmail.com')
participants;

// Write a function that will take a user with firstame, lastname and return fullname;  

function fullName(user) {
  return {
    ...user,
    fullName: `${user.firstname} ${user.lastname}`
  };
}

const user = {
  firstname: 'Ruth',
  lastname: 'Agbozo',
}

fullName(user);
 
// Array Map
const users = [
  {firstname: 'Ruth', lastname: 'Agbozo'},
  {firstname: 'Mawunya', lastname: 'Agbozo'},
  {firstname: 'Nunana', lastname: 'Ahiabu'},
  {firstname: 'Enyam', lastname: 'Ahaibu'},
  {firstname: 'Samuel', lastname: 'Dodzi'},
]
users.map(fullName);


// Square of Numbers
function square(number) {
  return number **2;
}
square(4);

const numbers = [5,7,9,8];

numbers.map(square);

// Array filter


function isEven(number) {
  return number % 2 === 0;
}
isEven(4);
numbers.filter(isEven);
