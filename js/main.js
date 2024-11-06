var shot = true
var PredictionTimer
document.addEventListener('contextmenu', event => event.preventDefault());
document.getElementsByTagName("input")[0].addEventListener('touchend', (e) => {
    ButtonUnpress
}, false);


function ButtonPress() {
    if (shot == false){return}
    PredictionTimer = setTimeout(function(){
        let doc = document.getElementsByTagName("body")[0]
        let Info = document.createElement("h1")
        Info.id = "Pediction"
        doc.appendChild(Info)
        if (Math.random()>0.5){
            TimeoutTypeoutHandler(Info,"Вы станете дворником!",50)
        }else{
            TimeoutTypeoutHandler(Info,"Вы станете миллионером!",50)
        }
    },2000)
    shot = false
    let doc = document.getElementsByTagName("body")[0]
    let Please = document.createElement("h1")
    Please.id = "Please"
    Please.innerHTML = "</br>Не убирайте палец!"
    doc.appendChild(Please)
    document.getElementsByClassName("SpecialEffectBlock")[0].className = "SpecialEffectActivation"
    document.getElementsByClassName("SpecialEffectBlock")[0].className = "SpecialEffectActivationTwo"
    document.getElementsByClassName("SpecialEffectBlock")[0].className = "SpecialEffectActivationThree"
}

function ButtonUnpress() {
    if (document.getElementById("Pediction") != null || shot == true){return}
    else{
        shot = true
        clearTimeout(PredictionTimer)
        let doc = document.getElementsByTagName("body")[0]
        let Prediction = document.getElementById("Please")
        document.getElementsByClassName("SpecialEffectActivation")[0].className = "SpecialEffectBlock"
        document.getElementsByClassName("SpecialEffectActivationTwo")[0].className = "SpecialEffectBlock"
        document.getElementsByClassName("SpecialEffectActivationThree")[0].className = "SpecialEffectBlock"
        doc.removeChild(Prediction)
        let Shakey = document.createElement("h1")
        Shakey.innerText = "ВЫ УБРАЛИ ПАЛЕЦ, СКАНИРОВАНИЕ ПРЕРВАНО"
        Shakey.id = "Shakey"
        doc.appendChild(Shakey)
        setTimeout(function(){
            let thing = document.getElementById("Shakey")
            thing.parentElement.removeChild(thing)
        },1000)
        // doc.removeChild()
    }
}

function TimeoutTypeoutHandler(obj,text,delay){
    obj.innerHTML += text[0]
    if (text.substr(1) != ""){
        setTimeout(TimeoutTypeoutHandler,delay,obj,text.substr(1),delay)
    }
}


// var string = "a";
// s = string.substr(1);
// console.log(s=="")