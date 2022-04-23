//L'algorithme de brassage de Durstenfeld, une version optimisée par ordinateur de l'algorithme de Fisher-Yates.
//L'algorithme fonctionne en choisissant un élément aléatoire pour chaque élément du tableau original, puis en l'excluant du prochain tirage. Il échange l'élément choisi avec l'élément actuel, puis choisit l'élément aléatoire suivant dans le reste.
//Note : La fonction shuffle n'est pas une fonction pure, elle modifie le tableau original.
//afin d'éviter la duplication de la mémoire
export const shuffle = (array: any) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // Alors qu'il reste des éléments à mélanger...
  while (0 !== currentIndex) {

    // Choisis un élément restant...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Et le remplacer par l'élément actuel.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.length;
}