在证明了隐函数相继各阶导函数的存在以后, 它们的计算可以用较简单的办法进行, 只要把 $y$ 看作 $x$ 的函数而逐次求导恒等式 (15) 就行了. 例如,由这个恒等式第一次求导得

$$
{F}_{{x}^{2}}^{\prime \prime } + {F}_{xy}^{\prime \prime } \cdot  {y}_{x}^{\prime } + \left( {{F}_{xy}^{\prime \prime } + {F}_{{y}^{2}}^{\prime \prime } \cdot  {y}_{x}^{\prime }}\right)  \cdot  {y}_{x}^{\prime } + {F}_{y}^{\prime } \cdot  {y}_{{x}^{2}}^{\prime \prime } = 0,
$$

由此有 (注意 ${F}_{y}^{\prime } \neq  0$ )

$$
{y}_{{x}^{2}}^{\prime \prime } =  - \frac{{F}_{{x}^{2}}^{\prime \prime } + 2{F}_{xy}^{\prime \prime } \cdot  {y}_{x}^{\prime } + {F}_{y2}^{\prime \prime } \cdot  {y}_{x}^{\prime 2}}{{F}_{y}^{\prime }};
$$

将 ${y}_{x}^{\prime }$ 代之以其表达式 (4) 即得已经求出的 ${y}_{{x}^{2}}^{\prime \prime }$ 的表达式; 其余类推.

例 1) 设 $y$ 与 $x$ 由下面的方程式

$$
\ln \sqrt{{x}^{2} + {y}^{2}} = \arctan \frac{y}{x}
$$

联系着. 逐次依 $x$ 求导 ( $y$ 看作 $x$ 的函数),首先得

$$
\frac{x + y{y}^{\prime }}{{x}^{2} + {y}^{2}} = \frac{x{y}^{\prime } - y}{{x}^{2} + {y}^{2}}\text{ 或 }x + y{y}^{\prime } = x{y}^{\prime } - y;
$$

然后得

$$
1 + {y}^{\prime 2} + y{y}^{\prime \prime } = x{y}^{\prime \prime },\cdots .
$$

由第一个方程算出

$$
{y}^{\prime } = \frac{x + y}{x - y}
$$

由第二个方程算出 (如以所求得 ${y}^{\prime }$ 值代入)

$$
{y}^{\prime \prime } = \frac{1 + {y}^{\prime 2}}{x - y} = 2\frac{{x}^{2} + {y}^{2}}{{\left( x - y\right) }^{3}},
$$

如此类推.

方程 (5)

$$
F\left( {x, y, z}\right)  = 0
$$

的情形也相似. 这里我们假设定理 2 的条件已实现. 如果 $z$ 理解为由这个方程所定的隐函数,则此方程成恒等式,可依 $x$ 求导,也可依 $y$ 求导. 结果得

$$
{z}_{x}^{\prime } =  - \frac{{F}_{x}^{\prime }}{{F}_{z}^{\prime }},\;{z}_{y}^{\prime } =  - \frac{{F}_{y}^{\prime }}{{F}_{z}^{\prime }}.
$$

(第二等式我们本来已在定理 3 证明中以同样方法得出.)

如果函数 $F$ 有二、三、 $\cdots \cdots$ 阶的连续导函数,则函数 $z$ 也有这样的导函数: 这全与上面所说关于方程 (1) 的情形讲过的一样.

如果需要所有一、二、三、……各阶的导数,则比较简单的是一下子算出 ${dz},{d}^{2}z,\cdots$ . 对我们的恒等式两边求全微分, 即令其左边的全微分等于 0 (在此利用 143 段一阶微分形式的不变性):

$$
\frac{\partial F}{\partial x}{dx} + \frac{\partial F}{\partial y}{dy} + \frac{\partial F}{\partial z}{dz} = 0,
$$

如此

$$
{dz} =  - \frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial z}}{dx} - \frac{\frac{\partial F}{\partial y}}{\frac{\partial F}{\partial z}}{dy}.
$$

同时

$$
{dz} = \frac{\partial z}{\partial x}{dx} + \frac{\partial z}{\partial y}{dy}
$$

既然 ${dx}$ 和 ${dy}$ 是任意的,故显然有 ${}^{\text{①}}$

$$
\frac{\partial z}{\partial x} =  - \frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial z}},\;\frac{\partial z}{\partial y} =  - \frac{\frac{\partial F}{\partial y}}{\frac{\partial F}{\partial z}},
$$

和以前所得一样.

再微分一次, 得

$$
\left\lbrack  {\frac{{\partial }^{2}F}{\partial {x}^{2}}{dx} + \frac{{\partial }^{2}F}{\partial x\partial y}{dy} + \frac{{\partial }^{2}F}{\partial x\partial z}{dz}}\right\rbrack  {dx} + \cdots  + \frac{\partial F}{\partial z}{d}^{2}z = 0,
$$

然后决定 ${d}^{2}z$ . 这导出

