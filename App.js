/*
* File: App.js
* Author: Klíber Benedek
* Copyright: 2025, Klíber Benedek
* Group: Szoft II/1/N
* Date: 2025-02-07
* Github: https://github.com/Elydra5
* Licenc: GNU GPL
*/


import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const CylinderSurfaceCalculator = () => {
  const [radius, setRadius] = useState("");
  const [height, setHeight] = useState("");
  const [surfaceArea, setSurfaceArea] = useState(null);

  const calculateSurfaceArea = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);
    if (!isNaN(r) && !isNaN(h) && r > 0 && h > 0) {
      const area = 2 * Math.PI * r * (r + h);
      setSurfaceArea(area.toFixed(2));
    } else {
      setSurfaceArea("Hibás bemenet");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sugár (r):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={radius}
        onChangeText={setRadius}
      />
      <Text style={styles.label}>Magasság (h):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Számítás" onPress={calculateSurfaceArea} />
      {surfaceArea !== null && (
        <Text style={styles.result}>Felszín: {surfaceArea}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  input: {
    width: "85%",
    height: 45,
    borderColor: "#007bff",
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  result: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: "bold",
    color: "#d9534f",
  },
});

export default CylinderSurfaceCalculator;
