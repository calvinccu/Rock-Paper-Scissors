document.querySelector("#btn2").onclick=()=>{
    document.querySelector("title").innerText="Rock Paper Scissors"
    document.getElementById("difficulty").style.display="none"
    document.getElementById("possible").style.display="block"
}
document.querySelector("#btn3").onclick=()=>{
    document.querySelector("title").innerText="Rock Paper Scissors"
    document.getElementById("difficulty").style.display="none"
    document.getElementById("easy").style.display="block"
}
document.querySelector("#btn1").onclick=()=>{
    document.querySelector("title").innerText="Rock Paper Scissors (Hard Mode)"
    document.getElementById("difficulty").style.display="none"
    document.getElementById("impossible").style.display="block"
}
function chosen(chosen){
    let randomNo=Math.floor(Math.random()*3)
    let choices=[
        'rock',
        'scissors',
        'paper'
    ]
    let computerChoice=choices[randomNo]
    let myChoice=chosen.alt
    if (computerChoice==='rock'&& myChoice==='paper') {
		aud=new Audio("audio/win.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='You won'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/rock.jpg>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/paper.jpg>`
    }else if(computerChoice==='rock'&& myChoice==='scissors'){
		aud=new Audio("audio/lost.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='You lost'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/rock.jpg>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/scissors.jfif>`
    }else if(computerChoice==='rock'&& myChoice==='rock'){
		aud=new Audio("audio/draw.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='Draw'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/rock.jpg>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/rock.jpg>`
    }else if(computerChoice==='paper'&& myChoice==='scissors'){
		aud=new Audio("audio/win.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='You won'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/paper.jpg>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/scissors.jfif>`
    }else if(computerChoice==='paper'&& myChoice==='rock'){
		aud=new Audio("audio/lost.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='You lost'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/paper.jpg>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/rock.jpg>`
    }else if(computerChoice==='paper'&& myChoice==='paper'){
		aud=new Audio("audio/draw.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='Draw'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/paper.jpg>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/paper.jpg>`
    }else if(computerChoice==='scissors'&& myChoice==='rock'){
		aud=new Audio("audio/win.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='You won'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/scissors.jfif>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/rock.jpg>`
    }else if(computerChoice==='scissors'&& myChoice==='paper'){
		aud=new Audio("audio/lost.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='You lost'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/scissors.jfif>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/paper.jpg>`
    }else if(computerChoice==='scissors'&& myChoice==='scissors'){
		aud=new Audio("audio/draw.m4a")
		aud.play()
        document.querySelector('#span').innerHTML='Draw'
        document.querySelector('#computer_div').innerHTML=`<img src=Images/scissors.jfif>`
        document.querySelector('#your_div').innerHTML=`<img src=Images/scissors.jfif>`
    }
}
function easy(chosen){
    let myChoice=chosen.alt
    if (myChoice==='paper') {
		aud=new Audio("audio/win.m4a")
		aud.play()
        document.querySelector('#span3').innerHTML='You won'
        document.querySelector('#computer_div3').innerHTML=`<img src=Images/rock.jpg>`
        document.querySelector('#your_div3').innerHTML=`<img src=Images/paper.jpg>`
    }else if(myChoice==='scissors'){
		aud=new Audio("audio/win.m4a")
		aud.play()
        document.querySelector('#span3').innerHTML='You won'
        document.querySelector('#computer_div3').innerHTML=`<img src=Images/paper.jpg>`
        document.querySelector('#your_div3').innerHTML=`<img src=Images/scissors.jfif>`
    }else if(myChoice==='rock'){
		aud=new Audio("audio/win.m4a")
		aud.play()
        document.querySelector('#span3').innerHTML='You won'
        document.querySelector('#computer_div3').innerHTML=`<img src=Images/scissors.jfif>`
        document.querySelector('#your_div3').innerHTML=`<img src=Images/rock.jpg>`
    }
}
function hard(chosen){
    let myChoice=chosen.alt
    if (myChoice==='paper') {
		aud=new Audio("audio/lost.m4a")
		aud.play()
        document.querySelector('#span2').innerHTML='You lost'
        document.querySelector('#computer_div2').innerHTML=`<img src=Images/scissors.jfif>`
        document.querySelector('#your_div2').innerHTML=`<img src=Images/paper.jpg>`
		document.querySelector("comp_score3").innerHTML+=Number(1)
		document.querySelector("comp_score3").innerHTML=document.querySelector("comp_score3").innerHTML
    }else if(myChoice==='scissors'){
		aud=new Audio("audio/lost.m4a")
		aud.play()
        document.querySelector('#span2').innerHTML='You lost'
        document.querySelector('#computer_div2').innerHTML=`<img src=Images/rock.jpg>`
        document.querySelector('#your_div2').innerHTML=`<img src=Images/scissors.jfif>`
		var n=Number(document.querySelector("comp_score3").innerHTML)+=1
		document.querySelector("comp_score3").innerHTML=document.querySelector("comp_score3").innerHTML
    }else if(myChoice==='rock'){
		aud=new Audio("audio/lost.m4a")
		aud.play()
        document.querySelector('#span2').innerHTML='You lost'
        document.querySelector('#computer_div2').innerHTML=`<img src=Images/paper.jpg>`
        document.querySelector('#your_div2').innerHTML=`<img src=Images/rock.jpg>`
		document.querySelector("comp_score3").innerHTML+=Number(1)
		document.querySelector("comp_score3").innerHTML=document.querySelector("comp_score3").innerHTML
    }
}