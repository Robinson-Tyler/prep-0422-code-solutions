var person = {
  firstName: 'Kevin',
  lastName: 'Malone',
  hobby: 'Scranton Strangler'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Accountant';
console.log('his job is:', person.job);

person.previousJob = 'unemployed';
console.log('his previous job was:', person.previousJob);

console.log('the complete person object:', person);
