const redactedItems = [
  "Inscrutable gadget",
  "Set of keys",
  "Encrypted walkie-talkie",
  "Smoke grenade (orange smoke)",
  "Key fob",
  "Geiger counter",
  "Cryptographic codebook",
  "Wristwatch",
  "Swipe card",
  "GPS tracking terminal",
  "Concealed melee weapon (e.g. baton)",
  "USB drive",
  "Improvised firearm (zip gun)",
  "Tranquilizer darts",
  "Official contraband firearm",
  "Plastic explosives",
  "Grapple gun",
  "Organism in jar",
];

export const getRandomRedactedItem = () => redactedItems[Math.floor(Math.random() * redactedItems.length)];
