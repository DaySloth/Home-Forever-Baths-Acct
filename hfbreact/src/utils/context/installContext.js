import React from 'react';

const InstallContext = React.createContext({
    installDate: "",
    installName: "",
    installType: "",
    price: 0,
    specialOpts: [],
    salesman: "",
    installer: "",
    fees: [],
    paymentStatus: "",
    paymentReceived: "",
    paymentMethod: "",
    notes: ""
});

export default InstallContext;