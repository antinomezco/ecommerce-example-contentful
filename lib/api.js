// const POST_GRAPHQL_FIELDS = `
// slug
// title
// coverImage {
//   url
// }
// date
// author {
//   name
//   picture {
//     url
//   }
// }
// excerpt
// content {
//   json
//   links {
//     assets {
//       block {
//         sys {
//           id
//         }
//         url
//         description
//       }
//     }
//   }
// }
// `;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractProductsContent(fetchResponse) {
  return fetchResponse?.data?.productCollection?.items;
}

function extractProductsCategories(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items;
}


export async function getProductsContent(category) {
  const entry = await fetchGraphQL(
    `query {
      productCollection(where: {category: "${category}"}) {
        items {
          productName
          slug
          productDescription
          new
          category
          imageCollection {
            items {
              url
            }
          }
        }
      }
    }
    `
  );
  return extractProductsContent(entry);
}

export async function getProductSingle(slug) {
  const entry = await fetchGraphQL(
    `query {
      productCollection(where: {slug: "${slug}"}, limit: 1) {
        items {
          productName
          slug
          productDescription
          new
          id
          category
          features
          price
          includes
          cartImage{
            url
            description
          }
          imageCollection {
            items {
              url
            }
          }
          moreImagesCollection {
            items {
              url
            }
          }
          youMayAlsoCollection{
            items{
              url
              description
              title
            }
          }
        }
      }
    }
    `
  );
  return extractProductsContent(entry);
}

export async function getProductscategories() {
  const entry = await fetchGraphQL(
    `query {
      categoryCollection {
        items{
          title
        }
      }
    }
    `
  );
  return extractProductsCategories(entry);
}

export async function getProductsSlug() {
  const entry = await fetchGraphQL(
    `query {
      productCollection {
        items{
          slug
        }
      }
    }
    `
  );
  return extractProductsContent(entry);
}
