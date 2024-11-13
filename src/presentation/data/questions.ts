import { FormQuestions } from "../../infrastructure/interfaces/questions";

export const formQuestions: FormQuestions = [
  {
    questionLabel:
      "1) Experiencia profesional y/o laboral declarada de los últimos 5 años.",
    items: [
      { itemLabel: "1 año", itemValue: 1.5 },
      { itemLabel: "2 años", itemValue: 3.0 },
      { itemLabel: "3 años", itemValue: 4.5 },
      { itemLabel: "4 años", itemValue: 6.0 },
      { itemLabel: "5 años", itemValue: 7.5 },
    ],
  },
  {
    questionLabel: "2) Título(s) y/o grado(s) académicos.",
    items: [
      { itemLabel: "Título Profesional", itemValue: 3.5 },
      { itemLabel: "Grado Bachiller", itemValue: 2.5 },
      { itemLabel: "Grado de Maestro", itemValue: 3.5 },
    ],
  },
  {
    questionLabel:
      "3) Estudios de posgrado en los últimos cinco (05) años (con grado pendiente de obtención)",
    items: [
      { itemLabel: "1 Semestre", itemValue: 1 },
      { itemLabel: "2 Semestres", itemValue: 2 },
      { itemLabel: "3 Semestres", itemValue: 3 },
      { itemLabel: "4 Semestres", itemValue: 4 },
      { itemLabel: "5 Semestres", itemValue: 5 },
      { itemLabel: "6 Semestres", itemValue: 6 },
    ],
  },
  {
    questionLabel:
      "4) Participación en eventos académicos y/o científicos en los últimos cinco (05) años.",
    items: [
      {
        itemLabel: "a) Certificado como ponente o moderador",
        subItems: [
          { subItemLabel: "1 - 2", subItemValue: 1.5 },
          { subItemLabel: "3 - 4", subItemValue: 3.0 },
          { subItemLabel: "5 - 6", subItemValue: 4.5 },
          { subItemLabel: "7 a más", subItemValue: 6.0 },
        ],
      },
      {
        itemLabel: "b) Certificado como asistente o tallerista",
        subItems: [
          { subItemLabel: "1 - 2", subItemValue: 0.8 },
          { subItemLabel: "3 - 4", subItemValue: 1.6 },
          { subItemLabel: "5 - 6", subItemValue: 2.4 },
          { subItemLabel: "7 a más", subItemValue: 3.2 },
        ],
      },
      {
        itemLabel: "c) Certificado como organizador",
        subItems: [
          { subItemLabel: "1 - 2", subItemValue: 1.2 },
          { subItemLabel: "3 - 4", subItemValue: 2.4 },
          { subItemLabel: "5 - 6", subItemValue: 3.6 },
          { subItemLabel: "7 a más", subItemValue: 4.8 },
        ],
      },
    ],
  },
  {
    questionLabel:
      "5) Constancia de docencia universitaria en los últimos cinco (05) años, por semestre académico.",
    items: [
      { itemLabel: "1 - 2", itemValue: 1.5 },
      { itemLabel: "3 - 4", itemValue: 3.0 },
      { itemLabel: "5 - 6", itemValue: 4.5 },
      { itemLabel: "7 a más", itemValue: 6.0 },
    ],
  },
  {
    questionLabel:
      "6) Certificado de idioma extranjero (indicar solo el nivel máximo alcanzado por idioma), expedido por una institución acreditada o universidad peruana o extranjera (hasta 03 idiomas).",
    items: [
      {
        itemLabel: "a) Idioma 01",
        subItems: [
          { subItemLabel: "Nivel avanzado", subItemValue: 1.5 },
          { subItemLabel: "Nivel intermedio", subItemValue: 0.8 },
          { subItemLabel: "Nivel básico", subItemValue: 0.5 },
        ],
      },
      {
        itemLabel: "b) Idioma 02",
        subItems: [
          { subItemLabel: "Nivel avanzado", subItemValue: 1.5 },
          { subItemLabel: "Nivel intermedio", subItemValue: 0.8 },
          { subItemLabel: "Nivel básico", subItemValue: 0.5 },
        ],
      },
      {
        itemLabel: "c) Idioma 03",
        subItems: [
          { subItemLabel: "Nivel avanzado", subItemValue: 1.5 },
          { subItemLabel: "Nivel intermedio", subItemValue: 0.8 },
          { subItemLabel: "Nivel básico", subItemValue: 0.5 },
        ],
      },
    ],
  },
  {
    questionLabel:
      "7) Producción académica y/o científica acreditada de los últimos cinco (05) años. Máximo 05 ítems.",
    items: [
      {
        itemLabel:
          "a) Autor de libro o tesis (también se considera el coautor)",
        subItems: [
          { subItemLabel: 1, subItemValue: 1.5 },
          { subItemLabel: 2, subItemValue: 3.0 },
          { subItemLabel: 3, subItemValue: 4.5 },
          { subItemLabel: 4, subItemValue: 6.0 },
          { subItemLabel: 5, subItemValue: 7.5 },
        ],
      },
      {
        itemLabel: "b) Autor de artículo publicado o por publicarse",
        subItems: [
          { subItemLabel: 1, subItemValue: 0.8 },
          { subItemLabel: 2, subItemValue: 1.6 },
          { subItemLabel: 3, subItemValue: 2.4 },
          { subItemLabel: 4, subItemValue: 3.2 },
          { subItemLabel: 5, subItemValue: 4.0 },
        ],
      },
    ],
  },
];
