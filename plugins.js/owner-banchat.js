let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done!')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat 𝒈𝒓𝒐𝒖𝒑']
handler.tags = [towner]
handler.command = /^(banchat|bnc)$/i

handler.owner = true

export default handler