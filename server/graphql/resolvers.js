import Project from "./models/Project.js";
import Task from "./models/Task.js";

export const resolvers = {
	Query: {
		hello: () => "Hello World",

		projects: async () => {
			return await Project.find();
		},

		tasks: async () => {
			return await Task.find();
		},
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
		createTask: async (_, { title, projectId }) => {
			const projectFound = await Project.findById(projectId);
			if (!projectFound) {
				throw new Error("Project not found F");
			}

			const task = new Task({
				title,
				projectId,
			});
			const savedTask = task.save();
			return savedTask;
		},
	},
};
