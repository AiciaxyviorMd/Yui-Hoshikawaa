/*
 * Nama Pengembang: Aliciazyn
 * Kontak Whatsapp: wa.me/6288268142831
 * Akun Github: github.com/AiciaxyviorMd
 * Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
 */

import fetch from "node-fetch";
import fs from "fs";
import { WAMessageStubType } from "@whiskeysockets/baileys";

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
	let who =
		m.mentionedJid && m.mentionedJid[0]
			? m.mentionedJid[0]
			: m.fromMe
			? conn.user.jid
			: m.sender;
	let name = await conn.getName(who);
	let wm = "apasih";
	let author = "Aliciazyn";
	// FAKE KONTAK
	const repPy = {
		key: {
			remoteJid: "0@s.whatsapp.net",
			fromMe: false,
			id: `${author}`,
			participant: "0@s.whatsapp.net",
		},
		message: {
			requestPaymentMessage: {
				currencyCodeIso4217: "IDR",
				amount1000: 999999999,
				requestFrom: "0@s.whatsapp.net",
				noteMessage: {
					extendedTextMessage: {
						text: wait,
					},
				},
				expiryTimestamp: 999999999,
				amount: {
					value: 91929291929,
					offset: 1000,
					currencyCode: "INR",
				},
			},
		},
	};

	if (command == "owner2") {
		let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6288268142831:+62 882-6814-2831\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:Note: Don't Spam Sis\nX-WA-BIZ-NAME:${author}\nEND:VCARD`;
		await conn.sendMessage(
			m.chat,
			{ contacts: { displayName: wm, contacts: [{ vcard }] } },
			{ quoted: repPy },
		);
		await conn.reply(
			m.chat,
			`*𝙃𝙖𝙡𝙤𝙤 𝙠𝙖𝙠 𝙞𝙩𝙪 𝙤𝙬𝙣𝙚𝙧 𝙠𝙪 𝙟𝙖𝙣𝙜𝙖𝙣 𝙨𝙥𝙖𝙢 𝙮𝙖 𝙣𝙖𝙣𝙩𝙞 𝙙𝙞𝙖 𝙢𝙖𝙧𝙖𝙝⎚🦋*`,
			m,
		);
		await conn.sendFile(
			m.chat,
			"https://bucin-livid.vercel.app/audio/oy.mp3",
			"oy.mp3",
			null,
			m,
			true,
			{
				type: "audioMessage",
				ptt: true,
			},
		);
	}
};
handler.help = ["owner"];
handler.tags = [tmain];
handler.command = /^(owner2)$/i;

export default handler;