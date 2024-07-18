const occupation = [
  { name: "Account Manager", capability: "Social Game" },
  { name: "App Developer", capability: "Snake Mode" },
  { name: "Aspiring Writer", capability: "Snake Mode" },
  { name: "Big Pharma", capability: "Sales Rep" },
  { name: "Snake Mode", capability: "Accountant" },
  { name: "Architect", capability: "Snake Mode" },
  { name: "Astronaut", capability: "Challenge Beast" },
  { name: "Black Ops Soldier", capability: "Deathmatch" },
  { name: "Actor", capability: "Social Game" },
  { name: "Armored Car", capability: "Guard" },
  { name: "Deathmatch", capability: "Attorney" },
  { name: "Bodybuilder", capability: "Challenge Beast" },
  { name: "Ad Executive", capability: "Snake Mode" },
  { name: "Army Ranger", capability: "Deathmatch" },
  { name: "Auto Customizer", capability: "Challenge Beast" },
  { name: "Bounty Hunter", capability: "Deathmatch" },
  { name: "Aerobics Instructor", capability: "Challenge Beast" },
  { name: "Army Tanker", capability: "Deathmatch" },
  { name: "Banker", capability: "Social Game" },
  { name: "Bowling Alley Owner", capability: "Social Game" },
  { name: "Air Force Veteran", capability: "Deathmatch" },
  { name: "Army Veteran", capability: "Deathmatch" },
  { name: "Bar Manager", capability: "Social Game" },
  { name: "Boxer", capability: "Challenge Beast" },
  { name: "Alpine Guide", capability: "Challenge Beast" },
  { name: "Art Student", capability: "Social Game" },
  { name: "Bartender", capability: "Challenge Beast" },
  { name: "Bricklayer", capability: "Challenge Beast" },
  { name: "Anesthesiologist", capability: "Challenge Beast" },
  { name: "Art Teacher", capability: "Social Game" },
  { name: "Basketball Coach", capability: "Challenge Beast" },
  { name: "Bus Driver", capability: "Social Game" },
  { name: "Business Analyst", capability: "Snake Mode" },
  { name: "Cattle Rancher", capability: "Challenge Beast" },
  { name: "Club Promoter", capability: "Social Game" },
  { name: "Competitive Shooter", capability: "Deathmatch" },
  { name: "Business", capability: "Consultant" },
  { name: "Cheer Coach", capability: "Challenge Beast" },
  { name: "Coast Guard Officer", capability: "Deathmatch" },
  { name: "Company Exec", capability: "Snake Mode" },
  { name: "Butcher", capability: "Social Game" },
  { name: "Chef", capability: "Snake Mode" },
  { name: "Coconut Vendor", capability: "Social Game" },
  { name: "Construction Worker", capability: "Challenge Beast" },
  { name: "Caretaker", capability: "Social Game" },
  { name: "Chemist", capability: "Snake Mode" },
  { name: "Coffee Barista", capability: "Social Game" },
  { name: "Consultant", capability: "Snake Mode" },
  { name: "Carnival Worker", capability: "Deathmatch" },
  { name: "Chicken Farmer", capability: "Deathmatch" },
  { name: "College", capability: "Administrator" },
  { name: "Content Creator", capability: "Social Game" },
  { name: "Carpenter", capability: "Challenge Beast" },
  { name: "Chief Lifeguard", capability: "Challenge Beast" },
  { name: "Combat Engineer", capability: "Deathmatch" },
  { name: "Copier Salesperson", capability: "Social Game" },
  { name: "Case Manager", capability: "Social Game" },
  { name: "Chiropractor", capability: "Snake Mode" },
  { name: "Commercial Diver", capability: "Challenge Beast" },
  { name: "Corporate Trainer", capability: "Social Game" },
  { name: "Cat Burglar", capability: "Deathmatch" },
  { name: "Civil Rights Attorney", capability: "Snake Mode" },
  { name: "Commercial Fisher", capability: "Challenge Beast" },
  { name: "Corrections Officer", capability: "Challenge Beast" },
  { name: "Country Music Singer", capability: "Social Game" },
  { name: "Dentist", capability: "Social Game" },
  { name: "Drill Sergeant", capability: "Challenge Beast" },
  { name: "Farmer", capability: "Challenge Beast" },
  { name: "Creative Director", capability: "Social Game" },
  { name: "Detective", capability: "Deathmatch" },
  { name: "Economics Professor", capability: "Snake Mode" },
  { name: "Fashion Stylist", capability: "Snake Mode" },
  { name: "Crossfit Coach", capability: "Challenge Beast" },
  { name: "District Attorney", capability: "Snake Mode" },
  { name: "Electrician", capability: "Challenge Beast" },
  { name: "Fast Food Worker", capability: "Social Game" },
  { name: "Customer Service", capability: "Snake Mode" },
  { name: "Divorce Attorney", capability: "Snake Mode" },
  { name: "Elementary Teacher", capability: "Social Game" },
  { name: "Fighter Pilot", capability: "Deathmatch" },
  { name: "Cyber Security", capability: "Snake Mode" },
  { name: "Doctor", capability: "Social Game" },
  { name: "English Teacher", capability: "Social Game" },
  { name: "Filmmaker", capability: "Social Game" },
  { name: "Dairy Farmer", capability: "Challenge Beast" },
  { name: "Document Manager", capability: "Snake Mode" },
  { name: "Entrepreneur", capability: "Snake Mode" },
  { name: "Financial Sales", capability: "Social Game" },
  { name: "Dancer", capability: "Challenge Beast" },
  { name: "Dog Trainer", capability: "Challenge Beast" },
  { name: "Exec. Assistant", capability: "Social Game" },
  { name: "Firefighter", capability: "Challenge Beast" },
  { name: "Fitness Instructor", capability: "Challenge Beast" },
  { name: "Graphic Designer", capability: "Social Game" },
  { name: "Health Worker", capability: "Social Game" },
  { name: "Inherited Wealth", capability: "Snake Mode" },
  { name: "Former Child Actor", capability: "Snake Mode" },
  { name: "Gun Range Owner", capability: "Deathmatch" },
  { name: "Hotel Doorman", capability: "Social Game" },
  { name: "Ivy League Student", capability: "Snake Mode" },
  { name: "Freelance Writer", capability: "Snake Mode" },
  { name: "Gym Owner", capability: "Challenge Beast" },
  { name: "Hunting Guide", capability: "Deathmatch" },
  { name: "Jazz Musician", capability: "Social Game" },
  { name: "Graduate Student", capability: "Snake Mode" },
  { name: "Hairdresser", capability: "Social Game" },
  { name: "Influencer", capability: "Social Game" },
  { name: "Law School Student", capability: "Snake Mode" },
  { name: "Legal Secretary", capability: "Social Game" },
  { name: "Marketing Executive", capability: "Snake Mode" },
  { name: "Mortician", capability: "Snake Mode" },
  { name: "Nanny", capability: "Social Game" },
  { name: "Life Coach", capability: "Snake Mode" },
  { name: "Martial Arts Teacher", capability: "Challenge Beast" },
  { name: "Motivational Speaker", capability: "Snake Mode" },
  { name: "Nature Guide", capability: "Challenge Beast" },
  { name: "Limousine Driver", capability: "Snake Mode" },
  { name: "Massage Therapist", capability: "Social Game" },
  { name: "Multimedia Artist", capability: "Social Game" },
  { name: "Neurologist", capability: "Snake Mode" },
  { name: "Machine Gunner", capability: "Deathmatch" },
  { name: "Military Intelligence", capability: "Deathmatch" },
  { name: "Musician", capability: "Social Game" },
  { name: "News Anchor", capability: "Snake Mode" },
  { name: "Magician's Assistant", capability: "Deathmatch" },
  { name: "Military Police", capability: "Deathmatch" },
  { name: "Music Producer", capability: "Social Game" },
  { name: "Nuclear Engineer", capability: "Snake Mode" },
  { name: "Mail Carrier", capability: "Deathmatch" },
  { name: "MilSim Enthusiast", capability: "Deathmatch" },
  { name: "Music Teacher", capability: "Social Game" },
  { name: "Nurse", capability: "Social Game" },
  { name: "Makeup Artist", capability: "Social Game" },
  { name: "MMA Fighter", capability: "Challenge Beast" },
  { name: "N/A, No Memories", capability: "Deathmatch" },
  { name: "Nutritionist", capability: "Challenge Beast" },
  { name: "Marathon Runner", capability: "Challenge Beast" },
  { name: "Model", capability: "Social Game" },
  { name: "Nail Salon Manager", capability: "Snake Mode" },
  { name: "Office Assistant", capability: "Social Game" },
  { name: "Office Manager", capability: "Snake Mode" },
  { name: "Personal Trainer", capability: "Challenge Beast" },
  { name: "Pilot", capability: "Snake Mode" },
  { name: "Private Investigator", capability: "Deathmatch" },
  { name: "Oil Rig Worker", capability: "Challenge Beast" },
  { name: "Pest Controller", capability: "Snake Mode" },
  { name: "Plastic Surgeon", capability: "Snake Mode" },
  { name: "Produce Clerk", capability: "Social Game" },
  { name: "Olympic Athlete", capability: "Challenge Beast" },
  { name: "Photographer", capability: "Snake Mode" },
  { name: "PMC Mercenary", capability: "Deathmatch" },
  { name: "Professional Assassin", capability: "Deathmatch" },
  { name: "Organized Crime Boss", capability: "Deathmatch" },
  { name: "Physical Therapist", capability: "Social Game" },
  { name: "Poker Player", capability: "Snake Mode" },
  { name: "Professional Cyclist", capability: "Challenge Beast" },
  { name: "Organized Crime Enforcer", capability: "Deathmatch" },
  { name: "Physician", capability: "Social Game" },
  { name: "Police Officer", capability: "Deathmatch" },
  { name: "Professional Gamer", capability: "Snake Mode" },
  { name: "Paramedic", capability: "Challenge Beast" },
  { name: "Physics Teacher", capability: "Snake Mode" },
  { name: "Pop Star", capability: "Social Game" },
  { name: "Professional Wrestler", capability: "Challenge Beast" },
  { name: "Paratrooper", capability: "Deathmatch" },
  { name: "Physiotherapist", capability: "Challenge Beast" },
  { name: "Postal Worker", capability: "Social Game" },
  { name: "Programmer", capability: "Snake Mode" },
  { name: "Pastor", capability: "Social Game" },
  { name: "Piano Teacher", capability: "Challenge Beast" },
  { name: "Prisoner", capability: "Deathmatch" },
  { name: "Project Manager", capability: "" },
  { name: "Property Developer", capability: "Snake Mode" },
  { name: "Retired Nurse", capability: "Social Game" },
  { name: "Roofer", capability: "Challenge Beast" },
  { name: "Septic Tank Servicer", capability: "Challenge Beast" },
  { name: "Quarterback", capability: "Challenge Beast" },
  { name: "Retired Police Officer", capability: "Deathmatch" },
  { name: "Sailor", capability: "Challenge Beast" },
  { name: "Sheep Farmer", capability: "Challenge Beast" },
  { name: "Quartermaster", capability: "Deathmatch" },
  { name: "Retired Sniper", capability: "Deathmatch" },
  { name: "Sales Manager", capability: "Snake Mode" },
  { name: "Sheriff", capability: "Deathmatch" },
  { name: "Radio Host", capability: "Snake Mode" },
  { name: "Retired Special Ops", capability: "Deathmatch" },
  { name: "Sandwich Artist", capability: "Snake Mode" },
  { name: "Shoe Salesman", capability: "Social Game" },
  { name: "Real Estate Agent", capability: "Snake Mode" },
  { name: "Retired Teacher", capability: "Social Game" },
  { name: "School Bus Driver", capability: "Snake Mode" },
  { name: "Singer", capability: "Social Game" },
  { name: "Retail Salesperson", capability: "Social Game" },
  { name: "River Rafting Guide", capability: "Challenge Beast" },
  { name: "School Principal", capability: "Snake Mode" },
  { name: "Social Worker", capability: "Social Game" },
  { name: "Retired Naval Captain", capability: "Deathmatch" },
  { name: "Road Repair Worker", capability: "Challenge Beast" },
  { name: "Scoutmaster", capability: "Challenge Beast" },
  { name: "Software Developer", capability: "Snake Mode" },
  { name: "Retired Navy Infantry", capability: "Deathmatch" },
  { name: "Rocket Scientist", capability: "Snake Mode" },
  { name: "Security Officer", capability: "Deathmatch" },
  { name: "Sports Radio Host", capability: "Snake Mode" },
  { name: "Spray Tan Worker", capability: "Social Game" },
  { name: "Swimsuit Model", capability: "Challenge Beast" },
  { name: "Urologist", capability: "Snake Mode" },
  { name: "Water Tank Technician", capability: "Challenge Beast" },
  { name: "Stay-at-Home Parent", capability: "Social Game" },
  { name: "Tax Accountant", capability: "Snake Mode" },
  { name: "Used Car Salesperson", capability: "Snake Mode" },
  { name: "Wedding Videographer", capability: "Social Game" },
  { name: "Steelworker", capability: "Challenge Beast" },
  { name: "Television Writer", capability: "Snake Mode" },
  { name: "Veterinarian", capability: "Social Game" },
  { name: "Wildlife Photographer", capability: "Challenge Beast" },
  { name: "Student", capability: "Challenge Beast" },
  { name: "Therapist", capability: "Snake Mode" },
  { name: "VIP Bodyguard", capability: "Deathmatch" },
  { name: "Writer", capability: "Snake Mode" },
  { name: "Stunt Performer", capability: "Challenge Beast" },
  { name: "Toymaker", capability: "Social Game" },
  { name: "Visual FX Producer", capability: "Snake Mode" },
  { name: "Yoga Instructor", capability: "Challenge Beast" },
  { name: "Surfing Instructor", capability: "Challenge Beast" },
  { name: "Truck Driver", capability: "Challenge Beast" },
  { name: "Volleyball Player", capability: "Challenge Beast" },
  { name: "Youth Mentor", capability: "Social Game" },
  { name: "Survivalist", capability: "Deathmatch" },
  { name: "T-Shirt Designer", capability: "Social Game" },
  { name: "Waiter", capability: "Social Game" },
  { name: "Youth Pastor", capability: "Snake Mode" },
  { name: "SWAT Officer", capability: "Deathmatch" },
  { name: "Street Knife-Fighter", capability: "Deathmatch" },
  { name: "Warehouse Worker", capability: "Challenge Beast" },
  { name: "Zookeeper", capability: "Challenge Beast" },
];

