import * as React from 'react';

interface Icons {
	allFile: {
		nodes: [{ publicURL: string }];
	};
}
interface Props {
	icons: Icons;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
	const { icons } = props;
	return (
		<div>
			<a>
				<img
					width='32px'
					src={icons.allFile.nodes[0].publicURL}
					style={{ backgroundColor: '#000000' }}
				/>
			</a>
		</div>
	);
};

export default ProjectCard;
