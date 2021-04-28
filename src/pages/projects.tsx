import * as React from 'react';
import { graphql } from 'gatsby';

import ProjectCard from '@components/projectCard/projectCard';
interface Icons {
	allFile: {
		nodes: [{ publicURL: string }];
	};
}
const Projects: React.FC<any> = ({data}) => {
	return <ProjectCard icons={data} />;
};

export default Projects;

export const query = graphql`
{
	allFile(
		filter: {relativeDirectory: {eq: "icons"}, name: {eq: "eye-white"}}
	) {
		nodes {
			publicURL
		}
	}
}
`;
