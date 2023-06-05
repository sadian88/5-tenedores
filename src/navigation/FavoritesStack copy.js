import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { FavoritesScreen } from "../screens/Favorites/FavoritesScreen";
import { AddFavoritesScreen } from "../screens/Favorites/AddFavoritesScreen";


const Stack =createNativeStackNavigator();

export function FavoritesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.favorites.favorites}
                component={FavoritesScreen}
                options={{title:"Favorites"}}/>
            <Stack.Screen 
                name={screen.favorites.addFavorites}
                component={AddFavoritesScreen}
                options={{title:"Nuevo Favorites"}}/>
        </Stack.Navigator>
    );
}