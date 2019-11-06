//Logic Challenge - Change Me!

function changeMe(arr) {
    // you can only write your code here!
    var avengersData = {};
    var tanggal = new Date();
    var tahun = tanggal.getFullYear();

    
    if (arr.length === 0) {
        console.log ('""');
    } else {

    for (var i=0; i<arr.length; i++) {

        //menampilkan judul data
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}:`);

         if (typeof arr[i][0] != "string") {
            avengersData.lastName = "input nama invalid";
        } else{
            avengersData.firstName = arr[i][0];
        }

        if (typeof arr[i][1] != "string") {
            avengersData.lastName = "input nama invalid";
        } else {
            avengersData.lastName = arr[i][1];
        } 
        
        if (arr[i][2] === "male" || arr[i][2] === "female" || arr[i][2] === "Male" || arr[i][2] === "Female" || arr[i][2] === "MALE" || arr[i][2] === "FEMALE") {
            avengersData.gender = arr[i][2];
        } else {
            avengersData.gender = "input gender invalid";
        }

        if (arr[i][3] === undefined) {
            avengersData.age = "input invalid";
        } else {
            avengersData.age = tahun - arr[i][3];
        }
        
        
        console.log(avengersData);
    }
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""