// var myHeading = document.querySelector('h1');
// myHeading.innerHTML = 'Hello World!';

var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/bd_logo1.png') {
        myImage.setAttribute('src', 'images/timg.jpg');
    } else {
        myImage.setAttribute('src', 'images/bd_logo1.png');
    }
}


var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Moilla is coll, " + storedName;
}

var myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
}