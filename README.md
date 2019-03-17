#### Planering
Jag började genom att sketcha upp hur hämsidan skulle se ut på papper. Sedan gick jag 
över till Illustrator och började jobba med färgschemat.

#### Validering
HMTL validerar, förutom att språket inte matchar samt att det saknas en alt på en placeholder bild.
PUG Renderingen saknar också ```<!DOCTYPE html>```

#### Tester
Hemsidan funkar som den ska på:
  * Chrome: macOS, Windows, Linux, IOS och Android
  * Firefox: macOS, Windows, Linux
  * Safari: macOS, IOS (Windows ej testat)
  
Hemsidan funkar inte lika bra på:
  * Internet explorer: Javascript problem
  * Microsoft Edge: Javascript problem
  
#### Dokumentation

##### Vecka 1
Installerat pug och skrivit ett kort script (index.js) som automatiskt renderar PUG vid sparning.
Detta plus Visual Studio Code: Live Server kommer jag använda under utvekligen av hemsidan.

##### Vecka 2
Stilen för hemsidan är klarstilad och ramverket för hemsidan är klar.

##### Vecka 3
Implemiterat Burger-meny med JavaScript.

##### Vecka 4
Fixat så att på större skärmar flyttas menyn från burger till headern. (Vid 800+px bredd)


### How to use PUG-Live updater

1. Drop index.js into your map root
2. Run ```npm install file-system pug```
3. Start width ```node index.js```
4. ???
5. Profit!

Now everytime you save your document, all the pug files will be rendered and saved into /docs/ :)
*or you can use the --watch flag, wish I knew about that...*
