import json1 from "../json/Json1.json";
import json2 from "../json/json2.json";
import styles from "../css/ejercicio2.module.css";

const Ejercicio2 = () => {
  // inicializo el array a trabajar
  let arrayATrabajar = json2.data;
  // TENEMOS 2 OPCIONES:

  // 1) PARTIMOS DEL SUPUESTO QUE PUEDE HABER IGUALDAD 1 A MUCHOS
  /*
  hago un mapeo del json1
  inicializo una variable como bandera para el indice en -1
  itero en un bucle for cada elemento del json2 y lo comparo contra el elemento del json1 q estamos mapeando
  si se cumplen las 2 condiciones de igualdad, cambio el valor de la variable que tengo como bandera
  Entonces abajo antes de terminar cada iteracion pregunto, el indice cambio de -1 ? si es correcto cortamos ese elemento del array
  Despues de eso vuelvo a indicarle el valor a la bandera en -1 para que empiece la comparacion nuevamente de una forma correcta
  */
  // CODIGO:

  json1.data.map((archivo) => {
    let index: number = -1;
    for (let i = 0; i < json2.data.length; i++) {
      if (
        archivo.data["#idpaciente"] === json2.data[i]["#idpaciente"] &&
        archivo.data.fecha === json2.data[i].fecha
      ) {
        index = i;
      }
      if (index !== -1) {
        arrayATrabajar.splice(index, 1);
        index = -1;
      }
    }
  });


  // 2) PARTIMOS DEL SUPUESTO QUE PUEDE HABER SOLO UNA IGUALDAD POR ELEMENTO
  /*
  Si contamos con solo 1 supuesto de igualdad por archivo
  mapeamos cada elemento del json 1
  iniciamos nuestra variable de bandera en -1
  hacemos un for iterando el json 2 entonces para cada elemento del json1 comparamos contra todos los elementos del json 2
  pregunto la condicion de igualdad entre registros, si se da a la variable bandera le asigno el indice del elemento y hago un break para que sea mas performante
  despues de terminado el for pregunto si la variable bandera cambio en algun momento de la ejecucion entonces significa q encontro una igualdad por lo tanto borro ese elemento con el indice obtenido
  */
  // CODIGO:

  // json1.data.map((archivo) => {
  //   let index: number = -1;
  //   for (let i = 0; i < json2.data.length; i++) {
  //     if (
  //       archivo.data["#idpaciente"] === json2.data[i]["#idpaciente"] &&
  //       archivo.data.fecha === json2.data[i].fecha
  //     ) {
  //       index = i;
  //       break;
  //     }
  //   }
  //   if (index !== -1) {
  //     arrayATrabajar.splice(index, 1);
  //   }
  // });

  let result = { data: arrayATrabajar };
  console.log("RESULTADO FINAL", result);

  // pacientes
  // json 1 ----> archivo.data["#idpaciente"]
  // json 2 ----> json2.data[i]["#idpaciente"]
  // fechas
  // json 1 ----> archivo.data.fecha
  // jsson 2 ----> json2.data[i].fecha

  return (
    <div className={styles.container}>
      {arrayATrabajar?.map((paciente) => (
        <div className={styles.card} key={paciente["#idpaciente"]}>
          <p className={styles.text}>
            {`ID del paciente ${paciente["#idpaciente"]}`}
          </p>
          <p className={styles.text}>{`Paciente ${paciente.paciente}`}</p>
          <p className={styles.text}>{`Tipo ${paciente["#tipo"]}`}</p>
          <p
            className={styles.text}
          >{`Tipo de demanda ${paciente["#tipoDemanda"]}`}</p>
          <p
            className={styles.text}
          >{`Ubicacion requerida ${paciente["#ubicacionRequerida"]}`}</p>
          <p className={styles.text}>{`Cama ${paciente.cama}`}</p>
          <p className={styles.text}>{`Cobertura ${paciente.cobertura}`}</p>
          <p className={styles.text}>{`Fecha ${paciente.fecha}`}</p>
          <p className={styles.text}>{`Hce ${paciente.hce}`}</p>
          <p className={styles.text}>{`Medico ${paciente.medico}`}</p>
          <p className={styles.text}>{`Observacion ${paciente.observacion}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Ejercicio2;
