Feature: Incribirse a materia
  Como Alumno de fiuba quiero incribirme a una materia para progresar en mi carrera

  Scenario: Incripcion correcta
    Given la materia a Incribirse
    When intento incribirme a la materia
    Then la inscripcion resulta con exito

  Scenario: Incripcion Incorrecta no tiene cupos
    Given la materia a Incribirse sin cupos
    When intento incribirme a la materia
    Then la inscripcion resulta sin exito por falta de cupos
  
  Scenario: Incripcion Incorrecta no esta activa la materia
    Given la materia a Incribirse inactiva
    When intento incribirme a la materia
    Then la inscripcion resulta sin exito por inactividad de la materia
