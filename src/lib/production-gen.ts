// host look

const hostLook = [
	'Backlit silhouette, never fully visible',
	'Low-resolution video with a pixelated face',
	'Deeply shadowed hood',
	'Rubber caricature mask (a former president, or one of the competitors, etc.)',
	'Full-face gas mask',
	'Fencing mask',
	'Carnival mask',
	'A photogenic assistant conveys their messages, while the Host stands off in the distance out of focus',
	'The Host is a different person every time they appear. Variations on a theme (e.g. always an old white guy with a moustache, but a different old white guy with a moustache each time).',
	'A ceramic mask',
	'Dated and grainy footage, clearly from decades ago. And yet this anachronistic host references the players by name.',
	'Theatre mask, e.g. Ancient Greek or Noh Theatre'
];

function getRandomHostLook() {
	return hostLook[getRandomIndex(hostLook)];
}

// host lines

const hostLines = [
	'WELCOME TO DEATHMATCH ISLAND',
	'THIS CHALLENGE IS ON',
	'IN THIS GAME, YOU ONLY HAVE ONE LIFE. USE IT WISELY',
	'THE ISLAND HAS SPOKEN',
	'CONGRATULATIONS, PHASE TWO IS COMPLETE',
	'WANT TO KNOW WHAT YOU PLAYED FOR?'
];

function getRandomHostLines(): string {
	return hostLines[getRandomIndex(hostLines)];
}

// external signage

const externalSignage = [
	'GRIND NOW. SHINE LATER. PLAY TO WIN.',
	'GOOD THINGS HAPPEN TO THOSE WHO WIN.',
	'GIVE 110% ALL THE TIME HUSTLE BEATS - TALENT WHEN TALENT DOESN’T PLAY TO WIN.',
	'INVEST IN YOUR DREAMS. PLAY TO WIN.',
	'A DIAMOND IS A CHUNK OF COAL THAT SURVIVED UNDER PRESSURE.',
	'DON’T GIVE UP AFTER THE FIRST FAILURE—PLAY TO WIN.',
	'YOU WON’T GET FOLLOWERS IF YOU’RE ALWAYS FOLLOWING.',
	'BE NICE TO PEOPLE. TRUST NOBODY.',
	'ELIMINATE WHAT DOESN’T HELP YOU SUCCEED.',
	'DREAM BIG, WORK HARD, PLAY TO WIN.',
	'DON’T WORRY ABOUT BEING A LEADER - WORRY ABOUT ATTRACTING FOLLOWERS.',
	'FOLLOWERS FOLLOW DREAMERS. DARE TO WIN.'
];

// internal signage

const internalSignage = [
	'SAFETY STARTS WITH S BUT IT BEGINS WITH YOU.',
	'THE SECOND RULE OF PRODUCTION: ENJOY PEPSI-COLATM !',
	'REMEMBER—WE DON’T TALK ABOUT SEASON #172. THE UNFORTUNATE EVENTS OF THAT SEASON DO NOT REFLECT PRODUCTION VALUES OR COMPETITOR SPIRIT. LET’S MOVE ONTM',
	'COMPETITORS ARE DISPOSABLE. YOU ARE DISPOSABLE. ONLY DEATHMATCH ISLAND LIVES FOREVER.',
	'TAKE HEART — THE DIRECTORS ARE ALWAYS WATCHING.',
	'DON’T MAKE TROUBLE—MAKE ENTERTAINMENT.'
];

// flashback deatils

const flashbackDetails = [
	"A vaguely unsettling individual who reappears in the background of multiple competitors' flashbacks. A tall, pale person in a powder blue suit—a severe woman with dilated black pupils—a small man with a pencil moustache and aviators.",
	'An item with Deathmatch Island branding is in the scene, unremarked upon. A gun, a can of beans, a bottle of champagne, a Follower Counter wristwatch.',
	'Something that players have already encountered in one of the Restricted nodes reappears in this flashback (a strange switch, viscous black slime, etc.).',
	'A white van with the Deathmatch Island diagram on the side.',
	"A character introduced in another Competitor Player's flashback (a relative, a friend, a lover, a teacher, etc.) is part of this flashback. You can use the fact that some of these characters may not have been described physically yet, so it's quite possible to imagine one character's husband is another's brother.",
	'A Deathmatch Island competitor, in uniform—unseen in the background, watching.'
];

function getRandomFlashbackDetails(): string {
	return flashbackDetails[getRandomIndex(flashbackDetails)];
}

function getRandomExternalSignage(): string {
	return externalSignage[getRandomIndex(externalSignage)];
}

function getRandomInternalSignage(): string {
	return internalSignage[getRandomIndex(internalSignage)];
}

function getRandomIndex(array: string[]): number {
	return Math.floor(Math.random() * array.length);
}

export {
	hostLines,
	hostLook,
	getRandomHostLines,
	getRandomHostLook,
	externalSignage,
	internalSignage,
	flashbackDetails,
	getRandomFlashbackDetails,
	getRandomExternalSignage,
	getRandomInternalSignage
};
