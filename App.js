import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

import ImagePicker from 'react-native-image-picker';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#777'
    }
});

const options = {
    title: 'Seleccionar foto',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    // storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    // },
    noData: true,
    mediaType: 'photo'
};

class App extends Component {

    state = {
        avatarSource: null
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
                const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    render() {
        return (
            <View styles={styles.container}>
                {
                    this.state.avatarSource &&
                    <Image style={{ width: '80%', height: 200, resizeMode: 'contain' }} />
                }
                <Button
                    title="Seleccione foto"
                    onPress={this.selectImage}
                />
            </View>
        );
    }
}

export default App;