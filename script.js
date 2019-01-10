let el = document.querySelector(".type");


let template = el.cloneNode(true);
console.log(template);


(function () {
    let currentIndex = 0;
    template.querySelectorAll("*").forEach(e => {
        e.setAttribute("typerId", currentIndex);
    });
})();


for (const elemnt of el.childNodes) {
    elemnt.textContent = "";
}



timeoutIndex = 0;
for (const elemnt in el.childNodes) {
    if(elemnt === "length" || elemnt === "namedItem" || elemnt === "item" || typeof template.childNodes[elemnt] === "function") continue; // take care
    // typeFinalElement(el.childNodes[elemnt], template.childNodes[elemnt].textContent.replace(/\s+/g,' '), timeoutIndex);
    recourseOnElement(el.childNodes[elemnt], timeoutIndex);
    timeoutIndex += template.childNodes[elemnt].textContent.replace(/\s+/g,' ').length + 1;
}


function typeFinalElement(el, text, timeout) {
    setTimeout(() => {
        for (const i in text) {
            setTimeout(() => {
                if(rollDiceBool(5)){
                    // console.log(getRandomChar());
                }
                addChar(el, text[i]);
            }, (Number(i) + 1) * 100);
        }
    }, timeout * 100);
    // console.log(timeout * 100);
}



function recourseOnElement(el, timeoutIndex){
    // console.log(el);


    if(el.nodeType === Node.TEXT_NODE){
        typeFinalElement(el, el.textContent.replace(/\s+/g,' '), timeoutIndex);
    } else if(el.nodeType === Node.ELEMENT_NODE) {
        for (const elemnt in el.childNodes) {
            if(elemnt === "values" || elemnt === "keys" || elemnt === "forEach" || elemnt === "entries" || elemnt === "item" || elemnt === "length") continue;
            recourseOnElement(el.childNodes[elemnt], timeoutIndex);
        }
    } else {
        // console.log(el);
    }

    // console.log(el.childNodes);
    // for (const node in el.childNodes) {
    //     if(node === "values" || node === "keys" || node === "forEach" || node === "entries" || node === "item" || node === "length") continue;
    //     console.log(node);
    //     if(el.childNodes[node].nodeType === Node.TEXT_NODE){
    //         typeFinalElement(el, el.textContent.replace(/\s+/g,' '), timeoutIndex);
    //     } else if(el.childNodes[node].nodeType === Node.ELEMENT_NODE) {
    //         recourseOnElement(el, timeoutIndex);
    //     } else {
    //         // console.log(el);
    //     }
    // }
}

let waitTime = 0;

forIch(template)
function forIch(el){
    // console.log(el.childNodes);
    el.childNodes.forEach(e => {
        if(e.nodeType === Node.TEXT_NODE){
            waitTime += e.textContent.length;
            txt(e);
        } else if(e.nodeType === Node.ELEMENT_NODE) {
            addElm(e, waitTime);
            forIch(e);
        } else {
            // cmnt(e);
        }
    });
}

function ele(t){
    console.log(t, "element");
}
function txt(t){
    console.log(t, waitTime, "text");
    let kk = document.querySelector(`[typerId='${ t.parentNode.getAttribute('typerId') }']`);
    // console.log(t.parentNode, t.parentNode.getAttribute('typerid'));
    typeFinalElement(kk, t.textContent, waitTime);
}
function cmnt(t){
    console.log(t, "comment");
}




function addElm(parent, e, time) {
    setTimeout(() => {
        
    }, time);
}



function addChar (el, char) {
    el.textContent += char;
}




// let content = el.textContent;
// el.textContent = "";
// setTimeout(() => {
//     for (const i in content) {
//         setTimeout(() => {
//             addChar(content[i]);
//         }, (Number(i) + 1) * 100);
//     }

//     function addChar (char) {
//         el.textContent += char;
//     }
// }, 1500);


// function makeMistake() {
    
// }

function rollDiceBool(percentChance){
    let num = Math.floor(Math.random() * 100);
    if(num <= percentChance){
        return true;
    } else {
        return false;
    }
    // return Boolean(num);
}


function getRandomString (length) {;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



function getRandomChar () {;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return possible.charAt(Math.floor(Math.random() * possible.length))
}



function mistakeNowQ(){

}