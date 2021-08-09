const signUp = require("../Model/SignupSchema");
const asyncCatch = require("../Utils/asyncCatch");
const hash = require("bcryptjs");
//1.fetch all the users
exports.FetchAllUsers = asyncCatch(async (req, res) => {
  const allUsers = await signUp.find();
  let lengthUsers = allUsers.length;
  if (allUsers) {
    res.status(200).json({ Records: lengthUsers, users: allUsers });
  }
});
//2.delete single user
exports.DeletSingleUser = asyncCatch(async (req, res) => {
  const { _id } = req.params;
  const userDeleted = await signUp.findByIdAndDelete({ _id });
  if (userDeleted) {
    res
      .status(200)
      .json({ success: true, messege: "Record deleted successfully" });
  }
});
//3.updateUser single user
exports.updateUser = asyncCatch(async (req, res) => {
  const { _id } = req.params;
  console.log(req.body);
  const userUpdated = await signUp.findByIdAndUpdate({ _id }, req.body);
  if (userUpdated) {
    res
      .status(200)
      .json({ success: true, message: "User updated successfully" });
  }
});
