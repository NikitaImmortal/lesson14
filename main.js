/* 
    При выполнении домашнего задания используйте только те конструкции,
    которые есть в уроке.

    TASK 0:

    Напишите функцию sum(c,t), которая возвращает результат суммы c,t

*/
        
    //    function sum(c,t) {
    //     return c + t;

    //    }

    //    let result = sum (10,20);
    //    console.log(result)

        

/* 
    TASK 1:

    Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

*/
   
// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

//  let result = min (10,20)
//  console.log(result)

/* 
    TASK 2:

    Напишите функцию pow(x,n), которая возвращает x, в степени n

*/
// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }


/* 
    TASK 3:

    Напишите функцию, которая принимает число,
    и возвращает строку "четное" или "нечетное".

*/

// function isEvenNumber() {
//     let num = prompt('Введите число?', '');
//     if ( result = num % 2 === 0 ? 'Число четное' : 'Число нечетное') {
      
//       return result;
//     }
//   }

    
//   console.log(isEvenNumber());    

    

   
/* 
    TASK 4:

    Напишите функцию getColor(23, 100, 134), которая будет принимать три аргумента 
    и возвращать строку вида "rgb(23,100,134)". 
    Если какой-либо из аргументов не задан: например, третий:
    мы вызываем функцию getColor(23,100), в таком случае мы должны
    получить строку "rgb(23,100,0)"

*/
   
// function rgb(r, g, b) {
//     return `rgb(${r ? r : 0}, ${g ? g : 0}, ${b ? b : 0})`;
//   }
//   console.log(rgb(23, 100, 134));
  

  /* 
    TASK 5:

    Напишите 2 функции:

    Первая функция squareNumber(num) должна принимать число, и возвращать квадрат этого числа

    Вторая функция запрашивает у пользователя число от 18 до 50.
    Если пользователь ввел НЕ число, то сделайте ему одно замечание,
    если число, то вызовете функцию squareNumber передав в нее это самое число.
    Необходимо вывести результат пользователю (Либо замечание, либо квадрат числа).  

*/

// function squareNumber(num) {
//     return  num * num
//   }
//   function checkNumber() {
//   let num = prompt('Введите число от 18 до 50');
//   if (num >= 18 && num <= 50) {
//     return squareNumber(num); 
//   } else if(num < 18 || num > 50) {
//     alert('Вы ввели значение не из диапазона'); 
//   } else {
//     alert('Введите число из диапозона от 18 до 50!'); 
//     }
//   }

//   checkNumber()
   