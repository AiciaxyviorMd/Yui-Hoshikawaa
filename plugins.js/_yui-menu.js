/*
* Nama Pengembang: Aliciazyn 
* Kontak Whatsapp: wa.me/6288268142831
* Akun Github: github.com/AiciaxyviorMd
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

import moment from "moment-timezone"

const handler = async (m, { conn, usedPrefix: _P, isOwner, isPremium }) => {
  const teks = `*👋 ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ᴅᴀꜱʜʙᴏᴀʀᴅ ʙᴏᴛ ᴋᴀᴍɪ*!  
*ʜᴀy ꜱᴀyᴀ Yᴜɪ ʜᴏꜱʜɪᴋᴀᴡᴀ,* ꜱᴇʙᴜᴀʜ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴄᴀɴɢɢɪʜ yᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ 𝐀𝐥𝐢𝐜𝐢𝐚𝐳𝐲𝐧, ᴀᴅᴀʟᴀʜ ꜱᴏʟᴜꜱɪ ᴛᴇʀᴅᴇᴩᴀɴ ᴜɴᴛᴜᴋ ᴋᴇʙᴜᴛᴜʜᴀɴ ᴋᴏᴍᴜɴɪᴋᴀꜱɪ ᴅᴀɴ ᴋᴇʙᴜᴛᴜʜᴀɴ ᴩʀɪʙᴀᴅɪ ᴀɴᴅᴀ. ᴅɪʙᴇᴋᴀʟɪ ᴅᴇɴɢᴀɴ ʙᴇʀᴀɢᴀᴍ ꜰɪᴛᴜʀ ꜱᴇʀʙᴀ ɢᴜɴᴀ, ʙᴏᴛ ɪɴɪ ᴍᴇʀᴜᴩᴀᴋᴀɴ ᴛᴇᴍᴀɴ ꜱᴇᴛɪᴀ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇɴᴊᴀʟᴀɴɪ ʙᴇʀʙᴀɢᴀɪ ᴀᴋᴛɪᴠɪᴛᴀꜱ ꜱᴇʜᴀʀɪ-ʜᴀʀɪ. ʙᴇʀɪᴋᴜᴛ ʙᴇʙᴇʀᴀᴩᴀ ꜰɪᴛᴜʀ ᴛᴇʀᴋᴇᴍᴜᴋᴀ yᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ 𝒀𝒖𝒊 𝑯𝒐𝒔𝒉𝒊𝒌𝒂𝒘𝒂 ʙᴇɢɪᴛᴜ ɪꜱᴛɪᴍᴇᴡᴀ
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
ᴋᴇᴛɪᴋ (.𝒎𝒆𝒏𝒖𝒂𝒍𝒍) ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜱᴇᴍᴜᴀꜰɪᴛᴜʀ, ᴊɪᴋᴀ ᴀᴅᴀ ꜰɪᴛᴜʀ ʏᴀɴɢ ᴇʀᴏʀ ꜱɪʟᴀᴋᴀɴ ʙᴇʀɪᴛᴀʜᴜ ᴋᴇ ᴏᴡɴᴇʀ 𝐀𝐥𝐢𝐜𝐢𝐚𝐳𝐲𝐧 `
	await conn.sendMessage(
		m.chat,
		{
			text: teks,
			mentions: [m.sender],
			contextInfo: {
				forwardingScore: 9999999,
				isForwarded: false,
				mentionedJid: [m.sender],
				externalAdReply: {
					showAdAttribution: false,
					renderLargerThumbnail: true,
					title: ucapan(),
          containsAutoReply: true,
					mediaType: 1,
					thumbnailUrl: `https://telegra.ph/file/60f5c04402d98015e976c.jpg`,
					mediaUrl: ``,
					sourceUrl: 'https://chat.whatsapp.com/Eq5CrgqCjcj0DljzjN4Pn',
				},
			},
		},
		{ quoted: m },
	);
};

handler.help = ["menu"];
handler.tags = [tmain];
handler.command = ["menu"];
handler.limit = true;
handler.register = true;

export default handler;

function ucapan() {
	const time = moment.tz("Asia/Jakarta").format("HH");
	let res = "Sudah Dini Hari Kok Belum Tidur Kak?";
	if (time >= 4) {
		res = "(Pagi)";
	}
	if (time >= 10) {
		res = "(Siang)";
	}
	if (time >= 15) {
		res = "(Sore)";
	}
	if (time >= 18) {
		res = "(Malam)";
	}
	return res;
}