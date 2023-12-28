"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6888],{16888:(t,e,n)=>{n.r(e);n.d(e,{DocInput:()=>A,HighlightStyle:()=>Lt,IndentContext:()=>$,LRLanguage:()=>v,Language:()=>k,LanguageDescription:()=>L,LanguageSupport:()=>M,ParseContext:()=>C,StreamLanguage:()=>ue,StringStream:()=>ae,TreeIndentContext:()=>K,bracketMatching:()=>Zt,bracketMatchingHandle:()=>te,codeFolding:()=>It,continuedIndent:()=>et,defaultHighlightStyle:()=>zt,defineLanguageFacet:()=>g,delimitedIndent:()=>Y,ensureSyntaxTree:()=>x,flatIndent:()=>tt,foldAll:()=>yt,foldCode:()=>vt,foldEffect:()=>ut,foldGutter:()=>Bt,foldInside:()=>ot,foldKeymap:()=>Tt,foldNodeProp:()=>it,foldService:()=>st,foldState:()=>pt,foldable:()=>ht,foldedRanges:()=>gt,forceParsing:()=>S,getIndentUnit:()=>V,getIndentation:()=>W,highlightingFor:()=>Wt,indentNodeProp:()=>z,indentOnInput:()=>rt,indentRange:()=>U,indentService:()=>F,indentString:()=>j,indentUnit:()=>R,language:()=>B,languageDataProp:()=>p,matchBrackets:()=>re,sublanguageProp:()=>m,syntaxHighlighting:()=>jt,syntaxParserRunning:()=>P,syntaxTree:()=>b,syntaxTreeAvailable:()=>y,toggleFold:()=>At,unfoldAll:()=>St,unfoldCode:()=>bt,unfoldEffect:()=>ct});var r=n(73265);var s=n.n(r);var i=n(37496);var o=n.n(i);var a=n(66143);var l=n.n(a);var h=n(6016);var f=n.n(h);var u=n(67737);var c=n.n(u);var d;const p=new r.NodeProp;function g(t){return i.Facet.define({combine:t?e=>e.concat(t):undefined})}const m=new r.NodeProp;class k{constructor(t,e,n=[],r=""){this.data=t;this.name=r;if(!i.EditorState.prototype.hasOwnProperty("tree"))Object.defineProperty(i.EditorState.prototype,"tree",{get(){return b(this)}});this.parser=e;this.extension=[B.of(this),i.EditorState.languageData.of(((t,e,n)=>{let r=w(t,e,n),s=r.type.prop(p);if(!s)return[];let i=t.facet(s),o=r.type.prop(m);if(o){let s=r.resolve(e-r.from,n);for(let e of o)if(e.test(s,t)){let n=t.facet(e.facet);return e.type=="replace"?n:n.concat(i)}}return i}))].concat(n)}isActiveAt(t,e,n=-1){return w(t,e,n).type.prop(p)==this.data}findRegions(t){let e=t.facet(B);if((e===null||e===void 0?void 0:e.data)==this.data)return[{from:0,to:t.doc.length}];if(!e||!e.allowsNesting)return[];let n=[];let s=(t,e)=>{if(t.prop(p)==this.data){n.push({from:e,to:e+t.length});return}let i=t.prop(r.NodeProp.mounted);if(i){if(i.tree.prop(p)==this.data){if(i.overlay)for(let t of i.overlay)n.push({from:t.from+e,to:t.to+e});else n.push({from:e,to:e+t.length});return}else if(i.overlay){let t=n.length;s(i.tree,i.overlay[0].from+e);if(n.length>t)return}}for(let n=0;n<t.children.length;n++){let i=t.children[n];if(i instanceof r.Tree)s(i,t.positions[n]+e)}};s(b(t),0);return n}get allowsNesting(){return true}}k.setState=i.StateEffect.define();function w(t,e,n){let s=t.facet(B),i=b(t).topNode;if(!s||s.allowsNesting){for(let t=i;t;t=t.enter(e,n,r.IterMode.ExcludeBuffers))if(t.type.isTop)i=t}return i}class v extends k{constructor(t,e,n){super(t,e,[],n);this.parser=e}static define(t){let e=g(t.languageData);return new v(e,t.parser.configure({props:[p.add((t=>t.isTop?e:undefined))]}),t.name)}configure(t,e){return new v(this.data,this.parser.configure(t),e||this.name)}get allowsNesting(){return this.parser.hasWrappers()}}function b(t){let e=t.field(k.state,false);return e?e.tree:r.Tree.empty}function x(t,e,n=50){var r;let s=(r=t.field(k.state,false))===null||r===void 0?void 0:r.context;if(!s)return null;let i=s.viewport;s.updateViewport({from:0,to:e});let o=s.isDone(e)||s.work(n,e)?s.tree:null;s.updateViewport(i);return o}function y(t,e=t.doc.length){var n;return((n=t.field(k.state,false))===null||n===void 0?void 0:n.context.isDone(e))||false}function S(t,e=t.viewport.to,n=100){let r=x(t.state,e,n);if(r!=b(t.state))t.dispatch({});return!!r}function P(t){var e;return((e=t.plugin(E))===null||e===void 0?void 0:e.isWorking())||false}class A{constructor(t){this.doc=t;this.cursorPos=0;this.string="";this.cursor=t.iter()}get length(){return this.doc.length}syncTo(t){this.string=this.cursor.next(t-this.cursorPos).value;this.cursorPos=t+this.string.length;return this.cursorPos-this.string.length}chunk(t){this.syncTo(t);return this.string}get lineChunks(){return true}read(t,e){let n=this.cursorPos-this.string.length;if(t<n||e>=this.cursorPos)return this.doc.sliceString(t,e);else return this.string.slice(t-n,e-n)}}let T=null;class C{constructor(t,e,n=[],r,s,i,o,a){this.parser=t;this.state=e;this.fragments=n;this.tree=r;this.treeLen=s;this.viewport=i;this.skipped=o;this.scheduleOn=a;this.parse=null;this.tempSkipped=[]}static create(t,e,n){return new C(t,e,[],r.Tree.empty,0,n,[],null)}startParse(){return this.parser.startParse(new A(this.state.doc),this.fragments)}work(t,e){if(e!=null&&e>=this.state.doc.length)e=undefined;if(this.tree!=r.Tree.empty&&this.isDone(e!==null&&e!==void 0?e:this.state.doc.length)){this.takeTree();return true}return this.withContext((()=>{var n;if(typeof t=="number"){let e=Date.now()+t;t=()=>Date.now()>e}if(!this.parse)this.parse=this.startParse();if(e!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&e<this.state.doc.length)this.parse.stopAt(e);for(;;){let s=this.parse.advance();if(s){this.fragments=this.withoutTempSkipped(r.TreeFragment.addTree(s,this.fragments,this.parse.stoppedAt!=null));this.treeLen=(n=this.parse.stoppedAt)!==null&&n!==void 0?n:this.state.doc.length;this.tree=s;this.parse=null;if(this.treeLen<(e!==null&&e!==void 0?e:this.state.doc.length))this.parse=this.startParse();else return true}if(t())return false}}))}takeTree(){let t,e;if(this.parse&&(t=this.parse.parsedPos)>=this.treeLen){if(this.parse.stoppedAt==null||this.parse.stoppedAt>t)this.parse.stopAt(t);this.withContext((()=>{while(!(e=this.parse.advance())){}}));this.treeLen=t;this.tree=e;this.fragments=this.withoutTempSkipped(r.TreeFragment.addTree(this.tree,this.fragments,true));this.parse=null}}withContext(t){let e=T;T=this;try{return t()}finally{T=e}}withoutTempSkipped(t){for(let e;e=this.tempSkipped.pop();)t=D(t,e.from,e.to);return t}changes(t,e){let{fragments:n,tree:s,treeLen:i,viewport:o,skipped:a}=this;this.takeTree();if(!t.empty){let e=[];t.iterChangedRanges(((t,n,r,s)=>e.push({fromA:t,toA:n,fromB:r,toB:s})));n=r.TreeFragment.applyChanges(n,e);s=r.Tree.empty;i=0;o={from:t.mapPos(o.from,-1),to:t.mapPos(o.to,1)};if(this.skipped.length){a=[];for(let e of this.skipped){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);if(n<r)a.push({from:n,to:r})}}}return new C(this.parser,e,n,s,i,o,a,this.scheduleOn)}updateViewport(t){if(this.viewport.from==t.from&&this.viewport.to==t.to)return false;this.viewport=t;let e=this.skipped.length;for(let n=0;n<this.skipped.length;n++){let{from:e,to:r}=this.skipped[n];if(e<t.to&&r>t.from){this.fragments=D(this.fragments,e,r);this.skipped.splice(n--,1)}}if(this.skipped.length>=e)return false;this.reset();return true}reset(){if(this.parse){this.takeTree();this.parse=null}}skipUntilInView(t,e){this.skipped.push({from:t,to:e})}static getSkippingParser(t){return new class extends r.Parser{createParse(e,n,s){let i=s[0].from,o=s[s.length-1].to;let a={parsedPos:i,advance(){let e=T;if(e){for(let t of s)e.tempSkipped.push(t);if(t)e.scheduleOn=e.scheduleOn?Promise.all([e.scheduleOn,t]):t}this.parsedPos=o;return new r.Tree(r.NodeType.none,[],[],o-i)},stoppedAt:null,stopAt(){}};return a}}}isDone(t){t=Math.min(t,this.state.doc.length);let e=this.fragments;return this.treeLen>=t&&e.length&&e[0].from==0&&e[0].to>=t}static get(){return T}}function D(t,e,n){return r.TreeFragment.applyChanges(t,[{fromA:e,toA:n,fromB:e,toB:n}])}class I{constructor(t){this.context=t;this.tree=t.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this;let e=this.context.changes(t.changes,t.state);let n=this.context.treeLen==t.startState.doc.length?undefined:Math.max(t.changes.mapPos(this.context.treeLen),e.viewport.to);if(!e.work(20,n))e.takeTree();return new I(e)}static init(t){let e=Math.min(3e3,t.doc.length);let n=C.create(t.facet(B).parser,t,{from:0,to:e});if(!n.work(20,e))n.takeTree();return new I(n)}}k.state=i.StateField.define({create:I.init,update(t,e){for(let n of e.effects)if(n.is(k.setState))return n.value;if(e.startState.facet(B)!=e.state.facet(B))return I.init(e.state);return t.apply(e)}});let N=t=>{let e=setTimeout((()=>t()),500);return()=>clearTimeout(e)};if(typeof requestIdleCallback!="undefined")N=t=>{let e=-1,n=setTimeout((()=>{e=requestIdleCallback(t,{timeout:500-100})}),100);return()=>e<0?clearTimeout(n):cancelIdleCallback(e)};const O=typeof navigator!="undefined"&&((d=navigator.scheduling)===null||d===void 0?void 0:d.isInputPending)?()=>navigator.scheduling.isInputPending():null;const E=a.ViewPlugin.fromClass(class t{constructor(t){this.view=t;this.working=null;this.workScheduled=0;this.chunkEnd=-1;this.chunkBudget=-1;this.work=this.work.bind(this);this.scheduleWork()}update(t){let e=this.view.state.field(k.state).context;if(e.updateViewport(t.view.viewport)||this.view.viewport.to>e.treeLen)this.scheduleWork();if(t.docChanged){if(this.view.hasFocus)this.chunkBudget+=50;this.scheduleWork()}this.checkAsyncSchedule(e)}scheduleWork(){if(this.working)return;let{state:t}=this.view,e=t.field(k.state);if(e.tree!=e.context.tree||!e.context.isDone(t.doc.length))this.working=N(this.work)}work(t){this.working=null;let e=Date.now();if(this.chunkEnd<e&&(this.chunkEnd<0||this.view.hasFocus)){this.chunkEnd=e+3e4;this.chunkBudget=3e3}if(this.chunkBudget<=0)return;let{state:n,viewport:{to:r}}=this.view,s=n.field(k.state);if(s.tree==s.context.tree&&s.context.isDone(r+1e5))return;let i=Date.now()+Math.min(this.chunkBudget,100,t&&!O?Math.max(25,t.timeRemaining()-5):1e9);let o=s.context.treeLen<r&&n.doc.length>r+1e3;let a=s.context.work((()=>O&&O()||Date.now()>i),r+(o?0:1e5));this.chunkBudget-=Date.now()-e;if(a||this.chunkBudget<=0){s.context.takeTree();this.view.dispatch({effects:k.setState.of(new I(s.context))})}if(this.chunkBudget>0&&!(a&&!o))this.scheduleWork();this.checkAsyncSchedule(s.context)}checkAsyncSchedule(t){if(t.scheduleOn){this.workScheduled++;t.scheduleOn.then((()=>this.scheduleWork())).catch((t=>(0,a.logException)(this.view.state,t))).then((()=>this.workScheduled--));t.scheduleOn=null}}destroy(){if(this.working)this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}});const B=i.Facet.define({combine(t){return t.length?t[0]:null},enables:t=>[k.state,E,a.EditorView.contentAttributes.compute([t],(e=>{let n=e.facet(t);return n&&n.name?{"data-language":n.name}:{}}))]});class M{constructor(t,e=[]){this.language=t;this.support=e;this.extension=[t,e]}}class L{constructor(t,e,n,r,s,i=undefined){this.name=t;this.alias=e;this.extensions=n;this.filename=r;this.loadFunc=s;this.support=i;this.loading=null}load(){return this.loading||(this.loading=this.loadFunc().then((t=>this.support=t),(t=>{this.loading=null;throw t})))}static of(t){let{load:e,support:n}=t;if(!e){if(!n)throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");e=()=>Promise.resolve(n)}return new L(t.name,(t.alias||[]).concat(t.name).map((t=>t.toLowerCase())),t.extensions||[],t.filename,e,n)}static matchFilename(t,e){for(let r of t)if(r.filename&&r.filename.test(e))return r;let n=/\.([^.]+)$/.exec(e);if(n)for(let r of t)if(r.extensions.indexOf(n[1])>-1)return r;return null}static matchLanguageName(t,e,n=true){e=e.toLowerCase();for(let r of t)if(r.alias.some((t=>t==e)))return r;if(n)for(let r of t)for(let t of r.alias){let n=e.indexOf(t);if(n>-1&&(t.length>2||!/\w/.test(e[n-1])&&!/\w/.test(e[n+t.length])))return r}return null}}const F=i.Facet.define();const R=i.Facet.define({combine:t=>{if(!t.length)return"  ";let e=t[0];if(!e||/\S/.test(e)||Array.from(e).some((t=>t!=e[0])))throw new Error("Invalid indent unit: "+JSON.stringify(t[0]));return e}});function V(t){let e=t.facet(R);return e.charCodeAt(0)==9?t.tabSize*e.length:e.length}function j(t,e){let n="",r=t.tabSize,s=t.facet(R)[0];if(s=="\t"){while(e>=r){n+="\t";e-=r}s=" "}for(let i=0;i<e;i++)n+=s;return n}function W(t,e){if(t instanceof i.EditorState)t=new $(t);for(let r of t.state.facet(F)){let n=r(t,e);if(n!==undefined)return n}let n=b(t.state);return n?H(t,n,e):null}function U(t,e,n){let r=Object.create(null);let s=new $(t,{overrideIndentation:t=>{var e;return(e=r[t])!==null&&e!==void 0?e:-1}});let i=[];for(let o=e;o<=n;){let e=t.doc.lineAt(o);o=e.to+1;let n=W(s,e.from);if(n==null)continue;if(!/\S/.test(e.text))n=0;let a=/^\s*/.exec(e.text)[0];let l=j(t,n);if(a!=l){r[e.from]=n;i.push({from:e.from,to:e.from+a.length,insert:l})}}return t.changes(i)}class ${constructor(t,e={}){this.state=t;this.options=e;this.unit=V(t)}lineAt(t,e=1){let n=this.state.doc.lineAt(t);let{simulateBreak:r,simulateDoubleBreak:s}=this.options;if(r!=null&&r>=n.from&&r<=n.to){if(s&&r==t)return{text:"",from:t};else if(e<0?r<t:r<=t)return{text:n.text.slice(r-n.from),from:r};else return{text:n.text.slice(0,r-n.from),from:n.from}}return n}textAfterPos(t,e=1){if(this.options.simulateDoubleBreak&&t==this.options.simulateBreak)return"";let{text:n,from:r}=this.lineAt(t,e);return n.slice(t-r,Math.min(n.length,t+100-r))}column(t,e=1){let{text:n,from:r}=this.lineAt(t,e);let s=this.countColumn(n,t-r);let i=this.options.overrideIndentation?this.options.overrideIndentation(r):-1;if(i>-1)s+=i-this.countColumn(n,n.search(/\S|$/));return s}countColumn(t,e=t.length){return(0,i.countColumn)(t,this.state.tabSize,e)}lineIndent(t,e=1){let{text:n,from:r}=this.lineAt(t,e);let s=this.options.overrideIndentation;if(s){let t=s(r);if(t>-1)return t}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const z=new r.NodeProp;function H(t,e,n){return q(e.resolveInner(n).enterUnfinishedNodesBefore(n),n,t)}function G(t){return t.pos==t.options.simulateBreak&&t.options.simulateDoubleBreak}function _(t){let e=t.type.prop(z);if(e)return e;let n=t.firstChild,s;if(n&&(s=n.type.prop(r.NodeProp.closedBy))){let e=t.lastChild,n=e&&s.indexOf(e.name)>-1;return t=>Z(t,true,1,undefined,n&&!G(t)?e.from:undefined)}return t.parent==null?J:null}function q(t,e,n){for(;t;t=t.parent){let r=_(t);if(r)return r(K.create(n,e,t))}return null}function J(){return 0}class K extends ${constructor(t,e,n){super(t.state,t.options);this.base=t;this.pos=e;this.node=n}static create(t,e,n){return new K(t,e,n)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(t){let e=this.state.doc.lineAt(t.from);for(;;){let n=t.resolve(e.from);while(n.parent&&n.parent.from==n.from)n=n.parent;if(Q(n,t))break;e=this.state.doc.lineAt(n.from)}return this.lineIndent(e.from)}continue(){let t=this.node.parent;return t?q(t,this.pos,this.base):0}}function Q(t,e){for(let n=e;n;n=n.parent)if(t==n)return true;return false}function X(t){let e=t.node;let n=e.childAfter(e.from),r=e.lastChild;if(!n)return null;let s=t.options.simulateBreak;let i=t.state.doc.lineAt(n.from);let o=s==null||s<=i.from?i.to:Math.min(i.to,s);for(let a=n.to;;){let t=e.childAfter(a);if(!t||t==r)return null;if(!t.type.isSkipped)return t.from<o?n:null;a=t.to}}function Y({closing:t,align:e=true,units:n=1}){return r=>Z(r,e,n,t)}function Z(t,e,n,r,s){let i=t.textAfter,o=i.match(/^\s*/)[0].length;let a=r&&i.slice(o,o+r.length)==r||s==t.pos+o;let l=e?X(t):null;if(l)return a?t.column(l.from):t.column(l.to);return t.baseIndent+(a?0:t.unit*n)}const tt=t=>t.baseIndent;function et({except:t,units:e=1}={}){return n=>{let r=t&&t.test(n.textAfter);return n.baseIndent+(r?0:e*n.unit)}}const nt=200;function rt(){return i.EditorState.transactionFilter.of((t=>{if(!t.docChanged||!t.isUserEvent("input.type")&&!t.isUserEvent("input.complete"))return t;let e=t.startState.languageDataAt("indentOnInput",t.startState.selection.main.head);if(!e.length)return t;let n=t.newDoc,{head:r}=t.newSelection.main,s=n.lineAt(r);if(r>s.from+nt)return t;let i=n.sliceString(s.from,r);if(!e.some((t=>t.test(i))))return t;let{state:o}=t,a=-1,l=[];for(let{head:h}of o.selection.ranges){let t=o.doc.lineAt(h);if(t.from==a)continue;a=t.from;let e=W(o,t.from);if(e==null)continue;let n=/^\s*/.exec(t.text)[0];let r=j(o,e);if(n!=r)l.push({from:t.from,to:t.from+n.length,insert:r})}return l.length?[t,{changes:l,sequential:true}]:t}))}const st=i.Facet.define();const it=new r.NodeProp;function ot(t){let e=t.firstChild,n=t.lastChild;return e&&e.to<n.from?{from:e.to,to:n.type.isError?t.to:n.from}:null}function at(t,e,n){let r=b(t);if(r.length<n)return null;let s=r.resolveInner(n,1);let i=null;for(let o=s;o;o=o.parent){if(o.to<=n||o.from>n)continue;if(i&&o.from<e)break;let s=o.type.prop(it);if(s&&(o.to<r.length-50||r.length==t.doc.length||!lt(o))){let r=s(o,t);if(r&&r.from<=n&&r.from>=e&&r.to>n)i=r}}return i}function lt(t){let e=t.lastChild;return e&&e.to==t.to&&e.type.isError}function ht(t,e,n){for(let r of t.facet(st)){let s=r(t,e,n);if(s)return s}return at(t,e,n)}function ft(t,e){let n=e.mapPos(t.from,1),r=e.mapPos(t.to,-1);return n>=r?undefined:{from:n,to:r}}const ut=i.StateEffect.define({map:ft});const ct=i.StateEffect.define({map:ft});function dt(t){let e=[];for(let{head:n}of t.state.selection.ranges){if(e.some((t=>t.from<=n&&t.to>=n)))continue;e.push(t.lineBlockAt(n))}return e}const pt=i.StateField.define({create(){return a.Decoration.none},update(t,e){t=t.map(e.changes);for(let n of e.effects){if(n.is(ut)&&!kt(t,n.value.from,n.value.to))t=t.update({add:[Nt.range(n.value.from,n.value.to)]});else if(n.is(ct))t=t.update({filter:(t,e)=>n.value.from!=t||n.value.to!=e,filterFrom:n.value.from,filterTo:n.value.to})}if(e.selection){let n=false,{head:r}=e.selection.main;t.between(r,r,((t,e)=>{if(t<r&&e>r)n=true}));if(n)t=t.update({filterFrom:r,filterTo:r,filter:(t,e)=>e<=r||t>=r})}return t},provide:t=>a.EditorView.decorations.from(t),toJSON(t,e){let n=[];t.between(0,e.doc.length,((t,e)=>{n.push(t,e)}));return n},fromJSON(t){if(!Array.isArray(t)||t.length%2)throw new RangeError("Invalid JSON for fold state");let e=[];for(let n=0;n<t.length;){let r=t[n++],s=t[n++];if(typeof r!="number"||typeof s!="number")throw new RangeError("Invalid JSON for fold state");e.push(Nt.range(r,s))}return a.Decoration.set(e,true)}});function gt(t){return t.field(pt,false)||i.RangeSet.empty}function mt(t,e,n){var r;let s=null;(r=t.field(pt,false))===null||r===void 0?void 0:r.between(e,n,((t,e)=>{if(!s||s.from>t)s={from:t,to:e}}));return s}function kt(t,e,n){let r=false;t.between(e,e,((t,s)=>{if(t==e&&s==n)r=true}));return r}function wt(t,e){return t.field(pt,false)?e:e.concat(i.StateEffect.appendConfig.of(It()))}const vt=t=>{for(let e of dt(t)){let n=ht(t.state,e.from,e.to);if(n){t.dispatch({effects:wt(t.state,[ut.of(n),xt(t,n)])});return true}}return false};const bt=t=>{if(!t.state.field(pt,false))return false;let e=[];for(let n of dt(t)){let r=mt(t.state,n.from,n.to);if(r)e.push(ct.of(r),xt(t,r,false))}if(e.length)t.dispatch({effects:e});return e.length>0};function xt(t,e,n=true){let r=t.state.doc.lineAt(e.from).number,s=t.state.doc.lineAt(e.to).number;return a.EditorView.announce.of(`${t.state.phrase(n?"Folded lines":"Unfolded lines")} ${r} ${t.state.phrase("to")} ${s}.`)}const yt=t=>{let{state:e}=t,n=[];for(let r=0;r<e.doc.length;){let s=t.lineBlockAt(r),i=ht(e,s.from,s.to);if(i)n.push(ut.of(i));r=(i?t.lineBlockAt(i.to):s).to+1}if(n.length)t.dispatch({effects:wt(t.state,n)});return!!n.length};const St=t=>{let e=t.state.field(pt,false);if(!e||!e.size)return false;let n=[];e.between(0,t.state.doc.length,((t,e)=>{n.push(ct.of({from:t,to:e}))}));t.dispatch({effects:n});return true};function Pt(t,e){for(let n=e;;){let r=ht(t.state,n.from,n.to);if(r&&r.to>e.from)return r;if(!n.from)return null;n=t.lineBlockAt(n.from-1)}}const At=t=>{let e=[];for(let n of dt(t)){let r=mt(t.state,n.from,n.to);if(r){e.push(ct.of(r),xt(t,r,false))}else{let r=Pt(t,n);if(r)e.push(ut.of(r),xt(t,r))}}if(e.length>0)t.dispatch({effects:wt(t.state,e)});return!!e.length};const Tt=[{key:"Ctrl-Shift-[",mac:"Cmd-Alt-[",run:vt},{key:"Ctrl-Shift-]",mac:"Cmd-Alt-]",run:bt},{key:"Ctrl-Alt-[",run:yt},{key:"Ctrl-Alt-]",run:St}];const Ct={placeholderDOM:null,placeholderText:"…"};const Dt=i.Facet.define({combine(t){return(0,i.combineConfig)(t,Ct)}});function It(t){let e=[pt,Mt];if(t)e.push(Dt.of(t));return e}const Nt=a.Decoration.replace({widget:new class extends a.WidgetType{toDOM(t){let{state:e}=t,n=e.facet(Dt);let r=e=>{let n=t.lineBlockAt(t.posAtDOM(e.target));let r=mt(t.state,n.from,n.to);if(r)t.dispatch({effects:ct.of(r)});e.preventDefault()};if(n.placeholderDOM)return n.placeholderDOM(t,r);let s=document.createElement("span");s.textContent=n.placeholderText;s.setAttribute("aria-label",e.phrase("folded code"));s.title=e.phrase("unfold");s.className="cm-foldPlaceholder";s.onclick=r;return s}}});const Ot={openText:"⌄",closedText:"›",markerDOM:null,domEventHandlers:{},foldingChanged:()=>false};class Et extends a.GutterMarker{constructor(t,e){super();this.config=t;this.open=e}eq(t){return this.config==t.config&&this.open==t.open}toDOM(t){if(this.config.markerDOM)return this.config.markerDOM(this.open);let e=document.createElement("span");e.textContent=this.open?this.config.openText:this.config.closedText;e.title=t.state.phrase(this.open?"Fold line":"Unfold line");return e}}function Bt(t={}){let e=Object.assign(Object.assign({},Ot),t);let n=new Et(e,true),r=new Et(e,false);let s=a.ViewPlugin.fromClass(class{constructor(t){this.from=t.viewport.from;this.markers=this.buildMarkers(t)}update(t){if(t.docChanged||t.viewportChanged||t.startState.facet(B)!=t.state.facet(B)||t.startState.field(pt,false)!=t.state.field(pt,false)||b(t.startState)!=b(t.state)||e.foldingChanged(t))this.markers=this.buildMarkers(t.view)}buildMarkers(t){let e=new i.RangeSetBuilder;for(let s of t.viewportLineBlocks){let i=mt(t.state,s.from,s.to)?r:ht(t.state,s.from,s.to)?n:null;if(i)e.add(s.from,s.from,i)}return e.finish()}});let{domEventHandlers:o}=e;return[s,(0,a.gutter)({class:"cm-foldGutter",markers(t){var e;return((e=t.plugin(s))===null||e===void 0?void 0:e.markers)||i.RangeSet.empty},initialSpacer(){return new Et(e,false)},domEventHandlers:Object.assign(Object.assign({},o),{click:(t,e,n)=>{if(o.click&&o.click(t,e,n))return true;let r=mt(t.state,e.from,e.to);if(r){t.dispatch({effects:ct.of(r)});return true}let s=ht(t.state,e.from,e.to);if(s){t.dispatch({effects:ut.of(s)});return true}return false}})}),It()]}const Mt=a.EditorView.baseTheme({".cm-foldPlaceholder":{backgroundColor:"#eee",border:"1px solid #ddd",color:"#888",borderRadius:".2em",margin:"0 1px",padding:"0 1px",cursor:"pointer"},".cm-foldGutter span":{padding:"0 1px",cursor:"pointer"}});class Lt{constructor(t,e){this.specs=t;let n;function r(t){let e=u.StyleModule.newName();(n||(n=Object.create(null)))["."+e]=t;return e}const s=typeof e.all=="string"?e.all:e.all?r(e.all):undefined;const i=e.scope;this.scope=i instanceof k?t=>t.prop(p)==i.data:i?t=>t==i:undefined;this.style=(0,h.tagHighlighter)(t.map((t=>({tag:t.tag,class:t.class||r(Object.assign({},t,{tag:null}))}))),{all:s}).style;this.module=n?new u.StyleModule(n):null;this.themeType=e.themeType}static define(t,e){return new Lt(t,e||{})}}const Ft=i.Facet.define();const Rt=i.Facet.define({combine(t){return t.length?[t[0]]:null}});function Vt(t){let e=t.facet(Ft);return e.length?e:t.facet(Rt)}function jt(t,e){let n=[$t],r;if(t instanceof Lt){if(t.module)n.push(a.EditorView.styleModule.of(t.module));r=t.themeType}if(e===null||e===void 0?void 0:e.fallback)n.push(Rt.of(t));else if(r)n.push(Ft.computeN([a.EditorView.darkTheme],(e=>e.facet(a.EditorView.darkTheme)==(r=="dark")?[t]:[])));else n.push(Ft.of(t));return n}function Wt(t,e,n){let r=Vt(t);let s=null;if(r)for(let i of r){if(!i.scope||n&&i.scope(n)){let t=i.style(e);if(t)s=s?s+" "+t:t}}return s}class Ut{constructor(t){this.markCache=Object.create(null);this.tree=b(t.state);this.decorations=this.buildDeco(t,Vt(t.state))}update(t){let e=b(t.state),n=Vt(t.state);let r=n!=Vt(t.startState);if(e.length<t.view.viewport.to&&!r&&e.type==this.tree.type){this.decorations=this.decorations.map(t.changes)}else if(e!=this.tree||t.viewportChanged||r){this.tree=e;this.decorations=this.buildDeco(t.view,n)}}buildDeco(t,e){if(!e||!this.tree.length)return a.Decoration.none;let n=new i.RangeSetBuilder;for(let{from:r,to:s}of t.visibleRanges){(0,h.highlightTree)(this.tree,e,((t,e,r)=>{n.add(t,e,this.markCache[r]||(this.markCache[r]=a.Decoration.mark({class:r})))}),r,s)}return n.finish()}}const $t=i.Prec.high(a.ViewPlugin.fromClass(Ut,{decorations:t=>t.decorations}));const zt=Lt.define([{tag:h.tags.meta,color:"#404740"},{tag:h.tags.link,textDecoration:"underline"},{tag:h.tags.heading,textDecoration:"underline",fontWeight:"bold"},{tag:h.tags.emphasis,fontStyle:"italic"},{tag:h.tags.strong,fontWeight:"bold"},{tag:h.tags.strikethrough,textDecoration:"line-through"},{tag:h.tags.keyword,color:"#708"},{tag:[h.tags.atom,h.tags.bool,h.tags.url,h.tags.contentSeparator,h.tags.labelName],color:"#219"},{tag:[h.tags.literal,h.tags.inserted],color:"#164"},{tag:[h.tags.string,h.tags.deleted],color:"#a11"},{tag:[h.tags.regexp,h.tags.escape,h.tags.special(h.tags.string)],color:"#e40"},{tag:h.tags.definition(h.tags.variableName),color:"#00f"},{tag:h.tags.local(h.tags.variableName),color:"#30a"},{tag:[h.tags.typeName,h.tags.namespace],color:"#085"},{tag:h.tags.className,color:"#167"},{tag:[h.tags.special(h.tags.variableName),h.tags.macroName],color:"#256"},{tag:h.tags.definition(h.tags.propertyName),color:"#00c"},{tag:h.tags.comment,color:"#940"},{tag:h.tags.invalid,color:"#f00"}]);const Ht=a.EditorView.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}});const Gt=1e4,_t="()[]{}";const qt=i.Facet.define({combine(t){return(0,i.combineConfig)(t,{afterCursor:true,brackets:_t,maxScanDistance:Gt,renderMatch:Qt})}});const Jt=a.Decoration.mark({class:"cm-matchingBracket"}),Kt=a.Decoration.mark({class:"cm-nonmatchingBracket"});function Qt(t){let e=[];let n=t.matched?Jt:Kt;e.push(n.range(t.start.from,t.start.to));if(t.end)e.push(n.range(t.end.from,t.end.to));return e}const Xt=i.StateField.define({create(){return a.Decoration.none},update(t,e){if(!e.docChanged&&!e.selection)return t;let n=[];let r=e.state.facet(qt);for(let s of e.state.selection.ranges){if(!s.empty)continue;let t=re(e.state,s.head,-1,r)||s.head>0&&re(e.state,s.head-1,1,r)||r.afterCursor&&(re(e.state,s.head,1,r)||s.head<e.state.doc.length&&re(e.state,s.head+1,-1,r));if(t)n=n.concat(r.renderMatch(t,e.state))}return a.Decoration.set(n,true)},provide:t=>a.EditorView.decorations.from(t)});const Yt=[Xt,Ht];function Zt(t={}){return[qt.of(t),Yt]}const te=new r.NodeProp;function ee(t,e,n){let s=t.prop(e<0?r.NodeProp.openedBy:r.NodeProp.closedBy);if(s)return s;if(t.name.length==1){let r=n.indexOf(t.name);if(r>-1&&r%2==(e<0?1:0))return[n[r+e]]}return null}function ne(t){let e=t.type.prop(te);return e?e(t.node):t}function re(t,e,n,r={}){let s=r.maxScanDistance||Gt,i=r.brackets||_t;let o=b(t),a=o.resolveInner(e,n);for(let l=a;l;l=l.parent){let r=ee(l.type,n,i);if(r&&l.from<l.to){let s=ne(l);if(s&&(n>0?e>=s.from&&e<s.to:e>s.from&&e<=s.to))return se(t,e,n,l,s,r,i)}}return ie(t,e,n,o,a.type,s,i)}function se(t,e,n,r,s,i,o){let a=r.parent,l={from:s.from,to:s.to};let h=0,f=a===null||a===void 0?void 0:a.cursor();if(f&&(n<0?f.childBefore(r.from):f.childAfter(r.to)))do{if(n<0?f.to<=r.from:f.from>=r.to){if(h==0&&i.indexOf(f.type.name)>-1&&f.from<f.to){let t=ne(f);return{start:l,end:t?{from:t.from,to:t.to}:undefined,matched:true}}else if(ee(f.type,n,o)){h++}else if(ee(f.type,-n,o)){if(h==0){let t=ne(f);return{start:l,end:t&&t.from<t.to?{from:t.from,to:t.to}:undefined,matched:false}}h--}}}while(n<0?f.prevSibling():f.nextSibling());return{start:l,matched:false}}function ie(t,e,n,r,s,i,o){let a=n<0?t.sliceDoc(e-1,e):t.sliceDoc(e,e+1);let l=o.indexOf(a);if(l<0||l%2==0!=n>0)return null;let h={from:n<0?e-1:e,to:n>0?e+1:e};let f=t.doc.iterRange(e,n>0?t.doc.length:0),u=0;for(let c=0;!f.next().done&&c<=i;){let t=f.value;if(n<0)c+=t.length;let i=e+c*n;for(let e=n>0?0:t.length-1,a=n>0?t.length:-1;e!=a;e+=n){let a=o.indexOf(t[e]);if(a<0||r.resolveInner(i+e,1).type!=s)continue;if(a%2==0==n>0){u++}else if(u==1){return{start:h,end:{from:i+e,to:i+e+1},matched:a>>1==l>>1}}else{u--}}if(n>0)c+=t.length}return f.done?{start:h,matched:false}:null}function oe(t,e,n,r=0,s=0){if(e==null){e=t.search(/[^\s\u00a0]/);if(e==-1)e=t.length}let i=s;for(let o=r;o<e;o++){if(t.charCodeAt(o)==9)i+=n-i%n;else i++}return i}class ae{constructor(t,e,n,r){this.string=t;this.tabSize=e;this.indentUnit=n;this.overrideIndent=r;this.pos=0;this.start=0;this.lastColumnPos=0;this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||undefined}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(t){let e=this.string.charAt(this.pos);let n;if(typeof t=="string")n=e==t;else n=e&&(t instanceof RegExp?t.test(e):t(e));if(n){++this.pos;return e}}eatWhile(t){let e=this.pos;while(this.eat(t)){}return this.pos>e}eatSpace(){let t=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;return this.pos>t}skipToEnd(){this.pos=this.string.length}skipTo(t){let e=this.string.indexOf(t,this.pos);if(e>-1){this.pos=e;return true}}backUp(t){this.pos-=t}column(){if(this.lastColumnPos<this.start){this.lastColumnValue=oe(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue);this.lastColumnPos=this.start}return this.lastColumnValue}indentation(){var t;return(t=this.overrideIndent)!==null&&t!==void 0?t:oe(this.string,null,this.tabSize)}match(t,e,n){if(typeof t=="string"){let r=t=>n?t.toLowerCase():t;let s=this.string.substr(this.pos,t.length);if(r(s)==r(t)){if(e!==false)this.pos+=t.length;return true}else return null}else{let n=this.string.slice(this.pos).match(t);if(n&&n.index>0)return null;if(n&&e!==false)this.pos+=n[0].length;return n}}current(){return this.string.slice(this.start,this.pos)}}function le(t){return{name:t.name||"",token:t.token,blankLine:t.blankLine||(()=>{}),startState:t.startState||(()=>true),copyState:t.copyState||he,indent:t.indent||(()=>null),languageData:t.languageData||{},tokenTable:t.tokenTable||ke}}function he(t){if(typeof t!="object")return t;let e={};for(let n in t){let r=t[n];e[n]=r instanceof Array?r.slice():r}return e}const fe=new WeakMap;class ue extends k{constructor(t){let e=g(t.languageData);let n=le(t),s;let i=new class extends r.Parser{createParse(t,e,n){return new ge(s,t,e,n)}};super(e,i,[F.of(((t,e)=>this.getIndent(t,e)))],t.name);this.topNode=Te(e);s=this;this.streamParser=n;this.stateAfter=new r.NodeProp({perNode:true});this.tokenTable=t.tokenTable?new ye(n.tokenTable):Se}static define(t){return new ue(t)}getIndent(t,e){let n=b(t.state),r=n.resolve(e);while(r&&r.type!=this.topNode)r=r.parent;if(!r)return null;let s=undefined;let{overrideIndentation:i}=t.options;if(i){s=fe.get(t.state);if(s!=null&&s<e-1e4)s=undefined}let o=ce(this,n,0,r.from,s!==null&&s!==void 0?s:e),a,l;if(o){l=o.state;a=o.pos+1}else{l=this.streamParser.startState(t.unit);a=0}if(e-a>1e4)return null;while(a<e){let n=t.state.doc.lineAt(a),r=Math.min(e,n.to);if(n.length){let e=i?i(n.from):-1;let s=new ae(n.text,t.state.tabSize,t.unit,e<0?undefined:e);while(s.pos<r-n.from)me(this.streamParser.token,s,l)}else{this.streamParser.blankLine(l,t.unit)}if(r==e)break;a=n.to+1}let h=t.lineAt(e);if(i&&s==null)fe.set(t.state,h.from);return this.streamParser.indent(l,/^\s*(.*)/.exec(h.text)[1],t)}get allowsNesting(){return false}}function ce(t,e,n,s,i){let o=n>=s&&n+e.length<=i&&e.prop(t.stateAfter);if(o)return{state:t.streamParser.copyState(o),pos:n+e.length};for(let a=e.children.length-1;a>=0;a--){let o=e.children[a],l=n+e.positions[a];let h=o instanceof r.Tree&&l<i&&ce(t,o,l,s,i);if(h)return h}return null}function de(t,e,n,s,i){if(i&&n<=0&&s>=e.length)return e;if(!i&&e.type==t.topNode)i=true;for(let o=e.children.length-1;o>=0;o--){let a=e.positions[o],l=e.children[o],h;if(a<s&&l instanceof r.Tree){if(!(h=de(t,l,n-a,s-a,i)))break;return!i?h:new r.Tree(e.type,e.children.slice(0,o).concat(h),e.positions.slice(0,o+1),a+h.length)}}return null}function pe(t,e,n,s){for(let r of e){let e=r.from+(r.openStart?25:0),s=r.to-(r.openEnd?25:0);let i=e<=n&&s>n&&ce(t,r.tree,0-r.offset,n,s),o;if(i&&(o=de(t,r.tree,n+r.offset,i.pos+r.offset,false)))return{state:i.state,tree:o}}return{state:t.streamParser.startState(s?V(s):4),tree:r.Tree.empty}}class ge{constructor(t,e,n,r){this.lang=t;this.input=e;this.fragments=n;this.ranges=r;this.stoppedAt=null;this.chunks=[];this.chunkPos=[];this.chunk=[];this.chunkReused=undefined;this.rangeIndex=0;this.to=r[r.length-1].to;let s=C.get(),i=r[0].from;let{state:o,tree:a}=pe(t,n,i,s===null||s===void 0?void 0:s.state);this.state=o;this.parsedPos=this.chunkStart=i+a.length;for(let l=0;l<a.children.length;l++){this.chunks.push(a.children[l]);this.chunkPos.push(a.positions[l])}if(s&&this.parsedPos<s.viewport.from-1e5){this.state=this.lang.streamParser.startState(V(s.state));s.skipUntilInView(this.parsedPos,s.viewport.from);this.parsedPos=s.viewport.from}this.moveRangeIndex()}advance(){let t=C.get();let e=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt);let n=Math.min(e,this.chunkStart+2048);if(t)n=Math.min(n,t.viewport.to);while(this.parsedPos<n)this.parseLine(t);if(this.chunkStart<this.parsedPos)this.finishChunk();if(this.parsedPos>=e)return this.finish();if(t&&this.parsedPos>=t.viewport.to){t.skipUntilInView(this.parsedPos,e);return this.finish()}return null}stopAt(t){this.stoppedAt=t}lineAfter(t){let e=this.input.chunk(t);if(!this.input.lineChunks){let t=e.indexOf("\n");if(t>-1)e=e.slice(0,t)}else if(e=="\n"){e=""}return t+e.length<=this.to?e:e.slice(0,this.to-t)}nextLine(){let t=this.parsedPos,e=this.lineAfter(t),n=t+e.length;for(let r=this.rangeIndex;;){let t=this.ranges[r].to;if(t>=n)break;e=e.slice(0,t-(n-e.length));r++;if(r==this.ranges.length)break;let s=this.ranges[r].from;let i=this.lineAfter(s);e+=i;n=s+i.length}return{line:e,end:n}}skipGapsTo(t,e,n){for(;;){let r=this.ranges[this.rangeIndex].to,s=t+e;if(n>0?r>s:r>=s)break;let i=this.ranges[++this.rangeIndex].from;e+=i-r}return e}moveRangeIndex(){while(this.ranges[this.rangeIndex].to<this.parsedPos)this.rangeIndex++}emitToken(t,e,n,r,s){if(this.ranges.length>1){s=this.skipGapsTo(e,s,1);e+=s;let t=this.chunk.length;s=this.skipGapsTo(n,s,-1);n+=s;r+=this.chunk.length-t}this.chunk.push(t,e,n,r);return s}parseLine(t){let{line:e,end:n}=this.nextLine(),r=0,{streamParser:s}=this.lang;let i=new ae(e,t?t.state.tabSize:4,t?V(t.state):2);if(i.eol()){s.blankLine(this.state,i.indentUnit)}else{while(!i.eol()){let t=me(s.token,i,this.state);if(t)r=this.emitToken(this.lang.tokenTable.resolve(t),this.parsedPos+i.start,this.parsedPos+i.pos,4,r);if(i.start>1e4)break}}this.parsedPos=n;this.moveRangeIndex();if(this.parsedPos<this.to)this.parsedPos++}finishChunk(){let t=r.Tree.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:ve,topID:0,maxBufferLength:2048,reused:this.chunkReused});t=new r.Tree(t.type,t.children,t.positions,t.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]);this.chunks.push(t);this.chunkPos.push(this.chunkStart-this.ranges[0].from);this.chunk=[];this.chunkReused=undefined;this.chunkStart=this.parsedPos}finish(){return new r.Tree(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}}function me(t,e,n){e.start=e.pos;for(let r=0;r<10;r++){let r=t(e,n);if(e.pos>e.start)return r}throw new Error("Stream parser failed to advance stream.")}const ke=Object.create(null);const we=[r.NodeType.none];const ve=new r.NodeSet(we);const be=[];const xe=Object.create(null);for(let[Ce,De]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])xe[Ce]=Ae(ke,De);class ye{constructor(t){this.extra=t;this.table=Object.assign(Object.create(null),xe)}resolve(t){return!t?0:this.table[t]||(this.table[t]=Ae(this.extra,t))}}const Se=new ye(ke);function Pe(t,e){if(be.indexOf(t)>-1)return;be.push(t);console.warn(e)}function Ae(t,e){let n=null;for(let r of e.split(".")){let e=t[r]||h.tags[r];if(!e){Pe(r,`Unknown highlighting tag ${r}`)}else if(typeof e=="function"){if(!n)Pe(r,`Modifier ${r} used at start of tag`);else n=e(n)}else{if(n)Pe(r,`Tag ${r} used as modifier`);else n=e}}if(!n)return 0;let s=e.replace(/ /g,"_"),i=r.NodeType.define({id:we.length,name:s,props:[(0,h.styleTags)({[s]:n})]});we.push(i);return i.id}function Te(t){let e=r.NodeType.define({id:we.length,name:"Document",props:[p.add((()=>t))]});we.push(e);return e}}}]);