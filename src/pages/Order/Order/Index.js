
import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { display } from '@mui/system';
import Header from "../../../components/Header/Header"
import BtnNPurchaseOrderList from "./components/BtnNPurchaseOrderList"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstButton from '../../../components/Button/FirstButton';
import { Button } from "@mui/material"
import ListAddNewOrder from "./components/ListAddNewOrder"


const Order = () => {

  return (
    <div className="pageAddNewOrder">
        <Header/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary">添加新公司資料</Button>
            {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
        </div>
        {/* <ListAddNewOrder setShowAddProduct={setShowAddProduct} setOpen={setOpen} setDeletepopup={setDeletepopup} stateAllInAddNewOrder={stateAllInAddNewOrder}/> */}
        <ListAddNewOrder />
    </div>
  )
}

export default Order
