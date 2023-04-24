import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../graphql/projects";
import { useQuery } from "@apollo/client";

const ProjectList = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div>
			{data.projects.map((project) => (
				<ProjectCard key={project._id} project={project} />
			))}
		</div>
	);
};

export default ProjectList;
