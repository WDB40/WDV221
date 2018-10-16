//---Global Vars---
var PlayerName = "New Player";
var Wins = 0;
//------------

function getWins()
{
    document.getElementById("WinsSection").innerHTML = PlayerName + " has " + Wins + " wins.";
}

function formatSelectOption(inOption, inValue)
{
    return "<option value='" + inValue + "'>" + inOption + "</option>";
}

function getSelectedSettingOptionText()
{
    return document.getElementById("SettingsSelectList").selectedOptions[0].innerHTML;
}

function showSelectedDifficulty(){
    document.getElementById("SettingsMessage").innerHTML = "Your selected difficulty: " + getSelectedSettingOptionText();
}

function changeImageSource(imageElementID, imageSource) {
    document.getElementById(imageElementID).src = imageSource;
}

function getRandomDiceNumber(){
    return Math.ceil(Math.random() * 6);
}

function getRandomDiceImage(){
    return "imgs/" + getRandomDiceNumber() + ".PNG";
}

function rollTwoDice(imageElementID1, imageElementID2){
    document.getElementById(imageElementID1).src = getRandomDiceImage();
    document.getElementById(imageElementID2).src = getRandomDiceImage();
}