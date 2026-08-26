# CONTENT — règle de publication

## Principe
Aucun article ne doit être publié automatiquement sans vérification des faits et des sources.

## Sources prioritaires
- Cybermalveillance.gouv.fr
- ANSSI / cyber.gouv.fr
- CNIL
- Service-Public.fr
- Banque de France / ACPR
- DGCCRF
- Arcep
- Ministère de l’Intérieur / Ma Sécurité
- sources européennes officielles si nécessaire

## Workflow
1. Choisir un sujet non redondant.
2. Vérifier les informations auprès de sources récentes et officielles.
3. Rédiger un brouillon avec `draft: true`.
4. Ajouter un plan d’action et les avertissements nécessaires.
5. Ajouter les sources et le maillage interne.
6. Relire.
7. Passer `draft: false` puis commit/push.
8. Cloudflare republie automatiquement.

## Créer un nouvel article
Commande :

`npm run new:article -- "Titre SEO" "slug-court"`

Le fichier est créé dans `src/content/articles/` en brouillon.