$$
\frac{{\partial }^{2}z}{\partial {x}^{2}},\;\frac{{\partial }^{2}z}{\partial x\partial y},\;\frac{{\partial }^{2}z}{\partial {y}^{2}}
$$

的表达式, 其余如此类推. 我们可看到, 在所有这些计算中条件

$$
{F}_{z}^{\prime } = \frac{\partial F}{\partial z} \neq  0
$$

起基本作用.

2) 设 $x, y$ 的隐函数 $z$ 由下面方程所决定:

$$
\frac{{x}^{2}}{{a}^{2}} + \frac{{y}^{2}}{{b}^{2}} + \frac{{z}^{2}}{{c}^{2}} = 1
$$

我们相继有

$$
\frac{xdx}{{a}^{2}} + \frac{ydy}{{b}^{2}} + \frac{zdz}{{c}^{2}} = 0,\;{dz} =  - \frac{{c}^{2}x}{{a}^{2}z}{dx} - \frac{{c}^{2}y}{{b}^{2}z}{dy},
$$

如此

$$
\frac{\partial z}{\partial x} =  - \frac{{c}^{2}x}{{a}^{2}z},\;\frac{\partial z}{\partial y} =  - \frac{{c}^{2}y}{{b}^{2}z}.
$$

然后有

$$
\frac{d{x}^{2}}{{a}^{2}} + \frac{d{y}^{2}}{{b}^{2}} + \frac{d{z}^{2}}{{c}^{2}} + \frac{z{d}^{2}z}{{c}^{2}} = 0,
$$

由此得 (如利用 ${dz}$ 的已知表达式)

$$
{d}^{2}z =  - \frac{{c}^{4}}{{z}^{3}}\left\lbrack  {\left( {\frac{{x}^{2}}{{a}^{2}} + \frac{{z}^{2}}{{c}^{2}}}\right) \frac{d{x}^{2}}{{a}^{2}} + \frac{2xy}{{a}^{2}{b}^{2}}{dxdy} + \left( {\frac{{y}^{2}}{{b}^{2}} + \frac{{z}^{2}}{{c}^{2}}}\right) \frac{d{y}^{2}}{{b}^{2}}}\right\rbrack  ,
$$

---

① 等式 ${Adx} + {Bdy} = {A}^{\prime }{dx} + {B}^{\prime }{dy}$ 在 ${dx}$ 和 ${dy}$ 的值任意时只能当 $A = {A}^{\prime }$ 并且 $B = {B}^{\prime }$ 时才能成立.

---

这就给出

$$
\frac{{\partial }^{2}z}{\partial {x}^{2}} =  - \frac{{c}^{4}}{{a}^{2}{z}^{3}}\left( {\frac{{x}^{2}}{{a}^{2}} + \frac{{z}^{2}}{{c}^{2}}}\right) ,\;\frac{{\partial }^{2}z}{\partial x\partial y} =  - \frac{{c}^{4}{xy}}{{a}^{2}{b}^{2}{z}^{3}},
$$

$$
\frac{{\partial }^{2}z}{\partial {y}^{2}} =  - \frac{{c}^{4}}{{b}^{2}{z}^{3}}\left( {\frac{{y}^{2}}{{b}^{2}} + \frac{{z}^{2}}{{c}^{2}}}\right) ,
$$

如此等等.

现在来看方程组 (8):

$$
\left. \begin{array}{l} F\left( {x, y, z}\right)  = 0, \\  G\left( {x, y, z}\right)  = 0. \end{array}\right\}
$$

我们假设,在所取的点邻近定理 3 的条件满足. 还是要注意条件 $J \neq  0$ 所起的作用.

我们知道, $x$ 的隐函数 $y$ 和 $z$ 有对 $x$ 的导函数. 它们可这样计算: 将 $y$ 和 $z$ 理解为所说的隐函数,因而由 (8) 得出一恒等式. 将此恒等式对 $x$ 求导得

$$
\frac{\partial F}{\partial x} + \frac{\partial F}{\partial y} \cdot  \frac{dy}{dx} + \frac{\partial F}{\partial z} \cdot  \frac{dz}{dx} = 0,
$$

$$
\frac{\partial G}{\partial x} + \frac{\partial G}{\partial y} \cdot  \frac{dy}{dx} + \frac{\partial G}{\partial z} \cdot  \frac{dz}{dx} = 0.
$$

这是一组关于未知数 $\frac{dy}{dx}$ 及 $\frac{dz}{dx}$ 的线性方程,其行列式 $J$ 异于 0 . 两个对 $x$ 的导函数不难由此决定.

我们不在此重复关于利用全微分及关于高阶导数存在和计算的附注.

以上说的全都可以推广到一般的情形.

3) 设给了一组方程

$$
x + y + z + u = a,\;{x}^{2} + {y}^{2} + {z}^{2} + {u}^{2} = {b}^{2},\;{x}^{3} + {y}^{3} + {z}^{3} + {u}^{3} = {c}^{3},
$$

将 $y, z, u$ 确定为 $x$ 的函数. 我们有

