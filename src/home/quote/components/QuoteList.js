import React from 'react'
import PropTypes from 'prop-types'
import {container} from 'utilities/styleGuide'
import Quote from './Quote'

const QuoteList = ({
	quotes,
	theme,
	likeQuoteById,
	unlikeQuoteById,
	removeQuoteById
}) => {
	return (
		<div style={container}>
			{quotes.map(quote => {
				return (
					<Quote
						theme={theme}
						key={quote.id}
						quote={quote}
						likeQuoteById={likeQuoteById}
						unlikeQuoteById={unlikeQuoteById}
						removeQuoteById={removeQuoteById}
					/>
				)
			})}
		</div>
	)
}

QuoteList.propTypes = {
	quotes: PropTypes.array.isRequired,
	removeQuoteById: PropTypes.func.isRequired,
	likeQuoteById: PropTypes.func.isRequired,
	unlikeQuoteById: PropTypes.func.isRequired,
	theme: PropTypes.object.isRequired
}

export default QuoteList
