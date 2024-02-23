import{f as r,r as a,c,a as t,w as u,b as s,e as n,d as F,o as d}from"./app.a5f059bf.js";const D=s("h1",{id:"\u56FE\u7247-image",tabindex:"-1"},[n("\u56FE\u7247 Image "),s("a",{class:"header-anchor",href:"#\u56FE\u7247-image","aria-hidden":"true"},"#")],-1),i=s("p",null,"\u5C55\u793A\u56FE\u7247",-1),y=s("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[n("\u57FA\u7840\u7528\u6CD5 "),s("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),h={class:"example"},E=F(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-image</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@load</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">imgLoad</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@error</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">imgError</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cos.birdpaper.com/birdpaper-ui/v2/image-demo/3.JPG?imageMogr2/thumbnail/!50p</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">k-image</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgError </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">imgError</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgLoad </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">imgLoad</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>src</td><td>\u56FE\u7247\u8D44\u6E90\u5730\u5740</td><td>string</td><td></td><td>\u2014</td></tr><tr><td>fit</td><td>\u56FE\u7247\u9002\u5E94\u7C7B\u578B</td><td>string</td><td></td><td></td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>String</td><td></td><td></td></tr><tr><td>height</td><td>\u56FE\u7247\u9AD8\u5EA6</td><td>String</td><td></td><td></td></tr></tbody></table></div><h2 id="image-\u4E8B\u4EF6" tabindex="-1">Image \u4E8B\u4EF6 <a class="header-anchor" href="#image-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>load</td><td>\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210\u89E6\u53D1</td><td>-</td><td></td><td>\u2014</td></tr><tr><td>error</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u89E6\u53D1</td><td>-</td><td></td><td>\u2014</td></tr></tbody></table></div>`,5),b=JSON.parse('{"title":"\u56FE\u7247 Image","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Image \u4E8B\u4EF6","slug":"image-\u4E8B\u4EF6","link":"#image-\u4E8B\u4EF6","children":[]}],"relativePath":"components/image.md","lastUpdated":1699966607000}'),C={name:"components/image.md"},B=r({...C,setup(m){const l=()=>{console.log("imgError")},o=()=>{console.log("imgLoad")};return(g,A)=>{const e=a("k-image"),p=a("ClientOnly");return d(),c("div",null,[D,i,y,t(p,null,{default:u(()=>[s("div",h,[t(e,{width:"100",onLoad:o,onError:l,src:"https://cos.birdpaper.com/birdpaper-ui/v2/image-demo/3.JPG?imageMogr2/thumbnail/!50p"})])]),_:1}),E])}}});export{b as __pageData,B as default};