const { Repository } = require("./models");

const repository = new Repository();

function recibirActivity({ title, description, imgUrl }) {
  //021
  // const { title, description, imgUrl } = Activity; //022

  //crear elementos html 023
  const titleElemnt = document.createElement("h3");
  const descriptionElement = document.createElement("p");
  const imgUrlElement = document.createElement("img");
  const divElemento = document.createElement("div"); //026

  //dar los valores de los elementos 024
  titleElemnt.innerHTML = title;
  descriptionElement.innerHTML = description;
  imgUrlElement.src = imgUrl;

  // dar estilos css 025
  titleElemnt.classList.add("titleformulario");
  descriptionElement.classList.add("descriptionformulario");
  imgUrlElement.classList.add("imgformulario");
  divElemento.classList.add("tarjetas");

  //agregar los elementos al div 027
  divElemento.appendChild(titleElemnt);
  divElemento.appendChild(descriptionElement);
  divElemento.appendChild(imgUrlElement);
  return divElemento; //029
}
function render() {
  const containerCards = document.getElementById("div-tarjetas"); //031
  containerCards.innerHTML = ""; //032
  const listado = repository.getAllActivities(); //033
  const mapeo = listado.map(recibirActivity); //034
  mapeo.forEach((Element) => containerCards.appendChild(Element)); //035
}
function handler() {
  const idform = document.getElementById("formF");
  const idTitle = document.getElementById("titleformulario").value;
  const idDescription = document.getElementById("descriptionformulario").value;
  const idImgUrl = document.getElementById("imaUrlformulario").value; //041

  if (!idTitle || !idDescription || !idImgUrl) {
    return alert("Campos Incompletos!"); //043
  }
  repository.createActivity(idTitle, idDescription, idImgUrl); //044
  render(); // 045 limpiar la pantalla
  idform.reset();
}
const botonCrearA = document.getElementById("botonCActivity");

botonCrearA.addEventListener("click", function (event) {
  event.preventDefault();
  handler();
});
