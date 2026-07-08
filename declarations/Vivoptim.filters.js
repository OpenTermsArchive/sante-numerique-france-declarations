export function addIDsToAllowSelection(document) {
  const IGNORED_TAGS = [
    'SCRIPT', 'STYLE', 'TITLE', 'META', 'LINK', 'TEMPLATE', 'NOSCRIPT',
    'NAV', 'HEADER', 'FOOTER', 'ASIDE', 'DIALOG',
  ];

  const MIN_LEGAL_LENGTH = 3000;

  let mainContent = null;
  let maxLength = 0;

  Array.from(document.body.children).forEach(element => {
    if (IGNORED_TAGS.includes(element.tagName)) {
      return;
    }

    const { length } = (element.textContent || '').trim();

    if (length > maxLength) {
      maxLength = length;
      mainContent = element;
    }
  });

  if (mainContent && maxLength >= MIN_LEGAL_LENGTH) {
    mainContent.id = 'main-content';
  }
}
