exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const contentstackData = await graphql(`
    query {
      allContentstackPage {
        edges {
          node {
            url
            id
          }
        }
      }
    }
  `);

  if (contentstackData.error) {
    console.error("Something went wrong...");
    return;
  }

  contentstackData.data.allContentstackPage.edges.forEach((edge) => {
    const pageData = edge.node;
    createPage({
      path: `/page${pageData.url}/`,
      component: require.resolve("./src/pages/index.js"),
      context: {
        id: pageData.id,
      },
    });
  });
};
