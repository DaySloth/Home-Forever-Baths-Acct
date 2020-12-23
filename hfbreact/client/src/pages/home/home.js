import React from 'react';

function Home(){
    return (
        <form className="ui form container" id="installForm">
            <div id="errorMessage"></div>
            <div className="field">
                <label>Install date</label>
                <input type="date" name="installDate" required />
            </div>

            <div className="field">
                <label>Install name</label>
                <input type="text" name="install" id="installName" required />
            </div>

            <div className="form-group field">
                <label>Install type</label>
                <select className="form-control" id="installType">
                    <option>Walk-in bath</option>
                    <option>Walk-in shower</option>
                    <option>Tub shower</option>
                    <option>Tub bath</option>
                </select>
            </div>
            <div className="field">
                <label>Price</label>
                <div className="ui labeled input">
                    <label className="ui label">$</label>
                    <input type="number" id="installPrice" required />
                </div>
            </div>

            <div className="special-options">
                <div className="ui slider checkbox">
                    <input type="checkbox" name="virtual" />
                    <label>Virtual</label>
                </div>

                <div className="ui slider checkbox">
                    <input type="checkbox" name="digital" />
                    <label>Digital</label>
                </div>

                <div className="ui slider checkbox">
                    <input type="checkbox" name="hoa" />
                    <label>HOA</label>
                </div>
            </div>

            <div className="form-group field">
                <label>Salesman</label>
                <select className="form-control" name="salesman">
                    <option>AJ</option>
                    <option>Arod</option>
                    <option>Isaiah</option>
                    <option>Tom</option>
                    <option>Jack</option>
                </select>
            </div>

            <div className="field">
                <label>Installer</label>
                <input type="text" name="installer" required />
            </div>

            <div className="ui icon input">
                <input type="number" placeholder="Fees" />
                <i className="inverted circular plus circle link icon"></i>
            </div>

            <div className="ui list" id="feesDiv">
            </div>

            <div className="field" id="paymentStatusDiv">
                <label>Payment status</label>
                <button className="ui toggle button" >Paid in full</button>

                <button className="ui toggle button" >Payment still needed</button>
            </div>


            <div className="field hide" id="paymentReceivedDiv">
                <label>Payment received</label>
                <div className="ui labeled input">
                    <label className="ui label">$</label>
                    <input type="number" placeholder="Payment received" name="paymentReceived" />
                </div>
            </div>

            <div className="ui labeled input">
                <label className="ui label"><i className="money bill alternate outline icon"></i> Payment
                    method</label>
                <select className="form-control" name="paymentMethod">
                    <option>Credit Card</option>
                    <option>Check</option>
                    <option>TIME</option>
                    <option>Greensky</option>

                </select>
            </div>

            <div className="field">
                <label>Notes</label>
                <textarea name="notes" cols="30" rows="5"></textarea>
            </div>

            <button className="ui button large fluid" type="submit">Submit install</button>
        </form>
    )
};

export default Home;