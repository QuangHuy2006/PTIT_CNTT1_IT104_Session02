const getStudentSummary = ({ student }) => {
  let { name, age, listMonhoc } = student;
  let sum = 0;
  let min = 10, max = 0;
  let strongestSubject = "", weakestSubject = "";
  for(let i of listMonhoc){
    sum += i.score;
    if(i.score < min){
      min = i.score;
      weakestSubject = i.subject;
    }
    if(i.score > max){
      max = i.score;
      strongestSubject = i.subject;
    }
  }
  let avg = sum / listMonhoc.length;
  let rank = "";
  if(avg < 5) {
    rank = "Học sinh yếu";
  }else if(avg >= 5 && avg < 7) {
    rank = "Học sinh trung bình";
  }else if(avg >= 7 && avg < 8.5) {
    rank = "Học sinh khá";
  }else{
    rank = "Học sinh giỏi";
  }
  return `${name} is ${age} years old\n` + `Average score: ${avg} -> ` + `${rank}\n` + `Best subject: ${strongestSubject} (${max})\n` + `Weakest subject: ${weakestSubject} (${min})`;
};
const student = {
  student: {
    name: "dev",
    age: 20,
    listMonhoc: [
      { subject: "Math", score: 9 },
      { subject: "English", score: 7.5 },
      { subject: "Physics", score: 6 },
      { subject: "Literature", score: 8.5 },
    ],
  },
};
console.log(getStudentSummary(student));
