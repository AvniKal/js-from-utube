// const tinderUser= new Object();     // singleton object
const tinderUser={};                   // non-singleton object
console.log(tinderUser);


tinderUser.Id= "123abc"
tinderUser.name= "dhruv"
tinderUser.isLoggedIn= true;

console.log(tinderUser);

const regularUser={
    email:" some@gmail.com",
    fullName: {
        userFullname:{
                first_name: " dhruv",
                last_name: " jaisinghani"
        }
    }
}

console.log(regularUser.fullName.userFullname.first_name)


const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj5={5:'e',6:'f'}

// const obj3={obj1,obj2}
// console.log(obj3)

const obj4=Object.assign({},obj1,obj2,obj5)
console.log(obj4)

const obj3={...obj1,...obj2}
console.log(obj3)

const users=[        // array of objects
    {
        id:1,
        email: "d@gmail.com"
    },
    {
        id:2,
        email: "d@gmail.com"
    },
    {
        id:3,
        email: "d@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));    // return type is array
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"chai and code"
}

// course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor);

const {courseInstructor: instructor}=course;
console.log(instructor);

// jason
// {
 //   "name":"avni",
 //   "coursename":"js in hindi",
 //   "price":"free"
 // }

// [
//   {},
//   {},
//   {}
// ]













