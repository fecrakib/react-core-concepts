class Shape{
    area():number{
        return 0;
    }

}
class Circle extends Shape {
    radius:number;
    constructor(radius:number){
        super();
        this.radius=radius;
    }
    area(): number {
        return Math.PI*this.radius*this.radius;
    }
}
class Rectangle extends Shape{
    with:number;
    height:number;
    constructor(width:number,height:number){
        super();
        this.with=width;
        this.height=height;
    }
    area(): number {
        return this.with*this.height
    }
}
let Shapes:Shape[]=[new Circle(5),new Rectangle(4,5)];
console.log(Shapes);
Shapes.forEach(shape=>console.log(shape.area()))