// first names

const firstNames = [
  "Ahmed",
  "Calvin",
  "Edgar",
  "Huck",
  "Jimmy",
  "Monty",
  "Ransley",
  "Sebastian",
  "August",
  "Chatri",
  "Elvis",
  "Ira",
  "Kai",
  "Omar",
  "Roman",
  "Sullivan",
  "Banyu",
  "Colby",
  "Enzi",
  "Izem",
  "Leopold",
  "Orion",
  "Romeo",
  "Tariq",
  "Beckett",
  "Crisanto",
  "Ephraim",
  "Jabari",
  "Lincoln",
  "Orson",
  "Roshan",
  "Ted",
  "Bill",
  "Crow",
  "Faraji",
  "Jackson",
  "Lionel",
  "Oscar",
  "Rudy",
  "Van",
  "Bowie",
  " Dexter",
  "Fox",
  "Jagger",
  "Matteo",
  "Ozzy",
  "Rufus",
  "Waldo",
  "Brooks",
  "Dorian",
  "Ham",
  "Jaxon",
  "Maverick",
  "Pratam",
  "Ryder",
  "Watson",
  "Byron",
  "Easton",
  "Ham",
  "Jett",
  "Milo",
  "Pandy",
  "Sanford",
  "Zane",
  "Achara",
  "Beulah",
  "Cora",
  "Farida",
  "Ione",
  "Minerva",
  "Priya",
  "Suzanne",
  "Aisha",
  "Birdie",
  "Danika",
  "Farah",
  "Joy",
  "Missy",
  "Ramona",
  "Taraji",
  "Anais",
  "Briar",
  "Debb",
  "Gretchen",
  "Kartika",
  "Nellie",
  "Rosalina",
  "Tina",
  "Ashanti",
  "Calliope",
  "Diana",
  "Harlow",
  "Maebel",
  "Opal",
  "Ruby",
  "Tina",
  "Beatrix",
  "Charity",
  "Drusilla",
  "Hazel",
  "Millie",
  "Piper",
  "Stella",
  "Zahra",
  "Betsy",
  "Connie",
  "Drusilla",
  "Hazel",
  "Millie",
  "Piper",
  "Stella",
  "Zahra",
  "Ace",
  "Bay",
  "Channing",
  "Harley",
  "Kris",
  "Parker",
  "Roshan",
  "Sawyer",
  "Ash",
  "Bailey",
  "Chase",
  "Harper",
  "Levi",
  "Pemberley",
  "Rudra",
  "Shannon",
  "Andi",
  "Bellamy",
  "Chihiro",
  "Intan",
  "Lyric",
  "Quinn",
  "Rylan",
  "Sutton",
  "Ari",
  "Blake",
  "Dallas",
  "Jayden",
  "Marion",
  "Raven",
  "Sage",
  "Vesper",
  "Asa",
  "Bobbie",
  "Darcy",
  "Jordan",
  "Megumi",
  "Rayne",
  "Sakae",
  "Willow",
  "Aspen",
  "Brooke",
  "Dylan",
  "Jude",
  "Minseo",
  "Ren",
  "Saffron",
  "Whitney",
  "Avery",
  "Carson",
  "Elliot",
  "Kai",
  "Morgan",
  "River",
  "Saffron",
  "Yujin",
  "August",
  "Casey",
  "Frankie",
  "Kieran",
  "Murphy",
  "Rory",
  "Saffron",
  "Yuki",
];

