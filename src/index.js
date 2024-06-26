var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var A = 'https://rickandmortyapi.com/api/character/';
var B = new XMLHttpRequest();

function X(a, b) {
  B.onreadystatechange = function (e) {
    if (B.readyState == 4) {
      if (B.status === 200) {
        var responseData = JSON.parse(B.responseText);
        b(null, responseData);
      } else {
        b(a);
      }
    }
  };
  B.open('GET', a, false);
  B.send();
};

X(A, function (c, d) {
  if (c) return console.error('Error' + ' ' + c);
  console.log('Primer Llamado...');
  X(A + d.results[0].id, function (e, f) {
    if (e) return console.error('Error' + ' ' + e);
    console.log('Segundo Llamado...');
    X(f.origin.url, function (g, h) {
      if (g) return console.error('Error' + ' ' + g);
      console.log('Tercer Llamado...');
      console.log('Personajes:' + ' ' + d.info.count);
      console.log('Primer Personaje:' + ' ' + f.name);
      console.log('Dimensión:' + ' ' + h.dimension);
    });
  });
});
