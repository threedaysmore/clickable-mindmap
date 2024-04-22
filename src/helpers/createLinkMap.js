function createLinkMap(mindMapString) {
  const linesWithLinks = mindMapString.match(/.*%%.*/g);
  const linkMap = {};
  linesWithLinks?.forEach(
    (line) => (linkMap[line.trimStart().split("[")[0]] = line.split("%%")[1])
  );
  return linkMap;
}

function addLinksToNodes(linkMap) {
  if (linkMap) {
    for (let key in linkMap) {
      (() => {
        var linkNode = document.querySelectorAll(`[attr="apa-${key})"]`)[0];
        var nodeId = key;
        var linkForNode = linkMap[nodeId];
        if (linkNode) {
          linkNode?.addEventListener("click", function () {
            openLink(linkForNode);
          });
          linkNode.style.cursor = "pointer";
        }
      })();
    }
  }
}

function openLink(link) {
  window.open(link, "_blank").focus();
}

function createLinkMapFromNoIds(mindMapString) {
  var rootIndex = mindMapString.indexOf("root");
  var rootSubString = mindMapString.substring(0, rootIndex);
  var rootLineNumber = rootSubString.split("\n").length;

  const linesWithLinks = mindMapString.match(/%%.*/g);
  const linkMap = {};
  linesWithLinks?.forEach((line) => {
    var linkLineIndex = mindMapString.indexOf(line);
    var linkLineSubstring = mindMapString.substring(0, linkLineIndex);
    var linkLineNumber = linkLineSubstring.split("\n").length;
    linkMap[linkLineNumber - rootLineNumber] = line.split("%%")[1];
  });
  return linkMap;
}

function removeComments(mindMapString) {
  var cleanMindMap = mindMapString;
  const commentLinks = cleanMindMap.match(/%%.*/g);
  commentLinks?.forEach(
    (commentLink) => (cleanMindMap = cleanMindMap.replace(commentLink, ""))
  );
  return cleanMindMap;
}

export {
  createLinkMap,
  addLinksToNodes,
  createLinkMapFromNoIds,
  removeComments,
};
