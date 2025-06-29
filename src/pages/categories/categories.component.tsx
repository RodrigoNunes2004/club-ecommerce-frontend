/* eslint-disable react/react-in-jsx-scope */
import 'categories.styles.css';
import { useState } from 'react';
import Category from '../../types/categories.type';


const Categories = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [categories, setCategories] = useState<Category[]>([]);
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className="categories-container">
            <div className=" categories-content"></div>
        </div>
    )
}

export default Categories;