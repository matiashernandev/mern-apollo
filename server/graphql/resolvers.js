import Project from "./models/Project.js";

export const resolvers = {
	Query: {
		hello: () => "Hello World",
	},
	Mutation: {
		createProject: async (_, { name, description }) => {
			const project = new Project({
				name,
				description,
			});
			const savedProject = project.save();
			return savedProject;
		},
	},
};
