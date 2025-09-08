// Preload script - Runs before the renderer process is loaded
// Used for exposing safe APIs to the renderer

window.addEventListener('DOMContentLoaded', () => {
  // Version information
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});