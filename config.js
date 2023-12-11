import { watchFile, unwatchFile } from "fs";
import axios from "axios";
import chalk from "chalk";
import { fileURLToPath } from "url";

const configs = {
	// Owner
	owner: [["6288268142831", "alicia", true]],
	mods: [],
	prems: [],
	// Info
	packname: "Yui-Hoshikawa",
	author: "Alicia",

	// Info Wait
	wait: "Sedang Di Proses, Mohon Tunggu....",
	eror: "Terjadi Kesalahan Coba Lagi Nanti!",
	error: "Terjadi kesalahan, silahkan coba lagi nanti",
	tmain: "Main",
	tanime: "Anime",
	trandom: "Random",
	tdownload: "Downloader",
	tai: "Ai",
	tgame: "Game",
	tsearch: "Internet",
	tgroup: "Group",
	towner: "Owner",
	tislam: "Islami",
	ttools: "Tools",
	'rpg': "Rpg",
	APIs: {
		rose: "https://api.itsrose.life",
		ibeng: "https://api.ibeng.tech",
		arif: "https://api.arifzyn.biz.id",
	},

	APIKeys: {
		"https://api.itsrose.life": "You Key ",
		"https://api.ibeng.tech": "You Key",
		"https://api.arifzyn.biz.id": "You Key ",
	},
};

// Its should be ok, right?
Object.assign(global, {
	...configs,
});

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
	unwatchFile(file);
	console.log(chalk.redBright("Update 'config.js'"));
	import(`${file}?update=${Date.now()}`);
});
