let screen = document.querySelector(".screen");
let UP = 4;
let FORWARD = 4;


class Qomp{
  constructor(){
    this.left = 0
    this.bottom = 480
    this.visual = document.createElement("div")
    const visual = this.visual
    visual.classList.add("qomp")
    visual.style.left = this.left
    visual.style.bottom = this.bottom
    screen.appendChild(visual)
  }
  gravity(){
    setInterval(()=>{

        this.bottom -= UP;
        this.visual.style.bottom = qomp.bottom +"px";
        document.addEventListener("keydown",(e)=>{
          if(e.keyCode == 32){
            UP = -UP;
          }
        })
      if(this.bottom == 0)
        UP = -UP;
    },60);
  }
}


let qomp = new Qomp();
qomp.gravity();
