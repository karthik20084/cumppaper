class Papper{
constructor(x,y,radius){

    var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}

this.image=loadImage("paper.png");
this.x=x;
this.y=y;
this.radius=radius;
this.paperbody=Bodies.circle(x,y,radius/2,options);
World.add(world,this.paperbody);

}
display(){
push();
translate(this.x,this.y)
imageMode(CENTER);
image(this.image,0,0, this.radius, this.radius);
pop();


}

}
