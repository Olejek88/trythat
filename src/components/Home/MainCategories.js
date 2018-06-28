import React from 'react';
import { observer } from 'mobx-react';
import CategoryTitle from "./CategoryTitle";
import CategoryRow from "./CategoryRow";

@observer
class MainCategories extends React.Component {
  render() {
    return (
        <React.Fragment>
            <CategoryTitle />
            <CategoryRow category={1} />
            <CategoryRow category={1} />
        </React.Fragment>
    );
  }
}

export default MainCategories;
