// Your code here
class Polygon{
  constructor(array){
    this.array=array;
  }
  get countSides(){
    return this.array.length;
  }
  get perimeter(){
    return this.array.reduce((memo,e)=>  {return memo+=e},0);
  }
}

class Triangle extends Polygon{
  
  get isValid(){
    if(this.array.length==3){
      return true;
    }
    else 
    {return false}
  }
}
class Square extends Polygon{
  get area(){
    return (this.array[0] * this.array[0]);
  }
  get isValid(){
    if(this.array.length==4){
      return true;
    }
    else
    {return false}
  }
  
  
}