$$
1 + {y}^{\prime } + {z}^{\prime } + {u}^{\prime } = 0,\;x + y{y}^{\prime } + z{z}^{\prime } + u{u}^{\prime } = 0,
$$

$$
{x}^{2} + {y}^{2}{y}^{\prime } + {z}^{2}{z}^{\prime } + {u}^{2}{u}^{\prime } = 0.
$$

设行列式

$$
\left| \begin{matrix} 1 & 1 & 1 \\  y & z & u \\  {y}^{2} & {z}^{2} & {u}^{2} \end{matrix}\right|  = \left( {z - y}\right) \left( {u - y}\right) \left( {u - z}\right)
$$

不等于 0 , 由此有

$$
{y}^{\prime } =  - \frac{\left( {z - x}\right) \left( {u - x}\right) }{\left( {z - y}\right) \left( {u - y}\right) },
$$

如此等等.

## §2. 隐函数理论的一些应用

319. 相对极值 我们来讨论 $n + m$ 元函数 $f\left( {{x}_{1},\cdots ,{x}_{n + m}}\right)$ 的极值问题. 假设这 $n + m$ 个变量间还有 $m$ 个 “约束方程”

$$
{\Phi }_{i}\left( {{x}_{1},\cdots ,{x}_{n},{x}_{n + 1},\cdots ,{x}_{n + m}}\right)  = 0\;\left( {i = 1,2,\cdots , m}\right) .
$$

我们来明确一下这种相对极值的概念并且指出其求法.

如果对满足约束方程的点 ${P}_{0}\left( {{x}_{1}^{0},\cdots ,{x}_{n + m}^{0}}\right)$ 某邻域内所有满足该方程的点 $\left( {{x}_{1},\cdots ,{x}_{n + m}}\right)$ ,不等式

$$
f\left( {{x}_{1},\cdots ,{x}_{n + m}}\right)  \leq  f\left( {{x}_{1}^{0},\cdots ,{x}_{n + m}^{0}}\right)
$$

(≥)

都成立,则称函数 $f\left( {{x}_{1},\cdots ,{x}_{n + m}}\right)$ 在点 ${P}_{0}\left( {{x}_{1}^{0},\cdots ,{x}_{n + m}^{0}}\right)$ 上有一相对极大值 (极小值).

例如,如果所谈的是函数 $u = f\left( {x, y, z}\right)$ ,其三个变量间还有一约束方程

$$
F\left( {x, y, z}\right)  = 0,
$$

则求函数 $u$ 的相对极值其几何意义就是要在上式所表示的曲面上找极值: 极值点本身及与它对比的点都应落在这个曲面上. 如果有两个约束方程

$$
F\left( {x, y, z}\right)  = 0,\;G\left( {x, y, z}\right)  = 0,
$$

则显然问题就是要在这些方程所表示的曲线上来考虑了.

现在来详细叙述这个问题, 而为写起来简单起见只限于四元函数

$$
u = f\left( {x, y, z, t}\right) ,
$$

其各变量间有两个约束方程

$$
F\left( {x, y, z, t}\right)  = 0,\;G\left( {x, y, z, t}\right)  = 0. \tag{1}
$$

设函数 $f$ 在点 ${P}_{0}\left( {{x}_{0},{y}_{0},{z}_{0},{t}_{0}}\right)$ 有一相对极值. 我们假设函数 $f$ 以及 $F$ 和 $G$ 在该点邻近对所有自变量都有连续偏导函数. 其次, 设偏导数矩阵

$$
\left( \begin{array}{llll} {F}_{x}^{\prime } & {F}_{y}^{\prime } & {F}_{z}^{\prime } & {F}_{t}^{\prime } \\  {G}_{x}^{\prime } & {G}_{y}^{\prime } & {G}_{z}^{\prime } & {G}_{t}^{\prime } \end{array}\right)
$$

中至少有一个二阶行列式在点 ${P}_{0}$ 上不等于 ${0}^{\text{①}}$ ,比如说,这是行列式

$$
J = \left| \begin{array}{ll} {F}_{z}^{\prime } & {F}_{t}^{\prime } \\  {G}_{z}^{\prime } & {G}_{t}^{\prime } \end{array}\right| . \tag{2}
$$

---

①在这情形我们说该矩阵 (在点 ${P}_{0}$ ) 为有秩 2 .

---

于是,如果限于点 ${P}_{0}$ 的适当邻域内 (依据一个与 317 段的定理 3 相似的定理), 方程组 (1) 就等价于形如

$$
z = \varphi \left( {x, y}\right) ,\;t = \psi \left( {x, y}\right)  \tag{3}
$$

的一组方程,这里 $\varphi ,\psi$ 是 (1) 所确定的隐函数. 换句话说,要变量 $x, y, z, t$ 的值满足约束方程 (1) 这一条件可代之以假设变量 $z$ 和 $t$ 是 $x$ 和 $y$ 的函数 (3). 如此,四元函数 $f\left( {x, y, z, t}\right)$ 在点 ${P}_{0}\left( {{x}_{0},{y}_{0},{z}_{0},{t}_{0}}\right)$ 的相对极值问题就变成了二元复合函数

