import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const [titleArg, slugArg] = process.argv.slice(2);
if (!titleArg || !slugArg) {
  console.error('Usage: npm run new:article -- "Titre de l’article" "slug-court"');
  process.exit(1);
}

const folder = resolve('src/content/articles');
const file = resolve(folder, `${slugArg}.md`);
const today = new Date().toISOString().slice(0, 10);
const template = `---\ntitle: "${titleArg.replaceAll('"', '\\"')}"\ndescription: "À compléter"\ncategory: "À classer"\npublishedAt: ${today}\nupdatedAt: ${today}\nreadingTime: "7 min de lecture"\ntags: []\nfeatured: false\ndraft: true\n---\n\nIntroduction.\n\n## À retenir\n\n## Comment reconnaître le problème ?\n\n## Plan d’action\n\n## Avertissements\n\n## Sources officielles\n\n- [Source — titre](https://example.com)\n`;
await mkdir(folder, { recursive: true });
await writeFile(file, template, { flag: 'wx' });
console.log(`Article créé : ${file}`);
