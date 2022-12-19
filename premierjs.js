<script src="canvasengine-X.Y.Z.all.min.js"></script>
canvas.Scene.new({name:"preload",materials:{images:{background_preload:"C:\\Users\\Cédric\\git\\cedec1985\\bankaccount\\spéléologie.jpg",bar_empty:"C:\\Users\\Cédric\\git\\cedec1985\\bankaccount\\Rainbow-Progress-Bar-HTML-CSS.png",
bar_full:"C:\\Users\\Cédric\\git\\cedec1985\\bankaccount\\CustomProgressBar.PNG"}},
ready:function(stage){}});
var self=this,
    el=this.createElement();
el.drawImage("spéléologie",0,0);
stage.append(el);
render.function(stage);
    stage.refresh();

CE.getJSON("data/game.json",function(files)
{var percentage=0,
bar_full=self.createElement(),
bar_empty=self.createElement();
bar_empty.drawImage("Rainbow-Progress-Bar-HTML-CSS",215,250);
stage.append(bar_empty);
stage.append(bar_full);

canvas.materials.load("images",files,function(){
percentage +=Math.round(100/files.length);
bar_full.drawImage("CustomProgressBar",215,250,percentage +"%");
stage.refresh();},
function(){
    canvas.scene.call("title");
});
},'json');
