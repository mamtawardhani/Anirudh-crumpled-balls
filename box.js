class Box{
    constructor(x,y,width,height){

        var r={
            isStatic: true
        }
        this.box=Bodies.rectangle(x,y,width,height,r)
        this.width=width
        this.height=height
        World.add(world,this.box)
    }
    display(){
        var pos=this.box.position
        var ang=this.box.angle
        push()
        translate(pos.x,pos.y)
        rotate(ang)
        
        fill("yellow")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()

    }
}