$$
f\left( {x, y,\varphi \left( {x, y}\right) ,\psi \left( {x, y}\right) }\right)  \tag{4}
$$

在点 ${M}_{0}\left( {{x}_{0},{y}_{0}}\right)$ 上的寻常 (绝对) 极值问题.

这种想法也指示我们找函数 $f\left( {x, y, z, t}\right)$ 达到相对极值的点的实际途径: 如果我们实际上会解出约束方程比如说对变量 $z$ 和 $t$ 并且会找函数 (3) 的显式; 则问题就化为要找复合函数 (4) 的绝对极值. 其实, 我们在一系列早先所解的问题中 [153, 154 段] 正是这样做的,例如,在 $x + y + z + t = {4c}$ 条件下找乘积 ${xyzt}$ 的最大值,等等.

现在我们指出另一途径来找点 ${P}_{0}\left( {{x}_{0},{y}_{0},{z}_{0},{t}_{0}}\right)$ ,而不假设我们有 (隐) 函数 (3) 的显式, 虽然这些函数的存在我们在此也要用到.

如此,设在点 ${P}_{0}$ 函数 $f\left( {x, y, z, t}\right)$ 有一相对极值,或者说,复合函数 (4) 在点 ${M}_{0}$ 有一绝对极值.

于是在这一点上函数 (4) 的对 $x$ 及对 $y$ 的导数都等于 0,所以其微分也等于 0 . 按 143 段的一阶微分形式不变性这个条件也可写成这样:

$$
\frac{\partial f}{\partial x}{dx} + \frac{\partial f}{\partial y}{dy} + \frac{\partial f}{\partial z}{dz} + \frac{\partial f}{\partial t}{dt} = 0, \tag{5}
$$

这里 ${dz}$ 和 ${dt}$ 可理解为函数 (3) 在点 ${M}_{0}$ 的微分,而各偏导数则在点 ${P}_{0}$ 计算,因为

$$
\varphi \left( {{x}_{0},{y}_{0}}\right)  = {z}_{0},\;\psi \left( {{x}_{0},{y}_{0}}\right)  = {t}_{0}. \tag{6}
$$

当然不能由 (5) 断定微分的系数等于 0 , 因为这些微分不全是任意的. 为了将问题化为任意选取的微分,即自变量的微分 ${dx}$ 及 ${dy}$ ,我们设法由此消去因变量的微分 ${dz}$ 及 ${dt}$ . 这不难做到,只要把约束方程 (1) 两边取全微分,而将 $z$ 和 $t$ 理解为函数 ${\left( 3\right) }^{\text{①}}$ :

$$
\frac{\partial F}{\partial x}{dx} + \frac{\partial F}{\partial y}{dy} + \frac{\partial F}{\partial z}{dz} + \frac{\partial F}{\partial t}{dt} = 0, \tag{7}
$$

$$
\frac{\partial G}{\partial x}{dx} + \frac{\partial G}{\partial y}{dy} + \frac{\partial G}{\partial z}{dz} + \frac{\partial G}{\partial t}{dt} = 0.
$$

这里,也和上面一样,由 (6),偏导数在点 ${P}_{0}$ 计算. 因为按假设行列式 (2) 在这一点上不等于 0,故 ${dz}$ 及 ${dt}$ 可由此表示为 ${dx}$ 和 ${dy}$ 的一次式. 如果将这些表达式代入 (5), 则得形如

$$
{Adx} + {Bdy} = 0
$$

---

①说精确点,我们要微分那些恒等式,它们由方程 (1) 将其中 $z$ 及 $t$ 代之以隐函数 (3) 而得出. 以后我们将一律采用这样类似的说法.

---

的等式,其中 $A$ 和 $B$ 表示对函数 $F, G$ 的偏导数的有理式,并且这偏导数是取在点 ${P}_{0}$ 上的. 因为在这等式上只出现自变量的微分 ${dx},{dy}$ ,即完全任意的数,故在点 ${M}_{0}$ 我们有

$$
A = 0,\;B = 0.
$$

连同约束方程我们共有四个方程来决定未知数 $x, y, z, t$ .

当然,我们只建立了点 $P\left( {{x}_{0},{y}_{0},{z}_{0},{t}_{0}}\right)$ 的极值的必要条件. 但即使这样的条件甚至也可用来找函数 $f$ 在条件 (1) 之下的最大 (或最小) 值,只要按问题的性质能预知在所考虑的区域内部应有达到最大值或最小值的点存在, 或者在推论的过程中先作这样的假设, 以后再将所求出的点用其他办法来证实.

实例见下面 321 段.

320. 拉格朗日不定乘数法 在上面所讲的方法里, 变量之间不成对称: 有些当作自变量, 有些当作因变量; 有些微分被消去, 而有些保留. 这有时会使计算大为复杂化. 拉格朗日提出一种方法, 使所有变量都保持平等的地位.

将等式 (7) 各乘以暂时任意的 (非负) 乘数 $\lambda ,\mu$ 而将结果逐项与 (5) 相加,如此得等式

