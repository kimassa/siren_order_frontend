import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from "react-native";

let colorArr = ["transparent", "#ebebeb"];

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

    addCommaToNumber = number => {
        const string = String(number);
        return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    render () {
        const { menuArr } = this.state;
    
   
        return (
            menuArr &&  
            (<View>
                <ScrollView>
                    <View style={styles.menuListHeader}>
                        <Text style={styles.menuListHeaderText}>뒤로</Text>
                        <Text style={styles.menuListHeaderText}>전체 메뉴</Text>
                        <Text style={styles.menuListHeaderText}>돋보기</Text>
                        <Text style={styles.menuListHeaderText}>카트</Text>
                    </View>
                    <View>
                        <FlatList
                            data={menuArr}
                            keyExtractor={menu => `menu-${menu.index}`}
                            renderItem={(menu) => {
                                return (
                                <View style={{backgroundColor : colorArr[menu.index % 2]}}>
                                    <View style={styles.menuList} >
                                        <View style={styles.menuImageWrap}>
                                            <Image style={styles.menuImage } source={{uri: "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2018/08/28/nestle-gains-unparalleled-position-in-coffee-business-with-starbucks-alliance/8543630-1-eng-GB/Nestle-gains-unparalleled-position-in-coffee-business-with-Starbucks-alliance_wrbm_large.jpg"}}></Image>
                                        </View>
                                        <View style={styles.menuDetailWrap}>
                                            <View><Text style={styles.menuName}>{menu.item.name}</Text></View>
                                            <View><Text style={styles.menuNameEnglish}>Menu in English</Text></View>
                                            <View><Text style={styles.menuPrice}>{this.addCommaToNumber(menu.item.price)}원</Text></View>
                                        </View>
                                    </View>
                                </View>
                                )
                            }}
                        />
                    </View>
                </ScrollView>
            </View>)
       
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
        paddingTop: 20
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