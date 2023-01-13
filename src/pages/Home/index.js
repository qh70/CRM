import { useState, useContext } from "react";
import LeftNew from "./components/LeftNew";
//Order
import Order from "../Order/Order/Index";
import AddNewOrder from "../../pages/Order/AddNewOrder";
import EditOrder from "../../pages/Order/EditOrder";

//Product
import Product from "../Product/Product/index";
import AddNewProduct from "../Product/AddNewProduct";
import EditProduct from "../Product/EditProduct";
//User
import User from "../User/User/index";
import AddNewUser from "../User/AddNewUser";
import EditUser from "../User/EditUser";
//Clients
import Client from "../Client/Client";
import AddNewClient from "../Client/AddNewClient";
import EditClient from "../Client/EditClient";

import "../../index.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserContext } from "../../UserContext";

import LoginPopup from "../../components/Dialog/LoginPopup";
import { LoginContext } from "../../LoginContext";

const Home = () => {
    
    
    const [ companyName, setCompanyName ] = useState("");
    const [ centralNumber, setCentralNumber ] = useState("");
    const [ realType, setRealType ] = useState("");
    const [ licenseNRegistrationStatus, setLicenseNRegistrationStatus ] = useState("");
    const [ unitedAnniversaryDueDateGroup, setUnitedAnniversaryDueDateGroup ] = useState("");
    const [ createLocation, setCreateLocation ] = useState("");
    const [ hKBusinessRegistrationLicenseNumber, setHKBusinessRegistrationLicenseNumber ] = useState("");
    const [ checkPerson, setCheckPerson ] = useState("");
    const [ addressOfMainBusinessLocation, setAddressOfMainBusinessLocation ] = useState("");
    const [ numberOfMainBusinessLocation, setNumberOfMainBusinessLocation ] = useState("");
    const [ faxOfMainBusinessLocation, setFaxOfMainBusinessLocation ] = useState("");
    const [ addressOfRegistrationOffice, setAddressOfRegistrationOffice ] = useState("");
    const [ numberOfRegistrationOffice, setNumberOfRegistrationOffice ] = useState("");
    const [ faxOfRegistrationOffice, setFaxOfRegistrationOffice ] = useState("");
    const [ addressOfDocumentsSavePlace, setAddressOfDocumentsSavePlace ] = useState("");
    const [ numberOfDocumentsSavePlace, setNumberOfDocumentsSavePlace ] = useState("");
    const [ faxOfDocumentsSavePlace, setFaxOfDocumentsSavePlace ] = useState("");
    const [ emailOfOfficeOfDocumentsSavePlace, setEmailOfOfficeOfDocumentsSavePlace ] = useState("");
    const [ emailOfPersonalOfDocumentsSavePlace, setEmailOfPersonalOfDocumentsSavePlace ] = useState("");
    const [ websiteLinklOfDocumentsSavePlace, setWebsiteLinklOfDocumentsSavePlace ] = useState("");
    

    const [ login, setLogin ] = useState(false);

    const [ logoutPopup, setLogoutPopup ] = useState(false)

  return (
    <Router>
        <div className="wholePicture">
            <LeftNew/>
            {/* <div className="right"> */}
                {/* <Header/> */}
                <Switch>
                    <LoginContext.Provider value={{ login, setLogin, logoutPopup, setLogoutPopup }}>
                        <UserContext.Provider value={{ 
                            companyName, setCompanyName,
                            centralNumber, setCentralNumber,
                            realType, setRealType,
                            licenseNRegistrationStatus, setLicenseNRegistrationStatus,
                            unitedAnniversaryDueDateGroup, setUnitedAnniversaryDueDateGroup,
                            createLocation, setCreateLocation,
                            hKBusinessRegistrationLicenseNumber, setHKBusinessRegistrationLicenseNumber,
                            checkPerson, setCheckPerson,
                            addressOfMainBusinessLocation, setAddressOfMainBusinessLocation,
                            numberOfMainBusinessLocation, setNumberOfMainBusinessLocation,
                            faxOfMainBusinessLocation, setFaxOfMainBusinessLocation,
                            addressOfRegistrationOffice, setAddressOfRegistrationOffice,
                            numberOfRegistrationOffice, setNumberOfRegistrationOffice,
                            faxOfRegistrationOffice, setFaxOfRegistrationOffice,
                            addressOfDocumentsSavePlace, setAddressOfDocumentsSavePlace,
                            numberOfDocumentsSavePlace, setNumberOfDocumentsSavePlace,
                            faxOfDocumentsSavePlace, setFaxOfDocumentsSavePlace,
                            emailOfOfficeOfDocumentsSavePlace, setEmailOfOfficeOfDocumentsSavePlace,
                            emailOfPersonalOfDocumentsSavePlace, setEmailOfPersonalOfDocumentsSavePlace,
                            websiteLinklOfDocumentsSavePlace, setWebsiteLinklOfDocumentsSavePlace
                        }}>
                            {/* order */}
                            <Route exact path="/order">
                                <Order/> 
                            </Route>
                            <Route exact path="/addneworder">
                                <AddNewOrder />
                            </Route>
                            <Route exact path="/editorder">
                                <EditOrder />
                            </Route>
                        </UserContext.Provider>
                    </LoginContext.Provider>
                    {/* <Route path="/try" exact component={Client} /> */}
                </Switch>
            </div>
    </Router>
    
  )
}

export default Home
