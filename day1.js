var input = `R4, R3, R5, L3, L5, R2, L2, R5, L2, R5, R5, R5, R1, R3, L2, L2, L1, R5, L3, R1, L2, R1, L3, L5, L1, R3, L4, R2, R4, L3, L1, R4, L4, R3, L5, L3, R188, R4, L1, R48, L5, R4, R71, R3, L2, R188, L3, R2, L3, R3, L5, L1, R1, L2, L4, L2, R5, L3, R3, R3, R4, L3, L4, R5, L4, L4, R3, R4, L4, R1, L3, L1, L1, R4, R1, L4, R1, L1, L3, R2, L2, R2, L1, R5, R3, R4, L5, R2, R5, L5, R1, R2, L1, L3, R3, R1, R3, L4, R4, L4, L1, R1, L2, L2, L4, R1, L3, R4, L2, R3, L1, L5, R4, R5, R2, R5, R1, R5, R1, R3, L3, L2, L2, L5, R2, L2, R5, R5, L2, R3, L5, R5, L2, R4, R2, L1, R3, L5, R3, R2, R5, L1, R3, L2, R2, R1`

 var sleighAttributes = {
   x: 0,
   y: 0,
   pointing: 'N',
 }

 function findSleighLocation (puzzleInput) {
   var arr = puzzleInput.split(', ');
   arr.forEach(function(direction){
     var directionValue = direction.slice(1);
     if (sleighAttributes.pointing === 'N') {
       if (direction[0] === 'R'){
         sleighAttributes.x = sleighAttributes.x + parseInt(directionValue);
         sleighAttributes.pointing = 'E';
       }
       else {
         sleighAttributes.x = sleighAttributes.x - parseInt(directionValue);
         sleighAttributes.pointing = 'W';
       }
     }
     else if (sleighAttributes.pointing === 'E') {
       if (direction[0] === 'R'){
         sleighAttributes.y = sleighAttributes.y - parseInt(directionValue);
         sleighAttributes.pointing = 'S';
       }
       else {
         sleighAttributes.y = sleighAttributes.y + parseInt(directionValue);
         sleighAttributes.pointing = 'N';
       }
     }
     else if (sleighAttributes.pointing === 'S') {
       if (direction[0] === 'R'){
         sleighAttributes.x = sleighAttributes.x - parseInt(directionValue);
         sleighAttributes.pointing = 'W';
       }
       else {
         sleighAttributes.x = sleighAttributes.x + parseInt(directionValue);
         sleighAttributes.pointing = 'E';
       }
     }
     else if (sleighAttributes.pointing === 'W') {
       if (direction[0] === 'R'){
         sleighAttributes.y = sleighAttributes.y + parseInt(directionValue);
         sleighAttributes.pointing = 'N';
       }
       else {
         sleighAttributes.y = sleighAttributes.y - parseInt(directionValue);
         sleighAttributes.pointing = 'S';
       }
     }
     else {
       console.log('an error has occured. please try again later :(');
     }
   })

 }

findSleighLocation(input);
console.log(sleighAttributes);

function calculateDistance(a, b){
  return Math.abs(a) + Math.abs(b);
}

console.log('part 1 ', calculateDistance(sleighAttributes.y, sleighAttributes.x));



const steps = input.split(',');

let x = 0, y = 0;
let d = [0, 1];
let visited = new Set();
visited.add(`${x},${y}`);

function solve() {
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i].trim();
        const direction = step.charAt(0);
        const distance = +step.substr(1);
        d = direction === 'L' ? [d[1], -d[0]] : [-d[1], d[0]];
        for (let j = 0; j < distance; j++) {
            x += d[0];
            y += d[1];
            const key = `${x},${y}`;
            if (visited.has(key)) {
                return Math.abs(x) + Math.abs(y);
            } else {
                visited.add(key);
            }
        }
    }
    return Math.abs(x) + Math.abs(y);
}

const result = solve();
console.log('part 2 ', result);
