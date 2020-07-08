var fs = require('fs');
var readlineSync = require('readline-sync');

var students = [];

function loadData(){
	var fileContent = fs.readFileSync('./data.json', { encoding: 'utf8' });
	students = JSON.parse(fileContent);
}

function showMenu(){
	console.log('1. Show all students.');
	console.log('2. Create a new student.');
	console.log('3. Save and exit.');

	var option = readlineSync.question('> ');
	switch(option){
		case '1':
			showStudents();
			showMenu();
			break;
		case '2':
			showCreateStudent();
			console.log(students);
			showMenu();
			break;
		case '3':
			saveAndExit();
			break;
		default:
			console('Wrong option.');
			showMenu();
			break;
	}
}

function showStudents(){
	for(var student of students){
		console.log(student.name, student.age);
	}

}

function showCreateStudent(){
	var student = {};
	student.name = readlineSync.question('Name: ');
	student.age = parseInt(readlineSync.question('Age: '));
	students.push(student);
}

function saveAndExit(){
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json', content, { encoding: 'utf8'} );
}

function main(){
	loadData();
	showMenu();
}

main();