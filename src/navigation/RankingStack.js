import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { RankingScreen } from "../screens/Ranking/RankingScreen";


const Stack =createNativeStackNavigator();

export function RankingStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.rankin.rankin}
                component={RankingScreen}
                options={{title:"Rankings"}}/>
        </Stack.Navigator>
    );
}