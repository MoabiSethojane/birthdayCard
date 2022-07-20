
import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import fggc from './assets/icons/birthdaygirl.jpg'
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor:"#fcaa6f",
    flex: 1,
    alignContent:"center",
    alignItems:"center",
    fontSize:30,
    maxWidth:1024,
  },
  tinyLogo: {
    width: 300,
    height: 300,
    borderRadius:20,
  },
  headerhead:{
    fontSize:42,
    color: '#ff3333',
    fontWeight:'bold',
  },
  headercontent:{
    color: '#ffffcc',
    fontSize: 60,
  },
  girlname:{
    fontSize: 40,
    color:'#ff5050',
  },
  girlcontent:{
    color:"#4d0026",
 
    fontSize : 32,
  }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.headerhead}>Happy </Text>
    <Text style={styles.headercontent}>Birthday</Text>
      <Image
        style={styles.tinyLogo}
        source={fggc}
      />
      <Text style={styles.girlname}>Mrs Mdange</Text>
      <Text style={styles.girlcontent}>Wishing you a day filled with happiness<br>
      </br>
      and a year filled with joy. Send you<br></br>
     smiles for every moment of your<br></br>
     special day...Have a wonderful time<br></br>
    and a very happy birthday
    </Text>
    </View>
  );
}

export default DisplayAnImage;    