let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length
    }
};
// roomDimensions.getArea();
let getArea = roomDimensions.getArea;
getArea();
let boundGetArea = getArea.bind(roomDimensions);
boundGetArea();