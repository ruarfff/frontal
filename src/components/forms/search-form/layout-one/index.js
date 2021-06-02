import React, { useState } from "react";
import { navigate } from "gatsby";
import Form, { Input } from "@ui/form";
import Button from "@ui/button";
import { HeaderFormWrap, ButtonWrap } from './search-form.style'


const HeaderForm = ({ input }) => {
	const [value, setValue] = useState()
	const handleInput = e => setValue(e.target.value)

	const handlSubmit = e => {
		e.preventDefault();

		const query = value
			.toLowerCase()
			.trim()
			.replace(/[^\w ]/g, '')
		// .replace(/\&+/g, '-')

		navigate(`/search?query=${query}`, { state: { query } })
	}

	return (
		<HeaderFormWrap>
			<Form onSubmit={handlSubmit}>
				<Input
					onChange={handleInput}
					type="text"
					id="header-serarch"
					name="serach"
					placeholder="Search..."
					hover="false"
					{...input}
				/>
				<ButtonWrap>
					<Button
						type="submit"
						skin="transparent"
						hover="false"
						varient='onlyIcon'
					>
						<i className="fa fa-search"></i>
					</Button>
				</ButtonWrap>
			</Form>
		</HeaderFormWrap>
	)
}

HeaderForm.defaultProps = {
	input: {
		bgcolor: 'transparent',
		borderradius: '0',
		bordercolor: 'transparent',
		color: '#333',
		pl: '10px',
		pr: '50px',
	}
}

export default HeaderForm
