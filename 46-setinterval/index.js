
// var i = 0;

// var intervalId  = setInterval(function(){
// 	console.log(i);
// 	++i;
// 	if(i === 5){
// 		clearInterval(intervalId);
// 	}
// }, 1000);


function countFrom(a, b){
	return new Promise(function(resolve, reject){
		a = 1;
		var intervalId  = setInterval(function(){
			console.log(a);
			++a;
			if(a === b){
				resolve(clearInterval(intervalId));
			}
		}, 1000);
	});
}

countFrom(1, 10).then(function(){
	console.log('Done');
});