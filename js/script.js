const mathOperation = prompt ('Choose one of: add, sub, mult, div');
const userFirstNumber = +prompt('Enter first number:');
const userSecondNumber = +prompt('Enter second number:');

if (mathOperation === 'add') {
    alert(`${userFirstNumber} + ${userSecondNumber} = ${userFirstNumber + userSecondNumber}`);
} else if (mathOperation === 'sub') {
    alert(`${userFirstNumber} - ${userSecondNumber} = ${userFirstNumber - userSecondNumber}`);
} else if (mathOperation === 'mult') {
    alert(`${userFirstNumber} * ${userSecondNumber} = ${userFirstNumber * userSecondNumber}`);
} else if (mathOperation === 'div') {
    alert(`${userFirstNumber} / ${userSecondNumber} = ${userFirstNumber / userSecondNumber}`);
} else {
    alert('INALID DATA');
}