import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const RestaurantItem = (props) => {
    const price = (money) => {
        let star = "";
        for (let i=0; i < money; i++){
            star += "⭐"
        }
        return star
    }
    return (
        <TouchableOpacity style={styles.container} onPress={props.onSelect}>
            <Image
                style={styles.image}
                source={{ uri: props.restaurant.image_url }}
            />
            <View style={{flex:1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={styles.name}>{props.restaurant.name}</Text>
                <Text style={{fontSize: 20}} >{price(props.restaurant.price)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export { RestaurantItem };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bdbdbd',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    image: {
        height: Dimensions.get('window').height / 3
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        width: "75%"
    }
})