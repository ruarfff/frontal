import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import { SectionWrap, JobList, JobItem, JobTitle, JobType, JobDesc, JobButton } from "./style";

const JobsArea = () => {
	const getJobsData = useStaticQuery(graphql`
        query GET_JOBS_DATA {
            intro: careersJson(id: {eq: "careers-section-intro"}) {
                title
            }
            jobs: careersJson(id: {eq: "our-open-jobs"}) {
                jobs {
                    id
                    title
                    type
                    description
                }
            }
        }      
    `);
	const { intro: { title }, jobs: { jobs } } = getJobsData

	return (
		<SectionWrap>
			<Container>
				<Row justify="center">
					<Col lg={7}>
						<SectionTitle title={title} />
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<JobList>
							{jobs.map((job, i) => {
								const isEven = i % 2 === 0;
								return (
									<JobItem key={job.id} isEven={isEven}>
										<Row>
											<Col lg={3}>
												<JobTitle>{job.title}</JobTitle>
												<JobType>{job.type}</JobType>
											</Col>
											<Col lg={6}>
												<JobDesc>{job.description}</JobDesc>
											</Col>
											<Col lg={3}>
												<JobButton>
													<Button varient="outlined" bordercolor="#ddd">Get Started</Button>
												</JobButton>
											</Col>
										</Row>
									</JobItem>
								)
							})}
						</JobList>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

export default JobsArea
