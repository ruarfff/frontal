import React, { useState } from "react";
import axios from 'axios'
import { useForm } from 'react-hook-form'
import useFormUrl from '../useFormUrl'
import Form, { FormGroup, Input, Select, Error } from '../../ui/form'
import Button from "@ui/button";

const AppointmentForm = () => {
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
		console.log(data)
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
			<FormGroup mb="20px">
				<Input
					id="appointment_name"
					type="text"
					placeholder="Name *"
					hover="2"
					{...register("appointment_name", { required: "Name is required" })}
				/>
				<Error>{errors.appointment_name && errors.appointment_name.message}</Error>
			</FormGroup>
			<FormGroup mb="20px">
				<Input
					id="appointment_email"
					type="email"
					placeholder="Email *"
					hover="2"
					{...register("appointment_email", {
						required: "Email is required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "invalid email address"
						}
					})}
				/>
				<Error>{errors.appointment_email && errors.appointment_email.message}</Error>
			</FormGroup>
			<FormGroup mb="20px">
				<Select
					id="appointment_inquiry"
					hover="2"
					{...register("appointment_inquiry", { required: "Please select a inquiry" })}
				>
					<option value="">Your inquiry about</option>
					<option value="General Information Request">General Information Request</option>
					<option value="Partner Relations">Partner Relations</option>
					<option value="Careers">Careers</option>
					<option value="Software Licencing">Software Licencing</option>
				</Select>
			</FormGroup>
			<FormGroup textalign="center">
				<Button type="submit" pl="54px" pr="54px" disabled={serverState.submitting} hover="2">Submit</Button>
				{serverState.status && (
					<p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
						{serverState.status.msg}
					</p>
				)}
			</FormGroup>
		</Form>
	)
}


export default AppointmentForm;