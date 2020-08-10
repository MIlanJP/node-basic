const express = require('express');
const router=express.Router();
const courses = [
    { id: 1, name: "Rakesh" },
    { id: 2, name: "Milan" },
    { id: 3, name: "Mahesh" },
  ];
router.get("/", (req, res) => {
    res.send(courses);
  });
  
  router.get("/api/name/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("THe given id was not found");
    res.send(course);
  });
  
  router.post("/api/name", (req, res) => {
    // const schema = {
    //   name: Joi.string().min(3).required()
    // };
  
    // const result = Joi.validate(req.body, schema);
    // console.log(result);
  
    if (!req.body.name || req.body.name.length < 3) {
      res
        .status(400)
        .send("Name is required and must be at atleast of 3 letters ");
    }
    const course = {
      id: req.body.id,
      name: req.body.name,
    };
    courses.push(course);
    res.send(course);
  });
  

  router.post("/api/course", (req, res) => {
    const course = {
      id: course.length + 1,
      name: req.body.name,
    };
    courses.push(courses);
    res.send(course);
  });
  
  router.get("/api/course/:Id", (req, res) => {
    res.send(req.params.Id);
  });
  router.get("/api/course/:Id/:d", (req, res) => {
    res.send(req.params);
  });
  
  module.exports=router;