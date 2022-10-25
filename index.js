const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.port || 5000

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
   res.send('doc-technical server is running')
})

app.get('/categories-courses', (req, res) => {
   res.send(categories)
})

app.get('/courses', (req, res) => {
   res.send(courses);
})

app.get('/courses/:id', (req, res) => {
   const id = req.params.id;
   const singleCourse = courses.find(course => course._id === id);
   res.send(singleCourse);
})

app.get('/course-category/:id', (req, res) => {
   const id = req.params.id;
   if (id === "07") {
      res.send(courses)
   } else {

      const courseDetails = courses.filter(course => course.category_id === id);
      res.send(courseDetails);
   }
})

app.listen(port, () => {
   console.log(`doc server is runing ${port}`);
})