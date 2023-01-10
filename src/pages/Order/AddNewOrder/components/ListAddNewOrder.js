import { useState } from "react";
import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import DatePicker from '@mui/lab/DatePicker';
import dayjs from 'dayjs';
import Button from "@mui/material/Button";
import Input from '@mui/material/Input';
import TableInAddNewOrder from "../../../../components/Table/TableInAddNewOrder";
import TableInAddNewOrder2 from "../../../../components/Table/TableInAddNewOrder2";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Titles from "../../../../components/Titles";
import InputInAddNewOrder from "../../../../components/Input/InAddNewOrder";


const ListAddNewOrder = ({ setOpen, setShowAddProduct, setDeletepopup, stateAllInAddNewOrder }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(new Date());
    
    const handleClickOpen = () => {setOpen(true);};

  return (
    <div className="listInAddNewOrder">
        
        <a className="wordProductNHashtags">資料編號 ######</a>
        
        <div className="listForOrder">
            <div className="rowInListForOrder">
                <Titles titles="法團名稱"/>
                <InputInAddNewOrder/>
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
                <InputInAddNewOrder/>
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
