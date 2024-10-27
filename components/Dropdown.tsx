import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, StyleSheet } from 'react-native';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: 'Select an option...',
    value: null,
  };

  const songs = [
    { label: 'Song1', value: 'Song1' },
    { label: 'Song2', value: 'Song2' },
    { label: 'Song3', value: 'Song3' },
  ];

  return (
    <View style={styles.container} >
      <Text>Select an option:</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={songs}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        style={pickerSelectStyles}
      />
      {selectedValue && <Text>Selected: {selectedValue}</Text>}
    </View>
  );
};
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
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  }
});
export default Dropdown;