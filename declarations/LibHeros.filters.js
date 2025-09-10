export function addIDsToAllowSelection(document) {
  const mentionsElement = findElementByText(document, '1 - MENTIONS LEGALES');

  if (mentionsElement) {
    mentionsElement.id = 'mentions-legales';
  }

  const objetElement = findElementByText(document, '2 - OBJET – VALIDATION – ACCEPTATION');

  if (objetElement) {
    objetElement.id = 'objet-validation-acceptation';
  }
}

function findElementByText(document, targetText) {
  // JSDOM-compatible approach: use numeric values instead of NodeFilter constants
  const walker = document.createTreeWalker(
    document.body || document,
    1, // NodeFilter.SHOW_ELEMENT = 1
    {
      acceptNode: function(node) {
        return node.textContent.trim() === targetText ? 1 : 3; // FILTER_ACCEPT = 1, FILTER_SKIP = 3
      }
    }
  );
  
  return walker.nextNode();
}
