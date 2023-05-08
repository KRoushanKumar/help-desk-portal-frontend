import React, { useState } from 'react'
import CategoriesList from './CategoriesList'
import AddCategory from './AddCategory'
import ViewSubCategories from './ViewSubCategories'
import EditCategory from './EditCategory'
import AddSubCategory from './AddSubCategory'

function CategoriesPage() {

    const [showCtgryList,setShowCtgryList] = useState(true);
    const [showAddCategory,setShowAddCategory] = useState(false);
    const [showSubCategories,setShowSubCategories] = useState(false);
    const [showAddSubCategories,setShowAdddSubCategories] = useState(false);
    const [showEditCategory,setShowEditCategory] = useState(false);
    const [ticCtgryId,setTicCtgryId] = useState(0);
    const [ticCtgryName,setTicCtgryName] = useState(""); 

    return (
        <div>
            {showAddCategory?
            <AddCategory showAddCategory={setShowAddCategory}  

            />:null}

            
            {showEditCategory?<EditCategory showEditCategory={setShowEditCategory}/>:null}

            {showCtgryList?
            <CategoriesList showAddCategory={setShowAddCategory} 
                            showEditCategory={setShowEditCategory}
                            showSubCategories={setShowSubCategories} 
                            showCtgryList = {setShowCtgryList}
                            ticCtgryName = {setTicCtgryName} 
                            ticCtgryId = {setTicCtgryId}  
                            showAddSubCategories = {setShowAdddSubCategories}
                            />:null}

            {
                showAddSubCategories?
                <AddSubCategory
                    ticCtgryId = {ticCtgryId} 
                    ticCtgryName = {ticCtgryName} 
                    showSubCategories={setShowSubCategories} 
                    showAddSubCategories = {setShowAdddSubCategories}
                />:null
            }

            {showSubCategories?
            <ViewSubCategories ticCtgryId={ticCtgryId}
                               ticCtgryName = {ticCtgryName} 
                               showSubCategories={setShowSubCategories} 
                               showCtgryList = {setShowCtgryList}
                               showAddSubCategories = {setShowAdddSubCategories}
                               />:null}  


            
        </div>
    )
}

export default CategoriesPage
