(()=>{"use strict";var e={208:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(601),a=r.n(n),i=r(314),o=r.n(i)()(a());o.push([e.id,"\n/* {*/\n/*    box-sizing: border-box;*/\n/*}*/\n\nbody, html {\n    background: linear-gradient(237deg, #0b0a0c, rgb(47, 55, 59));\n    margin: 0;\n    height: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n    background: #222526;\n    background: -moz-linear-gradient(-45deg, #171a1c 0%, #1b1a21 50%, #212121 100%);\n    background: -webkit-linear-gradient(-45deg, #08080a 0%, #212121 50%, #1e1e1e 100%);\n    background: linear-gradient(135deg, #1a1d1f 0%, #000000 50%, #484848 100%);\n}\n\n.appContainer {\n    margin: auto;\n    grid-template-rows: 0.5fr 2fr 0.6fr;\n    width: 50%;\n    height: 60%;\n    margin-top: 7%;\n    border: 1px solid black;\n    border-radius: 6%;\n    background: linear-gradient(237deg, #8a8b96, rgb(199, 199, 201));\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.playerBox {\n    /*border: 2px solid rebeccapurple;*/\n    width: 45%;\n    height: 75%;\n    display: grid;\n    grid-template-rows: 0.1fr 1fr;\n    grid-template-columns: 0.08fr 1fr;\n}\n\n.numberBox {\n    grid-column: 2 / 2;\n    /*border: 2px solid green;*/\n    grid-row: 1 / 1;\n    font-family: monospace;\n    padding-left: 2%;\n    display: flex;\n    font-size: 370%;\n    text-space: 2px;\n}\n\n.gridBox {\n    grid-column: 2 / 2;\n    /*border: 2px solid red;*/\n    grid-row: 2 / 2;\n}\n\n.letterBox {\n    grid-row: 2 / 2;\n    grid-column: 1 / 1;\n    /*border: 2px solid orange;*/\n    display: flex;\n    flex-direction: column;\n    align-content: space-between;\n    font-size: 277%;\n}\n.square{\n    /*border: 1px solid blue;*/;\n    width: 100%;\n    height: 50px;\n    border: 1px solid rgba(0, 0, 0, 0.74);\n}\n\n.square:hover {\n    background: red;\n}",""]);const s=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);n&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],s=0;s<e.length;s++){var l=e[s],d=n.base?l[0]+n.base:l[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var h=r(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var g=a(p,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}o.push(u)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=r(i[o]);t[s].references--}for(var l=n(e,a),d=0;d<i.length;d++){var c=r(i[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(72),t=r.n(e),n=r(825),a=r.n(n),i=r(659),o=r.n(i),s=r(56),l=r.n(s),d=r(540),c=r.n(d),u=r(113),h=r.n(u),p=r(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),t()(p.A,g),p.A&&p.A.locals&&p.A.locals;class f{constructor(e,t,r){this.shipName=e,this.shipOwner=r,this.cellSize=t,this.isSunk=!1,this.numberOfHits=0}sinkShip(){this.isSunk=!0}hit(){this.numberOfHits++,this.getNumberOfHits()===this.getCellSize()&&this.sinkShip()}getNumberOfHits(){return this.numberOfHits}getShipName(){return this.shipName}getShipOwner(){return this.shipOwner}setName(e){this.name=e}getCellSize(){return this.cellSize}setCellSize(e){this.cellSize=e}}class m{constructor(e,t){this.playerId=t,this.name=e,this.grid="grid"+this.getId()}getBoard(){return this.board}getName(){return this.name}setName(e){this.name=e}getId(){return this.playerId}setId(e){this.id=e}getGrid(){return this.grid}}class y{constructor(e){this.cellId=e,this.shipOnCell=null}getCellId(){return this.cellId}getId(){return this.cellId}setI(e){this.cellId=e}getShipOnCell(){return this.shipOnCell}setShipOnCell(e){this.shipOnCell=e}}class b{constructor(e){this.name=e,this.maxNumberOfCells=100,this.allCells=this.createGameCells()}createGameCells(){let e=[];for(let t=0;t<this.maxNumberOfCells;t++)e.push(new y(t));return e}getAllCells(){return this.allCells}attackShip(e,t){console.log("Before testing hit on ship--------------\x3e"),console.log(this.allCells),t.getBoard(),console.log(`----------------------\x3e>> ${e}`);for(let t of this.getAllCells())if(console.log(t.getShipOnCell()),null!==t.getShipOnCell()&&e.toString()===t.getCellId().toString()){0===t.getShipOnCell().getNumberOfHits()&&alert("0 detecetdd"),console.log("hit!!!!!!!!!!"),t.getShipOnCell().hit();break}}}class S{constructor(e){this.name=e,this.noOfPlayers=0,this.gamePlayers=[],this.totalNumberOfShips=0,this.player1Ships=[],this.player2Ships=[],this.playerOneGameBoard=new b("Player 1 board"),this.playerTwoGameBoard=new b("Player 2 board")}addShip(e,t){if(!t)return null;1===e.playerId?this.player1Ships.push(t):this.player2Ships.push(t),this.totalNumberOfShips++}getPlayerOneGameBoard(){return this.playerOneGameBoard}getPlayerTwoGameBoard(){return this.playerTwoGameBoard}findShip(e,t){let r;return r=1===t.getId()?this.player1Ships:this.player2Ships,r.filter((t=>t.getShipName()!==e))}addPlayer(e){e?(this.gamePlayers.push(e),this.noOfPlayers++):alert("ERRIR")}createPlayer(e){return new m(e,1)}getNumberOfPlayers(){return this.noOfPlayers}getNumberOfShips(){return this.totalNumberOfShips}}class v{constructor(){this.boardPlayer1=document.getElementById("grid1"),this.boardPlayer2=document.getElementById("grid2")}markAttackedTargetOnGrid(e,t){let r;1===t.getId()?r=this.getPlayer1Board().id:2===t.getId()&&(r=this.getPlayer2Board().id),document.getElementById(r+e).style.background="red"}getPlayer1Board(){return this.boardPlayer1}getPlayer2Board(){return this.boardPlayer2}}function x(e){let t;t=1===e?"grid1":"grid2";let r=0;const n=document.getElementById("grid"+e);n.style.display="block";for(let e=0;e<10;e++){const e=document.createElement("div");e.classList.add("row"),e.style.display="flex";for(let n=0;n<10;n++){const n=document.createElement("div");n.classList.add("square"),n.id=t+r.toString(),e.appendChild(n),r++}n.appendChild(e)}}function C(e,t,r,n){const a=(e=>{let t;switch(e.charAt(0)){case"A":t=e.charAt(1);break;case"B":t="1"+e.charAt(1);break;case"C":t="2"+e.charAt(1);break;case"D":t="3"+e.charAt(1);break;case"E":t="4"+e.charAt(1);break;case"F":t="5"+e.charAt(1);break;case"G":t="6"+e.charAt(1);break;case"H":t="7"+e.charAt(1);break;case"I":t="8"+e.charAt(1);break;case"J":t="9"+e.charAt(1)}return t})(t);e.playerOneGameBoard.attackShip(a,r),n.markAttackedTargetOnGrid(a,r)}function O(e,t){const r=e+t.getCellSize();return r.toString().charAt(0)===e.toString().charAt(0)||1===r.toString().length&&r.toString().length===e.toString().length}x(1),x(2),function(){const e=new v,t=new S("Simple BattleShip Game"),r=new m("Bob",1),n=new f(r.getName()+"Destroyer",5,r);console.log("Random generated ship starting position ----------\x3e>  43"),console.log(`Random generated ship starting position result ----------\x3e>  ${O(43,n)}`),O(43,n)&&function(e,t,r,n){for(let n=0;n<e.getCellSize();n++){const e=document.getElementById(r.getGrid()+t.toString());console.log("------------------??"+r.getGrid()+t.toString()),e.style.background="red",t++}let a=0;t-=e.getCellSize(),n.getPlayerOneGameBoard().getAllCells().forEach((r=>{r.getCellId().toString()===(t+a).toString()&&a<e.getCellSize()&&(console.log("nfdjnjdfnjsfjsfs"),r.setShipOnCell(e),a++)}))}(n,43,r,t),C(t,"E5",r,e),C(t,"E6",r,e),C(t,"E7",r,e)}()})()})();