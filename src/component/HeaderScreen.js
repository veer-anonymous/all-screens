import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {verticalScale} from 'react-native-size-matters';

const HeaderScreen = () => {
  return (
    <View >
      <FlatList
        data={[0,1,2]}
        renderItem={({item, index}) => {
          return (
            <View style={style.flatlist_one}>
              {index == 0 && (
                <FlatList
                  data={[1, 2, 3]}
                  horizontal
                  renderItem={({item, index}) => {
                    return (
                      <Text
                        style={{
                          color: 'green',
                          // width: '100%',
                          // height: '100%',
                          backgroundColor: 'yellow',
                          borderRadius: 20,
                          width: 100,
                          height: 50,
                          marginLeft: 20,
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          // alignSelf:"center",
                          // justifyContent:"space-between"
                        }}>
                        hi
                      </Text>
                    );
                  }}
                />
              )}

              {index == 1 && (
                <View style={style.container_2}>
                  <Text>hi</Text>
                </View>
              )}

              {
                index ==2 && (
                    <View>
                        <Text>summer collection</Text>
                    </View>
                )
              }
              {
                index ==3 && (
                    <View style={style.container_3}>
                        <Text> new release</Text>
                    </View>
                )
              }
            </View>
          );
        }}
      />
    </View>
  );
};

export default HeaderScreen;

const style = StyleSheet.create({
  flatlist_one: {
    width: Dimensions.get('window').width,
    height: verticalScale(50),
    backgroundColor: 'blue',
    // flexDirection:"row",

    // justifyContent:"space-between",
    // alignItems:"center"
  },
  container_2: {
    // color: 'green',
    //    flex:1,
    // justifyContent: 'center',
    backgroundColor: 'yellow',
    width: Dimensions.get('window').width,
    height: verticalScale(50),
  },

  container_3:{

  }
});
