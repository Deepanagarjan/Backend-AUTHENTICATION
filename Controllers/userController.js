import user from "../Models/userSchema.js";
import bcrypt from "bcrypt";

export const registeruser = async(req, res);
try {
  const { username, email, password } = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  //   console.log(hashpassword);
  const newUser = new User({ username, email, password: hashpassword });
  await newUser.save();
  res.status(200).json({
    message: "User Registered Successfully",result:"newUser",
    data: newUser,
  });
} catch (error) {
  console.log(error);
  res.status(500).json({
    message: "Registration Failed Internal server Error",
  });
}

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!userDetail) {
      return res.status(401).json({ message: "User Not Found" });
    }
    const passwordMatch = await bcrypt.compare(password, userDetail.password);
    if (!user) {
      return res.status(401).json({ message: "Invalid" });
    }
    res.status(200).json({ message: "User Logged In Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login Failed Interval Server error" });
  }
};
