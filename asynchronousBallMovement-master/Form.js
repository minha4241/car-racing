class Form{
    constructor(){

    }
     display(){
         var title=createElement("h2")
         title.html("Car Racing")
         title.position(130,0)
         
         var input=createInput("Enter your Name")
         var button=createButton("Start")
         var greeting=createElement("h3")
         input.position(130,160)
         button.position(250,200)
        

         button.mousePressed(function(){
             input.hide()
             button.hide()
             var name=Input.value()
             playercount+=1
             player.update(name)
             player.updatecount(playercount)
             greeting.html("Welcome!"+name)
             greeting.position(130,150)
         })
     }
}