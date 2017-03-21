3===3 && 'cow' && console.log('chicken');
// logs 'cow'

console.log(3===3 || 'cow' || 'chicken');
// logs first truthy statement
// if all are false then last statment is logged



// const isAdult = age => {
// 	if (age && age >= 18) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isAdult(18));

// rewrite using short circuiting

const isAdult = age => {
	return age && age >= 18;
}
console.log(isAdult(17))







const countToFive = (start = 1) => {
	// start = start || 1;
	for(let i = start; i <= 5; i += 1)
		console.log(i);
}

countToFive(0)





const greet = name => {
	name && console.log(`Hi, ${name}!`);
}

greet('dude');




















