class Paper{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
restitution:1,
friction:0.5,
density:1.2


        }
        this.body=Bodies.circle(x,y,radius,options);
        /*this.width = width;
        this.height = height;*/
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push(); 
       translate(pos.x,pos.y);
       fill("pink");
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}