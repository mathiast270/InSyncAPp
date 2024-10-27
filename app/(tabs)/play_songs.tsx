import { TextInput, Button,Text, View, StyleSheet } from 'react-native';
import Dropdown from '@/components/Dropdown';
import { SetStateAction, useState } from 'react';
const [text, setText] = useState('');

const handleInputChange = (newText: SetStateAction<string>) => {
  setText(newText);
};

const handleSubmit = () => {
  // Do something with the submitted text
  console.log('Submitted text:', text);
};
export default function PlaySongs() {
  return (
    <View style={styles.container}>
     <Dropdown />
     <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  text: {
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});
