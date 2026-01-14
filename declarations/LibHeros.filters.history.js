export const addIDsToAllowSelection = [
  {
    filter(document) {
      const mentionsElement = findElementByText(document, '1 - MENTIONS LEGALES');

      if (mentionsElement) {
        mentionsElement.id = 'mentions-legales';
      }

      const objetElement = findElementByText(document, '2 - OBJET – VALIDATION – ACCEPTATION');

      if (objetElement) {
        objetElement.id = 'objet-validation-acceptation';
      }
    },
    validUntil: '2026-01-13T00:30:38Z',
  },
];

function findElementByText(document, targetText) {
  // JSDOM-compatible approach: use numeric values instead of NodeFilter constants
  const walker = document.createTreeWalker(
    document.body || document,
    1, // NodeFilter.SHOW_ELEMENT = 1
    {
      acceptNode(node) {
        return node.textContent.trim() === targetText ? 1 : 3; // FILTER_ACCEPT = 1, FILTER_SKIP = 3
      },
    },
  );

  return walker.nextNode();
}
