function parseCount(count) {
    let result = Number.parseInt(count);
    if (isNaN(result)) {
        throw new Error('Невалидное значение')
    } else {
        return result;
    }
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a > b + c || b > a + c || c > a + b) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        let s = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getPerimeter() { 
                return "Ошибка! Треугольник не существует";
            },
            getArea() { 
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}