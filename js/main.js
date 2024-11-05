var shot = true


function ButtonPress() {
    if (shot == false){return}
    setTimeout(function(){
        let doc = document.getElementsByTagName("body")[0]
        let Info = document.createElement("h1")
        doc.appendChild(Info)
        TimeoutTypeoutHandler(Info,"Вы стали дворником!",100)
    },1000)
    shot = false
    document.getElementsByClassName("SpecialEffectBlock")[0].className = "SpecialEffectActivation"
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