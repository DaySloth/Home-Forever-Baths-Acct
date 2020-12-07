const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const installSchema = new Schema({
    install_date: Date,
    install_name: String,
    install_type: String,
    price: Number,
    special_options: Array,
    salesman: String,
    installer: String,
    fees: Array,
    payment_status: String,
    payment_received: Number,
    outstanding_balance: Number,
    payment_method: String,
    total_install_amount: Number,
    notes: String,
    date_Updated: { type: Date, default: Date.now }
});

const Install = mongoose.model('Install', installSchema);

module.exports = Install;