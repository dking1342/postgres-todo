import todoResolvers from './todos.js';

const resolvers = {
    Query:{
        ...todoResolvers.Query
    },
    Mutation:{
        ...todoResolvers.Mutation
    }
};

export default resolvers;