import React, { Component } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    image: {
        width: '80%',
        height: 200,
        resizeMode: 'contain'
    }
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            avatarSource: null,
        }
    }

    // selectImage = async() => {
    //     return 
    // }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.image}/>
                <Button 
                    title='Seleccione imagen'
                    // onPress={this.selectImage}
                />
            </View>
        );
    }
}

export default App;