const display = document.getElementById("display");

// Add values
function appendValue(value){
    display.value += value;
}

// Clear
function clearDisplay(){
    display.value = "";
}

// Delete
function deleteLast(){
    display.value = display.value.slice(0,-1);
}

// Calculate
function calculate(){

    try{

        const result = Function(
            '"use strict"; return (' +
            display.value +
            ')'
        )();

        display.value = result;

    }catch{

        display.value = "Error";

    }
}

// Keyboard Support

document.addEventListener("keydown",(e)=>{

    if(
        (e.key >= "0" && e.key <= "9") ||
        ["+","-","*","/",".","%"].includes(e.key)
    ){
        appendValue(e.key);
    }

    if(e.key === "Enter"){
        calculate();
    }

    if(e.key === "Backspace"){
        deleteLast();
    }

    if(e.key === "Escape"){
        clearDisplay();
    }

});

// Dark / Light Mode

const themeBtn =
document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");
    themeBtn.textContent = "☀️ Light Mode";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");
        themeBtn.textContent = "☀️ Light Mode";

    }else{

        localStorage.setItem("theme","dark");
        themeBtn.textContent = "🌙 Dark Mode";

    }

});