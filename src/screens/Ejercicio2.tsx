import json1 from "../json/Json1.json";
import json2 from "../json/json2.json";
import styles from "../css/ejercicio2.module.css";

const Ejercicio2 = () => {
  // inicializo el array a trabajar
  let arrayATrabajar = json2.data;
  // hago un mapeo del json1 para a cada elemento compararlo con todos los elementos del otro array
  // uso una bandera inicializada en -1
  // itero sobre cada elemento del json2
  // si cumple con la igualdad entonces el indice toma un valor distinto al '-1'
  // pregunto si cambio. De ser asi entonces corto el array a trabajar en una posicion. Removiendo el repetido
  json1.data.map((archivo) => {
    let index: any = -1;
    for (let i = 0; i < json2.data.length; i++) {
      if (
        archivo.data["#idpaciente"] === json2.data[i]["#idpaciente"] &&
        archivo.data.fecha === json2.data[i].fecha
      ) {
        index = i;
      }
    }
    if (index !== -1) {
      arrayATrabajar.splice(index, 1);
    }
  });
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
