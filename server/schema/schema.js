const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema } = graphql;


// Dummy data about books
let books = [
    {   
        id: '1',
        name: 'First',
        genre: 'Gee',
        authorId: '1' 
    },
    {   
        id: '2',
        name: 'Second',
        genre: 'Uuh',
        authorId: '2' 
    },
    {   
        id: '3',
        name: 'Third',
        genre: 'Aah' ,
        authorId: '3'
    }
];


//  Dummy data about authors
let authors = [
    {
        id: '1',
        name: 'Author 1',
        age: '50',
    },
    {
        id: '2',
        name: 'Author 2',
        age: '60',
    },
    {
        id: '3',
        name: 'Author 3',
        age: '70',
    }
];


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent);
                return _.find(authors, { id: parent.authorId });
            }
        }
    })
});


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                // code to get data from db.
                return _.find(books, { id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return _.find(authors, { id: args.id });
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});