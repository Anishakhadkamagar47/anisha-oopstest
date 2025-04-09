class Rectangle{
    constructor( width,height){
this.width=width;
this.height=height;
    }
   getarea() {
    console.log(this.width*this.height)
   } 
   isSquare(){
    
   }
}
 const rectangle=new Rectangle(10,12);
rectangle.getarea();
