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
        CurrectAns:"Object Oriented"
    }
]

let question= document.getElementById("qus");
let answer= document.getElementById("ans");
let prev = document.getElementById("prv");
let nxt = document.getElementById("nxt");
let Submit = document.getElementById("submit");
let  quizContainer=document.getElementById("box"); 

let qusNo=0
let Q=0

let Correct=0




Quiz();

function Quiz(){
    question.textContent=Questions[qusNo].Qus
    Q=Questions[qusNo].ans
    console.log(Q)
    answer.innerHTML= Q.map((i)=>
        `<ul><li> <input type="radio" name="options" value="${i}"/>${i}</li></ul>`
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

    const answerContainers = quizContainer.querySelector('input[name="options"]:checked');

    console.log(answerContainers.value, "choosen")

    Questions.map((c)=>{

        if(c.CurrectAns == answerContainers.value){
            console.log(c.CurrectAns, "True")
            Correct+=1
        }
        else{
            console.log(c.CurrectAns, "False")
        }
    })
  
    Submit.innerHTML = `${Correct} out of ${Questions.length}`;
    }



 