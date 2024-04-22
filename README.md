# Editing an existing mermaid doc

## Initial edit

Find your mermaid doc under `src/mermaidFiles` and edit the document as needed

**_TO CREATE LINKS IN A MINDMAP YOU WILL NEED TO FOLLOW THE PATTERN SEEN BELOW_**

`Frasier %%https://en.wikipedia.org/wiki/Frasier`

`%%https://en.wikipedia.org/wiki/Frasier` is the link the node will direct you. Please make sure to include the `%%` at the beginning, this is mermaid's comment syntax

## Test on Mermaid live viewer

1. Please copy and paste your mermaid doc and run it on [Mermaid's live document viewer](https://mermaid.live/)

2. Your document should display correctly with no errors, comments will be shown however, the app will remove them later. _Links will not work in the live editor_

## Test locally

1. Run the following commands to launch the app locally:
   `npm i`
   `npm start`

2. Navigate to your doc and make sure everything looks good and the links work as expected

## Deployment

1. Commit and push changes
2. TBD
