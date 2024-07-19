const type = [
    'Tracksuit',
    'Coveralls',
    'Polo shirt,shorts',
    'Blazer,turtleneck',
    'Shirt,cargo pants',
    'T-shirt,sweatpants',
]
const colour = [
    'Burnt Sienna',
    'Seafoam',
    'Salmon',
    'Goldenrod',
    'Plum',
    'Cerulean',
]

function getRandomUniform(): Record<string, string> {
    const randomItem = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

    return {
      type: randomItem(type),
      colour: randomItem(colour),
    };
  }

export {
    type,
    colour,
    getRandomUniform,
};
