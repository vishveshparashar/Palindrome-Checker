const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    //splitting user input character , reversing them,
    //and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}' </span> is not a Palindrome....!!`;    
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}' </span> is a Palindrome....!!`;
});

txtInput.addEventListener("keyup", () => {
    //removing spaces and all special characters from enteres value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});


