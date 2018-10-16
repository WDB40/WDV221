function invalidNumber(inElement){
    return isNaN(document.getElementById(inElement).value) || document.getElementById(inElement).value.length === 0;
}

function returnAsNumber(inElement){
    return parseFloat(document.getElementById(inElement).value);
}

function getIDValueAsNumber(inElement){

    if(invalidNumber(inElement)){
        return "Invalid Number";
    } else{
        return returnAsNumber(inElement);
    }
}

function multiplyTwoElements(inElement1, inElement2){

    if(invalidNumber(inElement1)|| invalidNumber(inElement2)){
        return "No."
    } else{
        return returnAsNumber(inElement1) * returnAsNumber(inElement2);
    }
}

function addTwoElements(inElement1, inElement2) {

    if(invalidNumber(inElement1)|| invalidNumber(inElement2)){
        return "No."
    } else{
        return returnAsNumber(inElement1) + returnAsNumber(inElement2);
    }
}

function displayAdditionTwoElements(inElement1, inElement2, displayElement){
    document.getElementById(displayElement).value = addTwoElements(inElement1, inElement2);
}

function displayMultiplyTwoElements(inElement1, inElement2, displayElement) {
    document.getElementById(displayElement).value = multiplyTwoElements(inElement1, inElement2);
}

function printValidNumberToElement(inElement, displayElement){

    document.getElementById(displayElement).value = getIDValueAsNumber(inElement);
}

function addOneToElement(inElement){

    if(!invalidNumber(inElement)){
        document.getElementById(inElement).value = returnAsNumber(inElement) + 1;
    }

}