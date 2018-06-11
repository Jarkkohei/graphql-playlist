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


# Example query for a book
{
  book(id: "3"){
    name
    genre
    id
  }
}


# Example query for a book with author
{
  book(id:2) {
    name
    genre
    author {
      name
    }
  }
}