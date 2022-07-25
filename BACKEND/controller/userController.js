const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const UserModel = require("../model/userModel");

//--------REGISTER USER
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const User = await UserModel.findOne({ email: email });
  if (User) {
    return res.status(200).send({ message: "User already registerd" });
  }
  const hash = bcrypt.hashSync(password, saltRounds);
  let userregister = { name, email, password: hash };

  const userData = await UserModel.create(userregister);
  return res.status(201).send({
    status: true,
    message: "Successfully Registered, Please login now.",
    data: userData,
  });
};

//--------LOGIN USER
const loginUser = async (req, res) => {
    const body=req.body
  const { email, password } = body;
  let user = await UserModel.findOne({ email: email });

  if (user) {
    //-----------CHECK USER PASSWORD WITH HASHED PASSWORD STORED IN THE DATABASE
    const validPassword = await bcrypt.compare(
      password,
      user.password
    );
    console.log(req.body.password)
    if (validPassword) {
      //-----------JWT GENERATE WITH EXPIRY TIME AND PRIVATE KEY
      const generatedToken = jwt.sign(
        {
          userId: user._id,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 60 * 360,
        },
        "MERNPRIVATEKEY"
      );
      return res.status(200).send({
        status: true,
        Message: " user logged Succesfull",
        data: {
          userId: user._id,
          token: generatedToken,
          message:"logged successfully"
        },
      });
    } else {
      res.status(400).send({ error: "User does not exist with that password" });
    }
  } else {
    return res
      .status(401)
      .send({ status: false, message: "Oops...Invalid credentials" });
  }
};

module.exports = { registerUser, loginUser };
