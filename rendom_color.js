// Normal Background Color 
let bgColor = ['Red','Green','Blue','Tomato','Silver','Pink',]
bgColor.push("Orange",'Violet');
const bgFilter = document.querySelector('.background_filter')
const bgSpan = document.querySelector('.background_filter span')
const btn = document.querySelector('.btn')
      
    btn.addEventListener('click', function(){  
        let recolor = rendom_Bg_Color() 
        bgFilter.style.backgroundColor = bgColor[recolor]
        bgSpan.style.color = bgColor[recolor]
        bgSpan.innerHTML = bgColor[recolor]
        btn.style.backgroundColor = bgColor[recolor]
      })

    function rendom_Bg_Color(){
       return Math.floor(Math.random()* bgColor.length);       
    }
// HexColor Background Change
let hex_color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const bgFilter_hex = document.querySelector('.background_filter_hex')
const bgSpan_hex = document.querySelector('.background_filter_hex span')
const btn_hex = document.querySelector('.btn_hex')

btn_hex.addEventListener("click",function(){
  let hex_color_code = "#"
  for(let i = 0; i<6;i++){
   // console.log(hex_color_code += 0
 hex_color_code += hex_color[rendom_bg_hex()]
  }
  bgSpan_hex.innerHTML = hex_color_code
  bgSpan_hex.style.color = hex_color_code
  bgFilter_hex.style.backgroundColor = hex_color_code
  btn_hex.style.backgroundColor = hex_color_code
  replace_p()
})

function rendom_bg_hex(){
return(Math.floor(Math.random() * hex_color.length))

}
// rendom_bg_hex()

// function replace_p(){ 
// let jsRegularExpretion = document.querySelector('.text_search_replace p')
// jsRegularExpretion.innerHTML = jsRegularExpretion.replace(/i/ig,"you")}


myWord = "hello I am saiful islam"

function thisMyWord(peraWord){
  return peraWord
}
thisMyWord(myWord)

console.log(myWord)

x = 30
y = 20

numx = 20
numy = 10

function increement(iX, iY){
  return (ixy  = iX + iY)
}
increement(x, y)

console.log(ixy)

increement(numx, numy)

console.log(ixy)
// Object destructuring 
let objPrac ={
  name : "Saiful islam",
  father: "Md Alomgir Hossain",
  mather: "Hazera Begum",
  age : "19"
}
let objPractice = {
  name: "Md Rayhan Ahmed",
  father:"Hasan Miya",
  mather: "Labli begum",
  age:"20",
  work:{
    profesonal:{
      main:"Web Devolaping",
      sub: "Youtuber"
    },
    Parttime:"Busness"
  }
}
function funObjPrac(thisobjprac, heading = "Personal Data"){  
    console.log(`${heading} - Hi I am ${thisobjprac.name},My Father Name ${thisobjprac.father}, My Mather Name ${thisobjprac.mather}, And My Age ${thisobjprac.age}`)
}

funObjPrac(objPrac, "Pesonal Information")
funObjPrac(objPractice)
funObjPrac(objPractice, "This Personal Info")

const {father: fobj ={}}  = objPrac ;
console.log(fobj)
const {work:{profesonal: thisdes}} = objPractice
console.log(thisdes)
const {work:{profesonal:{sub:thismydestrac}}} =  objPractice

console.log(thismydestrac)

let objectlist ={ 
  car:"Pulser",
  Model:"180cc",
} 
const {car: thiscar} = objectlist;
console.log(thiscar)

// Array Destructruring

let thisArray = [1, 3,5,[10,100,300],20]

const [, ,a, ,b] = thisArray
const [, c, ,[, d]] =thisArray
console.log(a,b)
console.log(c,d)

var n = 1;
var f = 5;

/// old way

let temp = n
n= f
f= temp
console.log(n,f);

// new way

[n,f]=[n,f]
console.log(n,f)



let thisobject = {
  brand: "Bata",
  price: "1200Tk",
  quantity: {
    lower:"1p",
    best:"2p"
  }
}

const {brand}=thisobject
console.log(brand)
const {price: thisprice} =thisobject
console.log(thisprice)
const {quantity:{best}} = thisobject
console.log(best)

const thisArrayDes = ["Apple","Tomato","Potato","Banana","Orange"]
let [arraydesa, ,arraydesb] = thisArrayDes
console.log(arraydesa, arraydesb)

for(i = 0; i<thisArrayDes.length; i++ ){
  console.log(thisArrayDes[i])
}

const thisOurCity = ["Sylhet","Dhaka","Comilla","Coxbazar"]
const userCity = "Sylhet" //prompt("Enter Your City")
for(i = 0; i< thisOurCity.length; i++){
  if(thisOurCity[i] === userCity){
    console.log("Your city is listed")
    break;
  }
    console.log("No! Your "+ userCity +" is Not Founded.")
}

for(i = 0; i<= 10; i++){
  if(i % 2 == 0){
    console.log(i)
  }
}

for(i= 0; i <=10; i++ ){
  if(i % 2 == 0) continue
  
  console.log(i)
}

const busnessCity = [
  {name:"Dhaka", area:["Gazipur","Badda","Muhakali"]},
  {name:"Sylhet", area:["Akhalia","Amberkhana","Bondor"]},
  {name:"Chitagong", area:["Talipon","Poltton","Binai"]}
];

for (i = 0; i<busnessCity.length; i++){
  console.log("Busness City",busnessCity[i].name)

    for(j=0; j<busnessCity[i].area.length; j++){
      console.log(busnessCity[i].area[j])
    }
}
i=0
for(;i<20;){
  console.log(i)
  i++
}
const pro_h3 = document.querySelector(".project_h3")
const text_in = document.querySelector(".text_input")
const con_btn = document.querySelector(".con_btn")

con_btn.addEventListener("click" ,function(){
    pro_h3.style.color = "red";
})

// higher order Function
// accept Other function as argument

const add = function(x, y){
    return x + y;
};

const subtract = function(x,y){
  return x-y;
};

const multiply = function(x,y){
  return x*y;
};

const divite = function(x,y){
  return x/y;
}
console.log ("//////////")
const cal = [add, subtract, multiply, divite]

for(let allCal of cal){
   let total = allCal(20, 10);
   console.log(total)
}

console.log(cal[0](10,10))


const calObj = {
  jog: add,
  bug: subtract,
  gun: multiply,
  bag: divite
}

console.log(calObj.jog(5, 5))
 
let useFun = function(){
   console.log("Hello I am saiful islam")
}

function repet(fun , useLoop){
  for(i=0 ; i<useLoop; i++){
    fun()
  }
}

repet(useFun, 5)
repet(useFun, 2);

function multiGun(gun){
  return x => {
    return x*gun
  }
}
const digun = multiGun(2)
const tingun = multiGun(3)
console.log(digun(5));
console.log(tingun(5))
// function obj ({Orange,Apple,Banana}){
//    console.log(obj.length)} 
   function calculator(num1, num2, action){
      if(action === "add"){
        return num1 + num2
      }else if(action === "minas"){
        return num1 - num2
      }
      else if(action === "multiplay"){
        return num1 * num2
      }
   }

   console.log(calculator( 10, 5 , "multiplay"))
   const sq = function(x){
     return x*x
   }
  //  this short from >>>>down
   const square = x => (
        x*x
   )
  // this short from >>> down
  const squares = x => x*x // auto return, one statement only use
  
//  obj()

function useCallBack (num1, num2, callback) {
      let total_Num = num1 + num2 
      callback(total_Num)
}
function con(a){
  console.log(a)
}                  
useCallBack(10,10, con)