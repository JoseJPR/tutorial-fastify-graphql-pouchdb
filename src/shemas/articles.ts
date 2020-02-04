/**
 * Wrapper Articles Shemas
 * @description Wrapper class for define all schema for articles.
 */

const typeDefs = `
  type Article {
    _id: ID!
    title: String!
    resume: String
    excerpt: String
  }

  type Query {
    getAll: [Article]
    getOne(_id: ID!): Article
  }

  type ArticleDeleted {
    ok: String
    id: ID
    rev: ID
  }

  input ArticleInput {
    title: String!
    resume: String
    excerpt: String
  }

  type Mutation {
    create(input: ArticleInput): Article
    update(_id: ID!, input: ArticleInput): Article
    delete(_id: ID!): ArticleDeleted
  }
`;

export default typeDefs;
