//Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
    // you can only write your code here!

    var barangSale = [
        {
         namaBarang :"Sepatu Stacattu",
         harga      : 1500000
        },
        {
         namaBarang :"Baju Zoro",
         harga      :  500000
        },
        {
         namaBarang :"Baju H&N",
         harga      :  250000
        },
        {
         namaBarang :"Sweater Uniklooh",
         harga      :  175000
        },
        { 
         namaBarang :"Casing Handphone",
         harga      :   50000
        }
    ];

    var belanjaPelanggan = {
        memberId     : memberId,
        money        : money,
        listPurchased: []
    };

    if (memberId === undefined || memberId.length === 0 || money === undefined) {
        return "Mohon maaf, toko SAYA hanya berlaku untuk member saja";
    } else if (money < barangSale[barangSale.length-1].harga) {
        return "Mohon maaf, Anda miskin"
    } else {
        for (var i=0; i<barangSale.length; i++) {
            if (money >= barangSale[i].harga) {
                money -= barangSale[i].harga;
                belanjaPelanggan.listPurchased.push(barangSale[i].namaBarang);
            } 
        }
        belanjaPelanggan.changeMoney = money;
    }

    return belanjaPelanggan;

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja