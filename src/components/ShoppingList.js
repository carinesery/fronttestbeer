const beerList = [
    'Adelscott',
    'Triple Karmeliet',
    'Leffe Rituel',
    '8.6'
]

function ShoppingList () {
    return (
        <ul>
            {beerList.map((beer, index) => (<li key={`${beer}-${index}`}>{beer}</li>)) }
        </ul>
        // La méthode .map() est utilisée pour itérer sur chaque élément du tableau beertList. À chaque itération, .map() prend un élément (beer) et son index (index), puis exécute une fonction sur chaque élément du tableau.
        // La méthode .map() renvoie un nouvel tableau de balises <li> (éléments de liste), chacune contenant un nom de bière. En résumé, cela permet de transformer un tableau de bières en une liste d'éléments <li> à afficher dans le DOM.
        // Ici { beer } est évalué comme une variable Javascript.
    )
}

export default ShoppingList;