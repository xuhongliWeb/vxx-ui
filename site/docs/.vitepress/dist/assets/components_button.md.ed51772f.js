import{_ as t,o as e,c,b as o,a,w as l,e as s,d as p,r as D}from"./app.f102c1a1.js";const I=JSON.parse('{"title":"\u6309\u94AE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001","link":"#\u7981\u7528\u72B6\u6001","children":[]},{"level":2,"title":"\u8C03\u6574\u5C3A\u5BF8","slug":"\u8C03\u6574\u5C3A\u5BF8","link":"#\u8C03\u6574\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u56FE\u6807\u6309\u94AE","slug":"\u56FE\u6807\u6309\u94AE","link":"#\u56FE\u6807\u6309\u94AE","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]}],"relativePath":"components/button.md","lastUpdated":1684167572000}'),r={name:"components/button.md"},F=o("h1",{id:"\u6309\u94AE",tabindex:"-1"},[s("\u6309\u94AE "),o("a",{class:"header-anchor",href:"#\u6309\u94AE","aria-hidden":"true"},"#")],-1),y=o("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[s("\u57FA\u7840\u7528\u6CD5 "),o("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),d=o("p",null,"\u4F7F\u7528 type\u3001plain\u3001round \u548C circle \u6765\u5B9A\u4E49\u6309\u94AE\u7684\u6837\u5F0F\u3002",-1),i={class:"example"},u=o("br",null,null,-1),C=o("br",null,null,-1),A=o("br",null,null,-1),b=o("br",null,null,-1),g=p(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9ED8\u8BA4\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E3B\u8981\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6210\u529F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4FE1\u606F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8B66\u544A\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5371\u9669\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6587\u5B57\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6734\u7D20\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E3B\u8981\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6210\u529F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4FE1\u606F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8B66\u544A\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5371\u9669\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5706\u89D2\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E3B\u8981\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6210\u529F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4FE1\u606F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8B66\u544A\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5371\u9669\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u7981\u7528\u72B6\u6001" tabindex="-1">\u7981\u7528\u72B6\u6001 <a class="header-anchor" href="#\u7981\u7528\u72B6\u6001" aria-hidden="true">#</a></h2><p>\u4F7F\u7528<code>disabled</code>\u63A7\u5236\u6309\u94AE\u662F\u5426\u53EF\u4EE5\u70B9\u51FB</p>`,3),_={class:"example"},E=o("br",null,null,-1),k=o("br",null,null,-1),h=p(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7981\u7528\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E3B\u8981\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6210\u529F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4FE1\u606F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8B66\u544A\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5371\u9669\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7981\u7528\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E3B\u8981\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6210\u529F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4FE1\u606F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8B66\u544A\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5371\u9669\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u8C03\u6574\u5C3A\u5BF8" tabindex="-1">\u8C03\u6574\u5C3A\u5BF8 <a class="header-anchor" href="#\u8C03\u6574\u5C3A\u5BF8" aria-hidden="true">#</a></h2><p>\u4F7F\u7528<code>size</code>\u63A7\u5236\u6309\u94AE\u5927\u5C0F</p>`,3),m={class:"example"},q=p(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9ED8\u8BA4\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">medium</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E2D\u7B49\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5C0F\u578B\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mini</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8D85\u5C0F\u6309\u94AE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="\u56FE\u6807\u6309\u94AE" tabindex="-1">\u56FE\u6807\u6309\u94AE <a class="header-anchor" href="#\u56FE\u6807\u6309\u94AE" aria-hidden="true">#</a></h2>`,2),f={class:"example"},v=p(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon-position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7F16\u8F91</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon-position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7F16\u8F91</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">k-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>medium / small / mini</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>primary / success / warning / danger / info / text</td><td>\u2014</td></tr><tr><td>plain</td><td>\u662F\u5426\u6734\u7D20\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round</td><td>\u662F\u5426\u5706\u89D2\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>icon</td><td>\u56FE\u6807\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>icon-position</td><td>\u56FE\u6807\u4F4D\u7F6E</td><td>string</td><td>left/right</td><td>left</td></tr></tbody></table></div>`,3);function T(x,S,w,V,N,P){const n=D("k-button");return e(),c("div",null,[F,y,d,o("div",i,[o("div",null,[a(n,null,{default:l(()=>[s("\u9ED8\u8BA4\u6309\u94AE")]),_:1}),a(n,{icon:"edit",type:"primary"},{default:l(()=>[s("\u4E3B\u8981\u6309\u94AE")]),_:1}),a(n,{type:"success"},{default:l(()=>[s("\u6210\u529F\u6309\u94AE")]),_:1}),a(n,{type:"info"},{default:l(()=>[s("\u4FE1\u606F\u6309\u94AE")]),_:1}),a(n,{type:"warning"},{default:l(()=>[s("\u8B66\u544A\u6309\u94AE")]),_:1}),a(n,{type:"danger"},{default:l(()=>[s("\u5371\u9669\u6309\u94AE")]),_:1}),a(n,{type:"text"},{default:l(()=>[s("\u6587\u5B57\u6309\u94AE")]),_:1}),u,C,a(n,{plain:""},{default:l(()=>[s("\u6734\u7D20\u6309\u94AE")]),_:1}),a(n,{type:"primary",plain:""},{default:l(()=>[s("\u4E3B\u8981\u6309\u94AE")]),_:1}),a(n,{type:"success",plain:""},{default:l(()=>[s("\u6210\u529F\u6309\u94AE")]),_:1}),a(n,{type:"info",plain:""},{default:l(()=>[s("\u4FE1\u606F\u6309\u94AE")]),_:1}),a(n,{type:"warning",plain:""},{default:l(()=>[s("\u8B66\u544A\u6309\u94AE")]),_:1}),a(n,{type:"danger",plain:""},{default:l(()=>[s("\u5371\u9669\u6309\u94AE")]),_:1}),A,b,a(n,{round:""},{default:l(()=>[s("\u5706\u89D2\u6309\u94AE")]),_:1}),a(n,{type:"primary",round:""},{default:l(()=>[s("\u4E3B\u8981\u6309\u94AE")]),_:1}),a(n,{type:"success",round:""},{default:l(()=>[s("\u6210\u529F\u6309\u94AE")]),_:1}),a(n,{type:"info",round:""},{default:l(()=>[s("\u4FE1\u606F\u6309\u94AE")]),_:1}),a(n,{type:"warning",round:""},{default:l(()=>[s("\u8B66\u544A\u6309\u94AE")]),_:1}),a(n,{type:"danger",round:""},{default:l(()=>[s("\u5371\u9669\u6309\u94AE")]),_:1})])]),g,o("div",_,[o("div",null,[a(n,{disabled:""},{default:l(()=>[s("\u7981\u7528\u6309\u94AE")]),_:1}),a(n,{type:"primary",disabled:""},{default:l(()=>[s("\u4E3B\u8981\u6309\u94AE")]),_:1}),a(n,{type:"success",disabled:""},{default:l(()=>[s("\u6210\u529F\u6309\u94AE")]),_:1}),a(n,{type:"info",disabled:""},{default:l(()=>[s("\u4FE1\u606F\u6309\u94AE")]),_:1}),a(n,{type:"warning",disabled:""},{default:l(()=>[s("\u8B66\u544A\u6309\u94AE")]),_:1}),a(n,{type:"danger",disabled:""},{default:l(()=>[s("\u5371\u9669\u6309\u94AE")]),_:1}),E,k,a(n,{disabled:""},{default:l(()=>[s("\u7981\u7528\u6309\u94AE")]),_:1}),a(n,{type:"primary",disabled:"",plain:""},{default:l(()=>[s("\u4E3B\u8981\u6309\u94AE")]),_:1}),a(n,{type:"success",disabled:"",plain:""},{default:l(()=>[s("\u6210\u529F\u6309\u94AE")]),_:1}),a(n,{type:"info",disabled:"",plain:""},{default:l(()=>[s("\u4FE1\u606F\u6309\u94AE")]),_:1}),a(n,{type:"warning",disabled:"",plain:""},{default:l(()=>[s("\u8B66\u544A\u6309\u94AE")]),_:1}),a(n,{type:"danger",disabled:"",plain:""},{default:l(()=>[s("\u5371\u9669\u6309\u94AE")]),_:1})])]),h,o("div",m,[o("div",null,[a(n,null,{default:l(()=>[s("\u9ED8\u8BA4\u6309\u94AE")]),_:1}),a(n,{size:"medium"},{default:l(()=>[s("\u4E2D\u7B49\u6309\u94AE")]),_:1}),a(n,{size:"small"},{default:l(()=>[s("\u5C0F\u578B\u6309\u94AE")]),_:1}),a(n,{size:"mini"},{default:l(()=>[s("\u8D85\u5C0F\u6309\u94AE")]),_:1})])]),q,o("div",f,[o("div",null,[a(n,{icon:"edit",type:"primary"}),a(n,{icon:"edit","icon-position":"right",type:"success"},{default:l(()=>[s("\u7F16\u8F91")]),_:1}),a(n,{icon:"edit","icon-position":"left"},{default:l(()=>[s("\u7F16\u8F91")]),_:1})])]),v])}const R=t(r,[["render",T]]);export{I as __pageData,R as default};