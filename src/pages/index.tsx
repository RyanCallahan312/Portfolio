import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

import Layout from '@components/common/layout';
import SEO from '@components/common/seo';
import '@styles/index.css';
import CardRadial from '@components/cardRadial/CardRadial';

interface CardUrlQuery {
	allFile: {
		nodes: [
			{
				publicURL: string;
			},
		];
	};
}

const IndexPage: React.FC = () => {
	const data: CardUrlQuery = useStaticQuery(graphql`
		{
			allFile(
				filter: {
					name: { regex: "/\\bskill-card-/" }
					ext: { regex: "/.svg\\b/" }
				}
				sort: {order: ASC, fields: name}
			) {
				nodes {
					publicURL
				}
			}
		}
	`);

	const cardPaths = data.allFile.nodes.map((node) => node.publicURL);

	const isDesktopOrLaptop = useMediaQuery(
		{ minDeviceWidth: 1224 },
	);

	console.log(isDesktopOrLaptop)

	return (
		<Layout>
			<SEO title='Home' />
			<div className='headline-grid-container'>
				<div className='headline-text-container'>
					<h1>👋 I’m Ryan</h1>
					<h3>a full stack web developer</h3>
					<h3>with a lot of cards in my hand</h3>
				</div>
				{isDesktopOrLaptop ? (
					<CardRadial cardPaths={cardPaths} />
				) : (
					<h1>small screen</h1>
				)}
			</div>
		</Layout>
	);
};

export default IndexPage;
