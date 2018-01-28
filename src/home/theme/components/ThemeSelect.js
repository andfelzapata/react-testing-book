import React from 'react'
import PropTypes from 'prop-types'
import 'react-colors-picker/assets/index.css'
//import ColorPicker from 'react-colors-picker'
import { corner } from 'utilities/styleGuide'

const ThemeSelect = ({updateThemeColor, theme}) => {

	function handleColorChange(selection) {
		const payload = {
			color: selection.color
		}
		updateThemeColor(payload)
	}

	return (
		<div style={corner}>
{/*			<ColorPicker
				defaultColor={theme.color}
				onChange={handleColorChange}
			/>*/}
			<p>eact-colors-picker</p>
			<p>Not Compatible with prop-types</p>
		</div>
	)
}

ThemeSelect.propTypes = {
	theme: PropTypes.object.isRequired,
	updateThemeColor: PropTypes.func.isRequired
}

export default ThemeSelect
