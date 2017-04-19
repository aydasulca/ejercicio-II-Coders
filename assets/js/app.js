var titulo = document.createElement("P");
var texto = document.createTextNode("Nuestras Coders");
titulo.appendChild(texto);
document.body.appendChild(titulo);
var hr = document.createElement("hr");
document.body.appendChild(hr);


var arrFotos= [{name:"Anais Araya", url:"assets/img/anais-araya .jpg"},
               {name:"Andrea Miranda", url:"assets/img/andrea-miranda.jpg"},
               {name:"Berenisse Ríos", url:"assets/img/berenisse-ríos.jpg"},
               {name:"Caterina Da Silva", url:"assets/img/caterina-da-silva.jpg"},
               {name:"Daniela Sanchez", url:"assets/img/daniela-sanchez.jpg"},
               {name:"Francisca Ojeda", url:"assets/img/francisca-ojeda.jpg"}]

function imprimir(elem){

var div = document.createElement("div");
div.setAttribute("class", "chile");
document.body.appendChild(div)

var figure = document.createElement("figure");
document.body.appendChild(figure);
div.appendChild(figure);


var img = document.createElement("img");
img.setAttribute("src", elem.url);
img.setAttribute("class", "foto");
document.body.appendChild(img);
figure.appendChild(img);

var figcaption = document.createElement("figcaption");
var nombre = document.createTextNode(elem.name);
figcaption.appendChild(nombre);
document.body.appendChild(figcaption);
figure.appendChild(figcaption)

return div;
}


window.addEventListener('load', function(e){
  e.preventDefault();
  var foto= arrFotos.forEach(function(e){
    document.getElementsByClassName('contenedor')[0].appendChild(imprimir(e,e.name))
  })
  return foto;
})
