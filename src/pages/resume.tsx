import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/common/layout';
import SEO from '@components/common/seo';

const Resume: React.FC = () => (
	<Layout>
		<SEO title='Resume' />
		<h1>Hi from the Resume page</h1>
		<p>Welcome to page 2</p>
		<Link to='/'>Go back to the homepage</Link>
	</Layout>
);

export default Resume;