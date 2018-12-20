// liskov Substitution

// Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.



class Shape {
    setColor(color){
        return `this shape has a color ${color }`
    }

    render(area){
        return `this shape has an area of ${area} cm`
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(length){
        super();
        this.length = length;
    }
    getArea() {
        return this.length * this.length;
    }
}

function renderLargeShapes(shapes) {
    shapes.forEach(shape => {
        const area = shape.getArea();
        const render = shape.render(area)
        console.log(area)
        console.log(render);
    });
};

// we can easily replace the shapes without breaking the program.
const shapes = [new Rectangle(4,5), new Rectangle(33,5), new Square(55)];
renderLargeShapes(shapes);