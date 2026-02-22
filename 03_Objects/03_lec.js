const course = {
    courseName : "js with hitesh",
    price : "845",
    courseInstructor : "hitesh",
}
// course.courseInstructor  (ye hm use krte hai ) but more cleaner way is :-

//syntactical hai bs  isko destructuring ki jaa rhi hai 
const {courseInstructor} = course // kha se value extract krni hai 

console.log(courseInstructor); //ab pura nhi likhna hoga course.courseInstructor  and hum courseInstructor ko koi chota naam bhi de sakte hai 

const {courseName : Cnm} = course ;
console.log(Cnm);

// API jo tum jante ho whi baki api jitna  tension hai  dusre ke sir pr dal dena 
// values atti hai backend se usko kaise likhte hai phle xml ke form me atti thi and ab json ke form me atti hai 
 
//json aisa dikhta hai :-
 /*
 {
    "name" : "rishit",
    "coursename" : "js ",
    "price" : "Free",

 }
    */