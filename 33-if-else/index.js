// function tossACoin(){
// 	var value = Math.random();
// 	if(value < 0.5){
// 		console.log('Mặt sấp');
// 	}
// 	else{
// 		console.log('Mặt ngửa');
// 	}
// }

// tossACoin();

// function shouldIDateHer(){
// 	var value = Math.random();
// 	if(value < 0.5){
// 		console.log('Yes, of course');
// 	}
// 	else{
// 		console.log('No, she has a boyfriend');
// 	}
// }

// shouldIDateHer();


function countBills(bills){
	var total = 0;

	for(var bill of bills){
		if(!bill.fake){
			total += bill.value;
		}
		else{
			console.log('Fake bill: ', bill);
			break;
		}
	}

	return total;
}

var bills = [
	{ value: 10000 },
	{ value: 20000 },
	{ value: 100000, fake: true },
	{ value: 50000 }
];


var total = countBills(bills);
console.log(total);