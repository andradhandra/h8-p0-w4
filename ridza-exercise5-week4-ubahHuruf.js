//Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
    // you can only write your code here!

    //asumsi huruf kecil semua
    //buat array alfabet dengan index array sebagai acuannya
    var alfabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var str = ""
    for (var i=0; i<kata.length; i++) {
        for (var j=0; j<alfabet.length; j++) {
            if (kata[i] === 'z') {
                str += 'a';
                break;
                // console.log("z terdeteksi")
            } else if (kata[i]===alfabet[j]) {
                    str += alfabet[j+1]
                    break;
            }
        }
    } return str;
  }
  
  // TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

console.log(ubahHuruf('zebra')); //afcsb