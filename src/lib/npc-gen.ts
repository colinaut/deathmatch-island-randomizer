// npc traits
const traits = [
	'Angry',
	'Bleached hair',
	'Neat',
	'Wears glasses',
	'Twitchy eyes',
	'Petty',
	'Elegant',
	'Quiet',
	'Crooked nose',
	'Violent',
	'Wavy hair',
	'Alert',
	'Rude',
	'Aloof',
	'Strange face',
	'Acne scars',
	'Sophisticated',
	'Winks a lot',
	'Grinds teeth',
	'Prominent mole',
	'Obsessive',
	'Hypnotic',
	'Low-key',
	'Sober',
	'Stern',
	'Grave',
	'Neck tattoo',
	'Blandsome',
	'Folksy',
	'Fidgety',
	'Curly hair',
	'Careful',
	'Sophisticated',
	'Winks a lot',
	'Grinds teeth',
	'Prominent mole',
	'Obsessive',
	'Hypnotic',
	'Low-key',
	'Sober',
	'Stern',
	'Grave',
	'Neck tattoo',
	'Blandsome',
	'Folksy',
	'Fidgety',
	'Curly hair',
	'Careful',
	'Searching eyes',
	'Shouts a lot',
	'Notable scar',
	'Rowdy',
	'Sad',
	'One eye',
	'Erratic',
	'Fiery',
	'Scruffy',
	'Steely',
	'Huge biceps',
	'Glossy hair'
];

// npc first names

const firstNames = [
	'Ahmed',
	'Calvin',
	'Edgar',
	'Huck',
	'Jimmy',
	'Monty',
	'Ransley',
	'Sebastian',
	'August',
	'Chatri',
	'Elvis',
	'Ira',
	'Kai',
	'Omar',
	'Roman',
	'Sullivan',
	'Banyu',
	'Colby',
	'Enzi',
	'Izem',
	'Leopold',
	'Orion',
	'Romeo',
	'Tariq',
	'Beckett',
	'Crisanto',
	'Ephraim',
	'Jabari',
	'Lincoln',
	'Orson',
	'Roshan',
	'Ted',
	'Bill',
	'Crow',
	'Faraji',
	'Jackson',
	'Lionel',
	'Oscar',
	'Rudy',
	'Van',
	'Bowie',
	'Dexter',
	'Fox',
	'Jagger',
	'Matteo',
	'Ozzy',
	'Rufus',
	'Waldo',
	'Brooks',
	'Dorian',
	'Gus',
	'Jaxon',
	'Maverick',
	'Pratam',
	'Ryder',
	'Watson',
	'Byron',
	'Easton',
	'Ham',
	'Jett',
	'Milo',
	'Randy',
	'Sanford',
	'Zane',
	'Achara',
	'Beulah',
	'Cora',
	'Farida',
	'Ione',
	'Minerva',
	'Priya',
	'Suzanne',
	'Aisha',
	'Birdie',
	'Danika',
	'Farah',
	'Joy',
	'Missy',
	'Ramona',
	'Taraji',
	'Amethyst',
	'Branwen',
	'Debb',
	'Gretchen',
	'Kartika',
	'Nellie',
	'Rosalina',
	'Tiffany',
	'Anais',
	'Briar',
	'Deborah',
	'Habiba',
	'Luna',
	'Opal',
	'Ruby',
	'Tina',
	'Ashanti',
	'Calliope',
	'Diana',
	'Harlow',
	'Mabel',
	'Ophelia',
	'Sawyer',
	'Violet',
	'Bea',
	'Candice',
	'Dorcas',
	'Hattie',
	'Mae',
	'Pearl',
	'Sonja',
	'Willow',
	'Beatrix',
	'Charity',
	'Drusilla',
	'Hazel',
	'Mila',
	'Piper',
	'Sparrow',
	'Wren',
	'Betsy',
	'Connie',
	'Eloise',
	'Hilda',
	'Millie',
	'Poppy',
	'Stella',
	'Zahra'
];

// npc surnames

const surnames = [
	'Ahmad',
	'Burns',
	'Dill',
	'Hardy',
	'Kilgore',
	'Matondo',
	'Powers',
	'Solomon',
	'Ako',
	'Byeon',
	'Duke',
	'Hartman',
	'Klug',
	'Merrick',
	'Prashad',
	'St James',
	'Barrel',
	'Calabro',
	'Eckhaus',
	'Hartman',
	'Knapp',
	'Mintz',
	'Quinn',
	'Steele',
	'Bartlett',
	'Campos',
	'Floquet',
	'Hatch',
	'Kwan',
	'Morozov',
	'Reed',
	'Taniguchi',
	'Bates',
	'Cassidy',
	'Fontana',
	'Hatfield',
	'Kwŏn',
	'Morrows',
	'Rivera',
	'Tremblay',
	'Beckett',
	'Cervantes',
	'Fox',
	'Herschel',
	'Lamb',
	'Moss',
	'Roach',
	'Umemoto',
	'Bellamy',
	'Chandler',
	'Fuimaono',
	'Hershey',
	'Lau',
	'Mungoshi',
	'Rojas',
	'Underwood',
	'Benidetti',
	'Cheng',
	'Furyk',
	'Herzog',
	'Law',
	'Namyung',
	'Rose',
	'Usoro',
	'Benny',
	'Cheung',
	'Galloway',
	'Hill',
	'Leung',
	'Namgung',
	'Rose',
	'Valencia',
	'Biggerstaff',
	'Chopra',
	'Galvan',
	'Hoang',
	'Li',
	'Nguyen',
	'Rojas',
	'Vega'
];

export function getRandomNpc(): Npc {
	const firstName = firstNames[getRandomIndex(firstNames)];
	const surname = surnames[getRandomIndex(surnames)];
	const trait = traits[getRandomIndex(traits)];
	const trait2 = traits[getRandomIndex(traits)];

	return {
		name: `${firstName} ${surname}`,
		trait,
		trait2
	};
}

function getRandomIndex(array: string[]): number {
	return Math.floor(Math.random() * array.length);
}

export type Npc = {
	name: string;
	trait: string;
	trait2: string;
};
