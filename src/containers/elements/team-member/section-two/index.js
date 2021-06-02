import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import TeamMember from "@components/team-member";
import { headMembers, executives } from "./data";
import { TeamWrapper } from "./style";

const TeamArea = ({ headingStyle, headTeamStyle, headTeamRowStyle, teamStyle, executiveStyle }) => {
	return (
		<TeamWrapper>
			<Container>
				<Row>
					<Col lg={12}>
						<Heading {...headingStyle}>We pride ourselves on having a team <br /> of <span>highly-skilled</span> experts</Heading>
					</Col>
				</Row>
				<Row {...headTeamRowStyle}>
					{headMembers && headMembers.map((headMember, i) => (
						<Col md={4} key={`head-member-${i}`}>
							<TeamMember
								{...teamStyle}
								{...headTeamStyle}
								imageSrc={headMember.image}
								name={headMember.name}
								designation={headMember.designation}
								social={headMember.socials}
							/>
						</Col>
					))}
				</Row>
				<Row>
					{executives && executives.map((executive, i) => (
						<Col lg={3} md={6} key={`executive-${i}`}>
							<TeamMember
								{...teamStyle}
								{...executiveStyle}
								imageSrc={executive.image}
								name={executive.name}
								designation={executive.designation}
								social={executive.socials}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</TeamWrapper>
	)
}

TeamArea.propTypes = {
	headingStyle: PropTypes.object
}

TeamArea.defaultProps = {
	headingStyle: {
		as: "h3",
		fontSize: "40px",
		lineHeight: 1.4,
		textalign: "center",
		mb: "85px",
		child: {
			color: "primary"
		},
		responsive: {
			large: {
				fontSize: "34px",
				mb: "70px"
			},
			medium: {
				fontSize: "28px",
				mb: "50px"
			}
		}
	},
	headTeamRowStyle: {
		mb: "36px",
		gutters: {
			lg: 60
		},
		responsive: {
			medium: {
				mb: "26px"
			},
			small: {
				mb: 0
			}
		}
	},
	teamStyle: {
		layout: 2,
		wrapperStyle: {
			mb: "30px"
		},
	},
	headTeamStyle: {
		infoStyle: {
			textalign: "center"
		}
	},
	executiveStyle: {
		infoStyle: {
			textalign: "center"
		},
		nameStyle: {
			fontSize: '18px',
			lineHeight: 1.78
		}
	}
}

export default TeamArea;