function dis(val){
    document.getElementById("start").value+=val //function for displaying values
}
function solve(){
    let x = document.getElementById("start").value //function for evaluation
    let y = eval(x)
    document.getElementById("start").value = y
}
function clr(){
    document.getElementById("start").value = " " //function for clearing the display
} 
