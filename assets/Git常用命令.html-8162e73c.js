import{_ as e,o as i,c as a,a as s}from"./app-ffedd801.js";const n={},t=s(`<h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>git config --[system|global] 配置项 配置值</p><p>--system 对系统所有仓库配置</p><p>--global 对本仓库配置，缺省--system和--global时相当于--global</p><p>--list 查看配置</p><p>--quiet 不提示信息</p><p>git config user.name &quot;test user&quot; 设置用户名，因为用户名中存在空格，要用&quot;&quot;包裹</p><p>git config user.email 1692662759@qq.com 设置用户邮箱，因为不存在空格，可以省略&quot;&quot;</p><p>git config credential.helper store 保存用户名和邮箱</p><h2 id="建库" tabindex="-1"><a class="header-anchor" href="#建库" aria-hidden="true">#</a> 建库</h2><ol><li>本地的当前目录下创建仓库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>本地的指定目录下创建仓库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init &lt;指定目录&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>从远程的拉取创建本地仓库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone &lt;url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git工作流程" tabindex="-1"><a class="header-anchor" href="#git工作流程" aria-hidden="true">#</a> git工作流程</h2><p>git的工作流程主要依赖三个库，分别是工作区（working directory）、暂存区（staging area/index）、本地仓库（local repository）。其中，暂存区和本地仓库可以当做是版本库，因为这两个库的都有相应的版本号，每次操作add进暂存区时候都是会产生一个版本的。</p><ol><li>工作区：就是本地资源管理器</li><li>暂存区：本地资源管理器和本地仓库之间的缓存</li><li>本地仓库：确定版本号</li></ol><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>begin<span class="token operator">=&gt;</span>start<span class="token operator">:</span> 开始
work<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 工作区
stage<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 暂存区
local<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 本地仓库
remote<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 远程仓库
end<span class="token operator">=&gt;</span>end<span class="token operator">:</span> 结束

add<span class="token operator">=&gt;</span>inputoutput<span class="token operator">:</span> git add
commit<span class="token operator">=&gt;</span>inputoutput<span class="token operator">:</span> git commit
push<span class="token operator">=&gt;</span>inputoutput<span class="token operator">:</span> git push

<span class="token function">work</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>add<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">stage</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>commit<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">local</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>push<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">remote</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加和提交文件" tabindex="-1"><a class="header-anchor" href="#添加和提交文件" aria-hidden="true">#</a> 添加和提交文件</h2><ol><li>查看仓库状态</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>暂存文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add &lt;filename&gt;|&lt;foldername&gt;|&lt;通配符&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 暂存全部文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>提交文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 指定提交备注</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -m &lt;备注&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 暂存同时提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -a -m &lt;备注&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>查看历史提交记录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 查看简洁的提交记录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --oneline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="回退版本" tabindex="-1"><a class="header-anchor" href="#回退版本" aria-hidden="true">#</a> 回退版本</h2><p>HEAD^可以用于表示上一个版本，回退有三种方式，mixed介于soft和hard之间。</p><ol><li><p>软，回退到某个版本并==保存==工作区和暂存区的内容</p><p>即回退到commit之前</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --soft &lt;版本号&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><p>硬，回退到某个版本并==丢弃==工作区和暂存区的内容</p><p>即回退到commit、add、修改文件之前，会完完全全删除本地修改过的内容</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --hard &lt;版本号&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p>混合，回退到某个版本并==保留==工作区内容且==丢弃==暂存区内容</p><p>即回退到commit和add之前</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --mixed &lt;版本号&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>查看操作日志，可以用于回溯到该操作之前的情况</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看差异" tabindex="-1"><a class="header-anchor" href="#查看差异" aria-hidden="true">#</a> 查看差异</h2><p>可以查看工作区、暂存区、本地仓库之间的差异，也可以查看文件在不同版本之间的差异，还可以查看文件在不同分支之间的差异。一般都是使用图形化工具进行查看，了解即可。</p><ol><li>默认比较工作区和暂存区之间的差异内容，会显示发生更改的文件的信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>比较工作区和当前版本库之间的差异</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>比较暂存区和版本库之间的差异</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff --cached
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>比较两个版本的差异</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff &lt;版本号1&gt; &lt;版本号2&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>比较当前版本和上一个版本之间的差异</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff HEAD HEAD~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>比较特定文件的差异内容</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff &lt;版本号1&gt; &lt;版本号2&gt; &lt;文件名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="从版本库中删除文件" tabindex="-1"><a class="header-anchor" href="#从版本库中删除文件" aria-hidden="true">#</a> 从版本库中删除文件</h2><ol><li>先在工作区中删除，再暂存。这种方式个人会比较常用些，特别是使用可视化工具时候。</li><li>直接将文件从版本库中删除，文件会从工作区和暂存区中被删除</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm &lt;文件名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>文件只会从暂存区中被删除，并保留在工作区中</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm --cached &lt;文件名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h2><p>git仓库中有个.gitignore，这个文件记录了需要忽略的文件。</p><p>主要忽略的文件</p><ol><li>系统或者软件自动生成的文件</li><li>编译过程的中间文件</li><li>日志文件、缓存文件、临时文件</li><li>敏感信息</li></ol><p>该文件内容的写法</p><ol><li>指定文件名</li><li>指定文件夹</li><li>通配符</li></ol><p>需要注意的是，.gitignore文件的生效前提是，文件没有被添加到版本库中，对于已经存在版本库中的文件是无法被忽略的。</p><p>匹配规则：</p><ol><li>空行或者以#开头的行会被Git忽略。一般空行用于可读性的分隔，#一般用作注释</li><li>使用标准的Blob模式匹配，例如： <ol><li>星号*通配任意个字符</li><li>问号？匹配单个字符</li><li>中括号[]表示匹配列表中的单个字符，比如：[abc]表示a/b/c</li><li>中括号可以使用短中线连接，比如：[0-9]表示任意一位数字，[a-z]表示任意一位小写字母</li></ol></li><li>两个星号**表示匹配任意的中间目录</li><li>感叹号!表示取反</li></ol><h2 id="指定ssh私钥" tabindex="-1"><a class="header-anchor" href="#指定ssh私钥" aria-hidden="true">#</a> 指定ssh私钥</h2><p>在.ssh目录下创建config文件，内容如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内容的意思是，当使用ssh访问Host的时候，使用指定的私钥访问</p><h2 id="使用远程仓库" tabindex="-1"><a class="header-anchor" href="#使用远程仓库" aria-hidden="true">#</a> 使用远程仓库</h2><ol><li>克隆远程仓库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone &lt;url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>添加远程仓库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add &lt;远程仓库名&gt; &lt;url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>推送更新内容</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push &lt;远程仓库名&gt; &lt;branch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>关联仓库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push -u &lt;远程仓库名&gt;|&lt;url&gt; &lt;本地仓库分支名&gt;:&lt;远程仓库分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ -u是--upstream的缩写，用于关联仓库</p><ol start="4"><li>拉取更新内容</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull &lt;远程仓库名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>获取远程仓库的修改</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="初识分支" tabindex="-1"><a class="header-anchor" href="#初识分支" aria-hidden="true">#</a> 初识分支</h2><ol><li>查看所有分支</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建分支</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch &lt;分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p>切换分支</p><p>checkout也可用于恢复文件，会存在文件名和分支名相同的情况，这时会产生歧义，所以切换分支建议使用switch</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout &lt;分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git switch &lt;分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li><p>合并分支</p><p>合并的目标分支就是当前所在的分支</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge &lt;被合并的分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>删除已经被合并的分支</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -d &lt;分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>强制删除分支</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -D &lt;分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解决分支冲突" tabindex="-1"><a class="header-anchor" href="#解决分支冲突" aria-hidden="true">#</a> 解决分支冲突</h2><p>如果两个分支的修改内容没有重叠部分，那么就不存在冲突问题。</p><p>如果两个分支都修改了同一个文件同一行的代码，那么就需要手动来解决分支冲突。</p><p>提交发生冲突的时候，git会将冲突部分的内容都写入到同一个文件中，用户手动编辑这个冲突的文件来进行冲突部分的选择即可。修改完毕后要进行暂存和提交</p><h2 id="变基" tabindex="-1"><a class="header-anchor" href="#变基" aria-hidden="true">#</a> 变基</h2><p>变基的过程是，先找出两条分支的共同组件，然后将分支嫁接到目标分支上，最后的结果都是一条直线。在哪个分支变基，就是将哪个分支嫁接到目标分支上。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase &lt;目标分支&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>==变基和合并的区别==</p><ul><li>merge不会破坏原有分支的结构</li><li>rebase不会新增额外的提交记录，形成线性历史。但会改变提交历史，改变当前分支节点的分支处。</li></ul><p>==选择指标==</p><ul><li>希望保存提交历史就选merge</li><li>希望简洁就选rebase</li></ul><h2 id="版本号规则" tabindex="-1"><a class="header-anchor" href="#版本号规则" aria-hidden="true">#</a> 版本号规则</h2><ul><li><p>主版本 （Major Version）：主要的功能变化或重大更新</p></li><li><p>次版本 （Minor Version） ：一些新的功能、改进和更新，通常不会影响现有功能</p></li><li><p>修订版本：（Patch Version）：一些小的bug修复，安全漏洞补丁等。通常不会更改现有功能和接口。</p></li></ul><h2 id="git-submodule" tabindex="-1"><a class="header-anchor" href="#git-submodule" aria-hidden="true">#</a> git submodule</h2><p>既然有子模块，那么就有主模块，这里可以理解为主仓库。在下面可以认为，子模块=子项目=子仓库，主模块=主项目=主仓库。</p><p>举一个使用场景，主仓库的项目需要依赖多个子项目，这些子项目都是子模块。主仓库应该由主管来管理，子仓库可以分给各位实习生管理。实习生完成自己的开发任务后，将子模块推送到子仓库中，主管可以在本地主仓库同时拉取主仓库和子仓库的内容，然后再推送仓库到远端完成远程主仓库的更新。</p><p>如果不更新主仓库中的子模块，那么即使子模块仓库进行了更新，在主仓库的子模块也是原来的那个。</p><p>所以，包含子模块的主仓库的更新过程应该如下，</p><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>begin<span class="token operator">=&gt;</span>start<span class="token operator">:</span> 开始
op1<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 子模块仓库commit并push
op2<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 主仓库update获取子模块的更新并commit和push
end<span class="token operator">=&gt;</span>end<span class="token operator">:</span> 结束
<span class="token function">begin</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">op1</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">op2</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，子模块仓库好像要公开才能被github action拉取，除非配置token。</p><p>==子模块无法实现最新引用，即父仓库每次拉取最新代码时候也自动拉取子模块的最新代码==，所以子模块有些鸡肋，建议使用subtree进行代替。</p><ul><li>在本地主仓库中创建子模块</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git submodule add &lt;repository&gt; [&lt;path&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在本地主仓库中更新子模块信息，但不拉取代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git submodule update --remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在本地主仓库中递归拉取子模块代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git submodule update --recursive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>递归克隆远程主仓库</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone --recursive &lt;repository&gt; [&lt;path&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除子模块</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm --cache &lt;path&gt;
删除子模块仓库目录
add并commit主仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-subtree" tabindex="-1"><a class="header-anchor" href="#git-subtree" aria-hidden="true">#</a> git subtree</h2><p>subtree与submodule的作用是一样的，但是subtree出现得比submodule晚，它的出现是为了弥补submodule存在的问题：</p><ol><li>submodule不能在父版本库中修改子版本库的代码，只能在子版本库中修改，是单向的；</li><li>submodule没有直接删除子版本库的功能；</li></ol><p>而subtree则可以实现双向数据修改。官方推荐使用subtree替代submodule。子项目对主项目是完全透明的</p><ul><li>在主项目中添加subtree</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git subtree add --prefix=&lt;path&gt; &lt;url&gt; &lt;branch&gt; --squash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 该命令是将url仓库的branch分支拉取到path目录下</p><p>​ --squash 参数表示只生成一条commit信息，不拉取历史信息</p><h2 id="submodule和subtree的区别" tabindex="-1"><a class="header-anchor" href="#submodule和subtree的区别" aria-hidden="true">#</a> submodule和subtree的区别</h2><p>submodule和subtree最大的区别就是subtree允许在父仓库修改subtree，而submodule不允许在父仓库对submodule进行修改。</p><p>因为，对于需要被多个项目引用的共有仓库，建议用submodule，当然subtree的功能更加多一下。</p><h2 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> Github Action</h2><p>Github Action本质是个脚本，它是一个自动化工具，常用于同步仓库，发布网站。脚本定义了触发器，当满足条件时候会进行执行。</p><p>Github Action的脚本是个yml类型的文本，保存在.github/workflow目录下。</p><p>下面是一个推送仓库到远程仓库时，打包发布到github pages和gitee pages网站的应用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
name: 发布博客

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - master

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: 拉取仓库
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: 构建博客
        env:
          # node的环境变量，用于分配足够的内存给nodejs打包
          NODE_OPTIONS: --max_old_space_size=8192
        run:
          npm install &amp;&amp; npm run build

      - name: 部署github博客
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: \${{ secrets.TOKEN }}
          # 这是博客部署到的目标仓库和分支名称
          repository-name: Familior/Familior.github.io
          branch: master
          # 这是待提交的目录
          folder: .vuepress/dist/

      - name: 推送打包到Gitee仓库
        uses: wearerequired/git-mirror-action@master
        env:
          # 注意在 Settings-&gt;Secrets 配置 GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: \${{ secrets.GITEE_RSA_PRIVATE_KEY }}
        with:
          # GitHub 源仓库地址
          source-repo: git@github.com:Familior/Familior.github.io.git
          # Gitee 目标仓库地址
          destination-repo: git@gitee.com:Familior/Familior.git

      - name: 点一下gitee pages的更新按钮
        uses: yanglbme/gitee-pages-action@main
        with:
          gitee-username: \${{ secrets.GITEE_NAME }}
          gitee-password: \${{ secrets.GITEE_PASSWORD }}
          # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
          gitee-repo: Familior/Familior
          # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
          branch: master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-action套娃" tabindex="-1"><a class="header-anchor" href="#github-action套娃" aria-hidden="true">#</a> GitHub Action套娃</h2><p>意思就是在一个GitHub Action中调用另一仓库的GitHub Action。</p>`,156),l=[t];function d(r,o){return i(),a("div",null,l)}const u=e(n,[["render",d],["__file","Git常用命令.html.vue"]]);export{u as default};
