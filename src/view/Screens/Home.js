import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function Home({navigation}) {
    const [fileList, setFileList] = React.useState([]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon onPress={()=>navigation.navigate('LiveEditor')} name={'pencil'} type='entypo'/>
            ),
        });
    }, [navigation,]);

    return (
        <View>

        </View>
    );
}
