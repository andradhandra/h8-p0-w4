function highestScore (students) {
    // Code disini

    //membuat kelompok kelas dengan memasukkan kelas menjadi objek baru
    var classGroup = {};
    
    for (var i=0; i<students.length; i++) {
      var studentClass = "";
      var siPintar = "";
      var nilai = 0;
      for (j=0; j<students.length; j++) {
        if (students[i].class === students[j].class && students[j].score > nilai) { //mensortir nilai tertinggi berdasarkan kelas yang sama
          studentClass = students[i].class;
          nilai = students[j].score;
          siPintar = students[j].name;
        }
      }
      
      //mencetak hasil sortir ke dalam objek
      classGroup[studentClass] = {
      nama: siPintar,
      score: nilai
      }
    }
    console.log();
    return classGroup;
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}