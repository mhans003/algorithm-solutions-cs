function rectangleRotation(a, b) {
    //Get number of diagonal units along both rectangle axes (halve the resuls);
    let xSide_unis = (a / Math.sqrt(2)) / 2;
    let ySide_units = (b / Math.sqrt(2)) / 2;
    
    //Get the number of points along both axes of the outer rectangle of points.
    let outerRectLen = 2 * Math.floor(xSide_unis) + 1;
    let outerRectWidth = 2 * Math.floor(ySide_units) + 1;
    
    //Get the number of points along both axes of the inner rectange of points.
    let innerRectLen = 2 * Math.floor(xSide_unis) + (xSide_unis % 1 < 0.5 ? 0 : 2);
    let innerRectWidth = 2 * Math.floor(ySide_units) + (ySide_units % 1 < 0.5 ? 0 : 2);
    
    //Return the total number of points inside the whole rectangle.
    return outerRectLen * outerRectWidth + innerRectLen * innerRectWidth;
}
