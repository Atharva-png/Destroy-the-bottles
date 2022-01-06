class BaseClass{
    constructor(x,y,width,height,angle){
        var options={
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        this.image=loadImage("Base.png")
        World.add(world,this.body)
    }

    display(){
        var angle =this.body.angle;
        var pos=this.body.position
    push ()
        translate(pos.x,pos.y)
        rotate (angle)
        imageMode (CENTER);
        image (this.image,0,0,this.width,this.height)

    pop ()
    
    }

}