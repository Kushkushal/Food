// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Find a wide range of options tailored to your taste. Whether you are looking for something light or a full meal, we have got you covered. Browse through our carefully curated dishes and enjoy a flavorful experience with every bite!</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category==item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>

                    </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
