import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";

export default function Item({ item: { nome, imagem } }) {
  return <View style={styles.item}>
      <Image style={styles.imagem} source={imagem} />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    marginHorizontal:16,
    alignItems: "center",
  },
  imagem: {
    height: 46,
    width: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646",
  },
});
