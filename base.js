const Questions=[
    {
        id:1,
        Qus: "1. What's the return type of map function?",
        ans: ["array","string","null","int"],
        CurrectAns:"array",
    },
    {   id:2,
        Qus: "2. Which of the following methods is used to access HTML elements using Javascript?",
        ans:["getElementbyId()","getElementbyId()","innerHtml","A & B"],
        CurrectAns:"innerHtml"
    },
    {   id:3,
        Qus: "3. Javascript is an _______ language ?",
        ans:["Object Oriented","Object Based","None","A & B"],
        CurrectAns:"A & B"
    }
]

let question= document.getElementById("qus");
let answer= document.getElementById("ans");
let prev = document.getElementById("prv");
let nxt = document.getElementById("nxt");
let Submit = document.getElementById("submit");
let  choose=document.querySelector('input'); 

let qusNo=0
let Q=0
let Result=0



function Count(){
    choose.forEach((element) => {
        if(element.checked){
            
        }
        
    });


}



Quiz();

function Quiz(){
    question.textContent=Questions[qusNo].Qus
    Q=Questions[qusNo].ans
    console.log(Q)
    answer.innerHTML= Q.map((i)=>
        `<ul><li> <input type="radio" value="${i}"/>${i}</li></ul>`
     ).join('')
        

}

prev.addEventListener("click", function(){
    qusNo -=1;
    console.log(qusNo);
    if(qusNo<=0){
        console.log("qusNo is bigger");
        qusNo=Questions.length
    }
    Quiz()
})

nxt.addEventListener("click", function(){
    qusNo +=1;
    console.log(qusNo);
    if(qusNo==Questions.length){
        console.log("qusNo is --");
        qusNo=0        
    }
    Quiz()
})

function result(){

       
       Submit.textContent= `You got ${Result}`;
       Count()
        
    }



 