import React from 'react';
import CategoryTitle from "./CategoryTitle";
import CategoryRow from "./CategoryRow";

class MainCategories extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CategoryTitle/>
                <CategoryRow category={1}/>
{/*
                <CategoryRow category={1}/>
*/}
            </React.Fragment>
        );
    }
}

export default MainCategories;
