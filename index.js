const pug = require('pug');
const fs = require("file-system")


fs.watch("src", () => {
    render();
})

function render(){
    var files = fs.readdirSync("src");

    for (file of files) {
        try{
            var fn = pug.compileFile("src/"+file);
            var html = fn();
        } catch(e){
            console.log(e)
        }
        fs.writeFileSync("dist/"+file.substr(0, file.indexOf(".")) + ".html", html);
    }

    console.count("Rendered!")
}
