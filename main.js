

function generate(f, s, a){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var imgData = ctx.createImageData(512, 512);
    var perlin_gen = new PerlinNoiseGenerator();
    perlinData = perlin_gen.generate(512, 512, f, s, a);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        var p = perlinData[i / 4];
        var rgb = (p * 255) | 0;
        imgData.data[i+0] = rgb;
        imgData.data[i+1] = rgb;
        imgData.data[i+2] = rgb;
        imgData.data[i+3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);      
}

function on_generate(){
    var f = parseInt(document.getElementById('freq').value);
    var s = parseInt(document.getElementById('steps').value);
    var a = parseInt(document.getElementById('amp').value);
    generate(f, s, a);
}

document.getElementById('generate').addEventListener('click', on_generate);
on_generate();