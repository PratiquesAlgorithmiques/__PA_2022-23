var maliste                                                 // variable globale

function setup() {

    maliste = ["hi", "bonjour", "au revoir", "goodbye"]     // attribuer une valeur à la variable, ici une liste (array)

    var t = maliste[3]                                      // récupérer un élément de la liste. (non utilisé dans le programme !) 
                                                            // [3] correspond à la 4e position ([0] est position 1)
    var r = random(maliste)                                 // récupérer un texte aléatoire de la liste. 
                                                            // la variable r contient le texte

    var b = createButton(r)                                 // utiliser la valeur dans la variable r, par exemple "hi"

    b.id('mybutton')                                        // attribuer un id
    b.style('background-color', 'chartreuse')               // change la couleur de fond
    b.position(5, 15)                                       // lui donner une position 'fixed'

    b.mousePressed(dosomething)                             // appelle la function 'dosomething' si on appuie le bouton
}

function dosomething() {
    var r = random(maliste)                                 // récupérer un texte aléatoire de la liste. maliste est une variable globale
    
    var d = createDiv(r)                                    // Créer un div
    d.parent('#container')                                  // le mettre à l'intérieur du div #container
    d.class('text')                                         // lui attribuer la classe "text"
}