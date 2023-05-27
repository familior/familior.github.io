const t=JSON.parse('{"key":"v-1c85c298","path":"/%E9%97%AE%E9%A2%98%E9%9A%8F%E7%AC%94/%E4%BF%AE%E6%94%B9pnpm%E7%9A%84.pnpm-store%E7%9B%AE%E5%BD%95.html","title":"修改pnpm的.pnpm-store目录","lang":"zh-CN","frontmatter":{"title":"修改pnpm的.pnpm-store目录","date":"2023-05-16T00:00:00.000Z","description":"这个不能改，这和pnpm高性能的原理有关，这里简单说一下。 pnpm的依赖包会存放在当前盘符的根目录下的store中，在项目中的依赖会通过软链接链接到store中的依赖。而在windows中，软链接的兼容性存在问题，不能跨盘符链接，所以这是在windows存在的问题。 现在还不知道恢复的办法，先放到C盘先吧 查看.pnpm-store目录，这个只能查看到当前路径下的store-dir，在不同路径下可能不一样 pnpm store path","head":[["meta",{"property":"og:url","content":"https://familiar.github.io/%E9%97%AE%E9%A2%98%E9%9A%8F%E7%AC%94/%E4%BF%AE%E6%94%B9pnpm%E7%9A%84.pnpm-store%E7%9B%AE%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"芙咪莉娅ฅ ̳͒•ˑ̫• ̳͒ฅ"}],["meta",{"property":"og:title","content":"修改pnpm的.pnpm-store目录"}],["meta",{"property":"og:description","content":"这个不能改，这和pnpm高性能的原理有关，这里简单说一下。 pnpm的依赖包会存放在当前盘符的根目录下的store中，在项目中的依赖会通过软链接链接到store中的依赖。而在windows中，软链接的兼容性存在问题，不能跨盘符链接，所以这是在windows存在的问题。 现在还不知道恢复的办法，先放到C盘先吧 查看.pnpm-store目录，这个只能查看到当前路径下的store-dir，在不同路径下可能不一样 pnpm store path"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-27T15:10:32.000Z"}],["meta",{"property":"article:author","content":"芙咪莉娅"}],["meta",{"property":"article:published_time","content":"2023-05-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-27T15:10:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"修改pnpm的.pnpm-store目录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-27T15:10:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"芙咪莉娅\\",\\"url\\":\\"https://github.com/Familiar\\"}]}"]]},"headers":[],"git":{"createdTime":1684431078000,"updatedTime":1685200232000,"contributors":[{"name":"Familia","email":"1692662759@qq.com","commits":2},{"name":"Familiar","email":"1692662759@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":254},"filePathRelative":"问题随笔/修改pnpm的.pnpm-store目录.md","localizedDate":"2023年5月16日","excerpt":"<p>这个不能改，这和pnpm高性能的原理有关，这里简单说一下。</p>\\n<p>pnpm的依赖包会存放在当前盘符的根目录下的store中，在项目中的依赖会通过软链接链接到store中的依赖。而在windows中，软链接的兼容性存在问题，不能跨盘符链接，所以这是在windows存在的问题。</p>\\n<p>现在还不知道恢复的办法，先放到C盘先吧</p>\\n<ul>\\n<li>查看.pnpm-store目录，这个只能查看到当前路径下的store-dir，在不同路径下可能不一样</li>\\n</ul>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>pnpm store path\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
