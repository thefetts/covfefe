console.log('covfefe');

traverse(document.body);

function traverse(node) {
  // credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)
  switch(node.nodeType) {
    case 1:
    case 9:
    case 11:
      let child = node.firstChild;
      while(child) {
        const next = child.nextSibling;
        traverse(child);
        child = next;
      }
      break;
    case 3:
      covfefe(node);
      break;
  }
}

function covfefe(node) {
  const realWords = ['coverage', 'coffee', 'coven', 'cover', 'covet', 'covey', 'cuvee', 'coffer', 'couvade', 'cuvette',
    'coeval', 'colville', 'cloven', 'clover', 'cuvier', 'caveat', 'cavite', 'cavell', 'cuvée'];
  realWords.forEach(realWord =>
    node.nodeValue = node.nodeValue.replace(new RegExp(realWord, 'gi'), 'covfefe'));
}
