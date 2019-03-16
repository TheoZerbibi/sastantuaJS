/* if size = 1
/*    /*\
/*   /***\
/*  /**|**\
*/

const readline = require('readline-sync');
const size = readline.question("Enter a Size : ");

main(Number(size));

function	make_line(space, star) {
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

function	make_door(space, length, doorSIZE) {
	let i;
	let y;
	let str = '';

	i = 0;
	y = doorSIZE;
	while (i++ < space)
		str += ' ';
	i = 0;
	str += '/';
	while (i++ < length)
		str += '*';
	i = 0;
	while (y--)
	{
		if (y == 1 && doorSIZE / 2 == space && doorSIZE > 3)
			str += '$';
		else
			str += '|';
	}
	while (i++ < length)
		str += '*';
	str += '\\';
	console.log(str);
}

function	make_sastantua(total, size,doorSTART) {
	let floor = 0;
	let length = -1;
	let shift = 2;
	let space, line;

	while (floor++ < size)
	{
		line = 1;
		while (line++ <= (floor + 2))
		{
			length += 1;
			space = ((total / 2) - length - 1);
			if (floor == size && line > (size + 3) - doorSTART)
				make_door(space, length - (doorSTART / 2), doorSTART);
			else
				make_line(space, (length * 2) + 1);
		}
		if (floor % 2 && floor > 1)
			shift++;
		length += shift;
	}
}

function	sastantua(size) {
	let floor = 0;
	let length = -1;
	let shift = 2;
	let line, door;

	while (floor++ < size)
	{
		line = 1;
		while (line++ <= (floor + 2))
			length += 1;
		if (floor % 2 && floor > 1)
			shift++;
		length += shift;
	}
	door = size - 1;
	if (size % 2)
		door++;
	make_sastantua(((length - shift) * 2) + 3, size, door);
}

function	main(size) {
	console.log(`Size : ${size} \n`);
	if (size <= 0) {
		return (0);
	}
	sastantua(size);
}