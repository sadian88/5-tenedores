import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { SearchScreen } from "../screens/Search/SearchScreen";


const Stack =createNativeStackNavigator();

export function SearchStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.search.search}
                component={SearchScreen}
                options={{title:"Searchs"}}/>
        </Stack.Navigator>
    );
}