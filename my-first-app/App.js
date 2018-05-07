import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/Listitem/Listitem';
import UserInput from './src/components/UserInput/UserInput';
import PlaceOutput from './src/components/PlaceOutput/PlaceOutput';

export default class App extends React.Component {

    state = {
        placeName: '',
        places: []
    };

// 输入处理函数
    placeNameChangedHandler = val => {
      this.setState({placeName: val})
    };

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() ==="") {  // trim remove whitespace from both sides of string
            return;
        }
        // concat all the inputs by user in a array, ['','','',...]
        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            }
        })
    };

  render() {
      // output the user's input
      // const placesOutput = this.state.places.map((place,i) => (
      //     <ListItem key={i} placeName={place}/>
      // ));

    return (
      <View style={styles.container}>
          {/*文本输入框*/}
        <UserInput placeName={this.state.placeName}
                   changed={this.placeNameChangedHandler}
                   submitted={this.placeSubmitHandler}/>
         <PlaceOutput places={this.state.places}/>
      </View>
    );
  }
}

// inline 样式
const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 26,
      backgroundColor: '#fff',
      // flexDirection: "row",
      alignItems: 'flex-start',         //cross axis beginning
      justifyContent: 'flex-start',// main axis beginning
  },
    inputContainer: {
        //flex:1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
      width: "70%"
      //   flex:7
    },
    placeButton: {
      width: "30%"
      //   flex:3
    },
    listContainer: {
      width: "100%"
    }
});