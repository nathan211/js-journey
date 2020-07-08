function getTotal(price, card){
	var discountRate;

	switch(card.tier){
		case 'bronze':
			discountRate = 0.02;
			break;
		case 'silver':
			discountRate = 0.05;
			break;
		case 'gold':
			discountRate = 0.08;
			break;
		default:
			discountRate = 0.1;
			break;
	}

	return price * (1 - discountRate);
}

var memberCard = {
	tier: 'silver'
}

var total = getTotal(500000, memberCard);
console.log(total);