const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

const materias = [
  { id: "Algoritmo 1", cupos: "0", activa: true },
  { id: "7509 Análisis de la Información", cupos: "5", activa: true },
  { id: "Algoritmo 4", cupos: "5", activa: false },
];

function incribirmeMateria(materia_id) {
  const materia = materias.find((m) => m.id === materia_id);

  if (materia && materia.cupos > 0 && materia.activa) {
    materia.cupos--;
    return true;
  } else {
    return false;
  }
}

Given("la materia a Incribirse", function () {
  this.materia = "7509 Análisis de la Información";
});

Given("la materia a Incribirse sin cupos", function () {
  this.materia = "Algoritmo 1";
});

Given("la materia a Incribirse inactiva", function () {
  this.materia = "Algoritmo 4";
});

When("intento incribirme a la materia", function () {
  this.actualAnswer = incribirmeMateria(this.materia);
});

Then("la inscripcion resulta con exito", function () {
  assert.strictEqual(this.actualAnswer, true);
});

Then("la inscripcion resulta sin exito por falta de cupos", function () {
  assert.strictEqual(this.actualAnswer, false);
});

Then(
  "la inscripcion resulta sin exito por inactividad de la materia",
  function () {
    assert.strictEqual(this.actualAnswer, false);
  }
);
