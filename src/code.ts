figma.showUI(__html__, { height: 400 });
const buildPages = () => {
  const pages = [
    "Cover",
    "README",
    "🌈 --- Playground / Adventure",
    "🤔 --- Reviewing",
    "🚀 --- For Development",
    "🗃️ --- Archive"]
  pages.map((page) => {
    figma.createPage().name = page
  })
}

figma.ui.onmessage = msg => {
  if (msg.type === 'create-pages') {
    buildPages()
  }

  if (msg.type === 'load-theme') {
    console.log(msg.type)
    console.log(msg.theme)
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};
