import { createSelector } from 'reselect';

const formatSearchValue = value => {
    const concatenatedString = `${value.name} - ${value.email}`;
    return {
        key: concatenatedString,
        text: concatenatedString,
        value: value.id
    }
}

export const selectSearchValues = createSelector(
    state => state.search.values,
    state => state.search.searchString,
    (searchValues, searchString) => {
        const fullNameMatches = [];
        const emailMatches = [];
        const nameMatches = [];
        searchValues.forEach(value => {
            if (value.name.toLowerCase().split(' ').includes(searchString.toLowerCase())) {
                fullNameMatches.push(formatSearchValue(value));
            }else if (value.email.toLowerCase().includes(searchString.toLowerCase())) {
                emailMatches.push(formatSearchValue(value));
            }else if (value.name.toLowerCase().includes(searchString.toLowerCase())) {
                nameMatches.push(formatSearchValue(value));
            }
        })
        return fullNameMatches.concat(emailMatches, nameMatches);
    }
)