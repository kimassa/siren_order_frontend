import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";



class MenuList extends Component { 
 
    state = {
        menuArr: [],
    }
   
    componentDidMount = async () => {

        const response = await fetch("http://54.180.153.12:8000/product/");
        const menuData = await response.json();
        this.setState({
            menuArr: menuData
        })    
    }

    AddCommaToNumber = number => {
        const string = String(number);
        return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    render () {
        const { menuArr } = this.state;
   
        return (
        <View>
            <ScrollView>
                <View style={styles.menuListHeader}>
                    <Text style={styles.menuListHeaderText}>뒤로</Text>
                    <Text style={styles.menuListHeaderText}>전체 메뉴</Text>
                    <Text style={styles.menuListHeaderText}>돋보기</Text>
                    <Text style={styles.menuListHeaderText}>카트</Text>
                </View>
                <View>
                    {menuArr.map((menu, idx) => 
                    <View style={styles.menuList} key={`menu-${idx}`} >
                        <View style={styles.menuImageWrap}>
                            <Image style={styles.menuImage} source={{uri: "https://cdn.foodbeast.com/wp-content/uploads/2017/08/Starbucks-Hot-Cup-STK-01.jpg"}}></Image>
                        </View>
                        <View style={styles.menuDetailWrap}>
                            <View><Text style={styles.menuName}>{menu.name}</Text></View>
                            <View><Text style={styles.menuNameEnglish}>Menu in English</Text></View>
                            <View><Text style={styles.menuPrice}>{this.AddCommaToNumber(menu.price)}원</Text></View>
                        </View>
                    </View>
                    )}
                </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({

    menuListHeader: {
        backgroundColor: "black",
        flexDirection: "row",
    },

    menuListHeaderText: {
        color: "white",
        fontSize: 20,
        paddingVertical: 5,
    },

    menuList: {
        flexDirection: "row",
        marginBottom: 30,
    },

    oddList: {
        backgroundColor: "gray"
    },

    evenList: {
        backgroundColor: "transparent"
    },

    menuDetailWrap: {
       paddingTop: 15
    },

    menuImageWrap : {
        marginRight: 20,
        marginLeft: 20,
    },
    menuImage: {
        width: 90,
        height: 90,
        borderRadius: 45
    },

    menuName : {
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 7
    },

    menuNameEnglish: {
        fontSize: 13,
        marginBottom: 7
    },

    menuPrice: {
        fontWeight: "bold",
        fontSize: 15,
    }

});

export default MenuList;