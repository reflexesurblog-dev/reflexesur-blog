# Réflexe Sûr — V1

Site Astro statique déployé sur Cloudflare Pages.

## Développement local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
```

Cloudflare Pages :
- branche : `main`
- commande : `npm run build`
- dossier de sortie : `dist`

## Ajouter un article

```bash
npm run new:article -- "Titre SEO" "slug-court"
```

Puis compléter le fichier Markdown créé dans `src/content/articles/`, vérifier les sources, passer `draft: false`, commit et push. La recherche, les listes et les catégories sont alimentées automatiquement lors du prochain build.