// Surnames

const surnames = [
  "Ahmad",
  "Burns",
  "Dill",
  "Hardy",
  "Kilgore",
  "Matondo",
  "Powers",
  "Solomon",
  "Ako",
  "Byeon",
  "Duke",
  "Hartman",
  "Klug",
  "Merrick",
  "Prashad",
  "St",
  "James",
  "Barrel",
  "Calabro",
  "Eckhaus",
  "Hartman",
  "Kogoya",
  "Mohamed",
  "Raza",
  "Summers",
  "Bartlett",
  "Campos",
  "Floquet",
  "Hatch",
  "Kwan",
  "Moon",
  "Reed",
  "Taniguchi",
  "Bates",
  "Cassidy",
  "Fontana",
  "Havenash",
  "Kwŏn",
  "Moss",
  "Rivera",
  "Tremblay",
  "Beauregard",
  "Castle",
  "Fonua",
  "Herschel",
  "Lau",
  "Mungoshi",
  "Rose",
  "Valencia",
  "Benedetti",
  "Cheng",
  "Furyk",
  "Hartman",
  "Krueger",
  "Moss",
  "Rose",
  "Underwood",
  "Berry",
  "Cheung",
  "Fox",
  "Hershey",
  "Kwan",
  "Nguyen",
  "Rey",
  "Valencia",
  "Biggerstaff",
  "Chopra",
  "Furyk",
  "Hoffman",
  "Kim",
  "Nomura",
  "Rymer",
  "Walker",
  "Birdwhistle",
  "Clements",
  "Fox",
  "Hutchel",
  "Kwok",
  "Love",
  "O'Leary",
  "Sallow",
  "Wilson",
  "Black",
  "Cohen",
  "Garrett",
  "Holt",
  "Love",
  "O'Leary",
  "Sallow",
  "Wilson",
  "Boone",
  "Conklin",
  "Giang",
  "Huxley",
  "Lyons",
  "Opatha",
  "Rymer",
  "Winter",
  "Boonmee",
  "Dankworth",
  "Goma",
  "Jeong",
  "Mack",
  "Ortiz",
  "Sexton",
  "Yi",
  "Boudreaux",
  "De la Croix",
  "Gray",
  "Jeang",
  "Kelly",
  "Martel",
  "Padilla",
  "Sellers",
  "Yurkowski",
  "Bread",
  "des",
  "Silva",
  "Green",
  "Kade",
  "Martel",
  "Parata",
  "Singh",
  "Zhang",
  "Brown",
  "Devi",
  "Guzon",
  "Kane",
  "Mason",
  "Panchak",
  "Snow",
  "Zheng",
];