$$
\left( {\frac{\partial f}{\partial x} + \lambda \frac{\partial F}{\partial x} + \mu \frac{\partial G}{\partial x}}\right) {dx} + \left( {\frac{\partial f}{\partial y} + \lambda \frac{\partial F}{\partial y} + \mu \frac{\partial G}{\partial y}}\right) {dy}
$$

$$
+ \left( {\frac{\partial f}{\partial z} + \lambda \frac{\partial F}{\partial z} + \mu \frac{\partial G}{\partial z}}\right) {dz} + \left( {\frac{\partial f}{\partial t} + \lambda \frac{\partial F}{\partial t} + \mu \frac{\partial G}{\partial t}}\right) {dt} = 0, \tag{8}
$$

这里 ${dz}$ 及 ${dt}$ 仍旧表示隐函数 (3) 的微分 (在推导中我们暂时保持变量的不平等); 导数都在点 ${P}_{0}$ 上计算.

现在我们这样选取 $\lambda$ 和 $\mu$ 的值,使因变量的微分 ${dz}$ 和 ${dt}$ 的系数等于 0 :

$$
\frac{\partial f}{\partial z} + \lambda \frac{\partial F}{\partial z} + \mu \frac{\partial G}{\partial z} = 0,\;\frac{\partial f}{\partial t} + \lambda \frac{\partial F}{\partial t} + \mu \frac{\partial G}{\partial t} = 0. \tag{9}
$$

这是做得到的,因为用以决定 $\lambda$ 和 $\mu$ 的线性方程组 (2) 的行列式不等于 0 . 在所选取的乘数值之下等式 (8) 就成这样的形状:

$$
\left( {\frac{\partial f}{\partial x} + \lambda \frac{\partial F}{\partial x} + \mu \frac{\partial G}{\partial x}}\right) {dx} + \left( {\frac{\partial f}{\partial y} + \lambda \frac{\partial F}{\partial y} + \mu \frac{\partial G}{\partial y}}\right) {dy} = 0. \tag{10}
$$

这里我们又只有自变量的微分了, 所以它们的系数应该等于 0 , 即与 (9) 式并列我们

还有

$$
\frac{\partial f}{\partial x} + \lambda \frac{\partial F}{\partial x} + \mu \frac{\partial G}{\partial x} = 0,\;\frac{\partial f}{\partial y} + \lambda \frac{\partial F}{\partial y} + \mu \frac{\partial G}{\partial y} = 0.
$$

$\left( {9}^{ * }\right)$

如此,为了决定四个未知数 $x, y, z, t$ 以及两个乘数 $\lambda$ 和 $\mu$ 我们恰好有一样多的方程,即两个约束方程及四个方程 (9) 和 $\left( {9}^{ * }\right)$ .

为了使这些方程写起来方便一点, 通常采用一个辅助函数

$$
\Phi  = f + {\lambda F} + {\mu G}
$$

于是所说的方程可以写成这样:

$$
\frac{\partial \Phi }{\partial x} = 0,\;\frac{\partial \Phi }{\partial y} = 0,\;\frac{\partial \Phi }{\partial z} = 0,\;\frac{\partial \Phi }{\partial t} = 0. \tag{11}
$$

它们看起来像是函数 $F$ 的寻常极值条件. 但这只能看作是一种便于记忆的方法.

拉格朗日方法也只能导出必要条件. 在此还可重述一下前段末尾所说的话.

附注 在所讲理论中关于偏导数矩阵的秩的假定起了重要作用, 我们已三度用到了. 在用上述方法之一来解决问题时, 为了证实使函数达到相对极值的点一个都没有遗漏, 应预先确定这个假定, 在所考虑区域内所有满足约束方程的点上都已实现. 在简单情形这让读者去做.

我们来看几个例题.

321. 例及习题 1) 设要找函数 $u = {xyzt}$ 在条件 $x + y + z + t = {4c}$ 下的极值; 变量的变域由不等式 $x \geq  0, y \geq  0, z \geq  0, t \geq  0$ 所定. 这个问题,我们在 153 段,2 ) 里已利用由后一条件实际表出 $t$ 而解决了.

应用拉格朗日方法于同一问题而引入辅助函数

$$
\Phi  = {xyzt} + \lambda {\left( x + y + z + t\right) }^{\text{①}}
$$

并且列出条件

$$
{\Phi }_{x}^{\prime } = {yzt} + \lambda  = 0,\cdots ,{\Phi }_{t}^{\prime } = {xyz} + \lambda  = 0,
$$

由此得

$$
{yzt} = {xzt} = {xyt} = {xyz}\text{,如此 }x = y = z = t = c.
$$

2) 回到那并联电路中导线最经济截面问题 $\left\lbrack  {\mathbf{{154}}\text{段,3})}\right\rbrack$ . 仍采用该处的记号,我们来找函数

$$
f\left( {{q}_{1},{q}_{2},\cdots ,{q}_{n}}\right)  = {l}_{1}{q}_{1} + {l}_{2}{q}_{2} + \cdots  + {l}_{n}{q}_{n}
$$

