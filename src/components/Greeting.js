import React, { components} from 'react';
import { Text } from 'react-native';

const Greeting = props => {
    return <Text>{props.text}</Text>
}

export default Greeting;