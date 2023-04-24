import Project from "./models/Project.js";
import Task from "./models/Task.js";

export const resolvers = {
	Query: {
		hello: () => "Hello world!",
		projects: async () => {
			return await Project.find();
		},
		project: async (_, { _id }) => {
			return await Project.findById(_id);
		},
		tasks: async () => {
			return await Task.find();
		},
		task: async (_, { _id }) => {
			return await Task.findById(_id);
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
		deleteProject: async (_, { _id }) => {
			const deletedProject = await Project.findByIdAndDelete(_id);
			if (!deletedProject) throw new Error("Project not found F");
			return deletedProject;
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
		deleteTask: async (_, { _id }) => {
			const deletedTask = await Task.findByIdAndDelete(_id);
			if (!deletedTask) throw new Error("Task not found F");
			return deletedTask;
		},
	},
};
