var g=!0,j=null,n=!1;function q(a){return function(){return this[a]}}var r,aa=this;function s(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function t(a){return"array"==ba(a)}function v(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}function w(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function x(a,b){function c(){}c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c};var ca=/^[a-zA-Z0-9\-_.!~*'()]*$/;function y(a){a=""+a;return!ca.test(a)?encodeURIComponent(a):a};var da=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function ea(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function fa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};var ga=Array.prototype,ha=ga.forEach?function(a,b,c){ga.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function ia(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(t(d)||(e=v(d))&&d.hasOwnProperty("callee"))a.push.apply(a,d);else if(e)for(var f=a.length,h=d.length,i=0;i<h;i++)a[f+i]=d[i];else a.push(d)}};function ja(a){if("function"==typeof a.m)return a.m();if(w(a))return a.split("");if(v(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ea(a)}function la(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(v(a)||w(a))ha(a,b,c);else{var d;if("function"==typeof a.p)d=a.p();else if("function"!=typeof a.m)if(v(a)||w(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=fa(a);else d=void 0;for(var e=ja(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}};function A(a,b){this.i={};this.A={};var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof A?(c=a.p(),d=a.m()):(c=fa(a),d=ea(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}r=A.prototype;r.c=0;r.H=0;r.m=function(){var a=[],b;for(b in this.i)":"==b.charAt(0)&&a.push(this.i[b]);return a};
r.p=function(){var a=[],b;for(b in this.i)if(":"==b.charAt(0)){var c=b.substring(1);a.push(this.A[b]?Number(c):c)}return a};r.k=function(a){return":"+a in this.i};r.remove=function(a){var a=":"+a,b=this.i,c;(c=a in b)&&delete b[a];return c?(delete this.A[a],this.c--,this.H++,g):n};r.get=function(a,b){var c=":"+a;return c in this.i?this.i[c]:b};r.set=function(a,b){var c=":"+a;c in this.i||(this.H++,this.c++,"number"==typeof a&&(this.A[c]=g));this.i[c]=b};r.o=function(){return new A(this)};function B(a,b){var c;a instanceof B?(this.r(b==j?a.e:b),C(this,a.j),D(this,a.v),F(this,a.l),G(this,a.q),H(this,a.n),I(this,a.f.o()),J(this,a.u)):a&&(c=(""+a).match(da))?(this.r(!!b),C(this,c[1]||"",g),D(this,c[2]||"",g),F(this,c[3]||"",g),G(this,c[4]),H(this,c[5]||"",g),I(this,c[6]||"",g),J(this,c[7]||"",g)):(this.r(!!b),this.f=new K(j,this,this.e))}r=B.prototype;r.j="";r.v="";r.l="";r.q=j;r.n="";r.u="";r.K=n;r.e=n;
r.toString=function(){if(this.d)return this.d;var a=[];this.j&&a.push(L(this.j,ma),":");this.l&&(a.push("//"),this.v&&a.push(L(this.v,ma),"@"),a.push(w(this.l)?encodeURIComponent(this.l):j),this.q!=j&&a.push(":",""+this.q));this.n&&(this.l&&"/"!=this.n.charAt(0)&&a.push("/"),a.push(L(this.n,"/"==this.n.charAt(0)?na:oa)));var b=""+this.f;b&&a.push("?",b);this.u&&a.push("#",L(this.u,pa));return this.d=a.join("")};
r.o=function(){var a=this.j,b=this.v,c=this.l,d=this.q,e=this.n,f=this.f.o(),h=this.u,i=new B(j,this.e);a&&C(i,a);b&&D(i,b);c&&F(i,c);d&&G(i,d);e&&H(i,e);f&&I(i,f);h&&J(i,h);return i};function C(a,b,c){M(a);delete a.d;a.j=c?b?decodeURIComponent(b):"":b;if(a.j)a.j=a.j.replace(/:$/,"")}function D(a,b,c){M(a);delete a.d;a.v=c?b?decodeURIComponent(b):"":b}function F(a,b,c){M(a);delete a.d;a.l=c?b?decodeURIComponent(b):"":b}
function G(a,b){M(a);delete a.d;if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.q=b}else a.q=j}function H(a,b,c){M(a);delete a.d;a.n=c?b?decodeURIComponent(b):"":b}function I(a,b,c){M(a);delete a.d;b instanceof K?(a.f=b,a.f.C=a,a.f.r(a.e)):(c||(b=L(b,qa)),a.f=new K(b,a,a.e))}function J(a,b,c){M(a);delete a.d;a.u=c?b?decodeURIComponent(b):"":b}function M(a){if(a.K)throw Error("Tried to modify a read-only Uri");}r.r=function(a){this.e=a;this.f&&this.f.r(a);return this};
var ra=/^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;function L(a,b){var c=j;w(a)&&(c=a,ra.test(c)||(c=encodeURI(a)),0<=c.search(b)&&(c=c.replace(b,sa)));return c}function sa(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ma=/[#\/\?@]/g,oa=/[\#\?:]/g,na=/[\#\?]/g,qa=/[\#\?@]/g,pa=/#/g;function K(a,b,c){this.h=a||j;this.C=b||j;this.e=!!c}
function P(a){if(!a.a&&(a.a=new A,a.c=0,a.h))for(var b=a.h.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=j,f=j;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=Q(a,e);a.add(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}r=K.prototype;r.a=j;r.c=j;r.add=function(a,b){P(this);R(this);a=Q(this,a);if(this.k(a)){var c=this.a.get(a);t(c)?c.push(b):this.a.set(a,[c,b])}else this.a.set(a,b);this.c++;return this};
r.remove=function(a){P(this);a=Q(this,a);if(this.a.k(a)){R(this);var b=this.a.get(a);t(b)?this.c-=b.length:this.c--;return this.a.remove(a)}return n};r.k=function(a){P(this);a=Q(this,a);return this.a.k(a)};r.p=function(){P(this);for(var a=this.a.m(),b=this.a.p(),c=[],d=0;d<b.length;d++){var e=a[d];if(t(e))for(var f=0;f<e.length;f++)c.push(b[d]);else c.push(b[d])}return c};
r.m=function(a){P(this);if(a)if(a=Q(this,a),this.k(a)){var b=this.a.get(a);if(t(b))return b;a=[];a.push(b)}else a=[];else for(var b=this.a.m(),a=[],c=0;c<b.length;c++){var d=b[c];t(d)?ia(a,d):a.push(d)}return a};r.set=function(a,b){P(this);R(this);a=Q(this,a);if(this.k(a)){var c=this.a.get(a);t(c)?this.c-=c.length:this.c--}this.a.set(a,b);this.c++;return this};r.get=function(a,b){P(this);a=Q(this,a);if(this.k(a)){var c=this.a.get(a);return t(c)?c[0]:c}return b};
r.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var a=[],b=0,c=this.a.p(),d=0;d<c.length;d++){var e=c[d],f=y(e),e=this.a.get(e);if(t(e))for(var h=0;h<e.length;h++)0<b&&a.push("&"),a.push(f),""!==e[h]&&a.push("=",y(e[h])),b++;else 0<b&&a.push("&"),a.push(f),""!==e&&a.push("=",y(e)),b++}return this.h=a.join("")};function R(a){delete a.w;delete a.h;a.C&&delete a.C.d}r.o=function(){var a=new K;if(this.w)a.w=this.w;if(this.h)a.h=this.h;if(this.a)a.a=this.a.o();return a};
function Q(a,b){var c=""+b;a.e&&(c=c.toLowerCase());return c}r.r=function(a){a&&!this.e&&(P(this),R(this),la(this.a,function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.add(d,a))},this));this.e=a};function S(a){return"undefined"!=typeof a&&a!=j};function ta(a){this.g=a}ta.prototype.color=q("g");function ua(a,b){this.b=[];for(var c=0;c<b;++c){this.b[c]=[];for(var d=0;d<a;++d)this.b[c][d]=j}};function T(a){this.g=a}T.prototype.s=q("g");var U=new T("black"),va=new T("white");function V(a){this.D=a}V.prototype.s=q("D");var wa=new V("pawn"),xa=new V("knight"),ya=new V("bishop"),za=new V("rook"),Aa=new V("queen"),Ba=new V("king");function W(a,b){switch(a){case U:case va:break;default:throw Error("Invalid piece color: "+a.s());}this.g=a;switch(b){case wa:case xa:case ya:case za:case Aa:case Ba:break;default:throw Error("Invalid piece value: "+b.s());}this.D=b}x(W,ta);W.prototype.color=q("g");
W.prototype.value=q("D");function Ca(a){switch(a){case "p":return wa;case "n":return xa;case "b":return ya;case "r":return za;case "q":return Aa;case "k":return Ba;default:throw Error("Invalid piece char code: `"+a+"'");}}function Da(a){this.g=a}Da.prototype.s=q("g");var Ea=new Da("dark"),Fa=new Da("light");function X(a,b){this.G=b||j;this.g=a}X.prototype.B=function(a){this.G=a||j};X.prototype.z=q("G");X.prototype.color=q("g");
function Y(a,b){ua.call(this,a,b);this.b=[];for(var c=0;c<b;++c){this.b[c]=[];for(var d=0;d<a;++d)this.b[c][d]=new X((c+d)%2?Ea:Fa,j)}}x(Y,ua);Y.prototype.B=function(a,b,c){if(0<=a&&a<this.b.length&&0<=b&&b<this.b[0].length)this.b[a][b].B(c);else throw Error("Invalid coordinates for setPiece: ("+a+", "+b+")");};Y.prototype.z=function(a,b){var c;0<=a&&a<this.b.length&&0<=b&&b<this.b[0].length?(c=[a,b],c=this.b[c[0]][c[1]].z()):c=j;return c};function Ga(a){Y.call(this,a,a)}x(Ga,Y);
function Ha(){Ga.call(this,8)}x(Ha,Ga);function Z(a,b,c,d){this.F=a;if(2!=a.length)throw Error("`colors' should be an array of size 2");this.J=b;this.I=c;if(2!=c.length)throw Error("`images' should be an array of size 2");for(a=0;a<c.length;++a)if(6!=c[a].length)throw Error("`images' should be an array of 2x6, is:"+c[a].length);this.L=d}s("gamebuilder.games.chess.Theme",Z);var Ia=j;Z.DEFAULT_THEME=Ia;function $(){this.t=new Ha}s("gamebuilder.games.chess.FEN",$);
$.prototype.parse=function(a,b){a=a.replace(/\n/g," ").replace(/\r/g," ");a=a.replace(/^\s+/,"").replace(/\s+$/,"");if(0==a.length)return b.push("No FEN present"),n;var c=a.split(" ");if(1>c.length)return b.push("FEN has no information"),n;c=c[0];b.push(c);for(var c=c.split("/"),d=this.t.b.length,e=0,f;f=c[e];++e){if(e>=d)return b.push("Row "+(e+1)+" is outside board size: "+d),n;var h=0;b.push("row: ["+f+"]");if(!(0<=e&&e<this.t.b.length))return b.push("More data in row "+(e+1)+" ("+h+") than the board has space ("+
this.t.b.length+")"),n;for(var i=0,k;k=f[i++];)if("1"<=k&&"8">=k)h+=k-0;else{var l;l=k==k.toLowerCase()?U:va;var u=Ca(k.toLowerCase());l=new W(l,u);if(S(l))this.t.B(e,h++,l);else return b.push('Could not parse piece "'+k+'"'),n}}return g};
function Ja(){var a=document.getElementsByClassName("gamebuilder_chess_fen");if(S(a))for(var b=0,c;c=a[b++];){var d=new $,e=[];if(d.parse(c.innerHTML,e)){c.innerHTML="";var f=d.t,d=document.createElement("table"),h=d.insertRow(-1),i=document.createElement("td"),k=document.createElement("table");k.style.border="";k.style.cellPadding=k.cellSpacing=0;for(var e=f.b.length,l=0;l<e;++l){var u=k.insertRow(-1),o=document.createElement("td");o.appendChild(document.createTextNode((e-l).toString()));o.N="middle";
u.appendChild(o)}i.appendChild(k);h.appendChild(i);i=document.createElement("td");k=document.createElement("table");k.style.border="";k.style.cellPadding=k.cellSpacing=0;for(var E=Ia,Ka=f.b[0].length,l=0;l<e;++l)for(var u=k.insertRow(-1),N=0;N<Ka;++N){var z=f.z(l,N),O=o=document.createElement("td"),m;a:switch(m=[l,N],m=f.b[m[0]][m[1]].color(),m){case Fa:m=E.F[0];break a;case Ea:m=E.F[1];break a;default:throw Error("Invalid color: "+m);}O.className=m;if(S(z)){m=O=document.createElement("img");var p=
z.color(),z=z.value(),ka=-1;switch(p){case va:ka=0;break;case U:ka=1;break;default:throw Error("Invalid color: "+p.s());}p=-1;switch(z){case wa:p=0;break;case xa:p=1;break;case ya:p=2;break;case za:p=3;break;case Aa:p=4;break;case Ba:p=5;break;default:throw Error("Invalid piece: "+z.s());}m.src=E.J+"/"+E.I[ka][p];O.className=E.L;o.appendChild(O)}u.appendChild(o)}i.appendChild(k);h.appendChild(i);f=d.insertRow(-1);f.appendChild(document.createElement("td"));h=document.createElement("td");u=document.createElement("table");
i=u.insertRow(-1);for(l=0;l<e;++l)o=document.createElement("td"),o.appendChild(document.createTextNode(String.fromCharCode(97+l))),o.align="center",i.appendChild(o);h.appendChild(u);f.appendChild(h);c.appendChild(d)}else c.innerHTML="Error: "+e.join("<br>")}}$.parseAllFenInDocument=Ja;s("demo.chess.showFenDiagrams",function(){var a=document.location.href.replace(/[^\/]*$/,""),b=new Z(["light_sq","dark_sq"],a+"../data/images/chess/merida",["pawn_w.png,knight_w.png,bishop_w.png,rook_w.png,queen_w.png,king_w.png".split(","),"pawn_b.png,knight_b.png,bishop_b.png,rook_b.png,queen_b.png,king_b.png".split(",")],"piece_img"),a=new Z(["light_sq","dark_sq"],a+"../data/images/chess/wikimedia",["pawn_w.png,knight_w.png,bishop_w.png,rook_w.png,queen_w.png,king_w.png".split(","),"pawn_b.png,knight_b.png,bishop_b.png,rook_b.png,queen_b.png,king_b.png".split(",")],
"piece_img"),a={merida:b,wikimedia:a},c=window.location,c=(c instanceof B?c.o():new B(c,n)).f.get("theme")||"merida";Ia=a[c]||b;Ja()});
