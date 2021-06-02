import * as React from "react";
import Layout from "@layout";
import Seo from "@components/seo";
import ErrorArea from '@containers/error-area'

const NotFoundPage = ({ location }) => (
	<Layout location={location}>
		<Seo title="404: Not found" />
		<ErrorArea />
	</Layout>
)

export default NotFoundPage
