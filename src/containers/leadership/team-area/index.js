import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import TeamMember from "@components/team-member";
import { TeamWrapper } from './team-area.style'

const TeamArea = ({ sectionStyle, headingStyle, headTeamStyle, headTeamRowStyle, teamStyle, executiveStyle }) => {
	const teamData = useStaticQuery(graphql`
        query {
            headTeamMember: allTeamsJson(filter: {position: {eq: "head"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        images {
                            large {
                                childImageSharp {
									gatsbyImageData(
										layout: CONSTRAINED
										width: 546
										height: 672
										placeholder: TRACED_SVG
										formats: WEBP
										quality: 100
									)
                                }
                            }
                        }
                    }
                }
            }
            executiveMember: allTeamsJson(filter: {position: {eq: "executive"}}) {
                edges {
                    node {
                        id
                        name
                        designation
                        socials {
                            facebook
                            instagram
                            twitter
                        }
                        images {
                            large {
                                childImageSharp {
									gatsbyImageData(
										layout: CONSTRAINED
										width: 546
										height: 672
										placeholder: TRACED_SVG
										formats: WEBP
										quality: 100
									)
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
	const headMembers = teamData.headTeamMember.edges;
	const executives = teamData.executiveMember.edges;
	return (
		<TeamWrapper>
			<Container>
				<Row>
					<Col lg={12}>
						<Heading {...headingStyle}>We hire staffs who know more than what they show <br />of <span> IT services</span></Heading>
					</Col>
				</Row>
				<Row {...headTeamRowStyle}>
					{headMembers && headMembers.map(headMember => (
						<Col md={4} key={headMember.node.id}>
							<TeamMember
								{...teamStyle}
								{...headTeamStyle}
								imageSrc={headMember.node.images.large}
								name={headMember.node.name}
								designation={headMember.node.designation}
								social={headMember.node.socials}
							/>
						</Col>
					))}
				</Row>
				<Row>
					{executives && executives.map(executive => (
						<Col lg={3} md={6} key={executive.node.id}>
							<TeamMember
								{...teamStyle}
								{...executiveStyle}
								imageSrc={executive.node.images.large}
								name={executive.node.name}
								designation={executive.node.designation}
								social={executive.node.socials}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</TeamWrapper>
	)
}

TeamArea.propTypes = {
	sectionStyle: PropTypes.object,
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