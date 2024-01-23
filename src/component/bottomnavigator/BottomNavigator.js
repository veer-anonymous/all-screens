import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMenu from 'react-native-vector-icons/Ionicons';
import IconHome from 'react-native-vector-icons/Feather';
import Iconsearch from 'react-native-vector-icons/Ionicons';
import Iconplus from 'react-native-vector-icons/Entypo';
import Iconhearto from 'react-native-vector-icons/AntDesign';
import IconUser from 'react-native-vector-icons/Feather';

const BottomNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: verticalScale(45),
        //   backgroundColor: 'yellow',
          justifyContent: "center",
          alignItems: 'center',
          position: 'absolute',
          bottom: 15,
          borderRadius: 10,
        //   flexDirection: 'row',
        //   backgroundColor: 'black',
        }}>
        <View style={{
            width:"90%",
            height:"100%",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            backgroundColor:"black",
            borderRadius:15,
        }}>
        <TouchableOpacity
        >
          <IconHome name="home" size={25} color="#c8c8c8" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Iconsearch name="search" size={25} color="#c8c8c8" />
        </TouchableOpacity>

        <TouchableOpacity
    >
    <View style={{width:25,height:25,backgroundColor:"#333333",borderRadius:15}}>

          <Iconplus name="plus" size={25} color="#fff" />
          
    </View>
        </TouchableOpacity>

        <TouchableOpacity
         >
          <Iconhearto name="hearto" size={25} color="#c8c8c8" />
        </TouchableOpacity>

        <TouchableOpacity
         >
          <IconUser name="user" size={25} color="#c8c8c8" />
        </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
};

export default BottomNavigator;
