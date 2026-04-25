const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_47_04_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICAyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvcWtuS2owOFBEN3Y0eEdsUElXZG5RUnVBU0tWYWlqMzdEL2dpdVpaVHpRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQzNjg2MzgzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTUxNkY5MkU0MTNCRUI2QUFDQThEMEY3NzAwMDQ2RTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzc3MTUzNjM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDM2ODYzODMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNTNDQTdCOTdDM0E4RDk0NDRGNjhBNUNDOTVDODAyOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NzcxNTM2MzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQzFhSnFhY3ZTSWFaWnJVTEV1c3NoQVwiLFxuICBcInBob25lSWRcIjogXCI3ZWIzNzZlNC1hODA5LTRjODktYTNmYS1hMTQ1MmE2Mzk2ZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMjE1LFxuICAgICAgMTExLFxuICAgICAgMjM4LFxuICAgICAgNzIsXG4gICAgICAxMCxcbiAgICAgIDE4NCxcbiAgICAgIDE4NCxcbiAgICAgIDE5NSxcbiAgICAgIDExOSxcbiAgICAgIDEwNSxcbiAgICAgIDE1NixcbiAgICAgIDEzOCxcbiAgICAgIDE5LFxuICAgICAgNTIsXG4gICAgICAxMjIsXG4gICAgICAxOCxcbiAgICAgIDM4LFxuICAgICAgNDMsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDEwNCxcbiAgICAgIDEzLFxuICAgICAgMTgxLFxuICAgICAgOTEsXG4gICAgICAyMDksXG4gICAgICA3NyxcbiAgICAgIDU3LFxuICAgICAgMTc2LFxuICAgICAgNTQsXG4gICAgICA2MyxcbiAgICAgIDIwNCxcbiAgICAgIDIyNCxcbiAgICAgIDQsXG4gICAgICAxMTAsXG4gICAgICAyNDgsXG4gICAgICAyNCxcbiAgICAgIDE1LFxuICAgICAgOTMsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJKzgxMVlRMmV5MHp3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNMaTRMYkJwUU5KY1ZJRHh2bjQzdmNzaU9xV1l6bFFrODJVZ010NTk3eEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVlU0dG84TUFHLzJ5TDcwdGFrZlJRVldJdmpBVDJIZy9pOHBPL1g1UjhxbWxDQW1pamlUdURNWFE4Ly85dGVJVVFCcGV3OFkwL2k4eVdNbkxrV0F1RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRzNiWlNOb3V5dUxUMUlOakk3LzZsejRCTE9HVHNVVE1nZHZ5SlhzeTJObFFhQ0JLWU5aSVZxVFMxMWdzMTl1cUllN2xNQzE5VUpESTNPUjZEVHdSaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MzY4NjM4MzM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktpbmdcIixcbiAgICBcImxpZFwiOiBcIjk4NzA3NTI1NTk5MjUwOjZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MzY4NjM4MzM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NzcxNTM2MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEZ0lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURnSS5qc29uIjogIntcImtleURhdGFcIjpcIlJNb2pRMTYybVJlcDcyUGoyZmtpSllsYVR3b2F4d0JMVFFUMzY2eldZdXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxNzg4MTc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NzcxNTM2MzE3MjVcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
