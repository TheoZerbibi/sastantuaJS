/* if size = 1
/*    /*\
/*   /***\
/*  /*****\
*/
const readline = require('readline-sync');
const size = readline.question("Enter a Size : ");

main(Number(size));

function make_line(space, star) {
	let i;
	let str;

	str = '';
	i = 0;
	while(i++ < space)
		str += ' ';
	i = 0;
	str += '/';
	while (i++ < star)
		str += '*';
	str += '\\';
	console.log(str);

}

function make_sastantua(total, size) {
	let floor;
	let line;
	let length;
	let shift;
	let space;

	floor = 0;
	length = -1;
	shift = 2;
	while (floor++ < size)
	{
		line = 1;
		while (line++ <= (floor + 2))
		{
			length += 1;
			space = ((total / 2) - length - 1);
			make_line(space, (length * 2) + 1);
			// console.log('space' + space);
			// console.log('star' + ((length * 2) + 1));
		}
		if (floor % 2 && floor > 1)
			shift++;
		length += shift;
		// console.log('length make' + length);
	}
}

function sastantua(size) {
	let floor = 0;
	let length = -1;
	let shift = 2;
	let line;
	while (floor++ < size) {
		line = 1;
		// console.log('line '+line++);
		// console.log('floor '+(floor+2));
		// console.log('length '+length);
		while (line++ <= (floor +2))
			length += 1;
		if (floor % 2 && floor > 1)
			shift++;
		// console.log('length2 '+length);
		length += shift;
		// console.log('length3 '+length);
	}
	// console.log('total '+(((length - shift) * 2) + 3));
	make_sastantua(((length - shift) * 2) + 3, size);
}

function main(size) {
	console.log(`Size : ${size} \n`);
	if (size <= 0) {
		return (0);
	}
	sastantua(size);
}