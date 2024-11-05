
function ButtonPress() {
    setTimeout(function(){
        let doc = document.getElementsByTagName("body")[0]
        doc.innerHTML += "<h2>ВЫ СТАЛИ ДВОРНИКОМ</h2>"
    },5000)
}