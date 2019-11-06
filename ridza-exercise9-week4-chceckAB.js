//Logic Challenge - Check AB
function checkAB(str) {
    // you can only write your code here!

    //pembuatan index alfabet
    var index = [];
    var alfabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   
    //menandakan index tiap huruf
    for (var i=0; i<str.length; i++) {
        for (var j=0; j<alfabet.length; j++) {
            if (str[i]===alfabet[j]) {
                index.push(j);
            }
        }
    } 

    //Mencari jarak antar huruf yang berjarak 3
    var hasil = Boolean;
    for (var i=0; i<index.length-1; i++) {
        if (Math.abs(index[i] - index[i+1]) === 3) {
            return true;
        } else {
            hasil = false;
        }
    } 
    return hasil; //mengembalikan nilai false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // false
  console.log(checkAB('bacon and meat')); // false

  console.log(checkAB('abcdefghaijklmonf')); //false
  console.log(checkAB('ada apa dengan cinta')); //true
