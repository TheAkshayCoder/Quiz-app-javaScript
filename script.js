

const arr=[
    {
        "question":"Question: Full form of CSS",
        "a":"Cascading style sheet",
        "b":"CSS",
        "c":"HAL",
        "d":"none of the above",
        "correct":"A"
    },
    {
        "question":"Question: PM of India?",
        "a":"Cascading style sheet",
        "b":"Modi",
        "c":"HAL",
        "d":"none of the above",
        "correct":"B"
    },
    {
        "question":"Question: Full form of HTML",
        "a":"Cascading style sheet",
        "b":"CSS",
        "c":"Hypertext markup language",
        "d":"none of the above",
        "correct":"C"
    },
    {
        "question":"Question: Satue of unity",
        "a":"Cascading style sheet",
        "b":"CSS",
        "c":"HAL",
        "d":"Sardar sarovar dam",
        "correct":"D"
    },
    {
        "question":"Question: City in haryana",
        "a":"Cascading style sheet",
        "b":"Faridabad",
        "c":"HAL",
        "d":"none of the above",
        "correct":"B"
    }
    
]

const question=document.getElementById("question")
const option1=document.getElementById("a")
const option2=document.getElementById("b")
const option3=document.getElementById("c")
const option4=document.getElementById("d")
const btn=document.getElementById('submit')
const inp=document.getElementsByName("answer")
const result =document.getElementById("result")
const restart=document.getElementById("restart")

let i=0;
let score=0;
btn.classList.add("active")
btn.addEventListener("click",()=>{
    checkAnswer()
    i++
    if (i<=arr.length-1){
        quiz()
    }
     else{
        btn.style.display="none"
        result.classList.add("active")
        result.innerHTML=`your score is ${score}`
        restart.classList.add("active")
        
        
    }
    
    console.log(score) 
})

restart.addEventListener("click",()=>{
    i=0;
    quiz()
    score=0;
    checkAnswer()
    restart.classList.remove("active")
    result.classList.remove("active")
    btn.style.display="block"
})

function quiz(){
    question.innerHTML=arr[i].question
    option1.innerHTML=arr[i].a
    option2.innerHTML=arr[i].b
    option3.innerHTML=arr[i].c
    option4.innerHTML=arr[i].d
}

function checkAnswer(){
    inp.forEach((inpt)=>{
        if (inpt.checked){
            if (inpt.id==arr[i].correct){
                score++
                
            }
        }
        inpt.checked=false
        return score
    })
}

quiz()