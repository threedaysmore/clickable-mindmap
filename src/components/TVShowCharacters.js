import { useEffect } from "react";
import Mermaid from "../Mermaid";
import mermaid from "mermaid";
import { MermaidDoc } from "../mermaidFiles/TVShowCharactersMindmap";
import {
  createLinkMapFromNoIds,
  addLinksToNodes,
  removeComments,
} from "../helpers/createLinkMap";

function TVShowCharacters() {
  useEffect(() => {
    const linkMap = createLinkMapFromNoIds(MermaidDoc);

    async function findLinkNodes() {
      await mermaid.run();
      if (linkMap) addLinksToNodes(linkMap);
    }

    findLinkNodes();
  }, []);

  return (
    <div>
      <h1>Scrubs Characters</h1>
      <Mermaid chart={removeComments(MermaidDoc)} />
    </div>
  );
}

export default TVShowCharacters;
