import express from 'express';
import cors from 'cors';
import { React, View, Text } from '../../../packages/moomin-server'

const MyPageContent = () => (
  <>
    <View style={{ background: 'pink' }}>
      <Text>Hello World</Text>
    </View>
    <View style={{ background: 'yellow' }}>
      <Text>1234567890</Text>
    </View>
  </>
)

const app = express();

app.use(cors());

app.get("/views/my-page", function (req, res) {
  res.send(<MyPageContent />);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
