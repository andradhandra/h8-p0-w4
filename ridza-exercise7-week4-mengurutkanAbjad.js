//Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
    // you can only write your code here!
    //tanpa menggunakan sort()

    //mengubah string jd array
    var arr = str.split("");
    var sementara = "";
    
    //perulangan untuk menukar huruf
    for (var i=0; i<arr.length; i++) {
        for (var j=0; j<arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                sementara = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = sementara;
            } 
    }
    
  } 

  //mengembalikan array to string
  var hasil = "";
  for (var i=0; i<arr.length; i++) {
    hasil += arr[i];
  }
  return hasil; 
}



  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'