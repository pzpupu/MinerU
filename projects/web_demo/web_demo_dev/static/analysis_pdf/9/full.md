特征方程是

$$
{q}^{k} = {C}_{k}^{k - 1}\alpha {q}^{k - 1} - {C}_{k}^{k - 2}{\alpha }^{2}{q}^{k - 2} + \cdots  + {\left( -1\right) }^{k - 1}{C}_{k}^{0}{\alpha }^{k}. \tag{71}
$$

它可以写成

$$
{\left( q - \alpha \right) }^{k} = 0.
$$

可见 $\alpha$ 是特征方程 (71) 的 $k$ 重根: $q = \alpha$ .

可以验证 (具体验证过程这里略去),下面的 $k$ 个数列中的任何一个都满足递归公式(70):

$$
\left\{  \begin{array}{l} 1,\alpha ,{\alpha }^{2},\cdots ,{\alpha }^{n - 1},\cdots \\  0,\alpha ,2{\alpha }^{2},\cdots ,\left( {n - 1}\right) {\alpha }^{n - 1},\cdots \\  0,\alpha ,{2}^{2}{\alpha }^{2},\cdots ,{\left( n - 1\right) }^{2}{\alpha }^{n - 1},\cdots \\  \cdots \cdots \cdots \cdots \cdots \cdots \cdots \cdots \\  0,\alpha ,{2}^{k - 1}{\alpha }^{2},\cdots ,{\left( n - 1\right) }^{k - 1}{\alpha }^{n - 1},\cdots  \end{array}\right.  \tag{72}
$$

其中 $\alpha$ 是特征方程 (71) 的 $k$ 重根.

而且可以证明 (证明过程这里也予略去), 满足递归方程 (70)的数列, 它的通项

$$
f\left( n\right)  = \left\lbrack  {{B}_{0} + {B}_{1}\left( {n - 1}\right)  + \cdots  + {B}_{k - 1}{\left( n - 1\right) }^{k - 1}}\right\rbrack  {\alpha }^{n - 1}, \tag{73}
$$

其中 ${B}_{0},{B}_{1},\cdots ,{B}_{k - 1}$ 满足方程组

$$
\left\{  \begin{array}{l} {B}_{0} = f\left( 1\right) , \\  \left( {{B}_{0} + {B}_{1} + \cdots  + {B}_{k - 1}}\right) \alpha  = f\left( 2\right) , \\  \cdots \cdots \cdots \cdots \cdots \cdots \cdots \cdots \\  \left\lbrack  {{B}_{0} + {B}_{1}\left( {k - 1}\right)  + \cdots  + {B}_{k - 1}{\left( k - 1\right) }^{k - 1}}\right\rbrack  {\alpha }^{k - 1} - f\left( k\right) . \end{array}\right.  \tag{74}
$$

因此,要求 $f\left( n\right)$ ,只要由特征方程求出重根 $\alpha$ ,再由方程组 (74) 求出 ${B}_{0},{B}_{1},\cdots ,{B}_{k - 1}$ ,最后代入 (73) 就可以了.

[例 18] 求自然数列前 $n$ 项的平方和:

$$
f\left( n\right)  = {1}^{2} + {2}^{2} + \cdots  + {n}^{2}. \tag{75}
$$

解 显然有函数方程

$$
f\left( {n + 1}\right)  = f\left( n\right)  + {\left( n + 1\right) }^{2}\ldots  \tag{76}
$$

把上边的递推形式化为递归形式:

$$
f\left( {n + 4}\right)  = {4f}\left( {n + 3}\right)  - {6f}\left( {n + 2}\right)  + {4f}\left( {n + 1}\right)  - f\left( n\right) . \tag{77}
$$

对应的特征方程是

$$
{q}^{4} = 4{q}^{3} - 6{q}^{2} + {4q} - 1
$$

即

$$
{\left( q - 1\right) }^{4} = 0.
$$

这个方程有 4 重根 $q = \alpha  = 1$ .

根据方程组 (74) 得

$$
\left\{  \begin{array}{l} {B}_{0} = f\left( 1\right)  = {1}^{2} = 1, \\  {B}_{0} + {B}_{1} + {B}_{2} + {B}_{3} = f\left( 2\right)  = {1}^{2} + {2}^{2} = 5, \\  {B}_{0} + 2{B}_{1} + 4{B}_{2} + 8{B}_{3} = f\left( 3\right)  = {1}^{2} + {2}^{2} + {3}^{2} = {14}, \\  {B}_{0} + 3{B}_{1} + 9{B}_{2} + {27}{B}_{3} = f\left( 4\right)  = {1}^{2} + {2}^{2} + {3}^{2} + {4}^{2} = {30}. \end{array}\right.
$$

由这个方程组解出:

$$
{B}_{0} = 1,\;{B}_{1} = \frac{13}{6},\;{B}_{2} = \frac{3}{2},\;{B}_{3} = \frac{1}{3}.
$$

代入 (73),并注意 $a = 1$ ,即得

$$
f\left( n\right)  = 1 + \frac{13}{6}\left( {n - 1}\right)  + \frac{3}{2}{\left( n - 1\right) }^{2} + \frac{1}{3}{\left( n - 1\right) }^{3}
$$

$$
= \frac{n\left( {n + 1}\right) \left( {{2n} + 1}\right) }{6}\text{. }
$$

练习 8 已知 $f\left( 1\right)  = 0, f\left( 2\right)  = 1$ . 解函数方程

$$
f\left( {n + 2}\right)  = f\left( {n + 1}\right)  + {2f}\left( n\right) .
$$

练习 9 解练习 5 所给的函数方程:

$$
{a}^{2}f\left( {n + 2}\right)  = {b}^{2}f\left( n\right) ,
$$

已知 $f\left( 1\right)  = 0, f\left( 2\right)  = 1$ .

练习 10 设 $f\left( 0\right)  = 2, f\left( 1\right)  = 3$ ,且

$$
f\left( {n + 2}\right)  = {3f}\left( {n + 1}\right)  - {2f}\left( n\right) .
$$

求证: $f\left( n\right)  = {2}^{n} + 1$ .

练习 11 已知数列满足条件

$$
{a}_{k} = 3{a}_{k - 1} + {2}^{k - 1}, k \geq  2,{a}_{1} = 1.
$$

求数列的通项公式.

练习 12 求前 $n$ 个自然数的立方和:

$$
f\left( n\right)  = {1}^{2} + {2}^{3} + {3}^{3} + \cdots  + {n}^{3}.
$$

## 4. 函数方程的柯西解法

在函数方程的发展史上, 许多函数方程的建立和解法都是由柯西①首先提出的. 本节我们就来研究函数方程的柯西解法.

在前几节讨论的函数方程中, 所涉及的函数大多数是自然数的函数. 而本节中的函数, 它的定义域都是在某一区间上的实数.

柯西解法的步骤是: 依次求出对于自变量的所有自然数值、整数值、有理数值, 直至所有实数值的函数方程的解.

如所周知, 一个函数方程的解往往并不是唯一的. 也就是说, 可能存在着不同的函数, 满足同一个函数方程. 为了保证函数方程的解的唯一性,通常需要给所求的函数附加一些条件, 例如要求所求的函数必须是连续的, 或者必须是单调的. 在本节里, 要求函数方程的解都必须是单调函数.

什么是单调函数呢? 如果对于较大的自变量的值, 函数值也较大; 即当 ${x}_{2} > {x}_{1}$ 时,有 $f\left( {x}_{2}\right)  > f\left( {x}_{1}\right)$ ,就说函数 $f\left( x\right)$ 单调增加. 如果对于较大的自变量的值, 函数值反而较小; 即当 ${x}_{2} > {x}_{1}$ 时,有 $f\left( {x}_{2}\right)  < f\left( {x}_{1}\right)$ ,就说函数 $f\left( x\right)$ 单调减小. 单调增加和单调减小的函数, 统称单调函数.

在后面的讨论中, 我们还要用到区间套原理. 这个原理是这样的:

设有一个区间序列:

$$
\left\lbrack  {{\alpha }_{1},{\beta }_{1}}\right\rbrack  ,\left\lbrack  {{\alpha }_{2},{\beta }_{2}}\right\rbrack  ,\left\lbrack  {{\alpha }_{3},{\beta }_{3}}\right\rbrack  ,\cdots ,\left\lbrack  {{\alpha }_{n},{\beta }_{n}}\right\rbrack  ,\cdots , \tag{78}
$$

其中每个区间都包含着后一个区间:

$$
\left\lbrack  {{\alpha }_{i},{\beta }_{i}}\right\rbrack   \supset  \left\lbrack  {{\alpha }_{i + 1},{\beta }_{i + 1}}\right\rbrack  ,\left( {i = 1,2,3,\cdots }\right)
$$

---

① 柯西 (1789 2017), 法国数学家。

---

(其中 $\supset$ 是集的包含符号) 形成一个“区间套”,而且区间长度可以任意地小 (就是说, 不论我们事先给定一个多么小的正数 $\varepsilon$ ,序列 (78) 中总存在这样一个区间,从此以后所有的区间的长度都小于 $\varepsilon$ ). 那末,必定存在着唯一的一个点 $\xi$ ,被所有 (无穷多) 这些区间所包含.

特别是当 $\xi$ 是无理数时,如果把 ${\alpha }_{n}$ 和 ${\beta }_{n}$ 取作 $\xi$ 的精确到 ${10}^{-n}$ 的不足近似值和过剩近似值. 那末以 $\xi$ 的不足近似值和过剩近似值为端点, 将构成一个区间套. 相应的区间的长度是 ${10}^{-n}$ . 例如,我们知道,圆周率 $x$ 是一个无理数:

$$
\pi  = {3.141592653589793}\cdots \text{.}
$$

于是, 可以构成区间套

$$
\left\lbrack  {{3.1},{3.2}}\right\rbrack   \supset  \left\lbrack  {{3.14},{3.15}}\right\rbrack   \supset  \left\lbrack  {{3.141},{3.142}}\right\rbrack   \supset  \cdots .
$$

区间的长度依次是 ${3.2} - {3.1} = {10}^{-1},{3.15} - {3.14} = {10}^{-2}$ , ${3.142} - {3.141} = {10}^{-3},\cdots$ . 我们注意到,每个区间的端点 ${\alpha }_{n}$ 和 ${\beta }_{2}$ 都是有理数,而只有唯一的一个无理数 $\alpha  - \pi$ 被包含在所有这些区间之内.

有了这些准备之后, 我们转入函数方程的柯西解法的讨论.

[例 19] 解函数方程

$$
f\left( {x + y}\right)  = f\left( x\right)  + f\left( y\right) . \tag{79}
$$

解 由函数方程(79)容易推得(用数学归纳法):

$$
f\left( {{x}_{1} + {x}_{2} + \cdots  + {x}_{n}}\right)  = f\left( {x}_{1}\right)  + f\left( {x}_{2}\right)  + \cdots  + f\left( {x}_{n}\right) . \tag{80}
$$

在 (80) 中如果令 ${x}_{1} = {x}_{2} = \cdots  = {x}_{n} = x$ ,就得到

$$
f\left( {nx}\right)  = {nf}\left( x\right) .
$$