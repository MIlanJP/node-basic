const express = require("express");
const app = express();
const Joi=require("joi");
const courses = [
  { id: 1, name: "Rakesh" },
  { id: 2, name: "Milan" },
  { id: 3, name: "Mahesh" },
];
// IN APP we have methods like get post put delete
// ('/') inside app.get() so this is how you define route

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/api/names',(req,res)=>{
    res.send(courses)
})

app.get('/api/name/:id',(req,res)=>{
  const course= courses.find(c=> c.id=== parseInt(req.params.id))
    if(!course) res.status(404).send("THe given id was not found")
    res.send(course)
})

app.post('/api/name',(req,res)=>{
    if(!req.body.name||req.body.name.length<3){
        res.status(400).send("Name is required and must be at atleast of 3 letters ")
    }
const course={
    id:req.body.id,
    name:req.body.name
}
courses.push(course)
res.send(course)

})

app.post("/api/course", (req, res) => {
  const course = {
    id: course.length + 1,
    name: req.body.name,
  };
  courses.push(courses);
  res.send(course);
});

app.get("/api/course/:Id", (req, res) => {
  res.send(req.params.Id);
});
app.get("/api/course/:Id/:d", (req, res) => {
  res.send(req.params);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
