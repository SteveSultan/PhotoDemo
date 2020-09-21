
class Photo{
    //define constructor
    //Set default values
    constructor(width = 8, height = 10)
    {
        this.width = width
        this.height = height
    }

    //declare price function
    price()
    {
        //use let to declare variable
        let finalPrice;

        if ((this.width == 8) && (this.height == 10))
        {
            this.price = 4;
        }
        else {
            if ((this.width == 10) && (this.height == 12))
            {
                this.price = 6
            }
            else
            {
                this.price = 10
            }
        }
       
        return finalPrice
        
    }

    toString()
    {
        //return 'This is a ' + this.width +' by '+ this.height + 'photo and it costs '+ this.price()
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}`;
    }
    
}
//create two instance
let myPhoto1 = new Photo(10,12);
console.log(myPhoto1.toString());

let myPhoto2 = new Photo(8,10);
console.log(myPhoto2.toString());
