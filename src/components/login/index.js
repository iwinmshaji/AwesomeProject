import React, { useState } from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const Login = () => {
  const [phoneNum,setPhoneNum] = useState('')
  console.log(phoneNum)
  const [otpDigit,setotpDigit] = useState('')
  console.log(otpDigit)
  const onChangeOtp = (otp) =>{
      if(otp.length>6) {
        setotpDigit('')
      }
      else{
        setotpDigit(otp)

      } 
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <Image
          source={require('../../assets/login.png')}
          style={styles.stretch}></Image>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.lowerHead}>
          <Text style={styles.textLogin}>Login</Text>
          <Text style={styles.textLogin}>vendor</Text>
        </View>
        <View>
          <Text style={styles.textLabel}>Phone</Text>
          <TextInput onChangeText={(number)=>setPhoneNum(number)} placeholder='Your Phone Number' keyboardType='phone-pad' maxLength={10} defaultValue={phoneNum} placeholderTextColor={"grey"} style={styles.inputTexting}></TextInput>
          <Text style={styles.textLabel}>OTP</Text>
          <TextInput onChangeText={onChangeOtp} placeholder='Your OTP' placeholderTextColor={"grey"} keyboardType='number-pad' defaultValue={otpDigit}  style={styles.inputTexting}></TextInput>
          <View style={styles.buttonContainer}>  
          <Button title='Login' color="red" ></Button>
          </View> 
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  upperContainer: {
    flex: 0.3,
  },
  lowerContainer: {
    flex: 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  stretch: {
    width: 400,
    height: 220,
    resizeMode: 'stretch',
  },
  textLogin: {
    color:"black",
    fontSize: 20,
    fontWeight: 'bold',
  },
  lowerHead: {
    //backgroundColor:"red",
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop:10,  //completly changes the flex to down
    paddingTop: 10, //changes the text inside the flex to down
  },
  bg:{
        backgroundColor:"red",
  },
  textLabel:{
    fontSize:18,
    marginLeft:15,
    marginTop:40,
    fontWeight: 'bold',
    color:"black",


  },
  inputTexting:{
    fontSize:18,
    marginLeft:15,
    color:"black",


  },
  buttonContainer:{
    justifyContent:'center', 
    marginLeft:40,
    marginRight:40,
    marginTop:20,
    color:"red",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
  },
  buttonbox: {
    padding: 20,
    borderRadius: 10,
    color:"red",
},
});
