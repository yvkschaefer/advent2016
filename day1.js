var input = `R4, R3, R5, L3, L5, R2, L2, R5, L2, R5, R5, R5, R1, R3, L2, L2, L1, R5, L3, R1, L2, R1, L3, L5, L1, R3, L4, R2, R4, L3, L1, R4, L4, R3, L5, L3, R188, R4, L1, R48, L5, R4, R71, R3, L2, R188, L3, R2, L3, R3, L5, L1, R1, L2, L4, L2, R5, L3, R3, R3, R4, L3, L4, R5, L4, L4, R3, R4, L4, R1, L3, L1, L1, R4, R1, L4, R1, L1, L3, R2, L2, R2, L1, R5, R3, R4, L5, R2, R5, L5, R1, R2, L1, L3, R3, R1, R3, L4, R4, L4, L1, R1, L2, L2, L4, R1, L3, R4, L2, R3, L1, L5, R4, R5, R2, R5, R1, R5, R1, R3, L3, L2, L2, L5, R2, L2, R5, R5, L2, R3, L5, R5, L2, R4, R2, L1, R3, L5, R3, R2, R5, L1, R3, L2, R2, R1`

 var sleighAttributes = {
   ew: 0,
   ns: 0,
   pointing: 'N',
 }

 function findSleighLocation (puzzleInput) {
   var arr = puzzleInput.split(', ');
   arr.forEach(function(direction){
     var directionValue = direction.slice(1);
     if (sleighAttributes.pointing === 'N') {
       // if pointing N and directionX[0] === R, add directionX[1] to ew counter + pointing === E
       // if pointing N and directionX[0] === L, SUBTRACT directionX[1] from ew counter + pointing === W
       if (direction[0] === 'R'){
         sleighAttributes.ew = sleighAttributes.ew + parseInt(directionValue);
         sleighAttributes.pointing = 'E';
       }
       else {
         sleighAttributes.ew = sleighAttributes.ew - parseInt(directionValue);
         sleighAttributes.pointing = 'W';
       }
     }
     else if (sleighAttributes.pointing === 'E') {
       // if pointing E and directionX[0] === R, SUBTRACT directionX[1] from ns counter + pointing === S
       // if pointing E and directionX[0] === L, add directionX[1] to ns counter + pointing === N
       if (direction[0] === 'R'){
         sleighAttributes.ns = sleighAttributes.ns - parseInt(directionValue);
         sleighAttributes.pointing = 'S';
       }
       else {
         sleighAttributes.ns = sleighAttributes.ns - parseInt(directionValue);
         sleighAttributes.pointing = 'N';
       }
     }
     else if (sleighAttributes.pointing === 'S') {
       // if pointing S and directionX[0] === R, SUBTRACT directionX[1] from ew counter + pointing === W
       // if pointing S and directionX[0] === L, add directionX[1] to ew counter + pointing === E
       if (direction[0] === 'R'){
         sleighAttributes.ew = sleighAttributes.ew - parseInt(directionValue);
         sleighAttributes.pointing = 'W';
       }
       else {
         sleighAttributes.ew = sleighAttributes.ew + parseInt(directionValue);
         sleighAttributes.pointing = 'E';
       }
     }
     else if (sleighAttributes.pointing === 'W') {
     // if pointing W and directionX[0] === R, add directionX[1] to ns counter + pointing === N
     // if pointing W and directionX[0] === L, SUBTRACT directionX[1] from ns counter + pointing === S
       if (direction[0] === 'R'){
         sleighAttributes.ns = sleighAttributes.ns + parseInt(directionValue);
         sleighAttributes.pointing = 'N';
       }
       else {
         sleighAttributes.ns = sleighAttributes.ns - parseInt(directionValue);
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

console.log(calculateDistance(sleighAttributes.ns, sleighAttributes.ew));


// { ew: 169, ns: 16, pointing: 'S' }
// 185
