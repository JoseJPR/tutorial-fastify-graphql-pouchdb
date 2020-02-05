# API Documentation | GraphiQL

## Description

## 🔮 You can to work with the GraphiQL IDE in your browser

> Base url GraphiQL IDE. \
  http://localhost:3000/graphiql

![graphiql](../../assets/graphiql.png)

## Working with Fastify and GraphQL

### Get All Articles

```any
query {
   getAll {
    _id
    title
    resume
    excerpt
  }
}
```

### Get Article by ID

```any
query {
  getOne (
    _id: "0f3ab5f7-8e71-4cfb-ae43-e34885453bbd"
  ) {
    _id
    title
    resume
    excerpt
  }
}
```

### Create Article
```any
mutation {
  create (
    input: {
      title: "Test Title"
      resume: "Test Resume"
      excerpt: "Test Excerpt"
    }
  ) {
    _id
    title
    resume
    excerpt
  }
}
```

### Update Article by ID
```any
mutation {
  update (
    _id: "0f3ab5f7-8e71-4cfb-ae43-e34885453bbd"
    input: {
      title: "Test New Title"
      resume: "Test New Resume"
      excerpt: "Test New Excerpt"
    }
  ) {
    _id
    title
    resume
    excerpt
  }
}
```

### Delete Article by ID
```any
mutation {
  delete (
    _id: "5dfa01b7-0ad9-4d97-a389-d27d3514d068"
  ) {
    id
  }
}
```

## 🎁 Bonus: Too you can use Alias and Fragments 

**Alias**
```any
query {
  allWithTitleAndResume: getAll {
    title
    resume
  }
  allWithTitleAndExcerpt: getAll {
    title
    excerpt
  }
}
```

**Fragments**
```any
query {
  first: getOne (
    _id: "0f3ab5f7-8e71-4cfb-ae43-e34885453bbd"
  ) {
    ...articleFragment
  }
  second: getOne (
    _id: "0f3ab5f7-8e71-4cfb-ae43-e34885453bbd"
  ) {
    ...articleFragment
  }
}

fragment articleFragment on Article {
  _id
  title
  resume
  excerpt
}
```