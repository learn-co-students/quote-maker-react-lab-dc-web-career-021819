// TODO: Create action creators as defined in tests

function addQuote(quote) {
  return { type: "ADD_QUOTE", quote: quote };
}
function removeQuote(quote) {
  return { type: "REMOVE_QUOTE", quoteId: quote };
}

function upvoteQuote(quote) {
  return { type: "UPVOTE_QUOTE", quoteId: quote };
}

function downvoteQuote(quote) {
  return { type: "DOWNVOTE_QUOTE", quoteId: quote };
}

export { addQuote, removeQuote, upvoteQuote, downvoteQuote };
