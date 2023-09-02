console.log("script.js loaded successfully!")

const chapter1 = document.querySelector("#chapter-1");
const chapter2 = document.querySelector("#chapter-2");
const chapter3 = document.querySelector("#chapter-3");

function toggleChapter1(){
    const status = document.querySelector("#chapter-1 .chapter-title span")
    status.classList.contains("lnr-chevron-down") ?
    status.classList.replace("lnr-chevron-down", "lnr-chevron-right")
    : status.classList.replace("lnr-chevron-right", "lnr-chevron-down")

    const item1 = document.querySelector("#lesson-1-1")
    const item2 = document.querySelector("#challenge-1-1")

    item1.classList.toggle("hidden")
    item2.classList.toggle("hidden")

    console.log("function1")
}

function toggleChapter2(){
    const status = document.querySelector("#chapter-2 .chapter-title span")
    status.classList.contains("lnr-chevron-down") ?
    status.classList.replace("lnr-chevron-down", "lnr-chevron-right")
    : status.classList.replace("lnr-chevron-right", "lnr-chevron-down")

    const item1 = document.querySelector("#lesson-2-1")
    const item2 = document.querySelector("#challenge-2-1")
    const item3 = document.querySelector("#challenge-2-2")

    item1.classList.toggle("hidden")
    item2.classList.toggle("hidden")
    item3.classList.toggle("hidden")

    console.log("function2")
}

function toggleChapter3(){
    const status = document.querySelector("#chapter-3 .chapter-title span")
    status.classList.contains("lnr-chevron-down") ?
    status.classList.replace("lnr-chevron-down", "lnr-chevron-right")
    : status.classList.replace("lnr-chevron-right", "lnr-chevron-down")
    
    console.log("function3")
}

chapter1.addEventListener("click", toggleChapter1);
chapter2.addEventListener("click", toggleChapter2);
chapter3.addEventListener("click", toggleChapter3);