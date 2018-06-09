const graphql = reauire('graphql');

const { GraphQLObjectType, GrapQLString } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GrapQLString },
        genre: { type: GrapQLString }
    })
});