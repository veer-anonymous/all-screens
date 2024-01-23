import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {ItemImg} from '../untils/Dataimages';
import Iconstar1 from 'react-native-vector-icons/FontAwesome';
import IconMenu from 'react-native-vector-icons/Ionicons';
import IconShopinbag from 'react-native-vector-icons/Feather';
import Iconarrow from 'react-native-vector-icons/Feather';
import Iconsearch from 'react-native-vector-icons/Ionicons';
import Iconstar2 from 'react-native-vector-icons/FontAwesome';
import Iconheart from 'react-native-vector-icons/AntDesign';
// import { useSafeAreaFrame } from 'react-native-safe-area-context';

const CreateBottomTab = () => {
  const [data, setData] = useState([
    require('../../images/22.png'),
    require('../../images/remove.png'),
    require('../../images/back.png'),
    require('../../images/nike.png'),
    require('../../images/last.png'),
  ]);
  return (
    <View style={style.main_container}>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({item, index}) => {
            return (
              <View>
                {index == 0 && (
                  <View style={style.list_0}>
                    <Text style={style.list_0_one}>
                      <Iconarrow name="arrow-left" size={30} color="#000" />
                    </Text>
                    <Text style={style.list_0_two}>Order Details</Text>
                    <Text style={style.list_0_three}>
                      <IconShopinbag
                        name="shopping-bag"
                        size={30}
                        color="#000"
                      />
                    </Text>
                  </View>
                )}
                {index == 1 && (
                  <FlatList
                    pagingEnabled={true}
                    horizontal
                    // showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({item, index}) => {
                      return (
                        <View style={style.list_1_container}>
                          <Image
                            source={item}
                            style={style.list_1_container_inner}
                          />
                        </View>
                      );
                    }}
                  />
                )}
              </View>
            );
          }}
        />
      </View>
      <View style={style.map_container}>
        {data.map((item, index) => {
          return (
            <View>
              {index == 0 ? (
                <Text style={style.map_container_inner}></Text>
              ) : (
                <Text
                  style={[
                    style.map_container_inner,
                    {backgroundColor: 'grey'},
                  ]}></Text>
              )}
            </View>
          );
        })}
      </View>
      <View style={style.bottom}>
        <View
          style={{
            width: '100%',
            height: verticalScale(20),
            // backgroundColor: 'lightblue',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: moderateScale(20),
              fontWeight: '900',
              color: 'black',
            }}>
            Nike Air Max
          </Text>
          <Text
            style={{
              fontSize: moderateScale(20),
              fontWeight: '900',
              color: 'black',
            }}>
            {' '}
            $ 180.00
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: verticalScale(30),
            // backgroundColor: 'lightblue',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: verticalScale(4),
          }}>
          <Text style={{fontSize: moderateScale(14), fontWeight: '700'}}>
            Men Shoe's
          </Text>
          <Text style={{marginTop: 10}}>
            <Iconheart name="heart" size={22} color={'black'} />
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 10,
            height: verticalScale(55),
            // backgroundColor: 'lightyellow',
            // justifyContent: "space-between",
            // alignItems: "center",
            // flexDirection:"row"
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: verticalScale(15),
              color: 'black',
              fontWeight: '700',
            }}>
            Color
          </Text>
          <View
            style={{
              width: '70%',
              height: verticalScale(40),
              // backgroundColor: 'blue',
              justifyContent: 'space-evenly',
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'black',
                borderRadius: 40,
                // alignSelf:"flex-start"
              }}></Text>
            <Text
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#f37578',
                borderRadius: 40,
                marginLeft: 10,
              }}></Text>
            <Text
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#c7f0ac',
                borderRadius: 40,
                marginLeft: 10,
               padding:5
              }}>
              <Image
                source={require('../../images/right.png')}
                style={{width: 20, height: 20 ,position:"relative",top:100,padding:10}}
              />
            </Text>
            <Text
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#81dbff',
                borderRadius: 40,
                marginLeft: 10,
              }}></Text>
            <Text
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#c695ff',
                borderRadius: 40,
                marginLeft: 10,
              }}></Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: verticalScale(15),
            height: verticalScale(60),
            // backgroundColor: 'lightyellow',
            // justifyContent: "space-between",
            // alignItems: "center",
            // flexDirection:"row"
          }}>
          <Text
            style={{
              fontSize: verticalScale(15),
              color: 'black',
              fontWeight: '800',
            }}>
            Select a size {'   '}{' '}
            <Text style={{fontSize: 15, color: 'grey'}}>view size guide</Text>
          </Text>
          <View
            style={{
              width: '90%',
              height: verticalScale(40),
              // backgroundColor: 'blue',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                borderWidth: 2,
                padding: 10,
                fontSize: 15,
                fontWeight: '500',
                color: 'black',
              }}>
              40
            </Text>
            <Text
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                borderWidth: 2,
                padding: 10,
                fontSize: 15,
                fontWeight: '500',
                color: '#fff',
                backgroundColor: 'black',
                // marginLeft:scale(5)
              }}>
              41
            </Text>
            <Text
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                borderWidth: 2,
                padding: 10,
                fontSize: 15,
                fontWeight: '500',
                color: 'black',
                // marginLeft:scale(5)
              }}>
              42
            </Text>
            <Text
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                borderWidth: 2,
                padding: 10,
                fontSize: 15,
                fontWeight: '500',
                color: 'black',
                // marginLeft:scale(5)
              }}>
              43
            </Text>
            <Text
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                borderWidth: 2,
                padding: 10,
                fontSize: 15,
                fontWeight: '500',
                color: 'black',
                // marginLeft:scale(5)
              }}>
              44
            </Text>
            <Text
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                borderWidth: 2,
                padding: 10,
                fontSize: 15,
                fontWeight: '500',
                color: 'black',

                // marginLeft:scale(5)
              }}>
              45
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: Dimensions.get('window').height / 600,
          backgroundColor: 'grey',
        }}></View>

      <View
        style={{
          width: '100%',
          height: Dimensions.get('window').height / 5,
          backgroundColor: '#ffff',
          elevation:90
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 4,
            // backgroundColor: 'yellow',
            width: '90%',
            marginBottom: verticalScale(10),
          }}>
          <View
            style={{
              flexDirection: 'row',
              margin: 4,
              // backgroundColor: 'blue',
              width: '90%',
              justifyContent: 'space-between',
            
            }}>
            <Text style={{fontSize: 17, fontWeight: '900', color: 'black'}}>
              Description
            </Text>
            <Text>
              <Iconstar1 name="star" color="black" />
              {'  '}
              <Iconstar1 name="star" color="black" />
              {'  '}
              <Iconstar1 name="star" color="black" />{' '}
              <Iconstar1 name="star" color="black" />{' '}
              <Iconstar2 name="star-o" color="black" />
              {'  '}
              4.5{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: verticalScale(10),
          
          }}>
          <Text style={{width: '85%', height: '100%',fontWeight:"700",color:'grey'}}>
            Feather you've errol bonnet bred orbs tell with. Who goblet owl
            trace bott's ...{' '}
            <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
              Read More
            </Text>
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '80%',
              height: verticalScale(40),
              backgroundColor: 'black',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 18}}>
              {' '}
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateBottomTab;

