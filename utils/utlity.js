const names= ["Rahul", "Surender", "Rohit", "Sahil", "Vijay", "Anubhav", "Subal"];
const language = ["Python", "JavaScript", "C++", "C", "Java", "R", "Kotlin", "Perl", "Bash"];
const city = ["Bhiwani", "Hisar", "Hansi", "Gurugram", "Faridabad", "Jhajjar", "Rohtak", "Rewari"];
const manager = [false, true];

export function genDummyData(){
  let dummyData = [];
  for (let i=0; i<10; i++){
    dummyData.push({
      name: names[genRandomNum(0,names.length)],
      salary: genRandomNum(1,101)*100000,
      language: language[genRandomNum(0,language.length)],
      city: city[genRandomNum(0,city.length)],
      isManager: manager[genRandomNum(0,2)]
    });
  };
  return dummyData;
}

function genRandomNum(start, end){
  return Math.floor(Math.random()*(end-start)) + start;
}