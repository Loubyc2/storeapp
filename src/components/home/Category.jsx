import React from 'react'
import { FaChevronRight } from "react-icons/fa"

function Category({ img, more }) {
    return (
        <div className="category">
            <img className={more ? "more" : null} src={img} alt="category-img" />
            {more && <div className="more-text"><p><FaChevronRight /> Más como estos</p></div>}
        </div>
    )
}

export default Category
