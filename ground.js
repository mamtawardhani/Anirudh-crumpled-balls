class Ground{
    constructor(x,y){
        var json={
            isStatic: true
        }
        this.ground1=Bodies.rectangle(x,y,2000,10,json)
        World.add(world,this.ground1)
    }
    display(){
        var a=this.ground1.position
        rectMode(CENTER)
        fill("white")
        rect(a.x,a.y,2000,10)
        
    }
}