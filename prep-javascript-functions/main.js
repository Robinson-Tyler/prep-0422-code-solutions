function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(3);
console.log('Three hours is', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var getGreetingResult = getGreeting('Tyler');
console.log('Greetings:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(2, 3);
console.log('Adding two and three and multiplying by 5:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(20, 3);
console.log('multiplying 20 and 3 and dividing by 5 is:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(55, 33);
console.log('subtracting 33 from 55 is:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('the Circumference of a circle with a radius of 5 is:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Tyler', 'Robinson');
console.log('my full name is:', getFullNameResult);

function cube(number) {
  return number * number;
}
var cubeResult = cube(5);
console.log('the cubed of 5 is', cubeResult);
