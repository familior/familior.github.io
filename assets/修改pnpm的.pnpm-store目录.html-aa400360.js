import{_ as e,o as i,c as n,a as s}from"./app-ffedd801.js";const r={},t=s(`<p>这个不能改，这和pnpm高性能的原理有关，这里简单说一下。</p><p>pnpm的依赖包会存放在当前盘符的根目录下的store中，在项目中的依赖会通过软链接链接到store中的依赖。而在windows中，软链接的兼容性存在问题，不能跨盘符链接，所以这是在windows存在的问题。</p><p>现在还不知道恢复的办法，先放到C盘先吧</p><ul><li>查看.pnpm-store目录，这个只能查看到当前路径下的store-dir，在不同路径下可能不一样</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm store path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改.pnpm-store目录，可以用绝对路径</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm config set store-dir &quot;D:\\Program_Files\\nodejs\\.pnpm-store&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Administrator@Familiar-Desktop MINGW64 ~
$ pnpm store path
C:\\Users\\Administrator\\AppData\\Local\\pnpm\\store\\v3

Administrator@Familiar-Desktop MINGW64 ~
$ pnpm config set store-dir D:\\Program_Files\\nodejs\\.pnpm-store

Administrator@Familiar-Desktop MINGW64 ~
$ pnpm store path
C:\\Users\\Administrator\\D:Program_Filesnodejs.pnpm-store\\v3

Administrator@Familiar-Desktop MINGW64 ~
$ pnpm config set store-dir &quot;D:\\Program_Files\\nodejs\\.pnpm-store&quot;

Administrator@Familiar-Desktop MINGW64 ~
$ pnpm store path
D:\\Program_Files\\nodejs\\.pnpm-store\\v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[t];function d(l,o){return i(),n("div",null,a)}const p=e(r,[["render",d],["__file","修改pnpm的.pnpm-store目录.html.vue"]]);export{p as default};
