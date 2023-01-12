import { useState } from "react"
import ListAddNewOrder from "./components/ListAddNewOrder"
import Header from "../../../components/Header/Header"
import MaxWidthDialog from "../../../components/Dialog"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"
import { useHistory } from "react-router-dom";

const AddNewOrder = () => {

  const history = useHistory();
  const goToAddNewOrder = () => {
    history.push("/addneworder");
  }
    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);

    const [deletepopup, setDeletepopup] = useState(false);  

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    const disableAllInAddNewOrder = function () {
      setStateAllInAddNewOrder(true);
    }

  return (
    <div className="pageAddNewOrder">
        <MaxWidthDialog open={open} setOpen={setOpen} />
        <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="order"/>
        <Header/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="primary">更改資料</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>刪除資料</Button>
            <Button className="buttonRestInAddNewUser" variant="outlined" color="secondary" onClick={goToAddNewOrder}>添加新公司資料</Button>
        </div>
        <ListAddNewOrder setShowAddProduct={setShowAddProduct} setOpen={setOpen} setDeletepopup={setDeletepopup} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
    </div>
  )
}

export default AddNewOrder