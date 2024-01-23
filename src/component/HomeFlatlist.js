import {
    View,
    Text,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  
  const HomeFlatlist = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [current, setCurrentindex] = useState(0);
    const ref = useRef();
    return (
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            keyExtractor={key => {
              return key.index;
            }}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item, index}) => {
              return (
                <View style={{flex: 1, backgroundColor: 'lightblue'}}>
                  {index == 0 && (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 150,
                        width: Dimensions.get('window').width,
                      }}>
                      <View
                        style={{
                          width: Dimensions.get('window').width - 20,
                          height: 100,
                          backgroundColor: 'hotpink',
                          borderRadius: 10,
                          marginLeft: 5,
                        }}></View>
                    </View>
                  )}
                  {index == 1 && (
                    <FlatList
                      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                      pagingEnabled
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={key => {
                        return key.index;
                      }}
                      renderItem={({item, index}) => {
                        return (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'pink',
                              width: 220,
                              height: 120,
                              // margin:10
                            }}>
                            <View
                              style={{
                                width: 200,
                                height: 100,
                                backgroundColor: 'lightgreen',
                                marginLeft: 10,
                                borderRadius: 10,
                              }}></View>
                          </View>
                        );
                      }}
                    />
                  )}
  
                  {index == 2 && (
                    <FlatList
                      data={[
                        'Virendra',
                        'Ankit',
                        'Vaibhav',
                        'Krishna',
                        'Sharma',
                        'Majhi',
                        'Warma',
                        'Rajput',
                        'Singhania',
                        'Gatiya',
                      ]}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item, index}) => {
                        return (
                          <View style={{width: 150, height: 50}}>
                            <Text
                              style={{
                                height: 40,
                                width: 'auto',
                                backgroundColor: 'lightyellow',
                                fontSize: 20,
                                margin: 10,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                verticalAlign: 'middle',
                              }}>
                              {item}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  )}
                  {index == 3 && (
                    <FlatList
                      data={[1, 2, 3, 4, 5, 6, 7]}
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      // onScroll={(e )=> {
                      //   // console.log(e.nativeEvent.contentOffset.x);
                      //   const total = (
                      //     e.nativeEvent.contentOffset.x /
                      //     Dimensions.get('window').width
                      //   ).toFixed(0);
                      //   console.log(total)
                      //   setCurrentindex(total);
                      // }}
                      ref={ref}
                      onScroll={e => {
                        const ind = (
                          e.nativeEvent.contentOffset.x /
                          Dimensions.get('window').width
                        ).toFixed();
                        console.log(ind);
                        setCurrentindex(ind);
                      }}
                      keyExtractor={key => {
                        return key.index;
                      }}
                      renderItem={({item, index}) => {
                        return (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 220,
                              width: Dimensions.get('window').width,
                              // backgroundColor: 'green',
                              marginTop: 10,
                            }}>
                            <View
                              style={{
                                width: '90%',
                                height: 200,
                                backgroundColor: 'purple',
                                marginLeft: 10,
                                borderRadius: 10,
                              }}></View>
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
        <View
          style={{
            flexDirection: 'row',
            width: '20%',
            height: 20,
            // backgroundColor: 'lightblue',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          {data.map((item, index) => {
            return (
              <Text
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: current == index ? 'green' : 'pink',
                  borderRadius: 10,
                  marginLeft: 10,
                }}>
                {item}
              </Text>
            );
          })}
        </View>
        {/* <View>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '100%',
                    height: 200,
                    // backgroundColor: 'green',
                    // borderRadius:10
                  }}>
                  <View
                    key={index}
                    style={{
                      width: '90%',
                      height: 150,
                      backgroundColor: data != 9 ? 'wheat' : '',
                      alignSelf: 'center',
                      marginTop: 10,
                      borderRadius: 10,
                    }}></View>
                </View>
              );
            }}
          />
        </View> */}
        <View
          style={{
            width: '100%',
            height: 200,
            // backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              // backgroundColor: 'lightblue',
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}>
            {current > 0 && (
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 50,
                  backgroundColor: 'yellow',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  ref.current.scrollToIndex({
                    animated: true,
                    index: parseInt(current) -1,
                  });
                  setCurrentindex(current - 1);
                }}>
                <Text>Preveous</Text>
              </TouchableOpacity>
            )}
            {console.log(data.length)}
            {current < data.length - 1 && (
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 50,
                  backgroundColor: 'yellow',
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  ref.current.scrollToIndex({
                    animated: true,
                    index: parseInt(current) + 1,
                  });
                  setCurrentindex(current + 1);
                }}>
                <Text>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'lightgrey',
    },
  });
  export default HomeFlatlist;
  