const signUp = require("../Model/SignupModel");
const asyncCatch = require("../Utils/asyncCatch");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const genToken = (id) => {
  const token = jwt.sign({ id }, "thisissecretkey");
  return token;
};
// user signup
exports.signup = asyncCatch(async (req, res) => {
  const { username, email, password, cpassword } = req.body;
  if (password === cpassword) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userSignedup = await signUp.create({
      username,
      email,
      password: hashedPassword,
      cpassword: undefined,
    });
    const token = genToken(userSignedup._id);
    // console.log(token);
    if (userSignedup) {
      res.cookie("user", token);
      res.json({
        message: "Account created Successfuly",
        userDetails: userSignedup,
      });
    }
  } else {
    res.json({ message: "Password and Confirm passowrd must be same" });
  }
});
// user login
exports.login = asyncCatch(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await signUp.findOne({ email });
  const hashedPassword = await bcrypt.compare(password, findUser.password);
  console.log(hashedPassword);
  if (findUser && hashedPassword) {
    const token = genToken(findUser._id);
    res.cookie("user", token);
    res
      .status(200)
      .json({ message: "successfully logged in", userDetails: findUser });
  }
});
