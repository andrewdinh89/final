/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateNode = ({node}) => {
    if(node.internal.type === "MarkdownRemark") {
    console.log(node.internal.type)
}
}