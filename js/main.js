var shot = true
var PredictionTimer
document.addEventListener('contextmenu', event => event.preventDefault());
document.getElementsByTagName("input")[0].addEventListener('touchend', (e) => {
    ButtonUnpress()
}, false);


function ButtonPress() {
    if (shot == false){return}
    PredictionTimer = setTimeout(function(){
        let doc = document.getElementsByTagName("body")[0]
        let Main = document.createElement("h1")
        Main.id = "Pediction"
        doc.appendChild(Main)
        let Info = document.createElement("h2")
        Info.id = "Description"
        doc.appendChild(Info)
        if (Math.random()>0.5){
            TimeoutTypeoutHandler(Main,"ПО",1000)
            TimeoutTypeoutHandler(Info,"ПО - программное обеспечение</br>это специальность для настоящих программистов, направленная на разработку программного обеспечения любого рода:</br> игры, программы, сайты, даже опирационные системы, всё это вы сможете создать по окончанию данного курса", 25)
        }else{
            TimeoutTypeoutHandler(Main,"ВТИС",1000)
            TimeoutTypeoutHandler(Info,"ВТИС, так-же известные как системные администраторы</br>это специальность ориентированная на человека техники и непосредственное взаимодействие с техникой</br>система умный дом становится так-же элементарна в освоении как конструктор лего", 25)
        }
    },2000)
    shot = false
    let doc = document.getElementsByTagName("body")[0]
    let Please = document.createElement("h2")
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
        document.activeElement.blur()
        setTimeout(function(){
            let thing = document.getElementById("Shakey")
            thing.parentElement.removeChild(thing)
        },3000)
        // doc.removeChild()
    }
}

function TimeoutTypeoutHandler(obj,text,delay){
    if (text[0] == "<" && text[1] == "/" && text[2] == "b" && text[3] == "r" && text[4] == ">"){
        obj.innerHTML += text[0]+text[1]+text[2]+text[3]+text[4]
        setTimeout(TimeoutTypeoutHandler,delay,obj,text.substr(5),delay)
        return;
    }
    obj.innerHTML += text[0]
    if (text.substr(1) != ""){
        setTimeout(TimeoutTypeoutHandler,delay,obj,text.substr(1),delay)
    }
}


// var string = "a";
// s = string.substr(1);
// console.log(s=="")