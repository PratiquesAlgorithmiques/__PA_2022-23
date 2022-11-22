function setup() {                                              // appalé au moment ou le DOM finit de s'afficher
    noCanvas()                                                  // n'utilise pas un élément canvas

    var d = createDiv('')                                       // créer un div
    d.id('container')                                           // lui attribuer un id

    var p = createElement('p', 'this is a paragraph !')         // créer un paragraphe
    p.parent(d)                                                 // le mettre à l'intérieur du div #container, son 'parent'
    p.id('para1')                                               // lui attribuer un id

    var p2= createElement('p', 'this is paragraph 2')           // créer un paragraphe
    p2.parent(d)                                                // le mettre à l'intérieur du div #container, son 'parent'

    var mydiv = select('#mydiv')                                // selectionner un div existent (dans index.html)
    mydiv.html("hi there")                                      // changer son contenu
}