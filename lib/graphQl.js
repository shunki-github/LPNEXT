import { gql, GraphQLClient } from "graphql-request";
import { Component } from "react";

class AbstractGQL extends Component {
  constructor() {
    super();
    this.locale = undefined;
    this.url = undefined;
    this.query = undefined;
    this.auth = undefined
  }

  async returnData() {
    const graphQLClient = new GraphQLClient(this.url, {
      headers: {
        Authorization: `Bearer ${this.auth}`,
      }
    });
    const data = await graphQLClient.rawRequest(this.query);
    return data;
  }
}

export class BlogList extends AbstractGQL {
  constructor(locale) {
    super();
    this.locale = locale;
    this.url = process.env.GRAPHQL_URL;
    this.auth = process.env.GRAPHQL_AUTH_TOKEN;
    this.query = gql`
        {
            blogs(locales:${this.locale}) {
            blogNumber,
            title,
            tocVisible,
            createdAt,
            ogpImage(locales: [${this.locale}, ja]){
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
        categories(locales:${this.locale}){
          categoryName
        },
        popularBlogs(locales:${this.locale}){
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
  }
}

export class BlogElm extends AbstractGQL {
  constructor(locale, id = 1) {
    super();
    this.locale = locale;
    this.id = id;
    this.url = process.env.GRAPHQL_URL;
    this.auth = process.env.GRAPHQL_AUTH_TOKEN;
    this.query = gql`
        {
            blogs(locales:${this.locale}, where: {blogNumber:${this.id}}) {
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
              ogpImage(locales: [${this.locale}, ja]){
                url
              }
              relatedBlogs {
                title
                blogNumber
                createdAt
                ogpImage(locales: [${this.locale}, ja]) {
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
            categories(locales:${this.locale}){
              categoryName
            },
            popularBlogs(locales:${this.locale}){
              blog{
                blogNumber,
                title,
                ogpImage(locales: [${this.locale}, ja]){
                  url
                }
              }
            }
          }
            `;
  }
}

export class BlogNum extends AbstractGQL {
  constructor() {
    super();
    this.url = process.env.GRAPHQL_URL;
    this.auth = process.env.GRAPHQL_AUTH_TOKEN;
    this.query = gql`
      {
        blogs {
          blogNumber
          updatedAt
        }
      }
    `;
  }
}
