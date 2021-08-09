const courseController = require("../Controller/CourseController");
const router = require("express").Router();
const Auth = require("../Middleware/Auth");
// this route also contains the fetch defualt languages
router.route("/addNewCourse").post(Auth, courseController.addNewCourse);
router.route("/getAllCourseData").get(Auth, courseController.getAllCourseData);
router.route("/addCourseField").post(Auth, courseController.addCourseField);
router.route("/addLanguageField").post(Auth, courseController.addLanguage);
module.exports = router;
