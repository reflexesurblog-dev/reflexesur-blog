# Réflexe Sûr — checklist de lancement

## Terminé dans cette version
- Menus déroulants Guides et Catégories.
- Navigation mobile.
- Cartes « Par situation » cliquables.
- Recherche affinée avec synonymes/intention et requête partageable via `?q=`.
- Nouveaux articles automatiquement intégrés à la recherche au prochain build.
- Catégories générées uniquement lorsqu'elles contiennent au moins un article.
- Page 404.
- Pages Contact, Confidentialité, Cookies et Mentions légales.
- Canonical, Open Graph, sitemap, robots.txt, données structurées WebSite/Article/Breadcrumb.
- Maillage interne automatique « À lire aussi » dans les articles.
- Emplacements publicitaires non actifs.
- Bandeau de consentement préparé mais désactivé tant qu'aucun tracking optionnel n'est actif.
- Responsive mobile/tablette.

## Actions externes à faire après déploiement
1. Mentions légales : renseigner l'identité légale réelle et l'adresse réelle de l'éditeur avant demande AdSense.
2. Google Search Console : créer/valider la propriété puis renseigner `PUBLIC_GOOGLE_SITE_VERIFICATION` dans Cloudflare si nécessaire.
3. Soumettre `https://reflexesur-blog.pages.dev/sitemap-index.xml` à Search Console.
4. Vérifier l'indexation après quelques jours.
5. Analytics : choisir un outil, vérifier ses obligations de consentement, puis seulement activer `PUBLIC_TRACKING_ENABLED=true` si nécessaire.
6. AdSense : attendre une base éditoriale solide (objectif conseillé : 20–30 articles utiles) et compléter les mentions légales avant candidature.
7. Si un domaine personnalisé est acheté, définir `SITE_URL` et mettre à jour l'URL de sitemap dans `public/robots.txt`.

## Règle éditoriale
Chaque article doit être vérifié auprès de sources officielles ou reconnues, dater ses mises à jour et ne jamais inventer de témoignage ni d'expérience personnelle.
