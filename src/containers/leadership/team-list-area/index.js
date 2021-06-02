import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, Box } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { TeamListWrapper } from './team-list-area.style'

const TeamListArea = ({ sectionStyle, headingStyle, boxStyles }) => {
	const teamData = useStaticQuery(graphql`
        query {
            TeamDevs: allTeamsJson(filter: {position: {eq: "developer"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            TeamEngs: allTeamsJson(filter: {position: {eq: "engineer"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            TeamStaffs: allTeamsJson(filter: {position: {eq: "staff"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            TeamDesigner: allTeamsJson(filter: {position: {eq: "design"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            TeamMarketer: allTeamsJson(filter: {position: {eq: "marketing"}}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    `)
	const developers = teamData.TeamDevs.edges;
	const engineers = teamData.TeamEngs.edges;
	const staffs = teamData.TeamStaffs.edges;
	const designers = teamData.TeamDesigner.edges;
	const marketers = teamData.TeamMarketer.edges;
	return (
		<TeamListWrapper>
			<Container>
				<Row>
					<Col md={3}>
						<Heading {...headingStyle}>Developer</Heading>
						<Box {...boxStyles}>
							{developers && developers.map(developer => (
								<Text key={developer.node.id}>{developer.node.name}</Text>
							))}
						</Box>
					</Col>
					<Col md={3}>
						<Heading {...headingStyle}>engineer</Heading>
						<Box {...boxStyles}>
							{engineers && engineers.map(engineer => (
								<Text key={engineer.node.id}>{engineer.node.name}</Text>
							))}
						</Box>
					</Col>
					<Col md={3}>
						<Heading {...headingStyle}>Staffs</Heading>
						<Box {...boxStyles}>
							{staffs && staffs.map(staff => (
								<Text key={staff.node.id}>{staff.node.name}</Text>
							))}
						</Box>
					</Col>
					<Col md={3}>
						<Heading {...headingStyle}>Design/Marketing</Heading>
						<Box>
							{designers && designers.map(designer => (
								<Text key={designer.node.id}>{designer.node.name}</Text>
							))}
							{marketers && marketers.map(marketer => (
								<Text key={marketer.node.id}>{marketer.node.name}</Text>
							))}
						</Box>
					</Col>
				</Row>
			</Container>
		</TeamListWrapper>
	)
}

TeamListArea.propTypes = {
	headingStyle: PropTypes.object,
	boxStyles: PropTypes.object
}

TeamListArea.defaultProps = {
	headingStyle: {
		as: "h3",
		fontSize: "15px",
		texttransform: "uppercase",
		letterspacing: "1px",
		mb: "22px"
	},
	boxStyles: {
		responsive: {
			small: {
				mb: "41px"
			}
		}
	}
}

export default TeamListArea;