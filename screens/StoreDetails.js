import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements';


let dummyStoreData = {
  id: 1,
  name: "삼성점",
  img_src: "http://image.chosun.com/sitedata/image/201901/02/2019010202214_0.jpg",
  address: "서울특별시 강남구 테헤란로 443, 애플트리타워 1층(삼성동)",
  phone: "02-7777-7777"
  
}




export default class StoreDetails extends React.Component {
  constructor(){
    super();
    this.state ={
      id: '',
      name: '',
      address: '',
      phon: '',
    }
  }
  

  componentDidMount(){
    this.setState({
      id: navigation.getParam('storeId', 'no_id'),
    },() => {
      console.log("예리님이 보내준 아이디는 : ", this.state);
      fetch(`http://54.180.153.12:8000/supplier/${store_id}`)
        .then(response => response.json())
        .catch(()=> dummyStoreData)
        .then(res =>{
          this.setState({
            name : res['name'],
            address : res['address'],
            phone : res['phone'],
          }, () => {
            console.log("제대로 데이트 들어가나 : ", this.state);
          })
        });
    })

  }
 
  
  render(){
    return(
      <View style={wrapper}>
        <View style={contentsBox}>
          <Text style={title}></Text>
          <Image
            style={storeImg}
          />

          <Text style={storeName}>{this.state.name}</Text>
          <Text style={storeAddress}>{this.state.address}</Text>
          <Text style={storeContact}>문의 : {this.state.phone}</Text>
          <Text style={distanceInfo}>*결제 및 주문은 매장 2km 이내에서 가능합니다.</Text>

          <View style={buttons}>
            <Button/>
            <Button/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100%,
    height: 100%,
    backgroundColor: white,
    justifyContent: center,
    alignItems: center,
    padding: 5,
  },
  contentsBox:{
    width: 76%,
    shadowColor: black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderRadius: 4,
    backgroundColor: white,



})
