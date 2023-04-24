import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
	{
		projects {
			_id
			name
			description
		}
	}
`;

export const CREATE_PROJECT = gql`
	mutation CreateProject($name: String!, $description: String!) {
		createProject(name: $name, description: $description) {
			_id
			name
			description
		}
	}
`;
