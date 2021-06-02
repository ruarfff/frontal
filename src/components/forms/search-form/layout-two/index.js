import React, { useState } from "react";
import { navigate } from "gatsby";
import { HeaderFormWrap, ButtonWrap } from './search-form.style'
import Form, { Input } from "@ui/form";
import Button from "@ui/button";


const HeaderForm = ({ input, inputId, ...restProps }) => {
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
		<HeaderFormWrap {...restProps}>
			<Form onSubmit={handlSubmit}>
				<Input
					onChange={handleInput}
					type="text"
					placeholder="Search..."
					hover="false"
					id={inputId}
					{...input}
				/>
				<ButtonWrap>
					<Button
						type="submit"
						skin="transparent"
						hover="false"
						varient='onlyIcon'
						color="#fff"
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
		bgcolor: '#002fa64d',
		borderradius: '0',
		bordercolor: 'transparent',
		color: '#fff',
		pl: '10px',
		pr: '50px',
		height: "60px"
	}
}

export default HeaderForm
