import React from 'react';
import { View, Text } from 'react-native';

const TestComponent = () => {
    return (React.createElement(View, null,
        React.createElement(Text, null, "hello world")));
};

export { TestComponent };
