import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import { ContactInfoWrapper, InfoBoxWrap, InfoBox } from './contact-info-area.style'

const ContactInfoArea = ({ headingStyle, textStyle, phoneStyle }) => {
	const contactInfo = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    contact {
                        addressInfos {
                            id
                            state
                            address
                            email
                            phone
                        }
                    }
                }
            }
        }      
    `);
	const { addressInfos } = contactInfo.site.siteMetadata.contact;
	return (
		<ContactInfoWrapper>
			<Container>
				<Row>
					{addressInfos && addressInfos.map(info => (
						<Col lg={4} key={info.id}>
							<InfoBoxWrap>
								{info.state && <Heading {...headingStyle}>{info.state}</Heading>}
								<InfoBox>
									{info.address && <Text {...textStyle}>{info.address}</Text>}
									{info.email && <Anchor {...textStyle} path={`mailto:${info.email}`}>{info.email}</Anchor>}
									{info.phone && <Text {...textStyle} {...phoneStyle}>{info.phone}</Text>}
								</InfoBox>
							</InfoBoxWrap>
						</Col>
					))}
				</Row>
			</Container>
		</ContactInfoWrapper>
	)
}

ContactInfoArea.propTypes = {
	headingStyle: PropTypes.object,
	textStyle: PropTypes.object,
	phoneStyle: PropTypes.object,
}

ContactInfoArea.defaultProps = {
	headingStyle: {
		as: "h5",
		mb: "20px"
	},
	textStyle: {
		mb: "7px"
	},
	phoneStyle: {
		fontweight: 800,
		color: 'headingColor'
	}
}

export default ContactInfoArea;