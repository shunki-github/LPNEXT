/* eslint-disable */

import { gql, GraphQLClient } from "graphql-request";

export default async function gqlBlogList(locale) {
  const query = gql`
  {
      blogs(locales:${locale}) {
      blogNumber,
      title,
      tocVisible,
      createdAt,
      ogpImage(locales: [${locale}, ja]){
          url
      },
      category {
          id,
          categoryName
      },
      author {
          id,
          authorName
      },
      partners {
          id,
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
      ogpImage{
        url
      }
    }
  }
  }
      `;

  const graphQLClient = new GraphQLClient(process.env.GRAPHQL_URL);

  const data = await graphQLClient.rawRequest(query);
  return data;
}
