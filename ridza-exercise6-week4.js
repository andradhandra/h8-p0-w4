//Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
  // you can only write your code here!

  //periksa input untuk input 0 dan 1
  if (angka === 0) {
    return "Maasukkan input lain selain 0!!!";
  } else if (angka === 1) {
    return 2;
  } else {

      //penentuan jumlah digit setiap perkalian faktor input
      var hasil = [];
      for (var i=1; i<angka; i++) {
          if (angka % i === 0) {
              hasil.push(`${i}${angka/i}`)
          }
      }
  }

  //penetuan jumlah digit perkalian faktor terkecil
  angka = hasil[0].length;
  for (var i=1; i<hasil.length; i++) {
    if (angka > hasil[i].length) {
      angka = hasil[i].length;
    }
  }
  return angka; //mengembalikan nilai angka
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(6));
console.log(digitPerkalianMinimum(0));