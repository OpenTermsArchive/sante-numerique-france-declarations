export function addIDsToAllowSelection(document) {
  const IGNORED_TAGS = [ 'SCRIPT', 'STYLE', 'TITLE', 'META', 'LINK', 'TEMPLATE', 'NOSCRIPT', 'NEXT-ROUTE-ANNOUNCER' ];
  const root = document.body || document;

  let mainContent = null;
  let maxLength = 0;

  Array.from(root.children).forEach(element => {
    if (IGNORED_TAGS.includes(element.tagName)) {
      return;
    }

    const { length } = (element.textContent || '').trim();

    if (length > maxLength) {
      maxLength = length;
      mainContent = element;
    }
  });

  if (mainContent) {
    mainContent.id = 'main-content';
  }
}
