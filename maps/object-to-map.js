/** Converting an object into a Map to iterate over keys, values and entries */
const planet = {
  name: 'Dagobah',
  region: 'Outer Rim Territories',
  sector: 'Sluis Sector',
  system: 'Dagobah System',
};

const planetMap = new Map(Object.entries(planet));

// Iterating over keys
for (let key of planetMap.keys()) {
  console.log(key); // prints: name, region, sector, system
}

// Iterating over values
for (let value of planetMap.values()) {
  console.log(value); // prints: Dagobah, Outer Rim Territories, Sluis Sector,
}                    //          Dagobah System

// Iterating over [key, value] entries
for (let entry of planetMap.entries()) {
  console.log(entry); // prints: [name, Dagobah], [region, Outer Rim Territories],
}
