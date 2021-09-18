import mongoose from 'mongoose'

var QuoteSchema = new mongoose.Schema({
    
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },

    author_image: {
        type: String,
        required: true
    },

    quote_source: {
        type: String,
        required: true
    },

    author_birthplace: {
        type: String,
        required: true
    },

    author_bio: {
        type: String,
        required: true
    },
    amazon_title: {
        type: String,
        required: true
    },
    amazon_link: {
        type: String,
        required: true
    },
    date_said: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Quote || mongoose.model('Quote', QuoteSchema, 'quotes')