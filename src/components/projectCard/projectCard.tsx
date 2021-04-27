import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface Icons {
	allFile: {
		nodes: [{ publicURL: string}];
	};
}

const ProjectCard: React.FC = () => {
	const icons: Icons = useStaticQuery(graphql`
	{
		allFile(
			filter: {relativeDirectory: {eq: "icons"}, name: {eq: "eye-white"}}
		) {
			nodes {
				publicURL
			}
		}
	}
	`);

	return (
		<div>
			<a>
				<img
					width='32px'
					src={
						icons.allFile.nodes[0].publicURL
					}
				/>
			</a>
		</div>
	);
};

export default ProjectCard;
