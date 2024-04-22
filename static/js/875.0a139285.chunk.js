"use strict";(self.webpackChunkmermaid_poc=self.webpackChunkmermaid_poc||[]).push([[875],{2256:(e,t,l)=>{l.d(t,{diagram:()=>b});var n=l(2573),o=l(5091),a=l(772),i=l(4449),s=l(2493);l(446),l(3755),l(6213),l(3509),l(1516);const d=e=>i.e.sanitizeText(e,(0,i.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,n,o){const a=Object.keys(e);i.l.info("keys:",a),i.l.info(e),a.filter((t=>e[t].parent==o)).forEach((function(l){var a,s,r,c;const p=e[l],u=p.cssClasses.join(" "),b=(0,i.k)(p.styles),f=null!==(a=p.label)&&void 0!==a?a:p.id,y={labelStyle:b.labelStyle,shape:"class_box",labelText:d(f),classData:p,rx:0,ry:0,class:u,style:b.style,id:p.id,domId:p.domId,tooltip:n.db.getTooltip(p.id,o)||"",haveCallback:p.haveCallback,link:p.link,width:"group"===p.type?500:void 0,type:p.type,padding:null!==(s=null==(r=(0,i.c)().flowchart)?void 0:r.padding)&&void 0!==s?s:null==(c=(0,i.c)().class)?void 0:c.padding};t.setNode(p.id,y),o&&t.setParent(p.id,o),i.l.info("setNode",y)}))};function p(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const u={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,n){var u,b,f,y;i.l.info("Drawing class - ",t);const g=null!==(u=(0,i.c)().flowchart)&&void 0!==u?u:(0,i.c)().class,v=(0,i.c)().securityLevel;i.l.info("config:",g);const h=null!==(b=null==g?void 0:g.nodeSpacing)&&void 0!==b?b:50,w=null!==(f=null==g?void 0:g.rankSpacing)&&void 0!==f?f:50,k=new a.T({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:h,ranksep:w,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),m=n.db.getNamespaces(),x=n.db.getClasses(),T=n.db.getRelations(),S=n.db.getNotes();let L;i.l.info(T),function(e,t,l,n){const o=Object.keys(e);i.l.info("keys:",o),i.l.info(e),o.forEach((function(o){var a,s,r;const p=e[o],u={shape:"rect",id:p.id,domId:p.domId,labelText:d(p.id),labelStyle:"",style:"fill: none; stroke: black",padding:null!==(a=null==(s=(0,i.c)().flowchart)?void 0:s.padding)&&void 0!==a?a:null==(r=(0,i.c)().class)?void 0:r.padding};t.setNode(p.id,u),c(p.classes,t,l,n,p.id),i.l.info("setNode",u)}))}(m,k,t,n),c(x,k,t,n),function(e,t){const l=(0,i.c)().flowchart;let n=0;e.forEach((function(e){var a;n++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id_".concat(e.id1,"_").concat(e.id2,"_").concat(n),arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:p(e.relation.type1),arrowTypeEnd:p(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,i.n)(null==l?void 0:l.curve,o.lUB)};if(i.l.info(s,e),void 0!==e.style){const t=(0,i.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}var d;e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null!==(d=null==(a=(0,i.c)().flowchart)?void 0:a.htmlLabels)&&void 0!==d?d:(0,i.c)().htmlLabels)?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,n)}))}(T,k),function(e,t,l,n){i.l.info(e),e.forEach((function(e,a){var s,c,p;const u=e,b="",f="",y=u.text,g={labelStyle:b,shape:"note",labelText:d(y),noteData:u,rx:0,ry:0,class:"",style:f,id:u.id,domId:u.id,tooltip:"",type:"note",padding:null!==(s=null==(c=(0,i.c)().flowchart)?void 0:c.padding)&&void 0!==s?s:null==(p=(0,i.c)().class)?void 0:p.padding};if(t.setNode(u.id,g),i.l.info("setNode",g),!u.class||!(u.class in n))return;const v=l+a,h={id:"edgeNote".concat(v),classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,i.n)(r.curve,o.lUB)};t.setEdge(u.id,u.class,h,v)}))}(S,k,T.length+1,x),"sandbox"===v&&(L=(0,o.Ltv)("#i"+t));const E="sandbox"===v?(0,o.Ltv)(L.nodes()[0].contentDocument.body):(0,o.Ltv)("body"),N=E.select('[id="'.concat(t,'"]')),D=E.select("#"+t+" g");if(await(0,s.r)(D,k,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),i.u.insertTitle(N,"classTitleText",null!==(y=null==g?void 0:g.titleTopMargin)&&void 0!==y?y:5,n.db.getDiagramTitle()),(0,i.o)(k,N,null==g?void 0:g.diagramPadding,null==g?void 0:g.useMaxWidth),!(null==g?void 0:g.htmlLabels)){const e="sandbox"===v?L.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},b={parser:n.p,db:n.d,renderer:u,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}}]);
//# sourceMappingURL=875.0a139285.chunk.js.map