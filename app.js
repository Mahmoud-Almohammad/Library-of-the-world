var userNotification = confirm('Do you want to receive notification from our site?');

var userTime = prompt('what is the time now?');

(theTime(userTime));

function theTime (nowTime) {
    if (nowTime >= 6 && nowTime <12) {
        alert('Good morning');
    }
    else if (nowTime >=12 && nowTime < 18)
     alert('Good afternoon');
else
     alert('Good evining');

     return nowTime;
}

var breakingbad = prompt('Say my name');

while (breakingbad === '' || breakingbad === null || breakingbad !== 'heisenberg') {
    breakingbad = prompt('Say my name');
}
alert('you god damn right')

var imageShown = prompt('how many books do you want to read from 1-5?')

labraryImage(imageShown);

function labraryImage (userSelection) {
    for (var i = 1; i <=  userSelection; i++) {
        document.write(i + '<img src="books.jpg">');
    }

    for (i = 1;(Number(userSelection) > 5 || Number(userSelection) < 1); i++) {
        userSelection = prompt('how many books do you want to read from 1-5?');
    }
    return userNotification;
}




