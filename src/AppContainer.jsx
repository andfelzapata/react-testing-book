import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {wrapper, container} from 'utilities/styleGuide'
import {addQuoteById, removeQuoteById, likeQuoteById, unlikeQuoteById} from 'home/quote/state/quoteActionCreators'
import {updateThemeColor} from 'home/theme/state/themeActionCreators'
import AddQuote from 'home/quote/components/AddQuote'
import QuoteList from 'home/quote/components/QuoteList'
import ThemeSelect from 'home/theme/components/ThemeSelect'

class AppContainer extends Component {

	render() {
		return (
			<div style={wrapper}>
				<div
					style={{
						...container,
						background: this.props.theme.color
					}}
				>
					<AddQuote addQuoteById={this.props.addQuoteById} />
				</div>
				<QuoteList
					quotes={this.props.quotes}
					theme={this.props.theme}
					removeQuoteById={this.props.removeQuoteById}
					likeQuoteById={this.props.likeQuoteById}
					unlikeQuoteById={this.props.unlikeQuoteById}
				/>
				<ThemeSelect
					theme={this.props.theme}
					updateThemeColor={this.props.updateThemeColor}
				/>
			</div>
		)
	}
}

AppContainer.propTypes = {
	quotes: PropTypes.array.isRequired,
	addQuoteById: PropTypes.func.isRequired,
	likeQuoteById: PropTypes.func.isRequired,
	unlikeQuoteById: PropTypes.func.isRequired,
	removeQuoteById: PropTypes.func.isRequired,
	theme: PropTypes.object.isRequired,
	updateThemeColor: PropTypes.func.isRequired
}

function select(state) {
	return {
		quotes: state.quotes,
		theme: state.theme
	}
}

export default connect(
	select,
	{
		addQuoteById,
		removeQuoteById,
		likeQuoteById,
		unlikeQuoteById,
		updateThemeColor
	}
)(AppContainer)
