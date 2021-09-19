export const quoteToRouteQuote = (quote) => {
        
    // let ans = quote.replace(/[\s \,\.\;]+/g, '-').slice(0, -1).toLowerCase();
    let ans = quote.replace(/\s+/g, '-')

    return ans
  }

  export const routeQuoteToQuote = (quote) => {

    let ans = quote.replace(/\-/g, ' ');

    return ans
  }