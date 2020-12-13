const { v4: uuid } = require('uuid');
const User = require('../models/User');
const sendMail = require('../libs/sendMail');

module.exports.register = async (ctx, next) => {
  const userData = {
    email: ctx.request.body.email,
    displayName: ctx.request.body.displayName,
    password: ctx.request.body.password,
    verificationToken: uuid()
  }

  const user = await User.create(userData);
  console.log(user);
};

module.exports.confirm = async (ctx, next) => {
  
};