const style = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor:"#e8e8e8"
  },
  second_container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  list_0: {
    flexDirection: 'row',

    // backgroundColor: '#f5f5f5',
    backgroundColor:"#e8e8e8",
    width: Dimensions.get('window').width,
    height: 50,
  },
  list_0_one: {
    height: 30,
    width: Dimensions.get('window').width / 4.5,
    // backgroundColor: 'blue',
    // justifyContent: "center",
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  list_0_two: {
    height: 35,
    width: Dimensions.get('window').width / 2,
    // backgroundColor: 'green',
    fontSize: moderateScale(25),
    fontWeight: '900',
    alignSelf: 'flex-end',
    textAlign: 'center',
    color: '#000',
  },
  list_0_three: {
    height: 30,
    width: Dimensions.get('window').width / 3,
    // backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    textAlign: 'center',
  },

  list_1_container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    backgroundColor: '#e8e8e8',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_1_container_inner: {
    width: '70%',
    height: '70%',
    backgroundColor: 'pink',
  },
  map_container: {
    width: Dimensions.get('window').width,
    height: verticalScale(10),
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  map_container_inner: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: 10,
  },
  bottom: {
    width: '100%',
    height: Dimensions.get('window').height / 2.8,
    backgroundColor: '#ffffff',
    padding: moderateScale(25),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: verticalScale(10),
    elevation:40
  },
});
