import cors from "cors";
import express from "express";
import { Image, React, Text, useKnownComponent, View } from "moomin-server";
import path from "path";

const PORT = process.env.PORT || 3000;

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
      <Image style={{ height: 128, width: 128 }} src="/logo.png" />
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

app.use(express.static(path.join(process.cwd(), "public")));

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.get("/views/page1", function (req, res) {
  res.send(<Page1 />);
});

app.get("/views/page2", function (req, res) {
  res.send(<Page2 />);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
