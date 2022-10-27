// POWERED By KrisynOfc
// Credit jangan dihapus ngabss
let fs = require('fs')
let moment = require('moment-timezone')
let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix: _p }) => {
//let info = `TES TES NDASMU BOTAK 🤪`
let emot = `${pickRandom(['💨', '🆗️','👌'])}`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99999, status: 1, surface: 1, message: `${ucapan()}`, orderTitle: wm, thumbnail: await (await fetch(`${pickRandom(['https://telegra.ph/file/d33a2445b4aa2f815c847.jpg', 'https://telegra.ph/file/8da7bc30ebf77ce2f1f52.jpg', 'https://telegra.ph/file/a98e2d41223028119dc35.jpg', 'https://telegra.ph/file/00441ccc1bcb8b1e88ae6.jpg'])}`)).buffer(), sellerJid: '0@s.whatsapp.net' } } }
         let user = global.db.data.users[m.sender]
    let nme = await conn.getName(m.sender)
	let bby = fs.readFileSync('./sound/forynfour.mp3')
          conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
await conn.sendFile(m.chat, bby, 'forynfour.mp3', null, ftroli, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true,// true diatas ga work, sebab dipaksa tanpa convert ;v
contextInfo: { 
         externalAdReply: { 
         showAdAttribution: true,
 	     sourceUrl: `${pickRandom([`https://vt.tiktok.com/ZSRBqB9q1/`, `https://www.instagram.com/riellxd_04`, `https://youtube.com/RIELLBOTZ OFFC`])}`,
           title: 'KHURUSHIBOTZ ONLINE 🥰',  
            body: `Ada yang bisa dibantu ?`, 
           thumbnail: await (await fetch(`${pickRandom(['https://telegra.ph/file/0e4fb9bfb49f985ef053e.jpg', 'https://telegra.ph/file/0e4fb9bfb49f985ef053e.jpg', 'https://telegra.ph/file/0e4fb9bfb49f985ef053e.jpg', 'https://telegra.ph/file/0e4fb9bfb49f985ef053e.jpg'])}`)).buffer()
}
     }
})
}
/*conn.reply(m.chat, info, m, { quoted: fakes },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://Instagram.com/riellxd_04",
      mediaType: 2,
      description: "https://Instagram.com/riellxd_04", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|tc|tst|ts|test)$/i

handler.command = new RegExp



export default handler*/

/*const message = {
            document: { url:thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌎 OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    callButton: {
                        displayText: '📞 Add me',
                        phoneNumber: nomorown
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'PING',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'DONASI',
                        id: '.donasi'
                    }
                },
            ]
        }
        return await conn.sendMessage(m.chat, message)*/

/*await conn.reply(m.chat, info, m, null, { 
      contextInfo: { 
            externalAdReply: 
            {title: global.wm, 
             body: 'Ada yang bisa dibantu ?', 
             sourceUrl: sgc, 
             thumbnail: fs.readFileSync('./thumbnail.jpg')  
            }}})*/

handler.customPrefix = /^(forynfour|krizyn|boti|bot|boty)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Dinihari 🌛"
  if (time >= 4) {
    res = "Selamat Pagi ⛅"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌤"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}
