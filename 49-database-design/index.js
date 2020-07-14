var classes = [
	{
		id: 0,
		name: '1A',
		teacher: 0
	},
	{
		id: 1,
		name: '2A',
		teacher: 1
	},
	{
		id: 2,
		name: '3A',
		teacher: 2
	},
	{
		id: 3,
		name: '4A',
		teacher: 3
	},
	{
		id: 4,
		name: '5A',
		teacher: 4
	}
];

var teachers = [
	{ 
		id: 0,
		name: 'Hai',
		age: 35
	},
	{ 
		id: 1,
		name: 'Trang',
		age: 35
	},
	{ 
		id: 2,
		name: 'Anh',
		age: 50
	},
	{ 
		id: 3,
		name: 'Hue',
		age: 30
	},
	{ 
		id: 4,
		name: 'Be',
		age: 45
	}
];

var students = [
	{ 
		id: 0,
		name: 'Phi',
		class: 0
	},
	{ 
		id: 1,
		name: 'Phi',
		class: 0
	},
	{ 
		id: 2,
		name: 'Phi',
		class: 0
	},
	{ 
		id: 3,
		name: 'Phi',
		class: 0
	},
	{ 
		id: 3,
		name: 'Hoang',
		class: 1
	},
	{ 
		id: 3,
		name: 'Nguyen',
		class: 2
	}
];

function getStudentsInClass(className){
	var classObj = classes.find(function(x){
		return x.name === className;
	});

	var studentsInClass = students.filter(function(student){
		return student.class === classObj.id;
	});

	return studentsInClass;
}

console.log(getStudentsInClass('1A'));