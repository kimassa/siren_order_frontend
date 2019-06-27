import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';


let dummyStoreData = [{
  supplier_id: 1,
  name: "스타벅스",
  branch: "삼성점",
  img_src: "http://image.chosun.com/sitedata/image/201901/02/2019010202214_0.jpg",
  address: "서울특별시 강남구 테헤란로 443, 애플트리타워 1층(삼성동)",
  phone: "02-7777-7777",
  zipcode: "",
}]




export default class StoreDetails extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      supplier_id: props.navigation.getParam('storeId','no_id'),
      branch: '',
      name: '',
      img_src: '',
      address: '',
      phone: '',
    }
  }
  

  componentDidMount(){
    this.getData();
    this.getTestData();
  }

  getData = () => {
    console.log("예리님이 보내준 아이디는 : ", this.state);
    fetch(`http://54.180.153.12:8000/supplier/${this.state.supplier_id}`)
      .then(response => response.json())
      .catch(()=> dummyStoreData)
      .then(res =>{
        this.setState({
          name : res[0]['name'],
          branch : res[0]['branch'],
          address : res[0]['address'],
          img_src : res[0]['img_src'],
          phone : res[0]['phone'],
          zipcode: res[0]['zipcode'],
        }, () => {
          console.log("제대로 데이트 들어가나 : ", this.state);
        })
      });
  }

  getTestData = () => {
    fetch(`http://54.180.153.12:8000/supplier/2`)
      .then(response => response.json())
      .then(res =>{
        console.log("민수님이 뭐 보내주나? : ", res);
      });
  }
  
  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.contentsBox}>
          <Text style={styles.title}>{this.state.branch}으로 선택하시겠어요?</Text>
          <Image
            style={styles.storeImg}
            source={{uri:`${this.state.img_src}`}}
          />

          <Text style={styles.storeName}>{this.state.name} {this.state.branch}</Text>
          <Text style={styles.storeAddress}>{this.state.address}</Text>
          <View style={styles.storeContactWrapper}>
            <Text style={styles.storeContact}>문의 : {this.state.phone}</Text>
          </View>
          <Text style={styles.distanceInfo}>*결제 및 주문은 매장 2km 이내에서 가능합니다.</Text>

          <View style={styles.buttons}>
            <Button type="solid" containerStyle={{flex:1, marginRight:6,}} buttonStyle={styles.btnLeft} title="취소" onPress={ () => this.props.navigation.goBack()} />
            <Button type="solid" containerStyle={{flex:1, marginLeft:6,}} buttonStyle={styles.btnRight} title="주문하기" onPress={ () => this.props.navigation.navigate("Home")} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentsBox:{
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6, borderRadius: 12,
    backgroundColor: 'white',
    padding: 20,
    
  },
  title:{
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 24,
  },
  storeImg:{
    alignSelf: 'stretch',
    borderRadius: 4,
    height: 140,
    marginTop: 15,
  },
  storeName:{
    marginTop: 20,
    fontSize: 24,
    color: '#c18d3a',
    fontWeight: '900',
  },
  storeAddress:{
    fontSize: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#dddddd',
    paddingVertical: 16,
    color: '#303030',
  },
  storeContactWrapper:{
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#dddddd',
  },
  storeContact:{
    fontSize: 14,
    fontWeight: '700',
    paddingVertical: 16,
    color: '#c18d3a',
  },
  distanceInfo:{
    fontSize: 11,
    color: '#666666',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttons:{
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  btnLeft:{
    borderRadius: 4,
    backgroundColor: '#dddddd',
  },
  btnRight:{
    borderRadius: 4,
    backgroundColor: '#c18d3a',
  }
})
