import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import ResultImc from "../resultImc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    const calculatedImc = (weight / Math.pow(height, 2)).toFixed(2);
    setImc(calculatedImc);
  }

  function validationImc() {
    if (weight !== null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Digite seu Peso:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setWeight(text)}
          value={weight}
          placeholder="Ex:.75.165"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Digite sua altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setHeight(text)}
          value={height}
          placeholder="Ex:. 1.75"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={() => validationImc()} style={styles.buttonCalculator}>
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
        </View>
        <ResultImc messageResultImc={messageImc} ResultImc={imc} />
    </View>
  );
}
