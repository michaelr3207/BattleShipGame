(()=>{"use strict";var e={208:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(601),i=r.n(n),l=r(314),s=r.n(l)()(i());s.push([e.id,"\n/* {*/\n/*    box-sizing: border-box;*/\n/*}*/\n\nbody, html {\n    background: linear-gradient(237deg, #0b0a0c, rgb(47, 55, 59));\n    margin: 0;\n    height: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n    background: #222526;\n    background: -moz-linear-gradient(-45deg, #171a1c 0%, #1b1a21 50%, #212121 100%);\n    background: -webkit-linear-gradient(-45deg, #08080a 0%, #212121 50%, #1e1e1e 100%);\n    background: linear-gradient(135deg, #1a1d1f 0%, #000000 50%, #484848 100%);\n}\n\n.appContainer {\n    margin: auto;\n    grid-template-rows: 0.5fr 2fr 0.6fr;\n    width: 50%;\n    height: 60%;\n    margin-top: 7%;\n    border: 1px solid black;\n    border-radius: 6%;\n    background: linear-gradient(237deg, #8a8b96, rgb(199, 199, 201));\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.playerBox {\n    /*border: 2px solid rebeccapurple;*/\n    width: 45%;\n    height: 75%;\n    display: grid;\n    grid-template-rows: 0.1fr 1fr;\n    grid-template-columns: 0.08fr 1fr;\n}\n\n.numberBox {\n    grid-column: 2 / 2;\n    /*border: 2px solid green;*/\n    grid-row: 1 / 1;\n    font-family: monospace;\n    padding-left: 2%;\n    display: flex;\n    font-size: 370%;\n    text-space: 2px;\n}\n\n.gridBox {\n    grid-column: 2 / 2;\n    /*border: 2px solid red;*/\n    grid-row: 2 / 2;\n}\n\n.letterBox {\n    grid-row: 2 / 2;\n    grid-column: 1 / 1;\n    /*border: 2px solid orange;*/\n    display: flex;\n    flex-direction: column;\n    align-content: space-between;\n    font-size: 277%;\n}\n.square{\n    /*border: 1px solid blue;*/;\n    width: 100%;\n    height: 50px;\n    border: 1px solid rgba(0, 0, 0, 0.74);\n}\n\n.square:hover {\n    background: red;\n}",""]);const o=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,l){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(s[a]=!0)}for(var h=0;h<e.length;h++){var d=[].concat(e[h]);n&&s[d[0]]||(void 0!==l&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=l),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var l={},s=[],o=0;o<e.length;o++){var a=e[o],h=n.base?a[0]+n.base:a[0],d=l[h]||0,p="".concat(h," ").concat(d);l[h]=d+1;var c=r(p),u={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==c)t[c].references++,t[c].updater(u);else{var g=i(u,n);n.byIndex=o,t.splice(o,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var l=n(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<l.length;s++){var o=r(l[s]);t[o].references--}for(var a=n(e,i),h=0;h<l.length;h++){var d=r(l[h]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}l=a}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var l=r.sourceMap;l&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={id:n,exports:{}};return e[n](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(72),t=r.n(e),n=r(825),i=r.n(n),l=r(659),s=r.n(l),o=r(56),a=r.n(o),h=r(540),d=r.n(h),p=r(113),c=r.n(p),u=r(208),g={};g.styleTagTransform=c(),g.setAttributes=a(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),t()(u.A,g),u.A&&u.A.locals&&u.A.locals;class f{constructor(e,t,r){this.shipName=e,this.shipOwner=r,this.cellSize=t,this.isSunk=!1,this.numberOfHits=0}sinkShip(){this.isSunk=!0}hit(){this.numberOfHits++,this.getNumberOfHits()===this.getCellSize()&&this.sinkShip()}getNumberOfHits(){return this.numberOfHits}getIsSunk(){return this.isSunk}getShipName(){return this.shipName}getShipOwner(){return this.shipOwner}setName(e){this.name=e}getCellSize(){return this.cellSize}setCellSize(e){this.cellSize=e}}class m{constructor(e){this.cellId=e,this.shipOnCell=null,this.hasBeenMarked=!1}markCell(){this.hasBeenMarked=!0}getCellId(){return this.cellId}getId(){return this.cellId}setI(e){this.cellId=e}getShipOnCell(){return this.shipOnCell}setShipOnCell(e){this.shipOnCell=e}getIsMarked(){return this.hasBeenMarked}}class y{constructor(e,t){this.ownerOfBoard=t,this.name=e,this.maxNumberOfCells=100,this.allCells=this.createGameCells(),this.currentOccupiedGridPoints=[],this.missedShots=[],this.markedCells=[]}checkForMissedShot(e){for(let t of this.missedShots)if(t===e)return!0;return!1}checkForAccurateShot(e){for(let t of this.markedCells)if(t===e)return!0;return!1}addPointToOccupiedAreas(e){this.currentOccupiedGridPoints.push(e)}addMissedShot(e){this.missedShots.push(e)}addMarkedShot(e){this.markedCells.push(e)}createGameCells(){let e=[];for(let t=0;t<this.maxNumberOfCells;t++)e.push(new m(t));return e}getAllCells(){return this.allCells}getCellById(e){for(let t of this.allCells)if(t.getCellId().toString()===e.toString())return t;return null}attackShip(e,t){for(let r of this.getAllCells()){if(null!==r.getShipOnCell()&&e.toString()===r.getCellId().toString()&&!r.getIsMarked()){0===r.getShipOnCell().getNumberOfHits()&&alert("0 detecetdd"),console.log("hit!!!!!!!!!!"),this.addMarkedShot(e),r.getShipOnCell().hit(),r.markCell(),r.getShipOnCell().getIsSunk()&&(this.ownerOfBoard.changeShipStatus(r.getShipOnCell().getShipName()),console.log("first destoryed ship found!!!!"),this.ownerOfBoard.checkForShip(r.getShipOnCell().getShipName())&&(console.log("destoryed ship found!!!!"),this.ownerOfBoard.searchAndRemoveShip(r.getShipOnCell().getShipName()),t.endTheGame()));break}if(e.toString()===r.getCellId().toString()){if(r.getIsMarked())return console.log("ERROR: Cell has been taken."),!1;r.markCell(),this.addMissedShot(e)}}return console.log("Cell has been taken successfully."),!0}plotShipOnPlayerGrid(e,t){let r=0;return e=Number.parseInt(e),this.getAllCells().forEach((n=>{n.getCellId().toString()===(e+r).toString()&&r<t.getCellSize()&&(this.addPointToOccupiedAreas(e+r),console.log("plotted!!"),n.setShipOnCell(t),r++)})),console.log("Cell is free!"),!0}plotShipOnPlayerGridYAxis(e,t){console.log("CUrrent brug starting position is: "+e);let r=0;return e=Number.parseInt(e),this.getAllCells().forEach((n=>{n.getCellId().toString()===(e+r).toString()&&r<10*t.getCellSize()&&(this.addPointToOccupiedAreas(e+r),console.log("plotted!!"),n.setShipOnCell(t),r+=10)})),console.log("Cell is free! X grid"),!0}checkIfGridCellIsAvailable(e,t){console.log(`Current  ship first -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% weird error> ${t.getShipName()}`),console.log(`][]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] ${e.toString()}`);let r=e.charAt(e.length-1);console.log(`][]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] this one ${r}`),e=Number.parseInt(e);const n=this.getOccupiedCells();return"Y"===r?this.checkCellAvailabilityYAxis(e,t,n):this.checkCellAvailabilityXAxis(e,t,n)}checkCellAvailabilityYAxis(e,t,r){console.log(`Current taken ship positions -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% > ${r}`),console.log(`Current  ship  -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% > ${t}`);let n=0;for(;n<t.getCellSize();){if(r.includes(e))return!1;n++,e+=10}return!0}checkCellAvailabilityXAxis(e,t,r){console.log(`Current  ship  -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% > ${t}`),console.log(`Current taken ship positions X axis version -------------%%%%%%%%%%%%%%%%%%%%%%%%%%%% > ${r}`);let n=0;for(;n<t.getCellSize();){if(r.includes(e))return!1;n++,e+=1}return!0}getOccupiedCells(){return this.currentOccupiedGridPoints}}class S{constructor(e,t){this.playerId=t,this.name=e,this.grid="grid"+this.getId(),this.playerShips=this.addShipsToPlayer(),this.totalNumberOfSHips=5,this.playerGameBoard=new y(`Player${t} board`,this)}getPlayerGameBoard(){return this.playerGameBoard}addShipsToPlayer(){const e=[],t=new f(this.name+"Destroyer",5,this),r=new f(this.name+"Cruiser",4,this),n=new f(this.name+"Recon",3,this),i=new f(this.name+"Battle",2,this),l=new f(this.name+"Corvette",1,this);return e.push(t),e.push(r),e.push(n),e.push(i),e.push(l),e}searchAndRemoveShip(e){console.log(e);for(let t=0;t<this.playerShips.length;t++)this.playerShips[t].getShipName()===e&&this.playerShips[t].getIsSunk()&&(console.log("tryung to reemove the ship!..."),this.playerShips.splice(t,1),this.totalNumberOfSHips--)}getShipByName(e){if(!this.checkForShip(e))return"";console.log("ship exists");for(let t of this.playerShips)if(t.getShipName()===e)return t}changeShipStatus(e){for(let t of this.playerShips)t.getShipName()===e&&t.sinkShip()}checkForShip(e){for(let t of this.playerShips)if(t.getShipName()===e)return!0;return!1}getName(){return this.name}setName(e){this.name=e}getId(){return this.playerId}setId(e){this.id=e}getGrid(){return this.grid}}class b{constructor(e){this.name=e,this.noOfPlayers=0,this.gamePlayers=[],this.totalNumberOfShips=0,this.player1Ships=[],this.player2Ships=[],this.playerOneGameBoard=new y("Player 1 board"),this.playerTwoGameBoard=new y("Player 2 board"),this.gameOver=!1,this.player1=new S("Player1",1),this.player2=new S("Player2",2)}getPlayer1(){return this.player1}getPlayer2(){return this.player2}endTheGame(){this.gameOver=!0,console.log("GAEM OVER!")}addShip(e,t){if(!t)return null;1===e.playerId?this.player1Ships.push(t):this.player2Ships.push(t),this.totalNumberOfShips++}getPlayerOneGameBoard(){return this.playerOneGameBoard}getPlayerTwoGameBoard(){return this.playerTwoGameBoard}findShip(e,t){let r;return r=1===t.getId()?this.player1Ships:this.player2Ships,r.filter((t=>t.getShipName()!==e))}addPlayer(e){e?(this.gamePlayers.push(e),this.noOfPlayers++):alert("ERRIR")}createPlayer(e){return new S(e,1)}getNumberOfPlayers(){return this.noOfPlayers}getNumberOfShips(){return this.totalNumberOfShips}}class C{constructor(){this.boardPlayer1=document.getElementById("grid1"),this.boardPlayer2=document.getElementById("grid2")}markAttackedTargetOnGrid(e,t){let r;1===t.getId()?r=this.getPlayer1Board().id:2===t.getId()&&(r=this.getPlayer2Board().id),document.getElementById(r+e).style.background="red"}getPlayer1Board(){return this.boardPlayer1}getPlayer2Board(){return this.boardPlayer2}}function O(e){let t;t=1===e?"grid1":"grid2";let r=0;const n=document.getElementById("grid"+e);n.style.display="block";for(let e=0;e<10;e++){const e=document.createElement("div");e.classList.add("row"),e.style.display="flex";for(let n=0;n<10;n++){const n=document.createElement("div");n.classList.add("square"),n.id=t+r.toString(),e.appendChild(n),r++}n.appendChild(e)}}function v(e,t,r,n){const i=(e=Number.parseInt(e))+t.getCellSize();if(console.log("starting pos is curremt ------------------\x3e X axis: "+e),i.toString().charAt(0)===e.toString().charAt(0)){if(n===r.getPlayer1()){if(r.playerOneGameBoard.plotShipOnPlayerGrid(e,t,r))return!0;if(r.playerOneGameBoard.plotShipOnPlayerGrid(e,t,r))return!0}return!0}if(1===i.toString().length&&i.toString().length===e.toString().length)if(n===r.getPlayer1()){if(r.playerOneGameBoard.plotShipOnPlayerGrid(e,t,r))return!0;alert("not good")}else{if(r.playerOneGameBoard.plotShipOnPlayerGrid(e,t,r))return!0;alert("not good")}return console.log("false ------------------------------------\x3e"),alert("Invalid coordinates"),!1}function k(e,t,r,n){let i=0;for(e=Number.parseInt(e);i<t.getCellSize();){if(console.log("starting pos is curremt ------------------\x3e: "+e),e>=100)return console.log("false ------------------------------------\x3e"),alert("Invalid coordinates Y axis"),!1;e+=10,i++,console.log("rounder up starting pos: "+e)}if(e-=10*t.getCellSize(),n===r.getPlayer1()){if(r.playerOneGameBoard.plotShipOnPlayerGridYAxis(e,t,r))return!0;alert("not good 1"),console.log("slaintee")}else{if(r.playerTwoGameBoard.plotShipOnPlayerGridYAxis(e,t,r))return!0;alert("not good 2")}}function x(e,t,r,n){t=Number.parseInt(t),console.log("starting pos now X "+t),console.log("starting ship now X "+e.shipName),console.log("sdfsdfsdf ff");for(let n=0;n<e.getCellSize();n++){const e=document.getElementById(r.getGrid()+t.toString());console.log("------------------??"+r.getGrid()+t.toString()),e.style.background="red",t++}}function I(e,t,r,n){let i=0;for(t=Number.parseInt(t),console.log("starting pos now "+t),console.log("starting ship now "+e.shipName);i<e.getCellSize();){const e=document.getElementById(r.getGrid()+t.toString());console.log("------------------??"+r.getGrid()+t.toString()),e.style.background="red",t+=10,i++}}O(1),O(2),function(){const e=new b("Simple BattleShip Game"),t=(new C,["10Y","37Y","16X","34X","90Y"]);console.log("jereeee ======================================"+e.player1.playerShips[0]);for(let r=0;r<t.length;r++){console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX: "+t[r].charAt(t[r].length-1)),console.log("jereeee ======================================"+e.player1.playerShips[r].toString());let n=e.player1.playerShips[r];e.playerOneGameBoard.checkIfGridCellIsAvailable(t[r],n)?"Y"===t[r].charAt(t[r].length-1)?(console.log("----------------------------------Y is triggerewd -----------------------------------------------\x3e"),k(t[r],e.player1.playerShips[r],e,e.player1)&&I(e.player1.playerShips[r],t[r].substring(0,t[r].length-1),e.player1)):"X"===t[r].charAt(t[r].length-1)&&(console.log("---------------------------------- X is triggered   -----------------------------------------------\x3e"),v(t[r],e.player1.playerShips[r],e,e.player1)&&x(e.player1.playerShips[r],t[r].substring(0,t[r].length-1),e.player1)):alert("that has been taken!!")}const r=e.playerOneGameBoard.getAllCells();console.log(r),r.forEach((e=>{console.log(e)}))}()})()})();