import{_ as s,c as a,o as n,a as l}from"./app.ae0a27fd.js";const C=JSON.parse('{"title":"Working with Urls","description":"","frontmatter":{},"headers":[],"relativePath":"scenarios/urls.md"}'),p={name:"scenarios/urls.md"},o=l(`<h1 id="working-with-urls" tabindex="-1">Working with Urls <a class="header-anchor" href="#working-with-urls" aria-hidden="true">#</a></h1><p>The simplest way to specify the url for the request is to use one of these calls shown below, depending upon the HTTP method:</p><p><a id="snippet-sample_specify_the_url_directly"></a></p><div class="language-cs"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">specify_url</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">AlbaHost</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">system</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> system</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scenario</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">_</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// Directly specify the Url against a given</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// HTTP method</span></span>
<span class="line"><span style="color:#A6ACCD;">        _</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        _</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Put</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        _</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Post</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        _</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Delete</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        _</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Head</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Samples/Urls.cs#L7-L21" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_specify_the_url_directly" title="Start of snippet">anchor</a></sup></p>`,5),e=[o];function t(r,c,D,F,y,i){return n(),a("div",null,e)}const _=s(p,[["render",t]]);export{C as __pageData,_ as default};
