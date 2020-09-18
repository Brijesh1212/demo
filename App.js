import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-community/picker';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  TextInput, TouchableOpacity
} from 'react-native';

import { RadioButton } from 'react-native-paper';

export default class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        checked: '',
        radioBtn: '',
        selectedValue: 'Tomato',
        isSelected: '',
        errorMessage: '',
    };
  }

  setRadiBtn(value) {
    this.setState({checked: value, errorMessage: ''})
  }

  setPicker(value) {
    this.setState({selectedValue: value, errorMessage: ''})
  }

  setCheckBox(value) {
    this.setState({isSelected: value, errorMessage: ''})
  }

  submit() {
    var stateTemp = this.state;
     this.setState({errorMessage: ''});
     if(stateTemp.name == '') {
        this.setState({errorMessage: 'Please give name'})
     } else
     if(stateTemp.checked == '') {
      this.setState({errorMessage: 'Please Select any one pizza topping'})
      } else
      if(stateTemp.address == '') {
        this.setState({errorMessage: 'Please give delivery instruction'})
    }
  }

  setName(name) {
    this.setState({errorMessage: ''})
    if(this.checkStringForNumbers(name)) {
      this.setState({errorMessage: 'Number not allowed'})
    } else {
      this.setState({name})
    }
  }

  checkStringForNumbers(input){
    let str = String(input);
    for( let i = 0; i < str.length; i++){
              console.log(str.charAt(i));
        if(!isNaN(str.charAt(i))){      
            return true;
        }
    }
}

  render() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        
          <View style={styles.body}>
            
            <View style={{flex: 1, margin: 10, borderWidth: 0.5, borderColor: '#0F0F0F'}}>
                <View style={{ marginTop: 3, marginLeft: 3, marginRight: 3, borderWidth: 1, borderColor: '#000', alignItems: 'center', padding: 5}}>
                  <Text>Pizza Shop 2.0</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, borderWidth: 1, borderColor: '#000', padding: 5, justifyContent: 'center'}}>
                  <Text>Name</Text>
                </View>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, marginRight: 3, borderWidth: 1, borderColor: '#000', padding: 5}}>
                <TextInput
                  style={{borderWidth: 0.5, height: 25, padding: 2}}
                    onChangeText={(name) => this.setName(name)}
                    // placeholder="Name"
                    placeholderTextColor="#F6F6F7"
                    value={this.state.name}
                  />
                </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, borderWidth: 1, borderColor: '#000', padding: 5, justifyContent: 'center'}}>
                  <Text>Pizza Topping</Text>
                </View>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, marginRight: 3, borderWidth: 1, borderColor: '#000', padding: 5}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="first"
                  status={ ((this.state.checked === 'first' ? 'checked' : 'unchecked')) }
                  onPress={() => this.setRadiBtn('first')}
                />
                <Text>Supreme</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="second"
                  status={ ((this.state.checked === 'second' ? 'checked' : 'unchecked')) }
                  onPress={() => this.setRadiBtn('second')}
                /> 
                <Text>Vegitarian</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="third"
                  status={ ((this.state.checked === 'third' ? 'checked' : 'unchecked')) }
                  onPress={() => this.setRadiBtn('third')}
                />
                <Text>Hawaiian</Text>
                </View>
                </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, borderWidth: 1, borderColor: '#000', padding: 5, justifyContent: 'center'}}>
                  <Text>Pizza Sauce</Text>
                </View>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, marginRight: 3, borderWidth: 1, borderColor: '#000', padding: 5}}>
                <View style={{borderWidth: 0.5}}>
                <Picker
                  selectedValue={this.state.selectedValue}
                  style={{ height: 30, borderWidth: 1, borderColor: '000' }}
                  onValueChange={(itemValue, itemIndex) => this.setPicker(itemValue)}
                >
                  <Picker.Item label="Tomato" value="Tomato" />
                  <Picker.Item label="Onion" value="Onion" />
                  
                </Picker>
                </View>
                </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, borderWidth: 1, borderColor: '#000', padding: 5, justifyContent: 'center'}}>
                  <Text>Optional Extras</Text>
                </View>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, marginRight: 3, borderWidth: 1, borderColor: '#000', padding: 5}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  value={this.state.isSelected == 'one'}
                  onValueChange={() => this.setCheckBox('one')}
                />
                <Text>Extra Cheese</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBox
                  value={this.state.isSelected == 'two'}
                  onValueChange={() => this.setCheckBox('two')}
                />
                <Text>Gluten Free Base</Text>
                </View>
                </View>
                </View>
                <View>
                <View style={{flex: 1, marginTop: 3, marginLeft: 3, marginRight: 3, borderWidth: 1, borderColor: '#000', padding: 5, justifyContent: 'center'}}>
                  <Text>Delivery Instruction: </Text>
                <TextInput
                  style={{borderWidth: 1, textAlignVertical: 'top'}}
                    onChangeText={(address) => this.setState({address})}
                    maxLength = {500}
                    multiline = {true}
                    numberOfLines = {4}
                    placeholderTextColor="#F6F6F7"
                  />
                </View>
                </View>
                <View>
                <View style={{margin: 3, borderWidth: 1, borderColor: '#000', padding: 5, justifyContent: 'center'}}>
                  <TouchableOpacity onPress={() => this.submit()}>
                    <Text style={{padding: 5, backgroundColor: '#AEAEAE', width: '35%'}}>Send my order</Text>
                  </TouchableOpacity>
                </View>
                </View>
            </View>
             {this.state.errorMessage == '' ? null : <Text style={{color: 'red', margin: 10}}>{this.state.errorMessage}</Text>}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
              }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
