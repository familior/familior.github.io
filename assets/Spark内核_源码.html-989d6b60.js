import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-5a72580e.js";const e={},o=t(`<h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> ### 闭包</h3><p>闭包环境是指创建闭包时捕获的那些外部变量的作用域，它是闭包能够记住并访问其外部（或词法）作用域中的变量的原因。闭包环境包括了闭包函数定义时可访问的所有局部变量、参数和其他闭包。</p><p>当一个函数（我们称之为内部函数）被定义在另一个函数（外部函数）的作用域内时，内部函数就有可能创建一个闭包。内部函数可以访问外部函数的变量，即使外部函数已经执行完毕。这些变量和内部函数一起构成了闭包环境。</p><p>闭包环境的存在允许内部函数在外部函数执行完毕后仍然能够引用和操作外部函数的变量。这种特性在很多编程语言中都可以找到，尤其是在支持一级函数（first-class functions）的语言中，如 JavaScript、Python、Ruby 等。</p><p>下面是一个 JavaScript 中闭包环境的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 这个变量属于 createCounter 的局部作用域</span>

    <span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// counter 是一个闭包</span>
        count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// counter 函数引用了外部函数的 count 变量</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> counter<span class="token punctuation">;</span> <span class="token comment">// 返回 counter 函数，创建闭包</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myCounter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// myCounter 是一个闭包</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>counter</code> 函数是一个闭包，因为它引用了<code>createCounter</code>函数作用域中的<code>count</code>变量。即使<code>createCounter</code>函数执行结束，<code>counter</code>函数依然可以访问和修改<code>count</code>变量，因为它是闭包环境的一部分。</p>`,7),c=[o];function p(u,i){return s(),a("div",null,c)}const d=n(e,[["render",p],["__file","Spark内核_源码.html.vue"]]);export{d as default};