在条件

$$
F\left( {{q}_{1},{q}_{2},\cdots ,{q}_{n}}\right)  = \frac{\rho {l}_{1}{J}_{1}}{{q}_{1}} + \frac{\rho {l}_{2}{J}_{2}}{{q}_{2}} + \cdots  + \frac{\rho {l}_{n}{J}_{n}}{{q}_{n}} = e
$$

下的极值; 在此我们不必像以前那样引入别的变量来替换 ${q}_{1},{q}_{2},\cdots ,{q}_{n}$ 了,因为用我们的新方法问题可以很简单地解决.

如此,将方程 $F = 0$ 两边取全微分,然后得出下面这个 $d{q}_{n}$ 的表达式:

$$
d{q}_{n} =  - \frac{{q}_{n}^{2}}{{l}_{n}{J}_{n}}\left\{  {\frac{{l}_{1}{J}_{1}}{{q}_{1}^{2}}d{q}_{1} + \cdots  + \frac{{l}_{n - 1}{J}_{n - 1}}{{q}_{n - 1}^{2}}d{q}_{n - 1}}\right\}  .
$$

---

①如果记得这个函数的作用,则可明白这里 $\Phi$ 中常数项无妨省略.

---

代入等式 ${df} = {l}_{1}d{q}_{1} + {l}_{2}d{q}_{2} + \cdots  + {l}_{n - 1}d{q}_{n - 1} + {l}_{n}d{q}_{n} = 0$ 得出这结果:

$$
\left( {{l}_{1} - \frac{{q}_{n}^{2}}{{J}_{n}} \cdot  \frac{{l}_{1}{J}_{1}}{{q}_{1}^{2}}}\right) d{q}_{1} + \cdots  + \left( {{l}_{n - 1} - \frac{{q}_{n}^{2}}{{J}_{n}} \cdot  \frac{{l}_{n - 1}{J}_{n - 1}}{{q}_{n - 1}^{2}}}\right) d{q}_{n - 1} = 0.
$$

因为 $d{q}_{1},\cdots , d{q}_{n - 1}$ 已经是任意的,则它们各自的系数都等于 0 . 由此得

$$
\frac{{q}_{1}^{2}}{{J}_{1}} = \frac{{q}_{2}^{2}}{{J}_{2}} = \cdots  = \frac{{q}_{n - 1}^{2}}{{J}_{n - 1}} = \frac{{q}_{n}^{2}}{{J}_{n}} = {\lambda }^{2},
$$

并且

$$
{q}_{1} = \lambda \sqrt{{J}_{1}},\;{q}_{2} = \lambda \sqrt{{J}_{2}},\;\cdots ,\;{q}_{n} = \lambda \sqrt{{J}_{n}}. \tag{12}
$$

比例乘数 $\lambda$ 不难由约束方程决定:

$$
\lambda  = \frac{\rho }{e} \cdot  \mathop{\sum }\limits_{{i = 1}}^{n}{l}_{i}\sqrt{{J}_{i}}.
$$

如果应用拉格朗日方法, 则须作辅助函数 ${}^{\text{①}}$

$$
\Phi \left( {{q}_{1},{q}_{2},\cdots ,{q}_{n}}\right)  = {l}_{1}{q}_{1} + \cdots  + {l}_{n}{q}_{n} + {\lambda }^{2}\left( {\frac{{l}_{1}{J}_{1}}{{q}_{1}} + \cdots  + \frac{{l}_{n}{J}_{n}}{{q}_{n}}}\right)
$$

并令其导数等于 0 :

$$
\frac{\partial \Phi }{\partial {q}_{1}} = {l}_{1} - \frac{{\lambda }^{2}{l}_{1}{J}_{1}}{{q}_{1}^{2}} = 0,\;\cdots ,\;\frac{\partial \Phi }{\partial {q}_{n}} = {l}_{n} - \frac{{\lambda }^{2}{l}_{n}{J}_{n}}{{q}_{n}^{2}} = 0,
$$

由此重新得出 (12), 如此等等.

3) 作为一个较复杂的例子我们来考虑这个问题: 三轴椭圆面 $\frac{{x}^{2}}{{a}^{2}} + \frac{{y}^{2}}{{b}^{2}} + \frac{{z}^{2}}{{c}^{2}} = 1\left( {a > b > c}\right)$ 被一个通过其中心的平面 ${lx} + {my} + {nz} = 0$ 所截; 要确定所得椭圆截口的半轴. 换句话说,要来找函数 ${r}^{2} = {x}^{2} + {y}^{2} + {z}^{2}$ 的极值,这里诸变量间有上面那两个关系方程.

消去因变量的微分的方法 [319 段] 在此会引起复杂的计算; 所以我们即运用拉格朗日方法.

为了证实矩阵

$$
\left( \begin{matrix} \frac{x}{{a}^{2}} & \frac{y}{{b}^{2}} & \frac{z}{{c}^{2}} \\  l & m & n \end{matrix}\right)
$$

