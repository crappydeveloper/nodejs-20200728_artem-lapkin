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


 // для отправки использовать sendMail()

  //try {
  	const user = await User.create(userData);
  //} catch (err) {
  //	ctx.status = err.status;
  //  ctx.body = {error: err.message};
  //}
  // Если mail не валидируется автоматически, то нужно добавить проверку в router.post('/register', ВОТ СЮДА, register);
};

module.exports.confirm = async (ctx, next) => {
  
};
