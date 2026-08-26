# Réflexe Sûr V1 — prête à publier

## Inclus
- design final desktop + mobile
- Hero compact
- recherche locale instantanée et future-proof
- catégories automatiques
- pages guides et articles
- dates de publication et de mise à jour
- balises canonical, Open Graph et Twitter
- données structurées WebSite, Article et Breadcrumb
- sitemap Astro + robots.txt
- page Contact, À propos, Confidentialité et Mentions légales
- emplacement AdSense réservé mais non activé
- générateur de brouillon d’article

## Avant demande AdSense
Compléter les informations légales de l’éditeur dans `src/pages/mentions-legales.astro`, puis connecter la solution de consentement nécessaire avant toute publicité/mesure d’audience qui l’exige.

## Publication d’un article
1. Créer le brouillon : `npm run new:article -- "Titre SEO" "slug-court"`
2. Vérifier les faits avec des sources officielles récentes.
3. Compléter le Markdown et les tags.
4. Passer `draft: false`.
5. `git add . && git commit -m "article: slug-court" && git push`
6. Cloudflare reconstruit automatiquement le site.
