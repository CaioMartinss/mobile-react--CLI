import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const [numero, setContador] = useState(0);

  const ClickMudeEstado = () => {
    setContador(numero + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>multi. por (5) {numero * 5}</Text>
      <Text style={styles.text}>você clicou {numero} vezes</Text>
      <Button title="Mult." onPress={ClickMudeEstado} />
    </View>
  );
};

/*css*/
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
