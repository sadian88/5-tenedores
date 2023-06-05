import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { screen } from "../utils";
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurantScreen";

const Stack =createNativeStackNavigator();

export function RestauranteStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.restaurant.restaurants}
                component={RestaurantsScreen}
                options={{title:"Restaurantes"}}/>
            <Stack.Screen 
                name={screen.restaurant.addRestaurant}
                component={AddRestaurantScreen}
                options={{title:"Nuevo Restaurante"}}/>
        </Stack.Navigator>
    );
}