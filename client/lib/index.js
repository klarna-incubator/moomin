import React from 'react';
import { View, Text } from 'react-native';

const TestComponent = () => {
    return (React.createElement(View, null,
        React.createElement(Text, null, "hello world")));
};

const map = {
    View,
    Text,
};
function deserialize(json, i) {
    if (json === null)
        return null;
    if (typeof json === "string")
        return json;
    if (Array.isArray(json))
        return json.map(deserialize);
    const Component = map[json.type];
    if (!Component)
        return null;
    const { children = null, ...rest } = json.props;
    return (React.createElement(Component, Object.assign({}, rest, { key: i }), deserialize(children)));
}

function useSerializedView(src) {
    const [status, setStatus] = React.useState("loading");
    const [serializedRemote, setSerializedRemote] = React.useState(null);
    // on mount, fetch the data
    React.useEffect(() => {
        (async () => {
            try {
                const remote = await fetch(src);
                setSerializedRemote(remote.json());
                setStatus("success");
            }
            catch (err) {
                setStatus("error");
            }
        })();
    }, []);
    return {
        status,
        serializedRemote,
    };
}
function RemoteView(props) {
    const { src } = props;
    const { status, serializedRemote } = useSerializedView(src);
    // todo: add error, loading components
    if (status !== "success")
        return null;
    return deserialize(serializedRemote);
}

export { RemoteView, TestComponent, deserialize };
