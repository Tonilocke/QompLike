let screen = document.querySelector(".screen");
let UP = 2;
let FORWARD = 2;


class Qomp{
  constructor(){
    this.left = 0
    this.bottom = 432
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
        this.visual.style.bottom = this.bottom +"px";
        this.left += FORWARD;
        this.visual.style.left = this.left + "px";
        document.addEventListener("keydown",(e)=>{
        if(e.keyCode == 32){
            UP = -UP;//spacebar -> 32
            console.log("Spacebar");
          }
          if(e.key == "d"){//D -> 68
            FORWARD = -FORWARD;
            console.log("D");
          }
        })
      if(this.bottom <= 0 || this.bottom > 448)
        UP = -UP;
      if(this.left <= 0 || this.left >= 688)
        FORWARD = -FORWARD;
    },5);
  }
}


let qomp = new Qomp();
qomp.gravity();
