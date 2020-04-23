//@flow

import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {CommonStyles} from '../../style/commonStyles';


const LiveEditor = () => {
    const [content, setContent] = useState('');

    const html = getHtmlByMarkDown(content);
    return (
        <View style={CommonStyles.f1}>
                <View style={styles.halfContainer}>
                    <ScrollView styles={styles.halfContainer}>
                        <HTMLView value={html ? html : ''}></HTMLView>
                    </ScrollView>
                </View>
                <View style={styles.halfContainer}>
                    <ScrollView style={{flex: 1}}>
                        <TextInput
                            style={{flex: 1, backgroundColor: '#fdffa7'}}
                            value={content}
                            onChangeText={setContent}
                            multiline/>
                    </ScrollView>
                </View>
        </View>
    );
};

const getHtmlByMarkDown = (val) => {
    let showdown = require('showdown'),
        converter = new showdown.Converter(),
        html = converter.makeHtml(val);
    return html;
};

const styles = StyleSheet.create({

    halfContainer: {
        flex: 1,
        borderWidth: 1,
        borderRightColor: 'gray',
    },
});

export default LiveEditor
