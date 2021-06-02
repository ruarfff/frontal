import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import TeamMember from "@components/team-member";
import { data } from "./data";
import { TeamWrapper, SectionTitle, ButtonWrap } from "./style";

const TeamsSection = (props) => {
	const { headingStyle, textStyle, buttonOneStyle, buttonTwoStyle, teamMemberStyle } = props;

	return (
		<TeamWrapper>
			<Container>
				<Row>
					<Col lg={4}>
						<SectionTitle>
							<Heading {...headingStyle}>Our <span>experience experts</span></Heading>
							<Text {...textStyle}>Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.</Text>

							<ButtonWrap>
								<Button {...buttonOneStyle} to="/leadership">Join us now</Button>
								<Button {...buttonTwoStyle} to="/leadership" icon="far fa-long-arrow-right">View all team</Button>
							</ButtonWrap>
						</SectionTitle>
					</Col>
					<Col lg={8}>
						<Row>
							{data.map((team, i) => (
								<Col md={6} key={`team-${i}`}>
									<TeamMember
										{...teamMemberStyle}
										imageSrc={team.image}
										name={team.name}
										designation={team.designation}
										social={team.socials}
									/>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</TeamWrapper>
	)
}

TeamsSection.propTypes = {
	headingStyle: PropTypes.object,
	textStyle: PropTypes.object,
	buttonOneStyle: PropTypes.object,
	buttonTwoStyle: PropTypes.object,
	teamMemberStyle: PropTypes.object
}

TeamsSection.defaultProps = {
	headingStyle: {
		as: 'h3',
		child: {
			color: 'primary'
		}
	},
	textStyle: {
		mt: '30px'
	},
	buttonOneStyle: {
		mr: '15px',
		as: Link,
		hover: 2
	},
	buttonTwoStyle: {
		as: Link,
		varient: 'texted',
		fontWeight: 800,
		icondistance: '2px',
		hover: 2
	},
	teamMemberStyle: {
		mb: '60px',
		responsive: {
			small: {
				mb: '30px'
			}
		}
	}
}

export default TeamsSection;