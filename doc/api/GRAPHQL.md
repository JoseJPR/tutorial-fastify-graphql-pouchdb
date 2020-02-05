# API Documentation | GraphQL

## Description

Here are several examples on how to work with Fastify and GraphQL.

You can download this Postman collection with which you perform your tests in an easier way. [Collection](docs/api/postman-collection-graphql.json)

## Working with Fastify and GraphQL

### Get All Articles

```any
ENDPOINT: http://localhost:3000/graphql
METHOD: POST
HEADERS: 
{
  "Content-Type": "application/json" 
}
BODY:
{
  "query": "query{getAll{_id, title, resume, excerpt}}"
}
```
Return Example:
```json
{
  "data": {
    "getAll": [
      {
        "_id": "3f7191f3-15f0-47c9-8931-d6c8a0260a83",
        "title": "Chew iPad power cord eat a plant",
        "resume": "Cat mojo peer out window, chatter at birds, lure them to mouth.",
        "excerpt": "I could pee on this if i had the energy refuse to leave cardboard box but fat baby cat best buddy little guy throwup on your pillow, and hiiiiiiiiii feed me now cat walks in keyboard . Bite off human´s toes i heard this rumor where the humans are our owners, pfft, what do they know?!"
      },
      ...
    ]
  }
}
```

### Get Article by ID

```any
ENDPOINT: http://localhost:3000/graphql
METHOD: POST
HEADERS: 
{
  "Content-Type": "application/json" 
}
BODY:
{
  "query": "query($_id:ID!){getOne(_id:$_id){_id, title, resume, excerpt}}",
  "variables": {
    "_id": [_id]
  }
}
VARIABLES: [_id] (Article ID)
```
Return Example:
```json
{
  "data": {
    "getOne": {
      "_id": "3f7191f3-15f0-47c9-8931-d6c8a0260a83",
      "title": "Chew iPad power cord eat a plant",
      "resume": "Cat mojo peer out window, chatter at birds, lure them to mouth.",
      "excerpt": "I could pee on this if i had the energy refuse to leave cardboard box but fat baby cat best buddy little guy throwup on your pillow, and hiiiiiiiiii feed me now cat walks in keyboard . Bite off human´s toes i heard this rumor where the humans are our owners, pfft, what do they know?!"
    }
  }
}
```

### Create Article
```any
ENDPOINT: http://localhost:3000/graphql
METHOD: POST
HEADERS: 
{
  "Content-Type": "application/json" 
}
BODY: 
{
  "query": "mutation{create(input:{title:\"Test Title\", resume:\"Test Resume\", excerpt:\"Test Excerpt\"}){_id, title, resume, excerpt}}"
}
```
Return Example:
```json
{
  "data": {
    "create": {
      "_id": "96ca3a96-fd94-4791-9fe4-3e76a2e4776a",
      "title": "Test Title",
      "resume": "Test Resume",
      "excerpt": "Test Excerpt"
    }
  }
}
```

### Update Article by ID
```any
ENDPOINT: http://localhost:3000/graphql
METHOD: POST
HEADERS: 
{
  "Content-Type": "application/json" 
}
BODY: 
{
  "query": "mutation($_id:ID!){update(_id:$_id, input:{title:\"Test New Title\", resume:\"Test New Resume\", excerpt:\"Test New Excerpt\"}){_id, title, resume, excerpt}}",
  "variables": {
    "_id": [_id]
  }
}
VARIABLES: [_id] (Article ID)
```
Return Example:
```json
{
  "data": {
    "update": {
      "_id": "96ca3a96-fd94-4791-9fe4-3e76a2e4776a",
      "title": "Test New Title",
      "resume": "Test New Resume",
      "excerpt": "Test New Excerpt"
    }
  }
}
```

### Delete Article by ID
```any
ENDPOINT: http://localhost:3000/graphql
METHOD: POST
HEADERS: 
{
  "Content-Type": "application/json" 
}
BODY: 
{
  "query": "mutation($_id:ID!){delete(_id:$_id){ok, id}}",
  "variables": {
    "_id": [_id]
  }
}
VARIABLES: [_id] (Article ID)
```
Return Example:
```json
{
  "data": {
    "delete": {
      "ok": "true",
      "id": "03ad1171-d10a-4e0a-ac85-e4842390b12b"
    }
  }
}
```