class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}
class Repository {
  constructor() {
    this.activities = [];
    this.id = 1; //aquí se almacena las actividades
  }
  getAllActivities() {
    return this.activities; // muestra las actividades almacenadas
  }
  createActivity(title, description, imgUrl) {
    this.id++;
    const actividadNueva = new Activity(this.id, title, description, imgUrl); // creamos una nueva  actividad en la clase activadades
    this.activities.push(actividadNueva); // se agrega una nueva actividad al almacen de actividades
  }
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id); // elimina la activdad con el id que se le pasa por parametro
  }
}

module.exports = {
  Repository,
  Activity,
};
