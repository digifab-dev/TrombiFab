# TrombiFab [![Construction du projet](https://github.com/digifab-dev/TrombiFab/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/digifab-dev/TrombiFab/actions/workflows/build.yml)

Un endroit où les développeurs de la [**Communauté Digifab**](https://digifab.fr/) peuvent montrer aux recruteurs qu'ils sont disponibles pour l'embauche. N'hésitez pas à y contribuer et à l'améliorer comme bon vous semble.

Lien vers la page Web : [**TrombiFab**](https://digifab-dev.github.io/TrombiFab/).

## Comment exécuter le projet dans votre machine locale

- `git clone https://github.com/digifab-dev/TrombiFab.git`
- `npm ci`
- `npm start`

## Comment ajouter votre nom à la liste

Note : **Vous devrez d'abord faire un fork du projet!**

![fork](https://help.github.com/assets/images/help/repository/fork_button.jpg)

Si vous n'êtes pas sûr du fonctionnement du workflow GitHub, vous pouvez consulter le [Guide pour faire une Pull Request](https://makeapullrequest.com/).

---

Pour ajouter votre nom à la liste, ajoutez un fichier `<Votre_Pseudo_GitHub>.json` à l'intérieur du dossier `Submissions`.
dans le dossier `Submissions/`, puis remplissez-le avec le contenu suivant.
(**Ne pas inclure les crochets "[ ]" ou les parenthèses "< >" !
Ils sont juste là pour indiquer un exemple de contenu.**)

```json
{
  "name" : "[VOTRE_PRÉNOM_ET_NOM]",
  "img" : "[VOTRE_IMG_URL]",
  "email" : "[VOTRE_ADRESSE_EMAIL]",
  "links" : {
    "website" : "[URL_DE_VOTRE_SITE_WEB]",
    "linkedin" : "https://www.linkedin.com/in/<VOTRE_PSEUDO_LINKEDIN>",
    "github" : "https://github.com/<VOTRE_PSEUDO_GITHUB>"
  },
  "jobTitle" : "[VOTRE_TITRE]",
  "location" : {
    "city" : "[YOUR_VILLE]",
    "state" : "[VOTRE_ÉTAT_OU_PROVINCE]",
    "country" : "[VOTRE_PAYS]"
  }
}
```

## Veuillez noter

- Les photos et/ou images de profil sont autorisées.
- Si vous ne souhaitez pas remplir certains champs, laissez-les vides (par exemple, `state : "",`).
- Votre pull request ne sera acceptée que si elle suit l'exemple ci-dessus. Elle **ne peut pas** avoir autre chose.

Veuillez soumettre une Pull Request pour être ajouté à cette liste. Si vous n'êtes pas sûr de la façon de procéder, veuillez consulter le dépôt [demarrer-avec-git](https://github.com/digifab-dev/demarrer-avec-git).

## Comment ajouter une image de profil à votre profil TrombiFab en utilisant les avatars Github.

1. Accédez à votre profil sur GitHub.com.
2. Ajoutez à votre url de profil GitHub ".png", de sorte qu'il ressemble à ceci : `https://github.com/digifab-dev.png`
3. Appuyez sur Entrée et le navigateur générera une page avec votre image, qui ressemblera à ceci : `https://avatars.githubusercontent.com/u/89067901?v=4`
4. Copiez l'url de cette page et collez-la dans le fichier `Submissions/<VOTRE_PSEUDO_GITHUB>.json`.

## Ressources

Toutes les icônes proviennent de [Material Design Icons](https://materialdesignicons.com) et [Octicons](https://octicons.github.com/).
