freeCodeCamp Youtube course using GraphQL, Express and React

https://www.youtube.com/watch?v=ed8SzALpx1Q

# Install
npm install

# Run
node server/app

    or

nodemon server/app

# Endpoint
localhost:4000/graphql


# Example query
{
  book(id: "3"){
    name
    genre
    id
  }
}