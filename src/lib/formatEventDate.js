/**
 * Formats a date string into Ukrainian format
 * @param {string} isoString - The ISO date string to format
 * @param {('full'|'short'|'time')} [format='full'] - The format type to use
 * @returns {string} The formatted date string in Ukrainian
 * 
 * @example
 * // returns "понеділок, 1 січня 2024 р."
 * formatEventDate("2024-01-01T00:00:00.000Z", "full")
 * 
 * // returns "1 січня 2024 р."
 * formatEventDate("2024-01-01T00:00:00.000Z", "short")
 * 
 * // returns "00:00"
 * formatEventDate("2024-01-01T00:00:00.000Z", "time")
 */
export const formatEventDate = (isoString, format = 'full') => {
    const date = new Date(isoString);

    const formats = {
        full: {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        },
        short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        },
        time: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }
    };

    // Ukrainian month names (nominative case)
    const monthsUkrainian = {
        'січня': 'січень',
        'лютого': 'лютий',
        'березня': 'березень',
        'квітня': 'квітень',
        'травня': 'травень',
        'червня': 'червень',
        'липня': 'липень',
        'серпня': 'серпень',
        'вересня': 'вересень',
        'жовтня': 'жовтень',
        'листопада': 'листопад',
        'грудня': 'грудень'
    };

    // Ukrainian day names (nominative case)
    const daysUkrainian = {
        'неділю': 'Неділя',
        'понеділок': 'Понеділок',
        'вівторок': 'Вівторок',
        'середу': 'Середа',
        'четвер': 'Четвер',
        'п\'ятницю': 'П\'ятниця',
        'суботу': 'Субота'
    };

    // Handle time format separately
    if (format === 'time') {
        return date.toLocaleTimeString('uk-UA', formats[format]);
    }

    let formatted = date.toLocaleDateString('uk-UA', formats[format]);

    // Replace Ukrainian month names with nominative case
    Object.keys(monthsUkrainian).forEach(genitive => {
        formatted = formatted.replace(genitive, monthsUkrainian[genitive]);
    });

    // Replace Ukrainian day names with nominative case
    Object.keys(daysUkrainian).forEach(accusative => {
        formatted = formatted.replace(accusative, daysUkrainian[accusative]);
    });

    return formatted;
};