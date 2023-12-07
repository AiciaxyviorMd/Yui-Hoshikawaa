/*
 * Nama Pengembang: Aliciazyn
 * Kontak Whatsapp: wa.me/6288268142831
 * Akun Github: github.com/AiciaxyviorMd
 * Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
 */

import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
	let teks = "Ini dia Ownerku >\\<";
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
					title: "Alicia ❦",
					body: "Jangan di spam ya!!",
					containsAutoReply: true,
					mediaType: 1,
					thumbnailUrl: `https://telegra.ph/file/b49260a31b983c98cf0c8.jpg`,
					mediaUrl: ``,
					sourceUrl: "https://wa.me/6288268142831'",
				},
			},
		},
		{ quoted: m },
	);
};
handler.help = ["owner"];
handler.tags = [tmain];
handler.command = /^(owner|creator)$/i;

export default handler;