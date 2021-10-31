/* eslint-disable */

import { gql, GraphQLClient } from "graphql-request";

export default async function gqlBlogELm(id, locale) {
  if (id === undefined) {
    id = 1;
  }

  //blogs(where: {blogNumber:${id}}) {
  const query = gql`
  {
      blogs(locales:${locale}, where: {blogNumber:${id}}) {
        title
        headerDescription
        tocVisible
        createdAt
        richDesc {
            raw
        }
        richBody {
            raw
        }
        ogpImage(locales: [${locale}, ja]){
          url
        }
        relatedBlogs {
          title
          blogNumber
          createdAt
          ogpImage(locales: [${locale}, ja]) {
            url
          }
        }
        category {
          id
          categoryName
        }
        author {
          id
          authorName
        }
        partners {
          id
          publishedBy {
            id
          }
        }
      },
      categories{
        categoryName
      },
      popularBlogs{
        blog{
          blogNumber,
          title,
          ogpImage(locales: [${locale}, ja]){
            url
          }
        }
      }
    }

      `;

  //const graphQLClient = new GraphQLClient(process.env.GRAPHQL_URL);
  const graphQLClient = new GraphQLClient("https://api-ap-northeast-1.graphcms.com/v2/cku276ge94xzm01z89mdxh1ol/master");

  const data = await graphQLClient.rawRequest(query);
  console.log(data.data.blogs[0].richDesc.raw.children[0])
  console.log(data.data.blogs[0].richDesc.raw.children[1])
  console.log(data.data.blogs[0].richDesc.raw.children[2])

  return data;
}
