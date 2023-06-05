import React from 'react'
import {View, Text} from 'react-native'
import { Button } from 'react-native-elements';
import { screen } from '../../utils';

export function RestaurantsScreen(props) {
  const { navigation } = props;

  const goToAddRestaurant =()=>{
    navigation.navigate(screen.restaurant.addRestaurant);
  }

  return (
    <View>
        <Text> Estamos en la Screen Restaurante</Text>
        <Button title="Agrega nuevo" onPress={goToAddRestaurant}/>
    </View>
  )
}
