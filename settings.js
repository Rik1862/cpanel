require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6282139677593"
global.namaowner = "RK"
global.namaowner2 = "RK HOSTING"

//======== Setting Bot & Link ========//
global.namabot = "RK_BOTz" 
global.namabot2 = "RK_BOTz"
global.version = "v4.0.0"
global.foother = "Created By RK_BOTz"
global.waowner = "https://wa.me/6282139677593"
global.idsaluran = "-"
global.linkgc = 'https://chat.whatsapp.com/JPeR7XA9EHv6vK7Sb9O9SG'
global.linkgc2 = "https://chat.whatsapp.com/JPeR7XA9EHv6vK7Sb9O9SG"
global.linksaluran = "https://whatsapp.com/channel/0029VaiISgn6LwHmH5aFKg0E"
global.linkyt = 'https://youtube.com/@rk_anonim'
global.packname = "Created By RK"
global.author = "RK"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 3500

//========== Setting Foto ===========//
global.imgreply = "https://telegra.ph/file/bb43093cdf87bd1867157.png"
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = "https://telegra.ph/file/bb43093cdf87bd1867157.png"
global.imgpanel = fs.readFileSync("./media/Panel.jpg")


//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://dwiz-host.rkhosttting.xyz"
global.apikey = "ptla_PKRMeLAYakHfRIRuNez9RXOsrDDQRR6jtfu3R6MKoXK" //ptla
global.capikey = "ptlc_i8als0yfFnxuUf2c90wzOVLMbLAdloCJm65ie0YIgaF" //ptlc

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "082139677593"
global.gopay = "082139677593"
global.ovo = "082139677593"
global.qris = "https://telegra.ph/file/531867f8d1cfb804eef57.jpg"
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "SDG2MrxgoJLZ8GDkpWk2PalEn-Vg8PQkjEsPQ_Wy"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "9de948bb1589175a8c9353612759b678";
global.apitoken2 = "poNl1SWzhD3rCUqFwfXwK7iAm2SobqeyLFJWa9nB";
global.tld2 = "skyzo.my.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})