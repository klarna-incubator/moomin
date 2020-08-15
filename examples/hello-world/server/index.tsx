import express from 'express';
import cors from 'cors';
import { React, View, Text } from '../../../packages/moomin-server'

const MyPageContent = () => (
  <>
    <View>
      <Text style={{ color: 'pink' }}>Hello World</Text>
    </View>
    <View>
      <Text style={{ color: 'yellow' }}>1234567890</Text>
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
