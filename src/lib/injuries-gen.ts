const injuries = [
  "Sprained ankle",
  "Wounded leg",
  "Broken nose",
  "Broken hand",
  "Slashed scalp",
  "Impaled thigh",
  "Severed ear",
  "Broken foot",
  "Ringing head",
  "Big open wound",
  "Broken limb",
  "Internal injuries",
  "Severe blood loss",
  "Broken ribs",
  "Wounded arm",
  "Lost eye",
];

function getRandomInjury() {
  const randomIndex = Math.floor(Math.random() * injuries.length);
  return injuries[randomIndex];
}

export { injuries, getRandomInjury };
