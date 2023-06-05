import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Icon} from "react-native-elements"
import { screen } from "../utils"
import { RestauranteStack } from "./RestaurantStack";
import { FavoritesStack } from "./FavoritesStack copy";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";



const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({route})=>({
            tabBarActiveTintColor:"#00a680",
            tabBarInactiveTintColor:"#646464",
            headerShown:false,
            tabBarIcon:({color, size})=> screenOptionsIcon(route,color,size),
            })}
        >
            <Tab.Screen name={screen.restaurant.tab} 
                component={RestauranteStack} 
                options={{title:"Restaurante"}}
            />

            <Tab.Screen name={screen.favorites.tab} 
                component={FavoritesStack} 
                options={{title:"Favoritos"}}
            />
            <Tab.Screen name={screen.rankin.tab} 
                component={RankingStack} 
                options={{title:"Ranking"}}
            />
            <Tab.Screen name={screen.search.tab} 
                component={SearchStack} 
                options={{title:"Buscar"}}
            />
            <Tab.Screen name={screen.account.tab} 
                component={AccountStack} 
                options={{title:"Perfil"}}
            />
        </Tab.Navigator>
    )
}

function screenOptionsIcon(route,color,size){
    let iconName;

    if(route.name===screen.restaurant.tab){
        iconName="compass-outline";
    }

    if(route.name==screen.favorites.tab){
        iconName="heart-outline";
    }

    if(route.name===screen.account.tab){
        iconName="home-outline";
    }

    if(route.name===screen.rankin.tab){
        iconName="star-outline";
    }

    if(route.name===screen.search.tab){
        iconName="magnify";
    }

    return (
        <Icon 
            type="material-community" 
            name={iconName} 
            color={color}
            size={size}
        />
    );
}
