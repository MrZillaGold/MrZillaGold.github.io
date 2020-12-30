export function timeConvert(timestamp) {
    const currentDate = new Date(timestamp);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return `${pad(day)}.${pad(month)}.${year}`;

    function pad(s) {
        return (s > 9 ? "" : "0") + s;
    }
}

export function randomInteger(min, max) {
    return Math.floor(
        min + Math.random() * (max + 1 - min)
    );
}

export function getRatio(dividend, divider) {
    return divider && dividend ? (dividend / divider).toFixed(2) : 0;
}
