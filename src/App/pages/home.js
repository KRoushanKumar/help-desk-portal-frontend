import React from 'react'

import CategoriesList from './Admin/CategoriesList'
import AddCategory from  './Admin/AddCategory'
import EditCategory from './Admin/EditCategory'
import AddSubcategory from './Admin/AddSubCategory'
import EditSubCategory from './Admin/EditSubCategory'
import ViewSubCategories from './Admin/ViewSubCategories'


function home() {
    return (
        <>      
            <CategoriesList/>
            <AddCategory/>
            <EditCategory/>
            <ViewSubCategories/>
            <AddSubcategory/>
            <EditSubCategory/>
        </>
    )
}

export default home