// Eyes

const eyes = [
  "Sad",
  "Piercing",
  "Cold",
  "Warm",
  "Calm",
  "Smiling",
  "Dark",
  "Glacial",
  "Faded",
  "Distant",
  "Tired",
  "Searching",
  "Twitchy",
  "Beautiful",
  "Haunted",
  "Glittering",
  "Watery",
  "Large",
  "Beady",
  "Hard",
];

// Build

const build = [
  "Brawny",
  "Compact",
  "Bulky",
  "Rugged",
  "Athletic",
  "Average",
  "Gaunt",
  "Wiry",
  "Ripped",
  "Sinewy",
  "Relaxed",
  "Beefy",
  "Soft",
  "Towering",
  "Delicate",
  "Muscular",
  "Large",
  "Elegant",
  "Angular",
  "Willowy",
];

// Hair

const hair = [
  "Shaved",
  "Tied back",
  "Cascading",
  "Shaggy",
  "Striking",
  "Dyed",
  "Tidy",
  "Boring",
  "Sleek",
  "Neat",
  "Undercut",
  "Messy",
  "Sharp",
  "Practical",
  "Fashionable",
  "Bangs",
  "Perfect",
  "Lank",
  "Thick",
  "Spiky",
];

// Detail

const detail = [
  "Jewellery",
  "Striking nose",
  "Notable scar",
  "Unusual face",
  "Striking eyebrows or facial hair",
  "Pleasant scent",
  "Tattoo",
  "Wears a hat",
  "Limp",
  "Damp hands",
  "Wears glasses",
  "Chewed fingernails",
  "Understated",
  "Gold tooth",
  "Crooked nose",
  "Eye-patch",
  "Stained hands",
  "Twitch",
  "Perfect teeth",
  "Strong hands",
];

function generateRandomCharacter(): Record<string, string> {
  const randomItem = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

  const chosenOccupation = randomItem(occupation);
  return {
    name: `${randomItem(firstNames)} ${randomItem(surnames)}`,
    occupation: chosenOccupation.name,
    capability: chosenOccupation.capability,
    eyes: randomItem(eyes),
    build: randomItem(build),
    hair: randomItem(hair),
    detail: randomItem(detail),
  };
}

export {
    firstNames,
    surnames,
  occupation,
  eyes,
  build,
  hair,
  detail,
  generateRandomCharacter,
};
