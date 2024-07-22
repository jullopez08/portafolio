const { Repository, Activity } = require("../scripts/models");

xdescribe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

let repository;

describe("Clase Repository", () => {
  beforeEach(() => {
    repository = new Repository();
  });
  it("Repository deberìa ser una clase", () => {
    expect(typeof Repository.prototype.constructor).toBe("function");
  });

  it("Deberia ser una instancia de la clase Repository", () => {
    expect(repository instanceof Repository).toBe(true);
  });

  it("Deberia tener un metodo llamado createActivity para agregar un elemento a la lista", () => {
    expect(typeof repository.createActivity).toBe("function");
  });
});
