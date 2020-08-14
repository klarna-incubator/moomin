import express from 'express';
import { React, Text } from '../../../packages/moomin-server'

const MyPageContent = () => (
  <Text>Hello World</Text>
)

const app = express()

app.get('/views/my-page', function (req, res) {
  res.send(<MyPageContent />)
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})
