import { Dropdown } from "semantic-ui-react";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as _ from 'lodash-es';
import * as searchActions from '../../store/search/actions';
import { selectSearchValues } from "../../store/search/selectors";
import * as classes from './Search.module.css';

const Search = () => {
  const [value, setValue] = useState();
  const searchLoading = useSelector(state => state.search.loading);
  const searchErrors = useSelector(state => state.search.errors);
  const searchResult = useSelector(selectSearchValues);
  const dispatch = useDispatch();

  return (
    <div className={classes.searchOuter}>
      <div className={classes.searchInner}>
        <Dropdown
          placeholder="Search..."
          fluid
          search={(e) => e}
          selection
          value={value}
          onChange={(_, { value }) => setValue(value)}
          onSearchChange={_.debounce((_, { searchQuery }) => {
            dispatch(searchActions.searchBegin(searchQuery));
          }, 200)}
          options={searchResult}
          loading={searchLoading}
          error={searchErrors.length !== 0}
        />
      </div>
    </div>
  );
}

export default Search;
