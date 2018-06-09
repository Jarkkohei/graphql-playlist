const graphql = reauire('graphql');
const _ = require('loadash');

const { GraphQLObjectType, GrapQLString, GrapQLSchema } = graphql;


// Dummy data
let books = [
    {   
        id: '1',
        name: 'First',
        genre: 'Gee' 
    },
    {   
        id: '2',
        name: 'Second',
        genre: 'Uuh' 
    },
    {   
        id: '3',
        name: 'Third',
        genre: 'Aah' 
    }
];


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GrapQLString },
        genre: { type: GrapQLString }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GrapQLString }
            },
            resolve(parent, args) {
                // code to get data from db.
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GrapQLSchema({
    query: RootQuery
});