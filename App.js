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

const options = {
    noData: true,
    mediaType: 'photo'
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            tags: 'No has subido ninguna imagen',
            avatarSource: null,
        }
    }

    selectImage = async () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                //const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                // Se guarda la imagen y se formtea para base64
                const base64img = 'data:image/jpeg;base64,' + response.data;

                this.setState({
                    avatarSource: response.uri,
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.avatarSource &&
                    <Image source={{ uri: this.state.avatarSource }} style={styles.image} />
                }
                <Button
                    title='Seleccione imagen'
                // onPress={this.selectImage}
                />
            </View>
        );
    }
}

export default App;