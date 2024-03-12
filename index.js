const fs = require('fs');

function searchWord(archive, word) {
  fs.readFile(archive, 'utf8', (err, data) => {
    if (err) return console.error("Error al leer el archivo:", err);
    
    const lines = data.split('\n').flatMap((line, i) => line.includes(word) ? i + 1 : [])

    console.log(`La palabra "${word}" aparece ${lines.length} veces en el archivo`)
    
    lines.length > 0 ?  console.log(`en las líneas: ${lines.join(', ')}`) : ""
    
  });
}
const word = "anillo" // chage this value to search another word
searchWord('./La comunidad del anillo.txt', word);
