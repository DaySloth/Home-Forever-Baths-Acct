import React, { useContext } from 'react';
import InstallContext from "../../utils/context/installContext.js";


function Outstanding(){

    const {dbInstalls, payInFull, seeInstallDetails} = useContext(InstallContext);
    const outstandingInstalls = dbInstalls.all.filter(install=> install.payment_status === "Outstanding");

    function renderInstallCards() {
        return outstandingInstalls.map((install)=>(
            <div className="ui cards" key={install.date_Updated}>
            <div className="card">
                <div className="content">
                    <div className="header">
                        {install.install_name}
                    </div>
                    <div className="meta">
                        {install.install_date}
                    </div>
                    <div className="description">
                        <p>Price: ${install.price}</p>
                        <p>Paid to date: ${install.payment_received}</p>
                        <p>Outstanding balance: <span className="outstanding">${install.outstanding_balance}</span></p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <button className="ui positive basic button payInFull" onClick={()=> payInFull(install._id)}>Pay in full</button>
                        <button className="ui secondary basic button seeDetails" onClick={()=> seeInstallDetails(install._id)}>See Details</button>
                    </div>
                </div>
            </div>
        </div>
        ) 
        )
    }

    return (
        <>
        {outstandingInstalls.length > 0 ? 
            renderInstallCards()
        :
        <div className="ui icon message">
            <i className="bath icon"></i>
            <div className="content">
                <div className="header">
                    No outstanding installs found
                </div>
                <p>Awesome job! Keep up the great work</p>
            </div>
        </div>
        }
        </>
        
    )
};

export default Outstanding;