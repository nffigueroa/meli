import React from 'react';
import SearchComponent from '../components/search-bar/search.component';
import './home.template.scss';
const HomeTamplate = ({children}) => {
    return (<section>
        <header>
            <SearchComponent></SearchComponent>
        </header>
        <div className="body">
            {children}
        </div>
    </section>)
}

export default HomeTamplate;