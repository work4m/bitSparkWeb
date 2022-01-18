import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								// src={prof.avatar_url}
								src={'/img/icons/common/contact_us.svg'}
								style={{ width: "300px" }}
								alt=""
								// className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
								className="img-center mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							{/* <h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
								DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY
								INBOX IS OPEN FOR ALL
							</p>
							<p className="text-white mt-3">{prof.bio}</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{prof.location}
							</div>
							<br />
							<br /> */}
							<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfVhAPXnNDMDIH8x7mWJO_xm4NKsotbJt6nFsUFpWcyaCXEA/viewform?embedded=true" width="100%" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
							{/* <SocialLinks /> */}
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
