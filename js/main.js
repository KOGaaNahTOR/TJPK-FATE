var shot = true


function ButtonPress() {
    if (shot == false){return}
    setTimeout(function(){
        let doc = document.getElementsByTagName("body")[0]
        let Info = document.createElement("h1")
        doc.appendChild(Info)
        if (Math.random()>0.5){
            TimeoutTypeoutHandler(Info,"Вы стали дворником!",100)
        }else{
            TimeoutTypeoutHandler(Info,"Вы стали миллионером!",100)
        }
    },2000)
    shot = false
    document.getElementsByClassName("SpecialEffectBlock")[0].className = "SpecialEffectActivation"
    document.getElementsByClassName("SpecialEffectBlock")[0].className = "SpecialEffectActivationTwo"
    document.getElementsByClassName("SpecialEffectBlock")[0].className = "SpecialEffectActivationThree"
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