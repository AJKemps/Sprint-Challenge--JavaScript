// 1. Copy and paste your prototype in here and refactor into class syntax.



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMakerTwo {
    constructor(attrs){
        this.length = attrs.length;
        this.width= attrs.width;
        this.height = attrs.height;
    }
    volume() {
        const volume = (this.length*this.width*this.height);
        return volume;
      }
    
    surfaceArea () {
        const surfaceArea = (2 * (this.length*this.width + this.length*this.height + this.width*this.height));
        return surfaceArea;
      }
}

class CubeMaker extends CuboidMakerTwo {
    constructor(childAttrs) {
        super(childAttrs);
    }
}

const cuboidTwo = new CuboidMakerTwo({
    'length': 4,
    'width': 5,
    'height': 5 
});

const cube = new CubeMaker({
    'length': 4,
    'width': 5,
    'height': 5 
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130

console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130