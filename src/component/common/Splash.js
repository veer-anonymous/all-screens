import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  // const navigation=useNavigation()
  // const GoToHome=()=>{
  //     navigation.navigate("Home")
  // }
  return (
    <ImageBackground
      source={require('../../images/frontpic.jpg')}
      style={style.container}>
      <LinearGradient
        // locations={[1,1]}
        // angleCenter={{x:0.5,y:0.4}}
        angle={90}
        colors={[
          'transparent',
          'transparent',
          'rgba(0,0,0,0.6)',
          'rgba(0,0,0,0.9)',
        ]}
        // colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']}
        style={{height: '100%', width: '100%'}}></LinearGradient>

      {/* <LinearGradient
        useAngle={true}
        //   locations={[1,1]}
        // angleCenter={{x:0.5,y:0.4}}
          angle={150}
        // colors={['transparent','transparent','rgba(0,0,0,0.1)','rgba(0,0,0,0.9)']}
        colors={['red', 'red']}
        style={{height: '100%', width: '100%'}}></LinearGradient> */}
      <View style={style.inner_container}>
        <Text style={style.title}>
          <Text> Follow {''} Latest </Text> <Text>{'   '}</Text> Style Shoes{' '}
        </Text>
        <Text style={style.sub_title}>
          find your perfect pair of shoes with ease
        </Text>
        <TouchableOpacity style={style.start_btn}>
          <Text style={style.start_btn_text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inner_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: verticalScale(50),
    // backgroundColor: 'lightblue',
    width: Dimensions.get('window').width / 1.1,
    height: verticalScale(200),
  },
  //   LinearGradient: { },
  title: {
    fontWeight: '900',
    fontSize: scale(25),
    width: Dimensions.get('window').width / 1.5,
    textAlign: 'center',
    // backgroundColor: 'green',
    color: '#fff',
    letterSpacing: 1,

    // fontFamily: 'lorem',
  },
  sub_title: {
    marginTop: verticalScale(10),
    fontWeight: '500',
    fontSize: scale(15),
    width: Dimensions.get('window').width / 2,
    textAlign: 'center',
    // backgroundColor:"green",
    color: '#fff',
    // fontFamily:"lorem",
  },
  start_btn: {
    width: Dimensions.get('window').width / 1.1,
    height: moderateVerticalScale(50),
    backgroundColor: '#fff',
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
    // position:"absolute",
    // bottom:verticalScale(50)
  },
  start_btn_text: {
    fontSize: scale(15),
    fontWeight: '900',
    color: '#000',
  },
});
