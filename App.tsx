import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function App() {

  const [height, setHeight] = useState<any>(0)
  const [weight, setWeight] = useState<any>(0)
  const [imc, setImc] = useState<any>({
    title: '',
    imc: '',
    healthStatus: ''
  })


  function handleCalc(): void {
    let health: String = '';

    if (weight === 0 || !weight || parseFloat(weight) === NaN || height === 0 || !height || parseFloat(height) === NaN) {
      return
    }

    const imc: number = parseFloat(weight) / (parseFloat(height) * parseFloat(height));

    if (imc < 18.5) {
      health = 'Está abaixo do peso'
    } else if (imc < 24.9) {
      health = 'Peso ideal'
    } else if (imc < 29.9) {
      health = 'Acima do peso'
    } else if (imc < 39.9) {
      health = 'Obesidade II'
    } else if (imc > 40.0) {
      health = 'Obesidade III'
    }

    const result: any = {
      title: 'Seu IMC é igual a:',
      imc: imc.toFixed(1),
      healthStatus: health
    }

    setImc(result);
    setHeight('');
    setWeight('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMC Calculator</Text>
      <View>
        <Text style={styles.placeholder} >Altura</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={(height) => setHeight(parseFloat(height))} value={height} placeholder='Digite a altura' />
        <Text style={styles.placeholder}>Peso</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={(weight) => setWeight(parseFloat(weight))} value={weight} placeholder='Digite o peso' />
        <TouchableOpacity style={styles.button} onPress={handleCalc}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resContainer}>
        <Text style={styles.resTitle}>{imc.title}</Text>
        <Text style={styles.resText}>{imc.imc}</Text>
        <Text style={styles.resTitle}>{imc.healthStatus}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  },
  title: {
    marginTop: '25%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: '#FFFFF3',
    fontWeight: 'bold'
  },
  placeholder: {
    marginTop: 50,
    fontSize: 20,
    color: '#FFFFF3',
    marginBottom: 5,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  input: {
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10
  },
  resContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50
  },
  resTitle: {
    fontSize: 24,
    color: '#00D9C0',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  resText: {
    fontSize: 40,
    color: '#00D9C0',
    fontWeight: 'bold'
  },
  button: {
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#390099',
    padding: 15,
    marginHorizontal: 50,
    borderRadius: 9
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18
  }
});
