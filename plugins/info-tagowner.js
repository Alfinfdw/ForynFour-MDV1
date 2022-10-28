let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = 'https://telegra.ph/file/0e4fb9bfb49f985ef053e.jpg'
await conn.send3ButtonImg(m.chat, krizyn, "=====『 TAG TERDETEKSI 』=====\n\nAda perlu apa panggil panggil bos saya, kangen yaa 🤪", '📮 Silahkan Pilih Button dibawah ini', 'Group', '.allgc', 'Menu', '.menu', 'Store', '.store', m)
                        
}
handler.customPrefix = /(@+4915256954581|@+4915256954581|@4915256954581|@4915256954581)/i
handler.command = new RegExp

module.exports = handler

//let handler = async (m, { conn }) => {
   //let krizyn = `https://telegra.ph/file/0e4fb9bfb49f985ef053e.jpg`
//let caption = `Ada perlu apa panggil panggil bos saya, kangen yaa 🤪`
 
//conn.send3But( m.chat, krizyn, caption, `📮 Silahkan pilih Button dibawah ini`, `Menu`, `.menu`, `Sewa`, `.sewa`, `Group`, `.allgc`, m)
       //}
//handler.customPrefix = /@riellofc|@riellofc|riellzyn|riellzynofc|riell|@ri|@ell aceh/i
//handler.command = new RegExp

//module.exports = handler\\
