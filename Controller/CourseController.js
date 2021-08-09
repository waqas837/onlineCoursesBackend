const CourseModel = require("../Model/CourseSchema");
const asycCatch = require("../Utils/asyncCatch");
//1.add a new course
exports.addNewCourse = asycCatch(async (req, res) => {
  console.log(req.body)
  const data = await CourseModel.create(req.body);
  if (data) {
    res.status(200).json({ success: true, courses:data });
  } else {
    res.status(404).json({ message: "Data failed to update language" });
  }
});
//2.let fetch all default values;
exports.getAllCourseData = asycCatch(async (req, res) => {
  const data = await CourseModel.find().select("coursename instructorname coursecategoryname");
  var newData = data.map((val) => val);
  if (data) {
    res.status(200).json({ success: true, newData });
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

//3.add a new courseField
exports.addCourseField = asycCatch(async (req, res) => {
  const data = await CourseModel.updateOne({
    $addToSet: { courselevel: { title: req.body.title } },
  });
  if (data) {
    res.status(200).json({ success: true, data });
  } else {
    res.status(404).json({ message: "Data failed to update course field" });
  }
});
//4.add a new language field
exports.addLanguage = asycCatch(async (req, res) => {
  const data = await CourseModel.updateOne({
    $addToSet: { language: { title: req.body.title } },
  });
  if (data) {
    res.status(200).json({ success: true, data });
  } else {
    res.status(404).json({ message: "Data failed to update language" });
  }
});
