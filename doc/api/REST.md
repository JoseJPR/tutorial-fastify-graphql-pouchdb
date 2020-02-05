# 🚠 API Documentation | REST

## Description

Here are several examples on how to work with a CRUD in Fastify.

You can download this Postman collection with which you perform your tests in an easier way. [Collection](docs/api/postman-collection-rest.json)

## Working with Fastify

### Get All Articles

```any
ENDPOINT: http://localhost:3000/articles
METHOD: GET
```
Return Example:
```json
[
  {
    "title": "Chew iPad power cord eat a plant",
    "resume": "Cat mojo peer out window, chatter at birds, lure them to mouth.",
    "excerpt": "I could pee on this if i had the energy refuse to leave cardboard box but fat baby cat best buddy little guy throwup on your pillow, and hiiiiiiiiii feed me now cat walks in keyboard . Bite off human´s toes i heard this rumor where the humans are our owners, pfft, what do they know?!",
    "_id": "3f7191f3-15f0-47c9-8931-d6c8a0260a83",
    "_rev": "1-d995ed891c1a143d7e366d988de4c603"
  },
  ...
]
```

### Get Article by ID
```bash
ENDPOINT: http://localhost:3000/articles/[_id]
PARAMS: [_id] (Article ID)
METHOD: GET
```
Return Example:
```json
{
  "title": "Chew iPad power cord eat a plant",
  "resume": "Cat mojo peer out window, chatter at birds, lure them to mouth.",
  "excerpt": "I could pee on this if i had the energy refuse to leave cardboard box but fat baby cat best buddy little guy throwup on your pillow, and hiiiiiiiiii feed me now cat walks in keyboard . Bite off human´s toes i heard this rumor where the humans are our owners, pfft, what do they know?!",
  "_id": "3f7191f3-15f0-47c9-8931-d6c8a0260a83",
  "_rev": "1-d995ed891c1a143d7e366d988de4c603"
}
```

### Create Article
```any
ENDPOINT: http://localhost:3000/articles
METHOD: POST
HEADERS: 
{
  "Content-Type": "application/json" 
}
BODY: 
{
  "title": "Test Title",
  "resume": "Test Resume",
  "excerpt": "Test Excerpt"
}
```
Return Example:
```json
{
  "title": "Test Title",
  "resume": "Test Resume",
  "excerpt": "Test Excerpt",
  "_id": "a1c89766-b636-44bf-94c2-30657b7a59e0",
  "_rev": "1-3932d88c4a86db5a22ea934445c04704"
}
```

### Update Article by ID
```any
ENDPOINT: http://localhost:3000/articles/[_id]
PARAMS: [_id] (Article ID)
METHOD: PUT
HEADERS: 
{
  "Content-Type": "application/json" 
}
BODY: 
{
  "title": "Test New Title",
  "resume": "Test New Resume",
  "excerpt": "Test New Excerpt"
}
```
Return Example:
```json
{
  "title": "Test New Title",
  "resume": "Test New Resume",
  "excerpt": "Test New Excerpt",
  "_id": "a1c89766-b636-44bf-94c2-30657b7a59e0",
  "_rev": "2-cb7b19127471c5c54ed160d5a1fa42cc"
}
```

### Delete Article by ID
```any
ENDPOINT: http://localhost:3000/articles/[_id]
PARAMS: [_id] (Article ID)
METHOD: DELETE
```
Return Example:
```json
{
  "ok": true,
  "id": "a1c89766-b636-44bf-94c2-30657b7a59e0",
  "rev": "3-5d51bb2c283681bf573cc494ffa1213d"
}
```