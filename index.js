
console.log("Hello test 1");
let  Timeout=null;
const timeData=()=>{
Timeout=setTimeout(()=>{
    console.log("Hello test 4");
},1000);
}
timeData()
console.log("Hello test 5", Timeout);
console.log("Hello test 6");
