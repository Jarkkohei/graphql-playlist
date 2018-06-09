const graphql = reauire('graphql');

const { GraphQLObjectType, GrapQLString, GrapQLSchema } = graphql;

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
            }
        }
    }
});

module.exports = new GrapQLSchema({
    query: RootQuery
});