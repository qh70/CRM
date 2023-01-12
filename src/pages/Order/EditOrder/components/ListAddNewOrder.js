import { useState,useContext } from "react";
import Titles from "../../../../components/Titles";
import InputInAddNewOrder from "../../../../components/Input/InAddNewOrder";
// useContext
import { UserContext } from "../../../../UserContext"


const ListAddNewOrder = ({ setOpen, setShowAddProduct, setDeletepopup, stateAllInAddNewOrder }) => {
    
    const {
        companyName,
        luziCode,
        customerCode,
        gender,
        name,
        nameCN,
        inspiredByDesigner,
        inspiredByDesignerCN,
        inspiredByBrand,
        inspiredByBrandCN,
        remarks
    } = useContext(UserContext);

    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(new Date());
    
    const handleClickOpen = () => {setOpen(true);};

    
    console.log("wtcdown")

  return (
    <div className="listInAddNewOrder">
        <a className="wordProductNHashtags">資料編號 ######</a>
        
        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="法團名稱"/>
                <InputInAddNewOrder value = {companyName}/>
                <Titles titles="中央編號"/>
                <InputInAddNewOrder/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="實體類型"/>
                <InputInAddNewOrder/>
                <Titles titles="牌照/註冊狀況"/>
                <InputInAddNewOrder/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="發牌/註冊日期"/>
                <InputInAddNewOrder type="date"/>
                <Titles titles="統一周年到期日群組"/>
                <InputInAddNewOrder/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="繳交年費/遞交周年申報表的週年到期日(日/月)"/>
                <InputInAddNewOrder type="date"/>
                <Titles titles="成立地點"/>
                <InputInAddNewOrder/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="成立日期(日/月/年)"/>
                <InputInAddNewOrder type="date"/>
                <Titles titles="財政年度終結日期(日/月)"/>
                <InputInAddNewOrder type="date"/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="香港商業登記證編號"/>
                <InputInAddNewOrder/>
                <Titles titles="核數師"/>
                <InputInAddNewOrder/>
            </div>
        </div>

        <div className="wordContactInformation">聯絡資料</div>
        
        <div className="wordMainRunLocation">主要營業地點</div>
        
        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="地址"/>
                <input className="addressInAddNewOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="電話號碼"/>
                <InputInAddNewOrder/>
                <Titles titles="傳真號碼"/>
                <InputInAddNewOrder/>
            </div>
        </div>

        <div className="wordRegisterLocation">註冊辦事處</div>

        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="地址"/>
                <input className="addressInAddNewOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="電話號碼"/>
                <InputInAddNewOrder/>
                <Titles titles="傳真號碼"/>
                <InputInAddNewOrder/>
            </div>
        </div>

        <div className="wordRegisterLocation">紀錄存放處</div>

        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="地址"/>
                <input className="addressInAddNewOrder"></input>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="電話號碼"/>
                <InputInAddNewOrder/>
                <Titles titles="傳真號碼"/>
                <InputInAddNewOrder/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="電郵地址(辦事處)"/>
                <InputInAddNewOrder/>
                <Titles titles="電郵地址(個人)"/>
                <InputInAddNewOrder/>
            </div>

            <div className="rowInListForOrder">
                <Titles titles="網站地址"/>
                <input className="addressInAddNewOrder"></input>
            </div>
        </div>       
    </div>
  )
}

export default ListAddNewOrder
