
export const compareStrings = (str1, str2) => {

if (!str2){
    str2 = {
        searchString: ''
    } 
}

    return str1.toLowerCase().includes(str2.searchString.toLowerCase());
};