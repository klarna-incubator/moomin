import express from "express";
import cors from "cors";
import {
  React,
  View,
  Text,
  useKnownComponent,
} from "../../../packages/moomin-server";

const Page1 = () => (
  <>
    <View>
      <Text style={{ color: "#ffb3c7" }}>Moomin</Text>
    </View>
    <View>
      <Text style={{ color: "green" }}>1234567890</Text>
    </View>
  </>
);

const Page2 = () => {
  const Header = useKnownComponent("Header");
  const SubTitle = useKnownComponent("SubTitle");
  return (
    <View style={{ display: "flex", flex: 1, justifyContent: "center" }}>
      <Header color="#ffb3c7">Moomin</Header>
      <SubTitle color="#ffffffbb">
        Server side rendering for React Native applications.
      </SubTitle>
      <Text style={{ color: "#fff", fontSize: 18 }}>
        With Moomin you get to reap the benefits of SSR in your React Native
        Applications such as: instant client updates, improved performance and
        smaller app bundles.
      </Text>
    </View>
  );
};

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
