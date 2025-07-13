//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5NcG95eUg2K3NiWGNqT295U29qdFJkam5JSUVDL1NRcGc5c0lNbXExaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmZsWnVuSXVlamxBNE5QUENSTkpEUXAxcWJiN0JaZkVSUFVjYURlM05DST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSEIxTS9PN0oyNy9CVm5qbWhVYzBrbGlHZ1NBTngrcEtYL0pRMnNDc0VnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwZnQxYXppQ29sLzVtRThxOFVkUEs5aGNkYjdrWTlYT3lDWG1MM3JMcFF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMQ2lpaHpObzBxRXNac2Y5Y1lJNDUwK2w5d3UzU2dkZDVlNVc2dWVpWG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBYV1B1bVdIbUZkcWlOa1dsNElhYjVydG9zbVhwanpCSlEyeWhWcmZuU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0EyRFJxemtrenJkQUNrU29xQjJOMzNHTVRpR1YxQnIvaWNmLytmSWluTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlhZZ0pwL0tuY250M0U1RmdEbEdEL0FDUE9VNjVvWGo0RkhJdzB1TTF6OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZGYWVkR3Z4Sk1SOHBrNUFzOERKU3NyWkZVVVU1WTJFL2ljZm5TT0VWU1hBSDBqTUZxTkRUNFhLcGsrNTgxaFhkMjl4aUtXUlc4ZHNraCtYTWhKN2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6InM4blZIdzk0a0diOFpNK1hSSnVEc0ZEMTcyOThRVkwvVFhqTkFFQ3VmVkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxjUHdHOEItU29TU1Y1NGh2VnNQd3ciLCJwaG9uZUlkIjoiODI0MmQ1NDYtNDA5MC00NGIwLTliZDQtMzg3MzFhNWM5NmJkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFd1BTcWRQRmJzQkEwc1Z2ZXVGL2FpREcwWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMExsMnJKNGw2V1Nud0VoVGxyc2lodVE2RkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVZCRE1LRVoiLCJtZSI6eyJpZCI6Ijk0NzA0MDIwMTQ2OjE2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTc4NjAyMzg5ODYwNTY2OjE2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFR6eEt3SEVPbVB6c01HR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZDlRL01zQUx0VkhoSUpVQVZ4REk0SXJCL0g1dmc0VTdXR1docHRGK05GWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ2Zmc2pTdE9mTVFlSHk2VzdscloyeGFubGkya2ZiWmFBbCtHOEFEekdjZWRiREQrcWlpSGdVcmNERForUWNQTUJEazdUOVBjVGlOVUdyc1o4a29CQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlYyMjZpRGNFMTU2dm9TN3o2dHZ3TzlGN0ZCbEtjeXBYTUs5TXU1VHBNM0hNeDdUZEVTL3hyc3A1YU9NZG9sVjFoWEp4aUh3Q0ZwNkd3Nnc3bEJOeWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDQwMjAxNDY6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGZVUHpMQUM3VlI0U0NWQUZjUXlPQ0t3ZngrYjRPRk8xaGxvYWJSZmpSVyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyNDAxOTEwLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
