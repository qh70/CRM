import { useState, useContext } from "react";
import Titles from "../../../../components/Titles";
import InputInAddNewOrder from "../../../../components/Input/InAddNewOrder";
// useContext
import { UserContext } from "../../../../UserContext";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const ListAddNewOrder = ({ setOpen, setShowAddProduct, setDeletepopup, stateAllInAddNewOrder }) => {
    
    // 每個TextField的值
    const { 
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
    } = useContext(UserContext)

    function companyNameChange(e) {
        setCompanyName(e.target.value);
    }

    function centralNumberChange(e) {
        setCentralNumber(e.target.value);
    }

    function realTypeChange(e) {
        setRealType(e.target.value);
    }

    function licenseNRegistrationStatusChange(e) {
        setLicenseNRegistrationStatus(e.target.value);
    }

    function unitedAnniversaryDueDateGroupChange(e) {
        setUnitedAnniversaryDueDateGroup(e.target.value);
    }

    function createLocationChange(e) {
        setCreateLocation(e.target.value);
    }

    function hKBusinessRegistrationLicenseNumberChange(e) {
        setHKBusinessRegistrationLicenseNumber(e.target.value);
    }

    function checkPersonChange(e) {
        setCheckPerson(e.target.value);
    }

    function addressOfMainBusinessLocationChange(e) {
        setAddressOfMainBusinessLocation(e.target.value);
    }

    function numberOfMainBusinessLocationChange(e) {
        setNumberOfMainBusinessLocation(e.target.value);
    }

    function faxOfMainBusinessLocationChange(e) {
        setFaxOfMainBusinessLocation(e.target.value);
    }

    function addressOfRegistrationOfficeChange(e) {
        setAddressOfRegistrationOffice(e.target.value);
    }

    function numberOfRegistrationOfficeChange(e) {
        setNumberOfRegistrationOffice(e.target.value);
    }

    function faxOfRegistrationOfficeChange(e) {
        setFaxOfRegistrationOffice(e.target.value);
    }

    function addressOfDocumentsSavePlaceChange(e) {
        setAddressOfDocumentsSavePlace(e.target.value);
    }

    function numberOfDocumentsSavePlaceChange(e) {
        setNumberOfDocumentsSavePlace(e.target.value);
    }

    function faxOfDocumentsSavePlaceChange(e) {
        setFaxOfDocumentsSavePlace(e.target.value);
    }

    function emailOfOfficeOfDocumentsSavePlaceChange(e) {
        setEmailOfOfficeOfDocumentsSavePlace(e.target.value);
    }

    function emailOfPersonalOfDocumentsSavePlaceChange(e) {
        setEmailOfPersonalOfDocumentsSavePlace(e.target.value);
    }

    function websiteLinklOfDocumentsSavePlaceChange(e) {
        setWebsiteLinklOfDocumentsSavePlace(e.target.value);
    }

    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(new Date());
    
    const handleClickOpen = () => {setOpen(true);};
    
    const [selectInOrder, setSelectInOrder] = useState("Customer Code");
  
    const handleChange = (event) => {
        setSelectInOrder(event.target.value);
    }; 

  return (
    <div className="listInAddNewOrder">
        <div className="wordProductNHashtags">資料列表</div>  
        <div>
            <TextField className="formControlInOrder" select value={selectInOrder} onChange={handleChange} fullWidth 
                InputProps={{style: {width: '200px',height: "40px" // 修改輸入框的寬度
                },
            }}
            >
                <MenuItem value="Customer Code">法團名稱</MenuItem>
            </TextField> 
            <TextField className="inputInOrder" InputProps={{style: {width: '280px',height: "40px" // 修改輸入框的寬度
                },
            }} placeholder="輸入法團名稱"/>
        </div>
        <div className="listInOrder">
            <div className="nameInList">法團名稱</div>
            <div className="typeInList">實體類型</div>
            <div className="centralNumberInList">中央編號</div>
            <div className="locationInList">成立地點</div>
        </div>
        <div className="textListInOrder">
            <div className="nameInList">中匯國際證券有限公司</div>
            <div className="typeInList">持牌公司</div>
            <div className="centralNumberInList">BQS721</div>
            <div className="locationInList">香港</div>
        </div>
        <div className="textListInOrder">
            <div className="nameInList">XX國際證券有限公司</div>
            <div className="typeInList">持牌公司</div>
            <div className="centralNumberInList">BQS420</div>
            <div className="locationInList">香港</div>
        </div>
        
    </div>
  )
}

export default ListAddNewOrder
