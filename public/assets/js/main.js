console.log('test this doggie')

var data_string = '{ "name":"John", "age":30,"car":null }';
console.log(data_string);

var foobar = JSON.parse ( data_string);
console.log (foobar);

console.log(foobar.name);
console.log(foobar.age);
console.log(" The user named " + foobar.name + " is " + foobar.age + " years old.");
// console.log( `The user name ${ foobar.name } is ${ foobar.age } years old.`);

foobar.name = "John Smith";
foobar.age = foobar.age + 1;
console.log(`The user name ${ foobar.name } is ${ foobar.age } years old.`);

var new_data = JSON.stringify(foobar);
console.log( new_data );
