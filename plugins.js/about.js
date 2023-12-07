import fs from 'fs' 
let handler = async (m, { conn }) => {
let sis = `Yui Hoshikawa, sebuah WhatsApp bot canggih yang dirancang oleh Aliciazyn, adalah solusi terdepan untuk kebutuhan komunikasi dan kebutuhan pribadi Anda. Dibekali dengan beragam fitur serba guna, bot ini merupakan teman setia Anda dalam menjalani berbagai aktivitas sehari-hari. Berikut beberapa fitur terkemuka yang membuat Yui Hoshikawa begitu istimewa:

1. *Kecerdasan Buatan (AI) Terdepan:* Yui Hoshikawa dilengkapi dengan AI mutakhir yang dapat membantu Anda dalam berbagai aspek kehidupan. Dari menjawab pertanyaan umum hingga memberikan rekomendasi berdasarkan preferensi pribadi Anda, bot ini akan selalu ada untuk memudahkan kehidupan Anda.
2. *Pengunduh All-in-One:* Yui Hoshikawa dapat mengunduh berbagai jenis konten, mulai dari video, gambar, hingga dokumen. Anda hanya perlu mengirim tautan atau permintaan, dan bot akan secara cepat dan efisien mengelola pengunduhan untuk Anda.
3. *Manajemen Tugas:* Anda dapat menggunakan Yui Hoshikawa untuk membuat daftar tugas, mengatur pengingat, dan melacak jadwal Anda. Bot ini akan membantu Anda tetap terorganisasi dan efisien sepanjang hari.
4. *Pesan Suara:* Dengan fitur pesan suara, Yui Hoshikawa memungkinkan Anda mengirim pesan suara dengan mudah dan nyaman, menjadikan komunikasi melalui WhatsApp lebih pribadi dan mudah dipahami.
5. *Pencarian Informasi:* Yui Hoshikawa memiliki kemampuan mencari informasi di internet untuk Anda. Cukup tanyakan apa yang Anda butuhkan, dan bot akan memberikan hasil pencarian yang relevan.
6. *Pengingat Privasi:* Privasi Anda adalah prioritas utama. Yui Hoshikawa dirancang sedemikian rupa untuk menjaga data pribadi Anda dengan ketat. Tidak ada data pribadi yang akan dibagikan atau disimpan oleh bot ini, sehingga Anda dapat menggunakan layanannya dengan percaya diri.
7. *Keamanan Database Terjaga:* Yui Hoshikawa memiliki sistem keamanan database yang sangat kuat untuk memastikan bahwa semua data yang Anda bagikan atau simpan di bot ini tetap terlindungi dari ancaman keamanan.

Yui Hoshikawa adalah kunci untuk membuat pengalaman WhatsApp Anda menjadi lebih canggih dan efisien, dengan fokus pada kemudahan penggunaan, keamanan, dan privasi. Dengan kecerdasan buatan yang unggul dan berbagai fitur menarik, Anda dapat mengandalkan Yui Hoshikawa untuk memenuhi berbagai kebutuhan Anda sehari-hari di dunia digital.`
conn.reply(m.chat, sis, m, { contextInfo: { externalAdReply: { showAdAttribution: true, renderLargerThumbnail: true, mediaType: 1, title: `About`, body: ``, mediaUrl: ``, thumbnail: fs.readFileSync('./src/thumbnail.png'), sourceUrl: `` }}})
}
handler.help = ['about']
handler.tags = [tmain]
handler.command = /^(about)$/i

export default handler