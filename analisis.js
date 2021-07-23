const salariosCol = colombia.map((persona) => {
  return persona.salary;
});

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => {
  return salaryA - salaryB;
});

function esPar(numero) {
  return numero % 2 === 0;
}

const promedio = (datos) => {
  let countData = datos.length;
  return datos.reduce((total, data) => (total += data)) / countData;
};

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const personaMItad1 = lista[mitad - 1];
    const personaMItad2 = lista[mitad];
    return promedio([personaMItad1, personaMItad2]);
  } else {
    const personaMItad = lista[mitad];
    return personaMItad;
  }
}

const medianaGeneral = medianaSalarios(salariosColSorted);

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosColTop10);

console.log({
  medianaGeneral: medianaGeneral,
  medianaTop10: medianaTop10,
});
