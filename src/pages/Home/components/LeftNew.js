import { useState } from 'react'
import Item from './Item'
import List from '@mui/material/List';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PhotoIcon from '@mui/icons-material/Photo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

// 本來嘗試useReducer，但後來感覺useState比較合適
// function reducer({state}) {
//     switch (state){
//         case !"Order":
//             return {
//                 state: "Order"
//             }
//         case !"Product":
//             return {
//                 state: "Product"
//             }
//         case !"Users":
//             return {
//                 state: "Users"
//             }
//         case !"Clients":
//             return {
//                 state: "Clients"
//             }
//     }
// }

// const useStyles = makeStyles({
//   active: {
//     backgroundColor: "#5B60DE"
//   }
// });


const LeftNew = () => {
    // 本來嘗試useReducer，但後來感覺useState比較合適
    // const [state, dispatch] = useReducer(reducer, {
    //     state: "Order"
    // })
    const [state, setState] = useState("Order");

    const history = useHistory();
    
    const location = useLocation()

    // const classes = useStyles()

    const itemMeun = [
      {
        text: "公司資料",
        icon: <DateRangeIcon />,
        path: "/addneworder"
      }
    ]
    // const sec = function (){
    //   var left1 = document.getElementById("left1")
    //   console.log(left1.parentNode.style)

    // }
    const [ state4RoutesInMobileModules, setState4RoutesInMobileModules ] = useState(false);
    
    const show4RoutesInMobileModules = () => {
      console.log(1)
      setState4RoutesInMobileModules(!state4RoutesInMobileModules);
    }

  return (
    <div className="leftNew">
      <div id="left1" className="leftEmpty"/>
      <div className="left">
          <div className="imgNWTYTrading">
              <MenuIcon className="MenuIconInOrder hideOver600" onClick={show4RoutesInMobileModules}/>
              {state4RoutesInMobileModules?
                <div className="fourRoutesInMobileModules">
                  <div className="singleRouteInMobileModules" onClick={() => history.push("/order")}>order</div>
                  <div className="singleRouteInMobileModules" onClick={() => history.push("/product")}>product</div>
                  <div className="singleRouteInMobileModules" onClick={() => history.push("/user")}>user</div>
                  <div className="singleRouteInMobileModules" onClick={() => history.push("/clients")}>client</div>
                </div>
                // <List className='ListInLeftNew'>
                //   {itemMeun.map(item => (
                //   <ListItem 
                //       button
                //       key={item.text}
                //       onClick={() => history.push(item.path)}
                //       // className={location.pathname == item.path ? classes.active :null}
                //   >
                //       <div className="iconNMenuDark">
                //         <ListItemIcon className="itemIconDark">{item.icon}</ListItemIcon>
                //         <ListItemText className={location.pathname == item.path ? "itemMenu" : "itemMenuDark"} primary={item.text}/>
                //       </div>
                //   </ListItem>
                //   ))}
                // </List>
               :null
              }
            
            <div className="logoNWordInOrder">
              <img className="WTCLogo1" src={require("../../../static/WTY-logo 1.png")}/>
              <div className="WTYTrading">SFC</div>
            </div>
          </div>
          {/* <Item state={state} setState={setState} itemName="Order"/>
          <Item state={state} setState={setState} itemName="Product"/>
          <Item state={state} setState={setState} itemName="Users"/>
          <Item state={state} setState={setState} itemName="Clients"/> */}
          <List className="hideUnder600 ListInLeftNew">
              {itemMeun.map(item => (
              <ListItem 
                  button
                  key={item.text}
                  onClick={() => history.push(item.path)}
                  // className={location.pathname == item.path ? classes.active :null}
              >
                  <div className="iconNMenuDark">
                    <ListItemIcon className="itemIconDark">{item.icon}</ListItemIcon>
                    <ListItemText className={location.pathname == item.path ? "itemMenu" : "itemMenuDark"} primary={item.text}/>
                  </div>
              </ListItem>
              ))}
          </List>
          {/* <button onClick={sec}/> */}
      </div>
    </div>
    
  )
}

export default LeftNew
