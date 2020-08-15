# Moomin
> Server side rendering for React Native mobile apps.

[![Build Status][ci-image]][ci-url]
[![License][license-image]][license-url]
[![Developed at Klarna][klarna-image]][klarna-url]

> TODO: rewrite this part

Moomin allows parts of your React Native app to de loaded from your server. This makes pushing updates, fixing bugs or running A/B tests as simple as making changes to a web app rendered on the server. It also supports:
 - Make apps extendable by safely embedding native UI from third party plugins.
 - Develop apps by teams distributed across multiple organizations, or make it decentralized.

## Usage example

Loading a view from the server is as simple as adding a component on your client. Moomin will fetch the view definition from the given source URL and render it on the client.

```tsx
// App.tsx
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RemoteView } from "moomin-view";

const Header = ({ color, children }) => (
  <Text style={{ color, fontSize: 22 }}>{children}</Text>
)

export default function App() {
  return (
    <View style={styles.container}>
      <RemoteView key="page1" src="http://localhost:3000/views/page1" />
      <Text>----------</Text>
      <RemoteView key="page2" src="http://localhost:3000/views/page2" components={{ Header }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

On the server side, you can use JSX to define your views.

```tsx
// server.tsx
import express from 'express';
import cors from 'cors';
import { React, View, Text, useKnownComponent } from 'moomin-server'

const Page1 = () => (
  <>
    <View>
      <Text style={{ color: 'pink' }}>Hello World</Text>
    </View>
    <View>
      <Text style={{ color: 'green' }}>1234567890</Text>
    </View>
  </>
)

const Page2 = () => {
  const Header = useKnownComponent('Header')
  return (
    <View>
      <Header color="red">Header 1</Header>
      <Text style={{ color: 'blue' }}>Page Content</Text>
    </View>
  )
}

const app = express();

app.use(cors());

app.get("/views/page1", function (req, res) {
  res.send(<Page1 />);
});

app.get("/views/page2", function (req, res) {
  res.send(<Page2 />);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});

```

> TODO: Add a few motivating and useful examples of how your project can be used. Spice this up with code blocks and potentially more screenshots and diagrams.

_For more examples and usage, please refer to the [Docs](TODO)._

## Development setup

> TODO: Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

## How to contribute

See our guide on [contributing](.github/CONTRIBUTING.md).

## Release History

See our [changelog](CHANGELOG.md).

## License

Copyright © 2020 Klarna Bank AB

For license details, see the [LICENSE](LICENSE) file in the root of this project.


<!-- Markdown link & img dfn's -->
[ci-image]: https://img.shields.io/badge/build-passing-brightgreen?style=flat-square
[ci-url]: https://github.com/klarna-incubator/TODO
[license-image]: https://img.shields.io/badge/license-Apache%202-blue?style=flat-square
[license-url]: http://www.apache.org/licenses/LICENSE-2.0
[klarna-image]: https://img.shields.io/badge/%20-Developed%20at%20Klarna-black?labelColor=ffb3c7&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAALQAAAAAQAAAtAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABCgAwAEAAAAAQAAAA4AAAAA0LMKiwAAAAlwSFlzAABuugAAbroB1t6xFwAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAVBJREFUKBVtkz0vREEUhsdXgo5qJXohkUgQ0fgFNFpR2V5ClP6CQu9PiB6lEL1I7B9A4/treZ47c252s97k2ffMmZkz5869m1JKL/AFbzAHaiRbmsIf4BdaMAZqMFsOXNxXkroKbxCPV5l8yHOJLVipn9/vEreLa7FguSN3S2ynA/ATeQuI8tTY6OOY34DQaQnq9mPCDtxoBwuRxPfAvPMWnARlB12KAi6eLTPruOOP4gcl33O6+Sjgc83DJkRH+h2MgorLzaPy68W48BG2S+xYnmAa1L+nOxEduMH3fgjGFvZeVkANZau68B6CrgJxWosFFpF7iG+h5wKZqwt42qIJtARu/ix+gqsosEq8D35o6R3c7OL4lAnTDljEe9B3Qa2BYzmHemDCt6Diwo6JY7E+A82OnN9HuoBruAQvUQ1nSxP4GVzBDRyBfygf6RW2/gD3NmEv+K/DZgAAAABJRU5ErkJggg==
[klarna-url]: https://github.com/klarna-incubator
