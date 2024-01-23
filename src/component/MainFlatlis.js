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
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {ItemImg} from '../untils/Dataimages';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMenu from 'react-native-vector-icons/Ionicons';
import IconShopinbag from 'react-native-vector-icons/Feather';
import Iconsearch from 'react-native-vector-icons/Ionicons';
import Iconplus from 'react-native-vector-icons/Octicons';
import Iconheart from 'react-native-vector-icons/AntDesign';
import BottomNavigator from './bottomnavigator/BottomNavigator';
import LinearGradient from 'react-native-linear-gradient';

const MainFlatlis = () => {
  const [cotegeries, setCotegeries] = useState([
    'New Release ',
    'Men',
    'Women',
    'Kids',
  ]);

  const img=`<Image  source={require('../images/title.jpg') } style={style.list_2_collection_img_main}/> `;
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
                      <IconMenu name="menu" size={30} color="#000" />
                    </Text>
                    <Text style={style.list_0_two}>Discover</Text>
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
                  <View style={style.list_1_search}>
                    <View style={style.list_1_search_inner}>
                      <Text style={style.list_1_search_icon}>
                        {' '}
                        <Iconsearch name="search" size={30} color="#888889" />
                      </Text>

                      <TextInput
                        style={style.list_1_search_input}
                        placeholder="looking for shoes"
                        placeholderTextColor={'#888889'}
                      />
                    </View>
                  </View>
                )}
                {index == 2 && (
                  <View style={style.list_2_collection}>
                    
                    <ImageBackground
                      source={require('../images/title.jpg')}
                      style={style.list_2_collection_img}>
                    
                      <LinearGradient
                        // locations={[1,1]}
                        // angleCenter={{x:0.5,y:0.4}}
                        angle={90}
                        colors={[
                          'transparent',
                          // 'transparent',
                          'rgba(0,0,0,0.6)',
                          'rgba(0,0,0,0.9)',
                        ]}
                        // colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']}
                        style={{
                          height: '100%',
                          width: '100%',
                        }}>


                      {/* <Image    source={require('../images/title.jpg')}  style={style.list_2_collection_img_main}/>   */}
                        </LinearGradient>
                      
                    </ImageBackground>
                    
                    <Text style={style.list_2_collection_img_text}>
                      Summer Collection
                    </Text>
                  </View>
                )}
                {index == 3 && (
                  <View
                    style={{
                      backgroundColor: '#ffffff',
                      padding: 10,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      marginTop: 10,
                      marginLeft: 5,
                    }}>
                    {/* <FlatList
                    data={cotegeries}
                    horizontal
                    pagingEnabled
                    renderItem={({item, index}) => {
                      return (
                        <View style={style.list_3_categories}>
                          <Text> {item}</Text>
                        </View>
                      );
                    }}
                  /> */}
                    {cotegeries.map((item, index) => {
                      return (
                        <TouchableOpacity>
                          {index == 0 ? (
                            <Text
                              style={[
                                style.list_3_categories,
                                {
                                  color: '#fff',
                                  // width: 90,
                                  // height: 30,
                                  backgroundColor: 'black',
                                  borderRadius: 20,
                                  padding: 12,
                                },
                              ]}>
                              {item}
                            </Text>
                          ) : (
                            <Text style={style.list_3_categories}>{item}</Text>
                          )}
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
                {index == 4 && (
                  <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    // horizontal
                    renderItem={({item, index}) => {
                      return (
                        <View style={style.list_4_items}>
                          <View style={style.list_4_items_inner_container}>
                            <View style={style.list_4_items_container}>
                              <Image
                                source={require('../images/fresh.png')}
                                style={style.list_4_item_1}
                              />
                              <View
                                style={{
                                  position: 'absolute',
                                  top: 20,
                                  left: 130,
                                }}>
                                <Iconheart
                                  name="heart"
                                  size={20}
                                  color="#000"
                                />
                              </View>
                              <View
                                style={{
                                  // backgroundColor: 'yellow',
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginTop: 30,
                                }}>
                                <View>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: '900',
                                      color: '#000',
                                    }}>
                                    Nike Air Max
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: '700',
                                      color: '#000',
                                    }}>
                                    $ 180 .00
                                  </Text>
                                </View>

                                <Text>
                                  <Iconplus
                                    name="plus"
                                    size={25}
                                    color="#000"
                                  />
                                </Text>
                              </View>
                            </View>

                            <View style={style.list_4_items_container}>
                              <View>
                                <Image
                                  source={require('../images/fresh2.png')}
                                  style={style.list_4_item_1}
                                />
                                <View
                                  style={{
                                    position: 'absolute',
                                    top: 20,
                                    left: 130,
                                  }}>
                                  {/* <Icon name="heart" size={30} color="#900" /> */}
                                  <Iconheart
                                    name="hearto"
                                    size={20}
                                    color="#000"
                                  />
                                </View>

                                <View
                                  style={{
                                    // backgroundColor: 'yellow',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: 30,
                                  }}>
                                  <View>
                                    <Text
                                      style={{
                                        fontSize: 14,
                                        fontWeight: '900',
                                        color: '#000',
                                      }}>
                                      Nike Air Max
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 14,
                                        fontWeight: '700',
                                        color: '#000',
                                      }}>
                                      $ 180 .00
                                    </Text>
                                  </View>

                                  <Text style={{fontSize: 30, color: 'blue'}}>
                                    <Iconplus
                                      name="plus"
                                      size={25}
                                      color="#000"
                                    />

                                    {/* <Icon name="rocket" size={30} color="#900" /> */}
                                    {/* <Icon name="heart" size={30} color="#900" /> */}
                                    {/* <Icon name="plus" size={30} color="#900" /> */}
                                    {/* <Icons name="menu" size={30} color="#900" /> */}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
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
      <BottomNavigator />
      <Text>MainFlatlis</Text>
    </View>
  );
};

export default MainFlatlis;

const style = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  second_container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  list_0: {
    flexDirection: 'row',

    // backgroundColor: 'pink',
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
  list_1_search: {
    width: Dimensions.get('window').width,
    height: verticalScale(40),
    // backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  list_1_search_inner: {
    height: verticalScale(35),
    width: Dimensions.get('window').width / 1.2,
    // backgroundColor: '#f5f5f5',
    backgroundColor: '#e8e8e8',
    // backgroundColor:"#cccccd",
    borderRadius: 10,
    flexDirection: 'row',
  },
  list_1_search_icon: {
    height: verticalScale(40),
    width: Dimensions.get('window').width / 7.5,
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center',
    // verticalAlign:"middle",
    padding: 10,
  },
  list_1_search_input: {
    height: verticalScale(40),
    width: Dimensions.get('window').width / 1.3,
    // backgroundColor: 'lightblue',
    fontSize: moderateScale(15),
    fontWeight: '600',
  },

  list_2_collection: {
    width: Dimensions.get('window').width,
    height: verticalScale(130),
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // padding:10
    // borderRadius:100
  },
  list_2_collection_img: {
    width: Dimensions.get('window').width / 1.2,
    height: verticalScale(100),
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
  },
  list_2_collection_img_main:{
    width: Dimensions.get('window').width / 1.2,
    height: verticalScale(110),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor:"blue",
    // borderWidth:15,
    // borderColor:"red",
    // borderStartWidth:10
  },
  list_2_collection_img_text: {
    fontSize: moderateScale(20),
    color: '#fff',
    fontWeight: '900',
    width: moderateScale(100),
    position: 'absolute',
  },
  list_3_categories: {
    marginLeft: 5,
    // marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
    fontWeight: '500',
    marginLeft: 15,

    // verticalAlign:'middles'

    // flexWrap: 'wrap',
    // flexDirection:"row"
  },
  list_4_items: {
    width: Dimensions.get('window').width,
    height: 200,
    backgroundColor: '#ffff',
    marginTop: verticalScale(10),
  },
  list_4_items_inner_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  list_4_items_container: {
    width: Dimensions.get('window').width / 2.6,
    // height:Dimensions.get("window").height/2,
    height: 140,
    // backgroundColor: '#e8e8e8',  #888889
    // backgroundColor:"#cccccd",
    // backgroundColor:"#dedfdf",
    // backgroundColor:"#e5e5e5",
    backgroundColor: '#ebecec',
    // backgroundColor:"blue",
    borderRadius: 10,
    marginTop: 10,
    padding: 5,
  },
  list_4_item_1: {
    width: Dimensions.get('window').width / 3,
    // height:Dimensions.get("window").height/2,
    height: 100,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginTop: 10,
    // padding:20
  },
});

// source={ItemImg.img}
