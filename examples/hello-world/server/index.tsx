import express from "express";
import cors from "cors";
import { React, Text, View } from "../../../packages/moomin-server";

const MyPageContent = () => (
  <View>
    <View style={{ background: "pink" }}>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
    </View>
    <View>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
    </View>
  </View>
);

const app = express();

app.use(cors());

app.get("/views/my-page", function (req, res) {
  res.send(<MyPageContent />);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