的秩在椭圆面与平面的所有交点上都等于 ${2}^{\text{② }}$ ,我们用反证法. 设二阶行列式全等于 0,因此上下两行元素将成比例; 但这样等式 ${lx} + {my} + {nz} = 0$ 势必导出 $\frac{{x}^{2}}{{a}^{2}} + \frac{{y}^{2}}{{b}^{2}} + \frac{{z}^{2}}{{c}^{2}} = 1$ ,这是不可能的.

作辅助函数

$$
\Phi \left( {x, y, z}\right)  = {x}^{2} + {y}^{2} + {z}^{2} + \lambda \left( {\frac{{x}^{2}}{{a}^{2}} + \frac{{y}^{2}}{{b}^{2}} + \frac{{z}^{2}}{{c}^{2}}}\right)  + {2\mu }\left( {{lx} + {my} + {nz}}\right) ,
$$

令其导数等于 0 :

$$
x + \lambda \frac{x}{{a}^{2}} + {\mu l} = 0,\;y + \lambda \frac{y}{{b}^{2}} + {\mu m} = 0,\;z + \lambda \frac{z}{{c}^{2}} + {\mu n} = 0. \tag{13}
$$

将这些方程分别乘以 $x, y, z$ 而加起来,得 (考虑到约束方程) $\lambda  =  - {r}^{2}$ .

---

① “不定乘数” 我们为方便计取成 $\overline{{\lambda }^{2}}$ 形式,常数 $\rho$ 包含在内.

② 参看 320 段附注.

---

如果为确定起见设 $l, m, n$ 没有等于 0 的,则由 (13) 可看出 $r$ 不等于 $a$ 或 $b$ 或 $c$ . 于是方程 (13) 可写成这样:

$$
x =  - \mu \frac{l{a}^{2}}{{a}^{2} - {r}^{2}},\;y =  - \mu \frac{m{b}^{2}}{{b}^{2} - {r}^{2}},\;z =  - \mu \frac{n{c}^{2}}{{c}^{2} - {r}^{2}}.
$$

由此不难找出 $\mu$ 并从而得出 $x, y, z$ ; 但也可以避免这样做,而把这些等式预先分别乘以 $l, m, n$ 然后加起来, 如此得出方程

$$
\frac{{l}^{2}{a}^{2}}{{a}^{2} - {r}^{2}} + \frac{{m}^{2}{b}^{2}}{{b}^{2} - {r}^{2}} + \frac{{n}^{2}{c}^{2}}{{c}^{2} - {r}^{2}} = 0,
$$

由此可直接定出两个我们所要的 ${r}^{2}$ 的极值.

因为这些极值的存在是预先知道的, 如此本问题完全解决了.

322. 函数独立性概念 我们来考虑一组函数

$$
\left. \begin{array}{l} {y}_{1} = {f}_{1}\left( {{x}_{1},{x}_{2},\cdots ,{x}_{n}}\right) , \\  {y}_{2} = {f}_{2}\left( {{x}_{1},{x}_{2},\cdots ,{x}_{n}}\right) , \\  \cdots \cdots \cdots \cdots \\  {y}_{m} = {f}_{m}\left( {{x}_{1},{x}_{2},\cdots ,{x}_{n}}\right) , \end{array}\right\}   \tag{14}
$$

在某 $n$ 维开区域 $\mathcal{D}$ 内连同其偏导函数都有定义并且连续. 可能其中有一个,例如 ${y}_{j}$ , 是其余的函数①:

$$
{y}_{j} = \Phi {\left( {y}_{1},\cdots ,{y}_{j - 1},{y}_{j + 1},\cdots ,{y}_{m}\right) }^{\text{①}}, \tag{15}
$$

这里 $\Phi$ 也假设在一个(m - 1)维区域 $\mathcal{E}$ 内是所有自变量的连续函数并有连续偏导函数; 该区域则包含当 $n$ 维点 $\left( {{x}_{1},{x}_{2},\cdots ,{x}_{n}}\right)$ 遍历区域 $\mathcal{D}$ 时这些函数所取的一切可能值组 ${y}_{1},\cdots ,{y}_{j - 1},{y}_{j + 1},\cdots ,{y}_{m}$ . 此时我们理解等式 (15) 在区域 $\mathcal{D}$ 内对 ${x}_{1},{x}_{2},\cdots ,{x}_{n}$ 恒等地成立. 于是称在这区域内函数 ${y}_{j}$ 依赖于其余函数. 特别地,如果 ${y}_{j}$ 是常数时也称其为如此; 在这情形可令 $\Phi  =$ 常数.

一般地说,函数 ${y}_{1},{y}_{2},\cdots ,{y}_{m}$ ,如果有一个 (随便哪个都一样) 依赖其余,则称为在区域 $\mathcal{D}$ 内相依.

如果在区域 $\mathcal{D}$ 内或其任何部分内像 (15) 那样的恒等式都不成立,则函数 ${y}_{1}$ , ${y}_{2},\cdots ,{y}_{m}$ 称为在区域 $\mathcal{D}$ 内独立.

