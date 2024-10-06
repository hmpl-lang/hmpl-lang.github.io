import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as l,o as e}from"./app-bTXaeLWF.js";const p={};function o(i,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h1><h2 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example 1</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#ffffff;color:#24292eff;"><pre class="shiki min-light vp-code"><code><span class="line"><span style="color:#D32F2F;">import</span><span style="color:#24292EFF;"> { compile } </span><span style="color:#D32F2F;">from</span><span style="color:#22863A;"> &quot;hmpl-js&quot;</span><span style="color:#24292EFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> templateFn</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> compile</span><span style="color:#24292EFF;">(</span></span>
<span class="line"><span style="color:#22863A;">  \`&lt;div&gt;</span></span>
<span class="line"><span style="color:#22863A;">    &lt;button class=&quot;getHTML&quot;&gt;Get HTML!&lt;/button&gt;</span></span>
<span class="line"><span style="color:#22863A;">    { </span></span>
<span class="line"><span style="color:#22863A;">      {</span></span>
<span class="line"><span style="color:#22863A;">        &quot;src&quot;:&quot;/api/test&quot;,</span></span>
<span class="line"><span style="color:#22863A;">        &quot;after&quot;:&quot;click:.getHTML&quot;,</span></span>
<span class="line"><span style="color:#22863A;">        &quot;indicators&quot;: [</span></span>
<span class="line"><span style="color:#22863A;">           {</span></span>
<span class="line"><span style="color:#22863A;">             &quot;trigger&quot;: &quot;pending&quot;,</span></span>
<span class="line"><span style="color:#22863A;">             &quot;content&quot;: &quot;&lt;div&gt;Loading...&lt;/div&gt;&quot;</span></span>
<span class="line"><span style="color:#22863A;">           },</span></span>
<span class="line"><span style="color:#22863A;">           {</span></span>
<span class="line"><span style="color:#22863A;">             &quot;trigger&quot;: &quot;rejected&quot;,</span></span>
<span class="line"><span style="color:#22863A;">             &quot;content&quot;: &quot;&lt;div&gt;Error&lt;/div&gt;&quot;</span></span>
<span class="line"><span style="color:#22863A;">           }</span></span>
<span class="line"><span style="color:#22863A;">        ]</span></span>
<span class="line"><span style="color:#22863A;">      } </span></span>
<span class="line"><span style="color:#22863A;">    }</span></span>
<span class="line"><span style="color:#22863A;">  &lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#24292EFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> wrapper</span><span style="color:#D32F2F;"> =</span><span style="color:#1976D2;"> document</span><span style="color:#6F42C1;">.getElementById</span><span style="color:#24292EFF;">(</span><span style="color:#22863A;">&quot;wrapper&quot;</span><span style="color:#24292EFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> elementObj</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> templateFn</span><span style="color:#24292EFF;">({</span></span>
<span class="line"><span style="color:#6F42C1;">  get</span><span style="color:#D32F2F;">:</span><span style="color:#24292EFF;"> (prop</span><span style="color:#212121;">,</span><span style="color:#24292EFF;"> value) </span><span style="color:#D32F2F;">=&gt;</span><span style="color:#24292EFF;"> {</span></span>
<span class="line"><span style="color:#D32F2F;">    if</span><span style="color:#24292EFF;"> (prop </span><span style="color:#D32F2F;">===</span><span style="color:#22863A;"> &quot;response&quot;</span><span style="color:#24292EFF;">) {</span></span>
<span class="line"><span style="color:#D32F2F;">      if</span><span style="color:#24292EFF;"> (value) {</span></span>
<span class="line"><span style="color:#1976D2;">        wrapper</span><span style="color:#6F42C1;">.appendChild</span><span style="color:#24292EFF;">(value);</span></span>
<span class="line"><span style="color:#24292EFF;">      }</span></span>
<span class="line"><span style="color:#24292EFF;">    }</span></span>
<span class="line"><span style="color:#24292EFF;">  }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example 2</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#ffffff;color:#24292eff;"><pre class="shiki min-light vp-code"><code><span class="line"><span style="color:#D32F2F;">import</span><span style="color:#24292EFF;"> { compile</span><span style="color:#212121;">,</span><span style="color:#24292EFF;"> stringify } </span><span style="color:#D32F2F;">from</span><span style="color:#22863A;"> &quot;hmpl-js&quot;</span><span style="color:#24292EFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> request2</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> stringify</span><span style="color:#24292EFF;">({</span></span>
<span class="line"><span style="color:#24292EFF;">  src</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;/api/test&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">  initId</span><span style="color:#D32F2F;">:</span><span style="color:#1976D2;"> 2</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> templateFn</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> compile</span><span style="color:#24292EFF;">(</span></span>
<span class="line"><span style="color:#22863A;">  \`&lt;div&gt;</span></span>
<span class="line"><span style="color:#22863A;">     { </span></span>
<span class="line"><span style="color:#22863A;">       {</span></span>
<span class="line"><span style="color:#22863A;">         &quot;src&quot;:&quot;/api/test&quot;,</span></span>
<span class="line"><span style="color:#22863A;">         &quot;initId&quot;:&quot;1&quot;</span></span>
<span class="line"><span style="color:#22863A;">       } </span></span>
<span class="line"><span style="color:#22863A;">     }</span></span>
<span class="line"><span style="color:#22863A;">     {</span><span style="color:#D32F2F;">\${</span><span style="color:#24292EFF;">request2</span><span style="color:#D32F2F;">}</span><span style="color:#22863A;">}</span></span>
<span class="line"><span style="color:#22863A;">  &lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#24292EFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> wrapper</span><span style="color:#D32F2F;"> =</span><span style="color:#1976D2;"> document</span><span style="color:#6F42C1;">.getElementById</span><span style="color:#24292EFF;">(</span><span style="color:#22863A;">&quot;wrapper&quot;</span><span style="color:#24292EFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> obj1</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> templateFn</span><span style="color:#24292EFF;">([</span></span>
<span class="line"><span style="color:#24292EFF;">  {</span></span>
<span class="line"><span style="color:#24292EFF;">    id</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;1&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    value</span><span style="color:#D32F2F;">:</span><span style="color:#24292EFF;"> {</span></span>
<span class="line"><span style="color:#24292EFF;">      credentials</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;same-origin&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">  }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">  {</span></span>
<span class="line"><span style="color:#24292EFF;">    id</span><span style="color:#D32F2F;">:</span><span style="color:#1976D2;"> 2</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    value</span><span style="color:#D32F2F;">:</span><span style="color:#24292EFF;"> {</span></span>
<span class="line"><span style="color:#24292EFF;">      credentials</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;omit&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">  }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D32F2F;">const</span><span style="color:#1976D2;"> obj2</span><span style="color:#D32F2F;"> =</span><span style="color:#6F42C1;"> templateFn</span><span style="color:#24292EFF;">([</span></span>
<span class="line"><span style="color:#24292EFF;">  {</span></span>
<span class="line"><span style="color:#24292EFF;">    id</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;1&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    value</span><span style="color:#D32F2F;">:</span><span style="color:#24292EFF;"> {</span></span>
<span class="line"><span style="color:#24292EFF;">      mode</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;cors&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">  }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">  {</span></span>
<span class="line"><span style="color:#24292EFF;">    id</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;2&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    value</span><span style="color:#D32F2F;">:</span><span style="color:#24292EFF;"> {</span></span>
<span class="line"><span style="color:#24292EFF;">      mode</span><span style="color:#D32F2F;">:</span><span style="color:#22863A;"> &quot;no-cors&quot;</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">    }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">  }</span><span style="color:#212121;">,</span></span>
<span class="line"><span style="color:#24292EFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1976D2;">wrapper</span><span style="color:#6F42C1;">.appendChild</span><span style="color:#24292EFF;">(</span><span style="color:#1976D2;">obj1</span><span style="color:#24292EFF;">.response);</span></span>
<span class="line"><span style="color:#1976D2;">wrapper</span><span style="color:#6F42C1;">.appendChild</span><span style="color:#24292EFF;">(</span><span style="color:#1976D2;">obj2</span><span style="color:#24292EFF;">.response);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(p,[["render",o],["__file","examples.html.vue"]]),d=JSON.parse('{"path":"/examples.html","title":"Examples","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Example 1","slug":"example-1","link":"#example-1","children":[]},{"level":2,"title":"Example 2","slug":"example-2","link":"#example-2","children":[]}],"readingTime":{"minutes":0.39,"words":117},"filePathRelative":"examples.md"}');export{r as comp,d as data};
