import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const [nome, setNome] = useState('estilos');

  const ClickMudeEstado = () => {
    setNome('programming wiht caio');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{nome}</Text>
      <View style={styles.button}>
        <Button title="Mult." onPress={ClickMudeEstado} />
      </View>
    </View>
  );
};

/*css*/
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'pink',
    borderRadius: 10,
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: '30%',
    margin: 10,
  },
});

export default App;
