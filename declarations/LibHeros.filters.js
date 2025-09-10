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
  const allElements = document.querySelectorAll('*');

  for (const element of allElements) {
    if (element.textContent.trim() === targetText) {
      return element;
    }
  }

  return null;
}
