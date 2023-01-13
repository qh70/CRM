import { useState, useContext } from "react";
import Titles from "../../../../components/Titles";
import InputInAddNewOrder from "../../../../components/Input/InAddNewOrder";
// useContext
import { UserContext } from "../../../../UserContext";

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

  return (
    <div className="listInAddNewOrder">
        <a className="wordProductNHashtags">資料編號 ######</a>
        
        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="法團名稱"/>
                <InputInAddNewOrder value={companyName} onChange={companyNameChange}/>
                <Titles titles="中央編號"/>
                <InputInAddNewOrder value={centralNumber} onChange={centralNumberChange}/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="實體類型"/>
                <InputInAddNewOrder value={realType} onChange={realTypeChange}/>
                <Titles titles="牌照/註冊狀況"/>
                <InputInAddNewOrder value={licenseNRegistrationStatus} onChange={licenseNRegistrationStatusChange}/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="發牌/註冊日期"/>
                <InputInAddNewOrder type="date"/>
                <Titles titles="統一周年到期日群組"/>
                <InputInAddNewOrder value={unitedAnniversaryDueDateGroup} onChange={unitedAnniversaryDueDateGroupChange}/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="繳交年費/遞交周年申報表的週年到期日(日/月)"/>
                <InputInAddNewOrder type="date"/>
                <Titles titles="成立地點"/>
                <InputInAddNewOrder value={createLocation} onChange={createLocationChange}/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="成立日期(日/月/年)"/>
                <InputInAddNewOrder type="date"/>
                <Titles titles="財政年度終結日期(日/月)"/>
                <InputInAddNewOrder type="date"/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="香港商業登記證編號"/>
                <InputInAddNewOrder value={hKBusinessRegistrationLicenseNumber} onChange={hKBusinessRegistrationLicenseNumberChange}/>
                <Titles titles="核數師"/>
                <InputInAddNewOrder value={checkPerson} onChange={checkPersonChange}/>
            </div>
        </div>

        <div className="wordContactInformation">聯絡資料</div>
        
        <div className="wordMainRunLocation">主要營業地點</div>
        
        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="地址"/>
                <input className="addressInAddNewOrder" value={addressOfMainBusinessLocation} onChange={addressOfMainBusinessLocationChange}></input>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="電話號碼"/>
                <InputInAddNewOrder value={numberOfMainBusinessLocation} onChange={numberOfMainBusinessLocationChange}/>
                <Titles titles="傳真號碼"/>
                <InputInAddNewOrder value={faxOfMainBusinessLocation} onChange={faxOfMainBusinessLocationChange}/>
            </div>
        </div>

        <div className="wordRegisterLocation">註冊辦事處</div>

        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="地址"/>
                <input className="addressInAddNewOrder" value={addressOfRegistrationOffice} onChange={addressOfRegistrationOfficeChange}></input>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="電話號碼"/>
                <InputInAddNewOrder value={numberOfRegistrationOffice} onChange={numberOfRegistrationOfficeChange}/>
                <Titles titles="傳真號碼"/>
                <InputInAddNewOrder value={faxOfRegistrationOffice} onChange={faxOfRegistrationOfficeChange}/>
            </div>
        </div>

        <div className="wordRegisterLocation">紀錄存放處</div>

        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="地址"/>
                <input className="addressInAddNewOrder" value={addressOfDocumentsSavePlace} onChange={addressOfDocumentsSavePlaceChange}></input>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="電話號碼"/>
                <InputInAddNewOrder value={numberOfDocumentsSavePlace} onChange={numberOfDocumentsSavePlaceChange}/>
                <Titles titles="傳真號碼"/>
                <InputInAddNewOrder value={faxOfDocumentsSavePlace} onChange={faxOfDocumentsSavePlaceChange}/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="電郵地址(辦事處)"/>
                <InputInAddNewOrder value={emailOfOfficeOfDocumentsSavePlace} onChange={emailOfOfficeOfDocumentsSavePlaceChange}/>
                <Titles titles="電郵地址(個人)"/>
                <InputInAddNewOrder value={emailOfPersonalOfDocumentsSavePlace} onChange={emailOfPersonalOfDocumentsSavePlaceChange}/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="網站地址"/>
                <input className="addressInAddNewOrder" value={websiteLinklOfDocumentsSavePlace} onChange={websiteLinklOfDocumentsSavePlaceChange}></input>
            </div>
        </div>
    </div>
  )
}

export default ListAddNewOrder
