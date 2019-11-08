//Exercise16 Logic Challenge: Graduates

function graduates (students) {
    // Code disini
    
    //buat objek baru
    var kelasLulus = {};
    var siswaLulus = {};

    //perulangan untuk mengakses array of objects
    for (var x=0; x<students.length; x++) {

      //kondisi untuk pembuatan object baru pertama kali
      if (kelasLulus[students[x]['class']] === undefined && students[x]['score'] > 75) {

        //pembuatan array class pertama kali
        kelasLulus[students[x]['class']] = [{
          name : students[x]['name'],
          score : students[x]['score']
        }];
      
      } else {//kondisi jika sudah bukan pertama kali

        //filter nilai diatas 75
        if (students[x]['score'] > 75) {
          siswaLulus.name = students[x]['name'];
          siswaLulus.score = students[x]['score'];
          kelasLulus[students[x]['class']].push(siswaLulus);
        } 
      }
    }

    console.log();
    return kelasLulus;
  }
  

  //TEST CASE
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}