要解答函数独立性问题可考虑所谓函数矩阵, 它是由这些函数对所有自变量的偏导函数所组成的:

$$
\left( \begin{matrix} \frac{\partial {y}_{1}}{\partial {x}_{1}} & \frac{\partial {y}_{1}}{\partial {x}_{2}} & \cdots & \frac{\partial {y}_{1}}{\partial {x}_{n}} \\  \frac{\partial {y}_{2}}{\partial {x}_{1}} & \frac{\partial {y}_{2}}{\partial {x}_{2}} & \cdots & \frac{\partial {y}_{2}}{\partial {x}_{n}} \\  \vdots & \vdots & & \vdots \\  \frac{\partial {y}_{m}}{\partial {x}_{1}} & \frac{\partial {y}_{m}}{\partial {x}_{2}} & \cdots & \frac{\partial {y}_{m}}{\partial {x}_{n}} \end{matrix}\right) . \tag{16}
$$

---

①要紧的是,函数 $\Phi$ 的直接自变量中不包含 $x$ .

---

设 $n \geq  m$ ,我们首先有这样一个定理:

定理 1 如果由矩阵 (16) 的元素所组成的 $m$ 阶行列式中至少有一个在区域 $\mathcal{D}$ 内不等于 0,则在此区域内函数 ${y}_{1},{y}_{2},\cdots ,{y}_{m}$ 独立.

证明 设

$$
\left| \begin{matrix} \frac{\partial {y}_{1}}{\partial {x}_{1}} & \frac{\partial {y}_{1}}{\partial {x}_{2}} & \ldots & \frac{\partial {y}_{1}}{\partial {x}_{m}} \\  \frac{\partial {y}_{2}}{\partial {x}_{1}} & \frac{\partial {y}_{2}}{\partial {x}_{2}} & \ldots & \frac{\partial {y}_{2}}{\partial {x}_{m}} \\  \vdots & \vdots & & \vdots \\  \frac{\partial {y}_{m}}{\partial {x}_{1}} & \frac{\partial {y}_{m}}{\partial {x}_{2}} & \ldots & \frac{\partial {y}_{m}}{\partial {x}_{m}} \end{matrix}\right|  \neq  0. \tag{17}
$$

如果不等于 0 的行列式不是这一个, 而是另外某一个, 则总可改编变量的下标而使其化为 (17) 的情形.

这定理我们用反证法来证明. 设诸函数中有一个,比如说 ${y}_{m}$ ,可由其余的表出, 如此

$$
{y}_{m} = \Phi \left( {{y}_{1},{y}_{2},\cdots ,{y}_{m - 1}}\right) , \tag{18}
$$

至少是在区域 $\mathcal{D}$ 的某一部分 ${\mathcal{D}}_{0}$ 里.

依每一变量 ${x}_{i}\left( {i = 1,2,\cdots , m}\right)$ 求导这个恒等式我们得一系列恒等式 (在 ${\mathcal{D}}_{0}$ 内) 如下

$$
\frac{\partial {y}_{m}}{\partial {x}_{i}} = \frac{\partial {y}_{m}}{\partial {y}_{1}} \cdot  \frac{\partial {y}_{1}}{\partial {x}_{i}} + \frac{\partial {y}_{m}}{\partial {y}_{2}} \cdot  \frac{\partial {y}_{2}}{\partial {x}_{i}} + \cdots  + \frac{\partial {y}_{m}}{\partial {y}_{m - 1}} \cdot  \frac{\partial {y}_{m - 1}}{\partial {x}_{i}}\;\left( {i = 1,2,\cdots , m}\right) .
$$

可见,行列式 (17) 最末一行诸元素可由前 $m - 1$ 行相应元素各乘以 $\frac{\partial {y}_{m}}{\partial {y}_{1}},\cdots$ , $\frac{\partial {y}_{m}}{\partial {y}_{m - 1}}$ 后相加得之. 大家知道这种行列式是等于 0 的. 这违反了定理的条件,故证明等式 (18) 是不可能的.

323. 函数矩阵的秩 至于一般情形, 我们先给出如下定义. 所谓函数矩阵 (16) 的秩是指其中最高阶的在区域 $\mathcal{D}$ 内不恒等于 0 的行列式的阶数而言. 当然也可以有矩阵 (16) 的所有元素都恒等于 0 的时候 (此时说该矩阵的秩是 0 ), 但这情形不值得注意, 因为这里干脆所有函数

$$
{y}_{1},{y}_{2},\cdots ,{y}_{m}
$$

都成常数. 如果矩阵 (16) 的秩是 $\mu  \geq  1$ ,则至少存在一个由该矩阵的元素所组成的 $\mu$ 阶行列式 (当然有 $m \geq  \mu , n \geq  \mu$ ) 并且在 $\mathcal{D}$ 内不恒等于 0,而所有较高阶的行列式 (如果有的话) 则恒等于 0 . 如果所说 $\mu$ 阶行列式在点 ${P}_{0}$ 异于 0,则我们说该矩阵在点 ${P}_{0}$ 达到它的秩 $\mu$ .