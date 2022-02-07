const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let res = [];
   let codeArr = [];
   let codeArray = Object.entries(MORSE_TABLE);
   let count = 0;

   for (let i = 0; i < expr.length; i += 10) {
      codeArr.push(expr.slice(i, i + 10));
   }

   codeArr = codeArr.map(element => {
      if (element !== "**********") {
         let arrayPre = new Array(5);
         for (let i = 0; i < 10; i++) {
            arrayPre[count] = element.substr(i, 2);
            count++;
            i++;
         }
         count = 0;
         return arrayPre;
      } else {
         return element;
      }
   })

   codeArr = codeArr.map(element => {
      if (element !== "**********") {
         element = element.map(element2 => {
            if (element2 === "00") {
               return '';
            } else if (element2 === "10") {
               return '.';
            } else if (element2 === "11") {
               return '-';
            }
         });
         return element;
      } else {
         return " ";
      }
   })

   codeArr = codeArr.map(element => {
      if (element !== ' ') {
         element = element.join('').replace(/,/g, '');
      } 
      return element;
   })

   res = codeArr.map(element => {
      if (element !== ' ') {
         codeArray.forEach(element2 => {
               if (element2[0] === element) {
                  element = element2[1];
               }
         });
      } 
      return element;
   })
   return res.join('');
}

module.exports = {
   decode
}
