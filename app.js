// let son = Number(prompt("ixtiyoriy son qoying: "))

// let resultl = "";

// if (son % 2 == 0) {
//     resultl = "juf son";
//     console.log(resultl)                          
// } 
// else if(son % 2 == 1) {
//     resultl = "toq son";
//     console.log(resultl)
// }


// // let bal = prompt("toplagan balni kiriting") 

// // if (bal <= 80) {
// //     console.log('yiqildingiz')
// // }
// // else if (bal <= 85) {
// //     console.log('sizning baxoyingiz 4 bal')
// // }
// // else if (bal <= 96) {
// //     console.log('sizning baxoyingiz 5 bal')
// // }
// // else if (bal <= 100) {
// //     console.log('siz bujutsiz')
// // }

// let yosh = prompt('siz necha yoshdasiz')

// if(yosh > 16) {
//     console.log('kirish mumkin');
// } else console.log('kirish taqiqlandi');


//    let input = document.elementbyid('inputBox');
//    let buttons = document.selectorsall('button')

//    let string = "";
//    let arr = Array.from(buttons);
//    arr.foreach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string
//         }
//         else if(e.target.innerHTML == 'DE'){
//             string = string.substring(0, string.lenght-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
//    })
// function num1(num1) {
//     if (num2 + 4 === 3) {
//         console.log(7);
//     } else if (num3 - 4 === 3) {
//         console.log(1);
//     }
// }
// num1()


// var num1 =5,
// num2 = 4,
// amal = '-';

// if (amal === '+') {
//     console.log(num1+num2);
// } else if (amal ==='-') {
//     console.log(num1-num2);
// } else if (amal ==='*') {
//     console.log(num1*num2);
// } else if (amal ==='/') {
//     console.log(num1/num2);
// } 


// function even(number) {
//     var number = 5;
//     var number = 4,
//     number = '-'
//     if (number === '+') {
//         console.log(number+number);
//     } else if (number === '-') {
//         console.log(number-number);
//     } else if (number === '*') {
//         console.log(number*number);
//     } else if (number === '/') {
//         console.log(number/number);
//     }
// }

// even()


// function calculator(num1, operator, num2) {
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         if (num2 === 0) {
//           return 'Cannot divide by zero';
//         }
//         return num1 / num2;
//       default:
//         return 'Invalid operator';
//     }
//   }  // Example usage
//   console.log(calculator(5, '+', 3)); // Output: 8
//   console.log(calculator(10, '-', 7)); // Output: 3
//   console.log(calculator(4, '*', 6)); // Output: 24
//   console.log(calculator(9, '/', 3)); // Output: 3
//   console.log(calculator(5, '/', 0)); // Output: Cannot divide by zero
//   console.log(calculator(2, '%', 4)); // Output: Invalid operator
  

// function calculator(operation, num1, num2) {
//     if (operation === 'add') {
//       return num1 + num2;
//     } else if (operation === 'subtract') {
//       return num1 - num2;
//     } else if (operation === 'multiply') {
//       return num1 * num2;
//     } else if (operation === 'divide') {
//       if (num2 === 0) {
//         return "Cannot divide by zero";
//       }
//       return num1 / num2;
//     } else {
//       return "Invalid operation";
//     }
//   }
//   console.log(calculator('add', 5, 3)); // Output: 8
//   console.log(calculator('subtract', 10, 2)); // Output: 8
//   console.log(calculator('multiply', 4, 5)); // Output: 20
//   console.log(calculator('divide', 10, 2)); // Output: 5
//   console.log(calculator('divide', 10, 0)); // Output: "Cannot divide by zero"
//   console.log(calculator('power', 2, 3)); // Output: "Invalid operation"
  

// const inputEl = document.getElementsByName('username')
// console.log(inputEl);

let number = 10;
const borderColor = "red";

const person = {
    name: "laziz"
}
person.name = "lazizbek";
console.log(person);