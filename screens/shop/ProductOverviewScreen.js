import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart'
const ProductOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate("ProdcutDetail", {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title,
                        })
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item))
                     }} />)
            } />
    )
}

ProductOverviewScreen.navigationOptions = {
    title: 'All Products'
}

const styles = StyleSheet.create({

})


export default ProductOverviewScreen;