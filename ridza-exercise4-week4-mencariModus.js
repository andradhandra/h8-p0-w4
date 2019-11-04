function cariModus(arr) {
    // you can only write your code here!

    //menghitung jumlah munculnya tiap angka
    var jumlah = [];
    for (var i=0; i<arr.length; i++) {
        var count = 0;
        for (var j=0; j<arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        } 
        jumlah.push(count);
    } 
    
    //menentukan apakah terdapat modus dalam input array atau tidak
    var x = 1;
    var index = -1
    for (var i = 0; i<jumlah.length; i++) {
        for (var j = 0; j<jumlah.length; j++) {
            if (jumlah[i] != jumlah[j]) {
                index = 0;
            }
        }
    }

    //menentukan modus/output
    if (index === -1) { //apabila tidak ada modus, ouput adalah -1
        return index;
    } else {

        //menentukan modus berdasarkan index array
        for (var i = 0; i<arr.length; i++) {
            if (jumlah[i]> x ) {
                x = jumlah[i];
                index = i;
            }
        }
    }
    return arr[index];
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1