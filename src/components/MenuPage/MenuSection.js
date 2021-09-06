import React, { useContext } from "react";
// import MenuContext from "./MenuContext";
import MenuPanel from "./MenuPanel";
import Data from './menuItem.json'

// function MenuSection() {
//   const { data } = useContext(MenuContext) || {};
//   return (
//     <div>
//       {data
//         ? data.map((menuPanel) => <MenuPanel title={menuPanel.Name} />)
//         : "Loading"}
//     </div>
//   );
// }

function MenuSection(){
    return(
        <div>
            <div className="menu">
                { 
                Data.map(post => {
                    console.log(post)
                    return(
                        Data?
                        <MenuPanel title={post.title} onlyVeg={post.onlyVeg} items={post.items} />
                        : "Loading"
                    )
                }) }
            </div>
        </div>
    )
}

export default MenuSection;
