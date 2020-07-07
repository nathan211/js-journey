function tossACoin(){
	var value = Math.random();
	var result = value < 0.5 ? 'Mặt sấp' : 'Mặt ngửa';
	console.log(result);
}

tossACoin();