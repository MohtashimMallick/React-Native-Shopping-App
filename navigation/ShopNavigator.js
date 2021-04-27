import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import ProductsOverviewScreen from "../screens/shop/ProductOverviewScreen";

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProdcutDetail: ProductDetailsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.pimary : ""
        },
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle:{
            fontFamily:"open-sans",
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.pimary
    }
});

export default createAppContainer(ProductsNavigator)