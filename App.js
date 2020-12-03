/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
} from 'react-native';

import TextIncreaser from './TextIncreaser';

const App: () => React$Node = () => {
  const [number, setNumber] = useState('');
  const [numberText, setNumberText] = useState();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        style={{borderBottomWidth: 1, width: '80%'}}
        value={number}
        onChangeText={(text) => setNumber(text)}
        keyboardType={'numeric'}
      />

      <TextIncreaser
        style={{fontSize: 30, marginVertical: 10}}
        numberText={numberText}
      />

      <View
        style={{
          overflow: 'hidden',
          width: '50%',
          borderRadius: 10,
        }}>
        <Pressable
          android_ripple={{
            color: 'green',
          }}
          style={({pressed}) => [
            {
              backgroundColor:
                pressed && Platform.OS === 'ios' ? 'green' : 'blue',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
          onPress={() => {
            setNumberText(number);
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>GO!</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
