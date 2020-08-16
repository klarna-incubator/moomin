import express from "express";
import cors from "cors";
import { React, View, Text, useKnownComponent } from "moomin-server";

const Page1 = () => (
  <>
    <View>
      <Text style={{ color: "pink" }}>Hello World</Text>
    </View>
    <View>
      <Text style={{ color: "green" }}>1234567890</Text>
    </View>
  </>
);

const Page2 = () => {
  const Header = useKnownComponent("Header");
  return (
    <View>
      <Header color="red">Header 1</Header>
      <Text style={{ color: "blue" }}>Page Content</Text>
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
