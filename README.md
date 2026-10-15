# CINEBOX

## 1. Descripció

CINEBOX és una aplicació web de cinema que permet consultar un catàleg de pel·lícules amb el títol, l'any, el gènere i el cartell.

Tecnologies utilitzades: Vue 3, TypeScript, Vue Router, Vite i Firebase Cloud Firestore.

## 2. Instal·lació i execució

Cal tenir Node.js i npm instal·lats.

- Instal·lar les dependències: `npm install`
- Executar en local: `npm run dev`
- Comprovar els tipus i generar la versió de producció: `npm run build`
- Desplegar a Firebase Hosting: `firebase deploy`

## 3. Components

- `App.vue`: component arrel de l'aplicació.
- `AppHeader.vue`: capçalera i menú de navegació.
- `MovieCard.vue`: mostra les dades d'una pel·lícula.
- `LoadingMessage.vue`: mostra el missatge de càrrega.
- `HomeView.vue`: pàgina d'inici.
- `CatalogView.vue`: catàleg de pel·lícules.
- `AboutView.vue`: informació del projecte.

## 4. Props

`CatalogView.vue` obté les pel·lícules de Firestore i passa a `MovieCard.vue` les props `title`, `year`, `genre` i `posterUrl`.

`MovieCard.vue` declara i utilitza aquestes props per mostrar les dades sense modificar-les.

## 5. Rutes

- `/`: inici.
- `/catalog`: catàleg de pel·lícules.
- `/about`: informació del projecte.

La navegació utilitza `RouterLink` i les vistes es mostren mitjançant `RouterView`. Firebase Hosting està configurat per permetre l'accés directe a les rutes.

## 6. Cloud Firestore

La col·lecció utilitzada és `movies`. Els camps són `title` (string), `year` (number), `genre` (string) i `posterUrl` (string).

L'aplicació gestiona els estats de càrrega, catàleg buit i error. Les regles de Firestore permeten llegir les pel·lícules i bloquegen les escriptures.

## 7. Publicació

URL de Firebase Hosting: https://pra1-28dd8.web.app

Repositori GitHub: https://github.com/merceisern/pr1
`CatalogView.vue` obté les pel·lícules de Firestore i passa a `MovieCard.vue` les props `title`, `year`, `genre` i `posterUrl`.

`MovieCard.vue` declara i utilitza aquestes props per mostrar les dades sense modificar-les.
### Exemple concret de comunicació amb props

El component pare `CatalogView.vue` obté les dades de cada pel·lícula de Firestore i les passa al component fill `MovieCard.vue`.

Per exemple, per mostrar Inception, el pare passa aquestes dades:
- `title`: `"Inception"`
- `year`: `2010`
- `genre`: `"Ciencia ficción"`
- `posterUrl`: URL del cartell de la pel·lícula

El component fill declara aquestes quatre props i les utilitza per mostrar la informació. No modifica les props rebudes.
