//Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
    // you can only write your code here!
    //tanpa menggunakan sort()

    var hasil = "";
    
    for (var i=0; i<str.length; i++) {
        for (var j=0; j<str.length-1; j++) {
            if (str[j] > str[j+1]) {
                var sementara = str[j];
                str[j] += str[j+1];
                str[j+1] = sementara;

            } 
    }
    
  }
  return str; 
}



  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'