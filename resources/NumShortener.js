//Warning - Will need to be updated if the app grows too big, but getting to the trillions is unlikely

export default function NumShortener(number) {
    if(number > Math.pow(10, 9)-1) {
        return(Math.round(number/Math.pow(10, 9)) + "B");
    } else if (number > Math.pow(10, 6)-1) {
        return(Math.round(number/Math.pow(10, 6)) + "M");
    } else if (number > Math.pow(10, 3)-1) {
        return(Math.round(number/Math.pow(10, 3)) + "K");
    } else {
        return number;
    }
}