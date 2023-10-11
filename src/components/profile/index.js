import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

const Profile = () => {

  const [profileImage,setProfileImage] = useState('')
  
  const onAddImage = async () => {
    console.log("select Image");
    const options={
      mediaType:'photo',

    }
    const result = await launchCamera(options);
    setProfileImage(result.assets[0])
    console.log(result,"Result is")
  }

  
  const [userInfo,setUserInfo] = useState({
    name:'',
    phone:'',
    location:'',
  })

  console.log(userInfo,"The state is")
  const updateUserInfo =(data) => {
    return setUserInfo({ ...userInfo, ...data})
  }
  const textInputWiththLabel = (Label,placeHolder,defaultValue,key,keyboardType = 'default') =>{
    return (
      <View style={styles.textLabels}>
        <Text style={styles.textLabel}>{Label}</Text>
        <TextInput
          placeholder={placeHolder} 
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          onChangeText={(textgggggg) => {updateUserInfo({[key]: textgggggg})}}
          placeholderTextColor="black" 
          style={styles.textLabelInput}></TextInput>
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.upperHeader}>
          <Image
            source={require('../../assets/Arrow.png')}
            style={styles.backButton}></Image>
          <View style={styles.textHeadingContainer}>
            <Text style={styles.textHeading}>Profile</Text>
          </View>
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.imageSection}>
          <TouchableOpacity onPress={onAddImage}>
            <View style={styles.circle}>
              
              { profileImage === '' && <Text style={styles.addImageText}> Add Image</Text>}
              { profileImage !== '' && <Image style={styles.addImage} source={{uri:profileImage.uri	}} resizeMode='contain' ></Image>}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.textHeading}>Enter your details</Text>

          {textInputWiththLabel('Name','Enter your Name',userInfo.name,'name','')}
          {textInputWiththLabel('Phone','Enter your Number',userInfo.phone,'phone','numeric')}
          {textInputWiththLabel('Location','Enter your location',userInfo.location,'location','')}

          {/* <View style={styles.textLabels}>
            <Text style={styles.textLabel}>Name:</Text>
            <TextInput
              placeholder="Enter your Name"
              placeholderTextColor="black"
              style={styles.textLabelInput}></TextInput>
          </View> */}
          {/* <View style={styles.textLabels}>
            <Text style={styles.textLabel}>Phone:</Text>
            <TextInput
              placeholder="Enter your Number"
              placeholderTextColor="black"
              style={styles.textLabelInput}></TextInput>
          </View>
          <View style={styles.textLabels}>
            <Text style={styles.textLabel}>Location:</Text>
            <TextInput
              placeholder="Enter your Location"
              placeholderTextColor="black"
              style={styles.textLabelInput}></TextInput>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f3f5f7',
  },
  upperContainer: {
    flex: 0.2,
    backgroundColor: '#f3f5f7',
  },
  upperHeader: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
  },
  textHeadingContainer: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 40,
  },
  textHeading: {
    color: 'black',
    fontSize: 10,
    fontWeight: '700',
  },
  backButton: {
    height: 20,
    width: 30,
  },

  lowerContainer: {
    flex: 0.8,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  imageSection: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 35,
    // borderTopRightRadius:20,
    // borderTopLeftRadius:20,
  },
  detailSection: {
    flex: 0.7,
    padding:20,
  },
  circle: {
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImageText: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 15,
  },
  addImage:{
    height:120,
    width:120,
    borderRadius:60
  },
  textHeading: {
    
    // marginLeft: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  textLabels: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems:"center",


  },
  textLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    width:80,
  },
  textLabelInput: {
    fontSize:15,
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 30,
    color:"black",
    width:160,
    height:40,

  },
});
