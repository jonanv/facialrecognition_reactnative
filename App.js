import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#777'
    }
});

class App extends Component {
    selectImagePicker = () => {

    }
    render() {
        return(
            <View styles={styles.container}>
                <Button
                    title="Seleccione foto"
                    onPress={this.selectImagePicker}
                />
            </View>
        );
    }
}

export default App;