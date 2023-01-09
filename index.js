const userInfo = require('./information');
var cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Je suis ${userInfo.name} et je suis au campus ${userInfo.campus}`
}))