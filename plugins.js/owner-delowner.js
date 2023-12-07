let handler = async (m, { conn, text }) => {
    let who;

    if (m.isGroup) {
        who = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : text);
    } else {
        who = m.chat;
    }

    if (!who) throw 'Tag orang yang akan diberhentikan sebagai Owner!';

    // Ensure global.owner is an array of strings
    let ownerArray = global.owner.map(owner => owner.toString());

    if (!ownerArray.includes(who.replace(/[^0-9]/g, '') + '@s.whatsapp.net')) {
        throw 'Orang ini tidak menjadi owner!';
    }

    let index = ownerArray.indexOf(who.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
    global.owner.splice(index, 1);

    const caption = `Sekarang @${who.split`@`[0]} diberhentikan sebagai Owner!`;

    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption),
    });
};

handler.help = ['delowner [@𝒕𝒂𝒈]'];
handler.tags = [towner];
handler.command = /^(remove|hapus|-|del)owner$/i;

handler.owner = true;

export default handler;