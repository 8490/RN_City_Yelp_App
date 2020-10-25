import axios from "axios";
import React, {useEffect, useState} from "react";
import {SafeAreaView, View, Text, FlatList} from "react-native";

import {CityItem} from "../components"

const CityList = (props) => {
    const [cityList, setCityList] = useState([]);

    // ASYNC AWAIT
    const fetchCityData = async () => {
        const {data} = await axios.get("http://opentable.herokuapp.com/api/cities");
        console.log(data);
        setCityList(data.cities);
    }

    useEffect (() => {
        fetchCityData();
    }, [])

    const renderCities = ({item}) => <CityItem cityName={item} />

    const renderSeperator = () => <View style={{borderWidth: 1, borderColor: "#e0e0e0"}} />

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    keyExtractor={(_, index) => index.toString()}
                    data={cityList}
                    renderItem={renderCities}
                    ItemSeparatorComponent={renderSeperator}
                />
            </View>
        </SafeAreaView>
    )

}

export {CityList};