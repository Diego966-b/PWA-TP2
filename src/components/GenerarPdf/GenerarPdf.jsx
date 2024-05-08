import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Boton from "../Boton/Boton.jsx";

const styles = StyleSheet.create({
  pagina: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  seccion: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333333",
    textTransform: "uppercase",
  },
  label: {
    fontSize: 12,
    marginBottom: 3,
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
    marginBottom: 8,
  },
  imagenContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 400,
    height: 300,
    margin: 10,
    borderRadius: 8,
  },
  seguridad: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  itemSeguridad: {
    marginLeft: 10,
    fontSize: 12,
  },
});

const Pdf = ({ auto }) => {
  return (
    <Document>
      <Page size="A4" style={styles.pagina}>
        <View style={styles.seccion}>
          <Text style={styles.titulo}>
            {auto.marca} {auto.modelo}
          </Text>
          <View>
          <Text style={styles.label}>Marca: <Text style={styles.value}>{auto.marca}</Text></Text>
            <Text style={styles.label}>Modelo: <Text style={styles.value}>{auto.modelo}</Text></Text>
            <Text style={styles.label}>Año: <Text style={styles.value}>{auto.anio}</Text></Text>
            <Text style={styles.label}>Color: <Text style={styles.value}>{auto.color}</Text></Text>
            <Text style={styles.label}>Precio: <Text style={styles.value}>$ {auto.precio}</Text></Text>
            <Text style={styles.label}>Transmisión: <Text style={styles.value}>{auto.transmision}</Text></Text>
            <Text style={styles.label}>Potencia: <Text style={styles.value}>{auto.potencia}</Text></Text>
            <Text style={styles.label}>Torque: <Text style={styles.value}>{auto.torque}</Text></Text>
            <Text style={styles.label}>Combustible: <Text style={styles.value}>{auto.combustible}</Text></Text>
            <Text style={styles.label}>Consumo en ciudad: <Text style={styles.value}>{auto.consumoCiudad}</Text></Text>
            <Text style={styles.label}>Consumo en carretera: <Text style={styles.value}>{auto.consumoCarretera}</Text></Text>
            <Text style={styles.seguridad}>Sistemas de seguridad:</Text>
          </View>
          <View>
            {auto.sistemaSeguridad &&
              auto.sistemaSeguridad.map((sistema) => {
                return (
                  <Text key={sistema.id} style={styles.itemSeguridad}>
                    {" "}
                    - {sistema.nombre}
                  </Text>
                );
              })}
          </View>
          <View style={styles.imagenContainer}>
            <Image style={styles.imagen} src={auto.imagen} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

const GenerarPdf = ({ auto }) => {
  const nombreArchivo = `${auto.marca}${auto.modelo}.pdf`;
  return (
    <PDFDownloadLink document={<Pdf auto={auto} />} fileName={nombreArchivo}>
      {({ loading }) => (
        <Boton texto="Descargar PDF" disabled={loading}></Boton>
      )}
    </PDFDownloadLink>
  );
};

export default GenerarPdf;
