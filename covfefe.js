traverse(document.body);

function traverse(root) {
  let node, walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
  while (node = walker.nextNode())
    covfefe(node)
}

function covfefe(node) {
  const realWords = ['coverage', 'coffee', 'coven', 'cover', 'covet', 'covey', 'cuvee', 'coffer', 'couvade', 'cuvette',
    'coeval', 'colville', 'cloven', 'clover', 'cuvier', 'caveat', 'cavite', 'cavell', 'cuvée'];
  realWords.forEach(realWord => node.nodeValue = Covfefe(node.nodeValue, realWord));
}

function Covfefe(text, realWord) {
  return text
    .replace(new RegExp(capFirst(realWord), 'g'), 'Covfefe')
    .replace(new RegExp(realWord, 'g'), 'covfefe')
}

function capFirst(text) {
  return text.slice(0, 1).toUpperCase() + text.slice(1);
}
