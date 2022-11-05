console.log('hello');

confirm('Do you want to receive notification from our site?')

var Usertime = prompt('what is the time now?')

if (Usertime >= 6 && Usertime <12)
console.log('Good morning');
else if (Usertime >=12 && Usertime <18)
console.log('Good afternoon');
else
console.log('Good evining');

var breakingbad = prompt('Say my name');

while (breakingbad === '' || breakingbad === null || breakingbad !== 'heisenberg') {
    breakingbad = prompt('Say my name');
}

var imageShown = prompt('how many books do you want to read from 1-5?')

for (var i = 1; i <=  imageShown; i++) {
    document.write('<img src="books.jpg">');
}

for (i = 1;(Number(imageShown) > 5 || Number(imageShown) < 1); i++) {
    imageShown = prompt('how many books do you want to read from 1-5?')
}




