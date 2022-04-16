const TelegramBot = require('node-telegram-bot-api');

const Jimp = require('jimp');
const fs = require('fs');
const token = '992152693:AAGqVhAR34oZD3fiQ_mwWy9t2ulRiQdflw8';
 

const bot = new TelegramBot(token, {polling: true});
 
bot.onText(/\/echo (.+)/, (msg, match) => {
 
 
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});
 

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
 const ism = msg.chat.first_name;
  function yoz(mass){
    bot.sendMessage(chatId,mass);
  }
 let youmsg =msg.text;
 if(youmsg == '/start'){
  bot.sendMessage(chatId, 'Salom botimizga xush kelibsiz');}
  if(youmsg !== '/start'){
  // createand
fs.readFile('./main.jpg', function (err, data) {
    if (err) throw err;
    
    fs.writeFile('./img.jpg', data, function (err) {
        if (err) throw err;
        else{
        console.log('copied');
          writeimage();
        }
    });
});}
  
  
  function writeimage(){
let fileName = './img.jpg';
let imageCaption = youmsg;
let loadedImage;

Jimp.read(fileName)
    .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
//FONT_SANS__WHITE
    }) 
    .then(function (font) {
        loadedImage.print(font, 190,100, imageCaption,100) .write(fileName);
        sendimage();
    })
    .catch(function (err) {
       // console.error(err);
       if(err)throw err;
       
       
    });
    console.log('writed');
    
  }
   
 
function sendimage(){
  try{
 bot.sendPhoto(chatId,'./img.jpg');
   console.log('sending');
  
}
 //e{ cons;erle.log('xato yoq')}
 
catch (err){
  if(err)throw err;
  
  delimage();
}
}

 function delimage(){
let filePath = './img.jpg'; 
fs.unlink(filePath);
console.log('deleted');

 }
  

});
