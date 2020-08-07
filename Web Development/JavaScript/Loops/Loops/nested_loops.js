// Write your code below
const bobsFollowers = ['John', 'Bob', 'Kate', 'Lisa'];
const tinasFollowers = ['Kate', 'Selena', 'Lisa'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
for(let i = 0; i < mutualFollowers.length; i++) {
  console.log(mutualFollowers[i]);
}