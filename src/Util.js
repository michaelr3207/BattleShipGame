const coordinateReader = (coordinates) => {
    const coordinatesLetter = coordinates.charAt(0);
    let finalCalculateTargetPosition;
    switch (coordinatesLetter) {
        case 'A' : finalCalculateTargetPosition = coordinates.charAt(1); break;
        case 'B' : finalCalculateTargetPosition = '1' + coordinates.charAt(1); break;
        case 'C' : finalCalculateTargetPosition = '2' + coordinates.charAt(1); break;
        case 'D' : finalCalculateTargetPosition = '3' + coordinates.charAt(1); break;
        case 'E' : finalCalculateTargetPosition = '4' + coordinates.charAt(1); break;
        case 'F' : finalCalculateTargetPosition = '5' + coordinates.charAt(1); break;
        case 'G' : finalCalculateTargetPosition = '6' + coordinates.charAt(1); break;
        case 'H' : finalCalculateTargetPosition = '7' + coordinates.charAt(1); break;
        case 'I' : finalCalculateTargetPosition = '8' + coordinates.charAt(1); break;
        case 'J' : finalCalculateTargetPosition = '9' + coordinates.charAt(1); break;
    }
    return finalCalculateTargetPosition;
}

const randomNumberGenerator = () =>  Math.floor(Math.random() * (100 - 1 + 1) + 1);


export { randomNumberGenerator, coordinateReader};