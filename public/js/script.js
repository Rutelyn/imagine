

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
  