let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('Done!')
}
handler.help = ['unbanchat 𝒈𝒓𝒐𝒖𝒑']
handler.tags = [towner]
handler.command = /^unbanchat$/i
handler.owner = true

export default handler