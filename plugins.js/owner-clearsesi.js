import { tmpdir } from 'os';
import { join } from 'path';
import fs from 'fs';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';

let handler = async (m, { args, text }) => {
  conn.reply(m.chat, 'Succes !', m);

  function deleteFiles(sessions) {
    fs.readdir(sessions, (err, files) => {
      if (err) throw err;
      for (const file of files) {
        if (file !== 'creds.json') {
          fs.unlink(path.join(sessions, file), err => {
            if (err) throw err;
          });
        }
      }
    });
  }
};

handler.help = ['clearsession'];
handler.tags = [towner];
handler.command = /^(c(lear)?)(sessi|session)$/i;
handler.rowner = true;

export default handler;