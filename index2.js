// console.log("Hello World");
// function sayHello()
// {
//     console.log("Hello from sayHello function");
// }
// sayHello();
// console.log("this is a simple js program");

// console.log("one");
// console.log("two");
// setTimeout(()=>
// {
//     console.log("hello world");
// },5000);
// console.log("three");
// console.log("four");

// function sum(a,b)
// {
//     console.log(a+b);
// }
// function calculator(a,b,ds)
// {
//     ds(a,b);
// }
// calculator(5,10,sum);
// for(let i=0;i<5;i++)
// {
//     let str="";
//     for(let j=0;j<5;j++)
//     {
//         str +=j;
//     }
//     console.log(i,str);
// }
//  function getData(dataid)
//  {
//     setTimeout(()=>
// {
// console.log("fetching data for id:",dataid);
// },5000);
//  }
//  getData(1);
//  getData(2);
//  getData(3);
//    function getData(dataid,getnextdata){
//   setTimeout(() => {
//     console.log("Fetching data for id:",dataid);
//     if (getnextdata){
//       getnextdata();
//     }
//     },2000);
//   }

//   getData(1,()=>
// {
//     console.log("getting data 2....")
//     getData(2,()=>
//     {
//         console.log("getting data 3....")
//         getData(3);
//     });
// });
   

//to overcome this we will use promsis
//promise for eventually completion of an operation
//promise is an object that represent the eventual completion or failur
   



//promise syntax
//const myPromise = new Promise
// ((resolv,reject))=>{..})
//resolv is called when the asynchrous operation is sucessfull
//reject is called when the asynchronous operation fails

const myPromise= new Promise((resolve,reject)=>{
setTimeout(()=>{
  const success= false;
  if(success){
    resolve("data fetched successfully");

  }else{
    reject("error fetched data");
  };
},2000);

});

myPromise.then((data) =>{
  console.log("Promise resolved with data",data);
})
.catch((error) =>{
  console.error("promises rejected with error ",error);
});



let promise=new Promise((resolve,reject)=>{
  console.log("iam a promise");
  if(1<0)
  {
    resolve(123)
  }
    resolve("something went wrong");
  
});


function getData(dataid){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("fetching data for id",dataid);
      resolve("success");
    },2000);
  });
}
let result=getData(123);
result;
