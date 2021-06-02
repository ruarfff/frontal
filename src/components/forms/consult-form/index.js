import React, { useState } from "react";
import axios from 'axios'
import PropTypes from "prop-types";
import { useForm } from 'react-hook-form'
import useFormUrl from '../useFormUrl'
import { Row, Col } from '../../ui/wrapper'
import Form, { FormGroup, Input, Select, Textarea, Error } from '../../ui/form'
import Button from "@ui/button";

const ConsultForm = ({ btnStyle }) => {
	const formUrl = useFormUrl();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
		}
	};
	const onSubmit = (data, e) => {
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: formUrl,
			data: data
		})
			.then(r => {
				handleServerResponse(true, "Thanks! for contact with us", form);
			})
			.catch(r => {
				handleServerResponse(false, r.response.data.error, form);
			});
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Row gutters={{ lg: 20 }}>
				<Col lg={6}>
					<FormGroup mb="20px">
						<Input
							type="text"
							id="consult_name"
							placeholder="Name *"
							{...register("consult_name", { required: "Name is required" })}
						/>
						<Error>{errors.consult_name && errors.consult_name.message}</Error>
					</FormGroup>
				</Col>
				<Col lg={6}>
					<FormGroup mb="20px">
						<Input
							type="email"
							id="consult_email"
							placeholder="Email *"
							{...register("consult_email", {
								required: "Email is required",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: "invalid email address"
								}
							})}
						/>
						<Error>{errors.consult_email && errors.consult_email.message}</Error>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<FormGroup mb="20px">
						<Select
							id="consult_inquiry"
							{...register("consult_inquiry", { required: "Please select a inquiry" })}
						>
							<option value="">Your inquiry about</option>
							<option value="General Information Request">General Information Request</option>
							<option value="Partner Relations">Partner Relations</option>
							<option value="Careers">Careers</option>
							<option value="Software Licencing">Software Licencing</option>
						</Select>
						<Error>{errors.consult_inquiry && errors.consult_inquiry.message}</Error>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<FormGroup mb="30px">
						<Textarea
							id="consult_message"
							placeholder="Please describe what you need."
							{...register("consult_message", {
								required: "Message is required",
								maxLength: {
									value: 50,
									message: "Maximum length is 50"
								},
								minLength: {
									value: 10,
									message: "Minimum length is 10"
								}
							})}
						></Textarea>
						<Error>{errors.consult_message && errors.consult_message.message}</Error>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<Button type="submit" disabled={serverState.submitting} {...btnStyle}>Get a free consultation</Button>
					{serverState.status && (
						<p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
							{serverState.status.msg}
						</p>
					)}
				</Col>
			</Row>
		</Form>
	)
}

ConsultForm.propTypes = {
	btnStyle: PropTypes.object
}

ConsultForm.defaultProps = {
	btnStyle: {
		hover: 2,
		pl: '54px',
		pr: '54px'
	}
}

export default ConsultForm;