// Write nested for loops to create a 3x3 grid. The outer loop should iterate from 1 to 3 (representing rows), and the inner loop should also iterate from 1 to 3 (representing columns). For each combination, log the string in format 'Row X Col Y' (e.g., 'Row 1 Col 1').

for (let row = 1; row < 4; row++) {
  for (let col = 1; col < 4; col++) {
    console.log(`Row ${row} Col ${col}`);
  }
}
