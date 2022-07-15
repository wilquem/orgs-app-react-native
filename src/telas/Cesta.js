import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import Texto from "../components/Texto";

import Topo from "../../assets/topo.png";
import Logo from "../../assets/logo.png";


const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image style={styles.topo} source={Topo} />
      <Texto style={styles.titulo}>Detalhe da cesta</Texto>
      <View style={styles.cesta}>
        <Texto style={styles.nome}>Cesta de Verduras</Texto>
        <View style={styles.fazenda}>
          <Image style={styles.imagemFazenda} source={Logo} />
          <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={styles.descricao}>
          Uma cesta com produtos selecionados cuidadosamante da fazenda direto
          para sua cozinha
        </Texto>
        <Texto style={styles.preco}>R$ 40,00</Texto>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "#fff",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold"
  },
	fazenda: {
		flexDirection:"row",
		paddingVertical: 12
	},
	imagemFazenda: {
		width:32,
		height:32
	},
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
		marginLeft:12,
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
