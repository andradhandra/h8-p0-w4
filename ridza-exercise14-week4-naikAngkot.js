//Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    if (arrPenumpang.length === 0) {
        console.log();
        return arrPenumpang;
    }
    //buat array output
    var hasil = [];

    //perulangan menghitung jarak
    for (var i=0; i<arrPenumpang.length; i++) {
        var dataPenumpang = {};
        for (var j=0; j<rute.length; j++) {

            //mendapatkan posisi naik
            if (arrPenumpang[i][2] === rute[j]) {
                var turun = (j+1);
            }
            //mendapatkan posisi turun
            if (arrPenumpang[i][1] === rute[j]) {
                var naik = (j+1);
            }
        } 
        //mendapatkan nilai jarak
        var jarak = turun - naik;
        
        //membuat object
        dataPenumpang.penumpang = arrPenumpang[i][0];
        dataPenumpang.naikDari = arrPenumpang[i][1];
        dataPenumpang.tujuan = arrPenumpang[i][2];
        dataPenumpang.bayar = jarak*2000;
        hasil.push(dataPenumpang);
    }
    console.log();
    return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

  console.log(naikAngkot([['Ridza', 'A', 'C'], ['Ganda', 'A', 'F'], ['Ivan', 'C', 'C'] ]));
  
  console.log(naikAngkot([])); //[]