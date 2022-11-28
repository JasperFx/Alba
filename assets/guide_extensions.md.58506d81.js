import{_ as s,c as a,o as n,a as l}from"./app.cddc3ad1.js";const A=JSON.parse('{"title":"Extension Model","description":"","frontmatter":{},"headers":[],"relativePath":"guide/extensions.md"}'),p={name:"guide/extensions.md"},o=l(`<h1 id="extension-model" tabindex="-1">Extension Model <a class="header-anchor" href="#extension-model" aria-hidden="true">#</a></h1><p>Alba has an extension model based on this interface:</p><p><a id="snippet-sample_ialbaextension"></a></p><div class="language-cs"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">summary</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">/// Models an extension to an AlbaHost</span></span>
<span class="line"><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">summary</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IAlbaExtension</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IDisposable</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IAsyncDisposable</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">summary</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// Called during the initialization of an AlbaHost after the application is started,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// so the application DI container is available. Useful for registering setup or teardown</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// actions on an AlbaHOst</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">summary</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">param</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">host</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">param</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">returns</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">returns</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Start</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IAlbaHost</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">host</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">summary</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// Allow an extension to alter the application&#39;s</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// IHostBuilder prior to starting the application</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">summary</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">param</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">builder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">param</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">/// </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">returns</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">returns</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">IHostBuilder</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Configure</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IHostBuilder</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">builder</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba/IAlbaExtension.cs#L7-L32" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_ialbaextension" title="Start of snippet">anchor</a></sup></p><p>When you are initializing an <code>AlbaHost</code>, you can pass in an optional array of extensions like this sample from the security stub testing:</p><p><a id="snippet-sample_bootstrapping_with_stub_extension"></a></p><div class="language-cs"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// This is a Alba extension that can &quot;stub&quot; out authentication</span></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">securityStub</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AuthenticationStub</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">With</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">With</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">JwtRegisteredClaimNames</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Email</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">guy@company.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithName</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jeremy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// We&#39;re calling your real web service&#39;s configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">theHost </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AlbaHost</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">For</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WebAppSecuredWithJwt</span><span style="color:#A6ACCD;">.</span><span style="color:#FFCB6B;">Program</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">securityStub</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p><sup><a href="https://github.com/JasperFx/alba/blob/master/src/Alba.Testing/Security/web_api_authentication_with_stub.cs#L21-L32" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_bootstrapping_with_stub_extension" title="Start of snippet">anchor</a></sup></p>`,9),t=[o];function e(c,r,F,D,y,i){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{A as __pageData,u as default};