exports.greeting = () => {
    console.log("From the external file!");
}
/**
 * @param {number}
 * @returns {string} Formated to a dollar amount $xxx.xx 
 */
exports.formatPrice = (price) => {
    return "$" + parseFloat(price).toFixed(2);
}

/**
 * @param {string} price formated with a dollar sign $xxx.xx
 * @returns {string} The dollar amount without the $ sign in front
 */
exports.stripDollar = (price) => {
    return price.replace(/\$/g, '');
}

/**
 * @description Accepts an isoDate and returns the date.  If forDisplay(true) format is: mm-dd-yyyy. If forDisplay(false) format is: yyyy-mm-dd.
 * @param {Date} Date structure from mongodb
 * @param {Boolean} 
 * @returns {String} forDisplay(true) = 'mm-dd-yyyy'; forDisplay(false) = 'yyyy-mm-dd' 
 */
exports.getDate = (isoDate, forDisplay=false) => {
    let day = isoDate.getUTCDate();
    if(day < 10)
        day = `0${day}`;
    
    let month = isoDate.getUTCMonth()+1;
    if(month < 10)
        month = `0${month}`;
    
    let year = isoDate.getUTCFullYear();

    if(forDisplay)
        return `${month}-${day}-${year}`;
    else
        return `${year}-${month}-${day}`;
}

/**
 * @returns {string} the name of the farm that the website belongs to.
 */
exports.getFarmName = () => {
    return 'Pieces of Ate';
}