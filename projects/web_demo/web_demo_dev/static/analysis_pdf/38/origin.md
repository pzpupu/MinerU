## 微分中值定理与导数的应用

## 习题 3-1

5 1. 验证罗尔定理对函数 $y = \ln \sin x$ 在区间 $\left\lbrack  {\frac{\pi }{6},\frac{5\pi }{6}}\right\rbrack$ 上的正确性.

证 函数 $f\left( x\right)  = \ln \sin x$ 在 $\left\lbrack  {\frac{\pi }{6},\frac{5\pi }{6}}\right\rbrack$ 上连续,在 $\left( {\frac{\pi }{6},\frac{5\pi }{6}}\right)$ 内可导,又

$$
f\left( \frac{\pi }{6}\right)  = \ln \sin \frac{\pi }{6} = \ln \frac{1}{2},\;f\left( \frac{5\pi }{6}\right)  = \ln \sin \frac{5\pi }{6} = \ln \frac{1}{2},
$$

即 $f\left( \frac{\pi }{6}\right)  = f\left( {\frac{5}{6}\pi }\right)$ ,故 $f\left( x\right)$ 在 $\left\lbrack  {\frac{\pi }{6},\frac{5\pi }{6}}\right\rbrack$ 上满足罗尔定理条件,由罗尔定理知至少存在一点 $\xi  \in  \left( {\frac{\pi }{6},\frac{5\pi }{6}}\right)$ ,使 ${f}^{\prime }\left( \xi \right)  = 0$ . 又, ${f}^{\prime }\left( x\right)  = \frac{\cos x}{\sin x} = \cot x$ ,令 ${f}^{\prime }\left( x\right)  = 0$ 得 $x = {n\pi } + \frac{\pi }{2}$ $\left( {n = 0, \pm  1, \pm  2,\cdots }\right)$ . 取 $n = 0$ ,得 $\xi  = \frac{\pi }{2} \in  \left( {\frac{\pi }{6},\frac{5\pi }{6}}\right)$ . 因此罗尔定理对函数 $y = \ln \sin x$ 在区间 $\left\lbrack  {\frac{\pi }{6},\frac{5\pi }{6}}\right\rbrack$ 上是正确的.

2. 验证拉格朗日中值定理对函数 $y = 4{x}^{3} - 5{x}^{2} + x - 2$ 在区间 $\left\lbrack  {0,1}\right\rbrack$ 上的正确性.

证 函数 $f\left( x\right)  = 4{x}^{3} - 5{x}^{2} + x - 2$ 在区间 $\left\lbrack  {0,1}\right\rbrack$ 上连续,在(0,1)内可导,故 $f\left( x\right)$ 在 $\left\lbrack  {0,1}\right\rbrack$ 上满足拉格朗日中值定理条件,从而至少存在一点 $\xi  \in  \left( {0,1}\right)$ ,使

$$
{f}^{\prime }\left( \xi \right)  = \frac{f\left( 1\right)  - f\left( 0\right) }{1 - 0} = \frac{-2 - \left( {-2}\right) }{1} = 0.
$$

又,由 ${f}^{\prime }\left( \xi \right)  = {12}{\xi }^{2} - {10\xi } + 1 = 0$ 可知 $\xi  = \frac{5 \pm  \sqrt{13}}{12} \in  \left( {0,1}\right)$ ,因此拉格朗日中值定理对函数 $y = 4{x}^{3} - 5{x}^{2} + x - 2$ 在区间 $\left\lbrack  {0,1}\right\rbrack$ 上是正确的.

3. 对函数 $f\left( x\right)  = \sin x$ 及 $F\left( x\right)  = x + \cos x$ 在区间 $\left\lbrack  {0,\frac{\pi }{2}}\right\rbrack$ 上验证柯西中值定理的正确性.

证 函数 $f\left( x\right)  = \sin x, F\left( x\right)  = x + \cos x$ 在区间 $\left\lbrack  {0,\frac{\pi }{2}}\right\rbrack$ 上连续,在 $\left( {0,\frac{\pi }{2}}\right)$ 内可导, 且在 $\left( {0,\frac{\pi }{2}}\right)$ 内, ${F}^{\prime }\left( x\right)  = 1 - \sin x \neq  0$ ,故 $f\left( x\right) \text{、}F\left( x\right)$ 满足柯西中值定理条件,从而至少存在一点 $\xi  \in  \left( {0,\frac{\pi }{2}}\right)$ ,使

$$
\frac{f\left( \frac{\pi }{2}\right)  - f\left( 0\right) }{F\left( \frac{\pi }{2}\right)  - F\left( 0\right) } = \frac{{f}^{\prime }\left( \xi \right) }{{F}^{\prime }\left( \xi \right) }.
$$

由

$$
\frac{1 - 0}{\frac{\pi }{2} - 1} = \frac{\cos \xi }{1 - \sin \xi }
$$

即 $\frac{\cos \frac{\xi }{2} + \sin \frac{\xi }{2}}{\cos \frac{\xi }{2} - \sin \frac{\xi }{2}} = \frac{2}{\pi  - 2}$ ,可得 $\tan \frac{\xi }{2} = \frac{4 - \pi }{\pi }$ . 所以, $\xi  = {2n\pi } + 2\arctan \frac{4 - \pi }{\pi }$ . 由题设, 取 $n = 0$ ,得 ${\xi }_{0} = 2\arctan \frac{4 - \pi }{\pi }$ . 因 $0 < \frac{4 - \pi }{\pi } < 1$ ,故 ${\xi }_{0} = 2\arctan \left( \frac{4 - \pi }{\pi }\right)  \in  \left( {0,\frac{\pi }{2}}\right)$ . 因此,柯西中值定理对 $f\left( x\right)  = \sin x, F\left( x\right)  = x + \cos x$ 在区间 $\left\lbrack  {0,\frac{\pi }{2}}\right\rbrack$ 上是正确的.

24. 试证明对函数 $y = p{x}^{2} + {qx} + r$ 应用拉格朗日中值定理时所求得的点 $\xi$ 总是位于区间的正中间.

证 任取数值 $a, b$ ,不妨设 $a < b$ ,函数 $f\left( x\right)  = p{x}^{2} + {qx} + r$ 在区间 $\left\lbrack  {a, b}\right\rbrack$ 上连续, 在(a, b)内可导,故由拉格朗日中值定理知至少存在一点 $\xi  \in  \left( {a, b}\right)$ ,使

$$
f\left( b\right)  - f\left( a\right)  = {f}^{\prime }\left( \xi \right) \left( {b - a}\right) ,
$$

即 $p{b}^{2} + {qb} + r - p{a}^{2} - {qa} - r = \left( {{2p\xi } + q}\right) \left( {b - a}\right)$ . 经整理得 $\xi  = \frac{a + b}{2}$ ,即所求得的 $\xi$ 总是位于区间的正中间.

25. 不用求出函数 $f\left( x\right)  = \left( {x - 1}\right) \left( {x - 2}\right) \left( {x - 3}\right) \left( {x - 4}\right)$ 的导数,说明方程 ${f}^{\prime }\left( x\right)  = 0$ 有几个实根,并指出它们所在的区间.

解 函数 $f\left( x\right)$ 分别在 $\left\lbrack  {1,2}\right\rbrack  ,\left\lbrack  {2,3}\right\rbrack  ,\left\lbrack  {3,4}\right\rbrack$ 上连续,分别在 $\left( {1,2}\right) ,\left( {2,3}\right) ,\left( {3,4}\right)$ 内可导,且 $f\left( 1\right)  = f\left( 2\right)  = f\left( 3\right)  = f\left( 4\right)  = 0$ . 由罗尔定理知至少存在 ${\xi }_{1} \in  \left( {1,2}\right) ,{\xi }_{2} \in  \left( {2,3}\right)$ , ${\xi }_{3} \in  \left( {3,4}\right)$ ,使

$$
{f}^{\prime }\left( {\xi }_{1}\right)  = {f}^{\prime }\left( {\xi }_{2}\right)  = {f}^{\prime }\left( {\xi }_{3}\right)  = 0.
$$

即方程 ${f}^{\prime }\left( x\right)  = 0$ 至少有三个实根,又方程 ${f}^{\prime }\left( x\right)  = 0$ 为三次方程,故它至多有三个实根,因此方程 ${f}^{\prime }\left( x\right)  = 0$ 有且仅有三个实根,它们分别位于区间 $\left( {1,2}\right) ,\left( {2,3}\right) ,\left( {3,4}\right)$ 内.

26. 证明恒等式: $\arcsin x + \arccos x = \frac{\pi }{2}\left( {-1 \leq  x \leq  1}\right)$ .

证 取函数 $f\left( x\right)  = \arcsin x + \arccos x, x \in  \left\lbrack  {-1,1}\right\rbrack$ . 因

$$
{f}^{\prime }\left( x\right)  = \frac{1}{\sqrt{1 - {x}^{2}}} - \frac{1}{\sqrt{1 - {x}^{2}}} \equiv  0,
$$

故 $f\left( x\right)  \equiv  C$ . 取 $x = 0$ ,得 $f\left( 0\right)  = C = \frac{\pi }{2}$ . 因此

$$
\arcsin x + \arccos x = \frac{\pi }{2},\;x \in  \left\lbrack  {-1,1}\right\rbrack  .
$$

257. 若方程 ${a}_{0}{x}^{n} + {a}_{1}{x}^{n - 1} + \cdots  + {a}_{n - 1}x = 0$ 有一个正根 $x = {x}_{0}$ ,证明方程 ${a}_{0}n{x}^{n - 1} + {a}_{1}$ $\left( {n - 1}\right) {x}^{n - 2} + \cdots  + {a}_{n - 1} = 0$ 必有一个小于 ${x}_{0}$ 的正根.

证 取函数 $f\left( x\right)  = {a}_{0}{x}^{n} + {a}_{1}{x}^{n - 1} + \cdots  + {a}_{n - 1}x.f\left( x\right)$ 在 $\left\lbrack  {0,{x}_{0}}\right\rbrack$ 上连续,在 $\left( {0,{x}_{0}}\right)$ 内可导,且 $f\left( 0\right)  = f\left( {x}_{0}\right)  = 0$ ,由罗尔定理知至少存在一点 $\xi  \in  \left( {0,{x}_{0}}\right)$ ,使 ${f}^{\prime }\left( \xi \right)  = 0$ ,即方程 ${a}_{0}n{x}^{n - 1} + {a}_{1}\left( {n - 1}\right) {x}^{n - 2} + \cdots  + {a}_{n - 1} = 0$ 必有一个小于 ${x}_{0}$ 的正根.

8. 若函数 $f\left( x\right)$ 在(a, b)内具有二阶导数,且 $f\left( {x}_{1}\right)  = f\left( {x}_{2}\right)  = f\left( {x}_{3}\right)$ ,其中 $a < {x}_{1} < {x}_{2} < {x}_{3} < b$ . 证明: 在 $\left( {{x}_{1},{x}_{3}}\right)$ 内至少有一点 $\xi$ ,使得 ${f}^{\prime \prime }\left( \xi \right)  = 0$ .

证 根据题意知函数 $f\left( x\right)$ 在 $\left\lbrack  {{x}_{1},{x}_{2}}\right\rbrack  ,\left\lbrack  {{x}_{2},{x}_{3}}\right\rbrack$ 上连续,在 $\left( {{x}_{1},{x}_{2}}\right) ,\left( {{x}_{2},{x}_{3}}\right)$ 内可导且 $f\left( {x}_{1}\right)  = f\left( {x}_{2}\right)  = f\left( {x}_{3}\right)$ ,故由罗尔定理知至少存在点 ${\xi }_{1} \in  \left( {{x}_{1},{x}_{2}}\right) ,{\xi }_{2} \in  \left( {{x}_{2},{x}_{3}}\right)$ ,使 ${f}^{\prime }\left( {\xi }_{1}\right)  = {f}^{\prime }\left( {\xi }_{2}\right)  = 0.$

又 ${f}^{\prime }\left( x\right)$ 在 $\left\lbrack  {{\xi }_{1},{\xi }_{2}}\right\rbrack$ 上连续,在 $\left( {{\xi }_{1},{\xi }_{2}}\right)$ 内可导,故由罗尔定理知至少存在点 $\xi  \in  \left( {{\xi }_{1},{\xi }_{2}}\right)  \subset  \left( {{x}_{1},{x}_{3}}\right)$ 使 ${f}^{\prime \prime }\left( \xi \right)  = 0$ .

2. 9. 设 $a > b > 0, n > 1$ ,证明:

$$
n{b}^{n - 1}\left( {a - b}\right)  < {a}^{n} - {b}^{n} < n{a}^{n - 1}\left( {a - b}\right) .
$$

证 取函数 $f\left( x\right)  = {x}^{n}, f\left( x\right)$ 在 $\left\lbrack  {b, a}\right\rbrack$ 上连续,在(b, a)内可导,由拉格朗日中值定理知,至少存在一点 $\xi  \in  \left( {b, a}\right)$ ,使

$$
f\left( a\right)  - f\left( b\right)  = {f}^{\prime }\left( \xi \right) \left( {a - b}\right) ,
$$

即 ${a}^{n} - {b}^{n} = n{\xi }^{n - 1}\left( {a - b}\right)$ . 又 $0 < b < \xi  < a, n > 1$ ,故

$$
0 < {b}^{n - 1} < {\xi }^{n - 1} < {a}^{n - 1}.
$$

因此

$$
n{b}^{n - 1}\left( {a - b}\right)  < n{\xi }^{n - 1}\left( {a - b}\right)  < n{a}^{n - 1}\left( {a - b}\right) ,
$$

即 $n{b}^{n - 1}\left( {a - b}\right)  < {a}^{n} - {b}^{n} < n{a}^{n - 1}\left( {a - b}\right)$ .

250. 设 $a > b > 0$ ,证明:

$$
\frac{a - b}{a} < \ln \frac{a}{b} < \frac{a - b}{b}.
$$

证 取函数 $f\left( x\right)  = \ln x, f\left( x\right)$ 在 $\left\lbrack  {b, a}\right\rbrack$ 上连续,在(b, a)内可导,由拉格朗日中值定理知,至少存在一点 $\xi  \in  \left( {b, a}\right)$ ,使

$$
f\left( a\right)  - f\left( b\right)  = {f}^{\prime }\left( \xi \right) \left( {a - b}\right) ,
$$

即 $\ln a - \ln b = \frac{1}{\xi }\left( {a - b}\right)$ . 又, $0 < b < \xi  < a$ ,故 $0 < \frac{1}{a} < \frac{1}{\xi } < \frac{1}{b}$ ,因此

$$
\frac{a - b}{a} < \frac{a - b}{\xi } < \frac{a - b}{b},
$$

即 $\frac{a - b}{a} < \ln \frac{a}{b} < \frac{a - b}{b}$ .

211. 证明下列不等式:

(1) $\left| {\arctan a - \arctan b}\right|  \leq  \left| {a - b}\right|$ ;

(2)当 $x > 1$ 时, ${\mathrm{e}}^{x} > \mathrm{e} \cdot  x$ .

证 (1) 当 $a = b$ 时,显然成立. 当 $a \neq  b$ 时,取函数 $f\left( x\right)  = \arctan x, f\left( x\right)$ 在 $\left\lbrack  {a, b}\right\rbrack$ 或 $\left\lbrack  {b, a}\right\rbrack$ 上连续,在(a, b)或(b, a)内可导,由拉格朗日中值定理知,至少存在一点 $\xi  \in  \left( {a, b}\right)$ 或(b, a),使

$$
f\left( a\right)  - f\left( b\right)  = {f}^{\prime }\left( \xi \right) \left( {a - b}\right) ,
$$

即 $\arctan a - \arctan b = \frac{1}{1 + {\xi }^{2}}\left( {a - b}\right)$ ,故

$$
\left| {\arctan a - \arctan b}\right|  = \frac{1}{1 + {\xi }^{2}}\left| {a - b}\right|  \leq  \left| {a - b}\right| .
$$

(2)取函数 $f\left( t\right)  = {\mathrm{e}}^{t}, f\left( t\right)$ 在 $\left\lbrack  {1, x}\right\rbrack$ 上连续,在(1, x)内可导. 由拉格朗日中值定理知,至少存在一点 $\xi  \in  \left( {1, x}\right)$ ,使

$$
f\left( x\right)  - f\left( 1\right)  = {f}^{\prime }\left( \xi \right) \left( {x - 1}\right) ,
$$

即 ${\mathrm{e}}^{x} - \mathrm{e} = {\mathrm{e}}^{\xi }\left( {x - 1}\right)$ . 又, $1 < \xi  < x$ ,故 ${\mathrm{e}}^{\xi } > \mathrm{e}$ ,因此

$$
{\mathrm{e}}^{x} - \mathrm{e} > \mathrm{e}\left( {x - 1}\right) ,
$$

即 ${\mathrm{e}}^{x} > x \cdot  \mathrm{e}$ .

12. 12. 证明方程 ${x}^{5} + x - 1 = 0$ 只有一个正根.

证 取函数 $f\left( x\right)  = {x}^{5} + x - 1, f\left( x\right)$ 在 $\left\lbrack  {0,1}\right\rbrack$ 上连续,

$$
f\left( 0\right)  =  - 1 < 0,\;f\left( 1\right)  = 1 > 0,
$$

由零点定理知,至少存在点 ${x}_{1} \in  \left( {0,1}\right)$ ,使 $f\left( {x}_{1}\right)  = 0$ ,即方程 ${x}^{5} + x - 1 = 0$ 在(0,1)内至少有一个正根.

若方程 ${x}^{5} + x - 1 = 0$ 还有一个正根 ${x}_{2}$ ,即 $f\left( {x}_{2}\right)  = 0$ ,则由 $f\left( x\right)  = {x}^{5} + x - 1$ 在 $\left\lbrack  {{x}_{1},{x}_{2}}\right\rbrack  \left( {\text{或}\left\lbrack  {{x}_{2},{x}_{1}}\right\rbrack  }\right)$ 上连续,在 $\left( {{x}_{1},{x}_{2}}\right) \left( {\text{或}\left( {{x}_{2},{x}_{1}}\right) }\right)$ 内可导,知 $f\left( x\right)$ 满足罗尔定理条件,故至少存在点 $\xi  \in  \left( {{x}_{1},{x}_{2}}\right)$ (或 $\left. \left( {{x}_{2},{x}_{1}}\right) \right)$ ,使

$$
{f}^{\prime }\left( \xi \right)  = 0.
$$

但 ${f}^{\prime }\left( \xi \right)  = 5{\xi }^{4} + 1 > 0$ ,矛盾. 因此方程 ${x}^{5} + x - 1 = 0$ 只有一个正根.

23 13. 设 $f\left( x\right) , g\left( x\right)$ 在 $\left\lbrack  {a, b}\right\rbrack$ 上连续,在(a, b)内可导,证明在(a, b)内有一点 $\xi$ ,使

$$
\left| \begin{array}{ll} f\left( a\right) & f\left( b\right) \\  g\left( a\right) & g\left( b\right)  \end{array}\right|  = \left( {b - a}\right) \left| \begin{array}{ll} f\left( a\right) & {f}^{\prime }\left( \xi \right) \\  g\left( a\right) & {g}^{\prime }\left( \xi \right)  \end{array}\right| .
$$

证 取函数 $F\left( x\right)  = \left| \begin{array}{ll} f\left( a\right) & f\left( x\right) \\  g\left( a\right) & g\left( x\right)  \end{array}\right|$ ,由 $f\left( x\right) , g\left( x\right)$ 在 $\left\lbrack  {a, b}\right\rbrack$ 上连续,在(a, b)内可导知 $F\left( x\right)$ 在 $\left\lbrack  {a, b}\right\rbrack$ 上连续,在(a, b)内可导,由拉格朗日中值定理知,至少存在一点 $\xi  \in  \left( {a, b}\right)$ ,使 $F\left( b\right)  - F\left( a\right)  = {F}^{\prime }\left( \xi \right) \left( {b - a}\right)$ . 即

$$
F\left( b\right)  = \left| \begin{array}{ll} f\left( a\right) & f\left( b\right) \\  g\left( a\right) & g\left( b\right)  \end{array}\right| ,\;F\left( a\right)  = \left| \begin{array}{ll} f\left( a\right) & f\left( a\right) \\  g\left( a\right) & g\left( a\right)  \end{array}\right|  = 0,
$$

$$
{F}^{\prime }\left( x\right)  = \left| \begin{array}{ll} 0 & f\left( x\right) \\  0 & g\left( x\right)  \end{array}\right|  + \left| \begin{array}{ll} f\left( a\right) & {f}^{\prime }\left( x\right) \\  g\left( a\right) & {g}^{\prime }\left( x\right)  \end{array}\right|  = \left| \begin{array}{ll} f\left( a\right) & {f}^{\prime }\left( x\right) \\  g\left( a\right) & {g}^{\prime }\left( x\right)  \end{array}\right| ,
$$

故

$$
\left| \begin{array}{ll} f\left( a\right) & f\left( b\right) \\  g\left( a\right) & g\left( b\right)  \end{array}\right|  = \left| \begin{array}{ll} f\left( a\right) & {f}^{\prime }\left( \xi \right) \\  g\left( a\right) & {g}^{\prime }\left( \xi \right)  \end{array}\right| \left( {b - a}\right) .
$$

2a 14. 证明:若函数 $f\left( x\right)$ 在 $\left( {-\infty , + \infty }\right)$ 内满足关系式 ${f}^{\prime }\left( x\right)  = f\left( x\right)$ ,且 $f\left( 0\right)  = 1$ ,则 $f\left( x\right)  = {\mathrm{e}}^{x}.$

证 取函数 $F\left( x\right)  = \frac{f\left( x\right) }{{\mathrm{e}}^{x}}$ ,因

$$
{F}^{\prime }\left( x\right)  = \frac{{f}^{\prime }\left( x\right) {\mathrm{e}}^{x} - f\left( x\right) {\mathrm{e}}^{x}}{{\mathrm{e}}^{2x}} = \frac{{f}^{\prime }\left( x\right)  - f\left( x\right) }{{\mathrm{e}}^{x}} = 0,
$$

故 $F\left( x\right)  = C$ . 又 $F\left( 0\right)  = C = f\left( 0\right)  = 1$ ,因此 $F\left( x\right)  = 1$ ,即 $\frac{f\left( x\right) }{{\mathrm{e}}^{x}} = 1$ ,故 $f\left( x\right)  = {\mathrm{e}}^{x}$ .

2 * 15. 设函数 $y = f\left( x\right)$ 在 $x = 0$ 的某邻域内具有 $n$ 阶导数,且 $f\left( 0\right)  = {f}^{\prime }\left( 0\right)  = \cdots  =$ ${f}^{\left( n - 1\right) }\left( 0\right)  = 0$ ,试用柯西中值定理证明:

$$
\frac{f\left( x\right) }{{x}^{n}} = \frac{{f}^{\left( n\right) }\left( {\theta x}\right) }{n!}\;\left( {0 < \theta  < 1}\right) .
$$

证 已知 $f\left( x\right)$ 在 $x = 0$ 的某邻域内具有 $n$ 阶导数,在该邻域内任取点 $x$ ,由柯西中值定理得

$$
\frac{f\left( x\right) }{{x}^{n}} = \frac{f\left( x\right)  - f\left( 0\right) }{{x}^{n} - {0}^{n}} = \frac{{f}^{\prime }\left( {\xi }_{1}\right) }{n{\xi }_{1}^{n - 1}},
$$

其中 ${\xi }_{1}$ 介于 $0, x$ 之间. 又

$$
\frac{{f}^{\prime }\left( {\xi }_{1}\right) }{n{\xi }_{1}^{n - 1}} = \frac{{f}^{\prime }\left( {\xi }_{1}\right)  - {f}^{\prime }\left( 0\right) }{n\left( {{\xi }_{1}^{n - 1} - {0}^{n - 1}}\right) } = \frac{{f}^{\prime \prime }\left( {\xi }_{2}\right) }{n\left( {n - 1}\right) {\xi }_{2}^{n - 2}},
$$

其中 ${\xi }_{2}$ 介于 $0,{\xi }_{1}$ 之间. 依此类推,得

$$
\frac{{f}^{\left( n - 1\right) }\left( {\xi }_{n - 1}\right) }{n!{\xi }_{n - 1}} = \frac{{f}^{\left( n - 1\right) }\left( {\xi }_{n - 1}\right)  - {f}^{\left( n - 1\right) }\left( 0\right) }{n!\left( {{\xi }_{n - 1} - 0}\right) } = \frac{{f}^{\left( n\right) }\left( {\xi }_{n}\right) }{n!},
$$

其中 ${\xi }_{n}$ 介于 $0,{\xi }_{n - 1}$ 之间,记 ${\xi }_{n} = {\theta x}\left( {0 < \theta  < 1}\right)$ ,因此

$$
\frac{f\left( x\right) }{{x}^{n}} = \frac{{f}^{\left( n\right) }\left( {\xi }_{n}\right) }{n!} = \frac{{f}^{\left( n\right) }\left( {\theta x}\right) }{n!}\;\left( {0 < \theta  < 1}\right) .
$$

## 习题 3-2

洛必达法则

121. 用洛必达法则求下列极限:

(1) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + x}\right) }{x}$ ; (2) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{x} - {\mathrm{e}}^{-x}}{\sin x}$ ;

(3) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\tan x - x}{x - \sin x}$ ; (4) $\mathop{\lim }\limits_{{x \rightarrow  \pi }}\frac{\sin {3x}}{\tan {5x}}$ ;

(5) $\mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{\ln \sin x}{{\left( \pi  - 2x\right) }^{2}}$ ; (6) $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{x}^{m} - {a}^{m}}{{x}^{n} - {a}^{n}}\left( {a \neq  0}\right)$ ;

(7) $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\ln \tan {7x}}{\ln \tan {2x}}$ ; (8) $\mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{\tan x}{\tan {3x}}$ ;

(9) $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\ln \left( {1 + \frac{1}{x}}\right) }{\operatorname{arccot}x}$ ; (10) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + {x}^{2}}\right) }{\sec x - \cos x}$ ;

(11) $\mathop{\lim }\limits_{{x \rightarrow  0}}x\cot {2x}$ ; (12) $\mathop{\lim }\limits_{{x \rightarrow  0}}{x}^{2}{\mathrm{e}}^{1/{x}^{2}}$ ;

(13) $\mathop{\lim }\limits_{{x \rightarrow  1}}\left( {\frac{2}{{x}^{2} - 1} - \frac{1}{x - 1}}\right)$ ; (14) $\mathop{\lim }\limits_{{x \rightarrow  \infty }}{\left( 1 + \frac{a}{x}\right) }^{x}$ ;

(15) $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{x}^{\sin x}$ ; (16) $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{\left( \frac{1}{x}\right) }^{\tan x}$ .

解 (1) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + x}\right) }{x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\frac{1}{1 + x}}{1} = 1$ .

(2) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{x} - {\mathrm{e}}^{-x}}{\sin x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{x} + {\mathrm{e}}^{-x}}{\cos x} = \frac{2}{1} = 2$ .

(3) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\tan x - x}{x - \sin x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\sec }^{2}x - 1}{1 - \cos x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\tan }^{2}x}{1 - \cos x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{x}^{2}}{\frac{1}{2}{x}^{2}} = 2$ .

(4) $\mathop{\lim }\limits_{{x \rightarrow  \pi }}\frac{\sin {3x}}{\tan {5x}} = \mathop{\lim }\limits_{{x \rightarrow  \pi }}\frac{3\cos {3x}}{5{\sec }^{2}{5x}} =  - \frac{3}{5}$ .

(5) $\mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{\ln \sin x}{{\left( \pi  - 2x\right) }^{2}} = \mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{\frac{1}{\sin x}\cos x}{2\left( {\pi  - {2x}}\right)  \cdot  \left( {-2}\right) } =  - \mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{\cot x}{4\left( {\pi  - {2x}}\right) }$

$$
=  - \mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{-{\csc }^{2}x}{-8} =  - \frac{1}{8}\text{.}
$$

(6) $\mathop{\lim }\limits_{{x \rightarrow  a}}\frac{{x}^{m} - {a}^{m}}{{x}^{n} - {a}^{n}} = \mathop{\lim }\limits_{{x \rightarrow  a}}\frac{m{x}^{m - 1}}{n{x}^{n - 1}} = \frac{m}{n}{a}^{m - n}\left( {a \neq  0}\right)$ .

(7) $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\ln \tan {7x}}{\ln \tan {2x}} = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\frac{1}{\tan {7x}} \cdot  {\sec }^{2}{7x} \cdot  7}{\frac{1}{\tan {2x}}{\sec }^{2}{2x} \cdot  2} = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\tan {2x}}{\tan {7x}} \cdot  \frac{{\sec }^{2}{7x}}{{\sec }^{2}{2x}} \cdot  \frac{7}{2}$

$$
= \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{2x}{7x} \cdot  \frac{{\sec }^{2}{7x}}{{\sec }^{2}{2x}} \cdot  \frac{7}{2} = 1.
$$

(8) $\mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{\tan x}{\tan {3x}} = \mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{{\sec }^{2}x}{3{\sec }^{2}{3x}} = \mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{{\cos }^{2}{3x}}{3{\cos }^{2}x} = \mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{-6\cos {3x}\sin {3x}}{-6\cos x\sin x}$

$$
=  - \mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{\cos {3x}}{\cos x} =  - \mathop{\lim }\limits_{{x \rightarrow  \frac{\pi }{2}}}\frac{-3\sin {3x}}{-\sin x} = 3\text{.}
$$

(9) $\mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\ln \left( {1 + \frac{1}{x}}\right) }{\operatorname{arccot}x} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\frac{1}{1 + \frac{1}{x}}\left( {-\frac{1}{{x}^{2}}}\right) }{-\frac{1}{1 + {x}^{2}}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{1 + {x}^{2}}{x + {x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow   + \infty }}\frac{\frac{1}{{x}^{2}} + 1}{\frac{1}{x} + 1} = 1$ .

(10) $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\ln \left( {1 + {x}^{2}}\right) }{\sec x - \cos x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{\frac{2x}{1 + {x}^{2}}}{\sec x\tan x + \sin x}$

$$
= \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x}{\sin x} \cdot  \frac{{\cos }^{2}x}{1 + {\cos }^{2}x} \cdot  \frac{2}{1 + {x}^{2}} = 1.
$$

(11) $\mathop{\lim }\limits_{{x \rightarrow  0}}x\cot {2x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x}{\tan {2x}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{1}{2{\sec }^{2}{2x}} = \frac{1}{2}$ .

(12) $\mathop{\lim }\limits_{{x \rightarrow  0}}{x}^{2}{\mathrm{e}}^{1/{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{1/{x}^{2}}}{\frac{1}{{x}^{2}}} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\mathrm{e}}^{1/{x}^{2}}{\left( \frac{1}{{x}^{2}}\right) }^{\prime }}{{\left( \frac{1}{{x}^{2}}\right) }^{\prime }} = \mathop{\lim }\limits_{{x \rightarrow  0}}{\mathrm{e}}^{1/{x}^{2}} =  + \infty$ .

(13) $\mathop{\lim }\limits_{{x \rightarrow  1}}\left( {\frac{2}{{x}^{2} - 1} - \frac{1}{x - 1}}\right)  = \mathop{\lim }\limits_{{x \rightarrow  1}}\frac{-x + 1}{{x}^{2} - 1} = \mathop{\lim }\limits_{{x \rightarrow  1}}\frac{-1}{2x} =  - \frac{1}{2}$ .

(14) $\mathop{\lim }\limits_{{x \rightarrow  \infty }}{\left( 1 + \frac{a}{x}\right) }^{x} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  \infty }}x\ln \left( {1 + \frac{a}{x}}\right) }$ ,而

$$
\mathop{\lim }\limits_{{x \rightarrow  \infty }}x\ln \left( {1 + \frac{a}{x}}\right)  = \mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{\ln \left( {1 + \frac{a}{x}}\right) }{\frac{1}{x}}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{\frac{1}{1 + \frac{a}{x}} \cdot  \left( {-\frac{a}{{x}^{2}}}\right) }{-\frac{1}{{x}^{2}}} = \mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{a}{1 + \frac{a}{x}} = a,
$$

故 $\mathop{\lim }\limits_{{x \rightarrow  \infty }}{\left( 1 + \frac{a}{x}\right) }^{x} = {\mathrm{e}}^{a}$ .

(15) $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{x}^{\sin x} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\sin x}$ ,而

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\sin x\ln x = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\sin x}{x} \cdot  \frac{\ln x}{\frac{1}{x}}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\frac{1}{x}}{-\frac{1}{{x}^{2}}} = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\left( {-x}\right)  = 0,
$$

故 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{x}^{\sin x} = {\mathrm{e}}^{0} = 1$ .

(16) $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{\left( \frac{1}{x}\right) }^{\tan x} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\tan x\ln \frac{1}{x}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\tan x}{x} \cdot  \frac{-\ln x}{\frac{1}{x}}}$

$$
= {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{-\frac{1}{x}}{-\frac{1}{{x}^{2}}}}\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}x
$$

注 在用洛必达法则求极限时, 除了注意用洛必达法则对极限类型等的要求以外,还要注意求极限的过程中合理地应用重要极限、等价无穷小、初等变换等方法, 以使运算过程更快捷、简洁.

2. 验证极限 $\mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{x + \sin x}{x}$ 存在,但不能用洛必达法则得出.

证 由于 $\mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{{\left( x + \sin x\right) }^{\prime }}{{\left( x\right) }^{\prime }} = \mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{1 + \cos x}{1}$ 不存在,故不能使用洛必达法则来求此极限, 但并不表明此极限不存在, 此极限可用以下方法求得:

$$
\mathop{\lim }\limits_{{x \rightarrow  \infty }}\frac{x + \sin x}{x} = \mathop{\lim }\limits_{{x \rightarrow  \infty }}\left( {1 + \frac{\sin x}{x}}\right)  = 1 + 0 = 1.
$$

3. 验证极限 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{x}^{2}\sin \frac{1}{x}}{\sin x}$ 存在,但不能用洛必达法则得出.

证 由于 $\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{\left( {x}^{2}\sin \frac{1}{x}\right) }^{\prime }}{{\left( \sin x\right) }^{\prime }} = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{2x}\sin \frac{1}{x} - \cos \frac{1}{x}}{\cos x}$ 不存在,故不能使用洛必达法则来求此极限, 但可用以下方法求此极限:

$$
\mathop{\lim }\limits_{{x \rightarrow  0}}\frac{{x}^{2}\sin \frac{1}{x}}{\sin x} = \mathop{\lim }\limits_{{x \rightarrow  0}}\left( {\frac{x}{\sin x} \cdot  x\sin \frac{1}{x}}\right)  = \mathop{\lim }\limits_{{x \rightarrow  0}}\frac{x}{\sin x} \cdot  \mathop{\lim }\limits_{{x \rightarrow  0}}x\sin \frac{1}{x} = 1 \cdot  0 = 0.
$$

2 * 4. 讨论函数

$$
f\left( x\right)  = \left\{  \begin{array}{ll} {\left\lbrack  \frac{{\left( 1 + x\right) }^{\frac{1}{x}}}{\mathrm{e}}\right\rbrack  }^{\frac{1}{x}}, & x > 0, \\  {\mathrm{e}}^{-\frac{1}{2}}, & x \leq  0 \end{array}\right.
$$

在点 $x = 0$ 处的连续性.

解

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}f\left( x\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}{\left\lbrack  \frac{{\left( 1 + x\right) }^{\frac{1}{x}}}{\mathrm{e}}\right\rbrack  }^{\frac{1}{x}} = {\mathrm{e}}^{\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{1}{x}\ln \left\lbrack  \frac{{\left( 1 + x\right) }^{\frac{1}{x}}}{\mathrm{e}}\right\rbrack  },
$$

而

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{1}{x}\left\lbrack  {\frac{1}{x}\ln \left( {1 + x}\right)  - 1}\right\rbrack   = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\ln \left( {1 + x}\right)  - x}{{x}^{2}} = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}\frac{\frac{1}{1 + x} - 1}{2x}
$$

$$
= \mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}} - \frac{1}{2\left( {1 + x}\right) } =  - \frac{1}{2},
$$

故

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}f\left( x\right)  = {\mathrm{e}}^{-\frac{1}{2}},
$$

又

$$
\mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}f\left( x\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}{\mathrm{e}}^{-\frac{1}{2}} = {\mathrm{e}}^{-\frac{1}{2}}, f\left( 0\right)  = {\mathrm{e}}^{-\frac{1}{2}}.
$$

因为 $\mathop{\lim }\limits_{{x \rightarrow  {0}^{ + }}}f\left( x\right)  = \mathop{\lim }\limits_{{x \rightarrow  {0}^{ - }}}f\left( x\right)  = f\left( 0\right)$ ,故函数 $f\left( x\right)$ 在 $x = 0$ 处连续.

## 习题 3-3

泰勒公式

21. 按(x - 4)的幂展开多项式 $f\left( x\right)  = {x}^{4} - 5{x}^{3} + {x}^{2} - {3x} + 4$ .

解 因为

$$
{f}^{\prime }\left( x\right)  = 4{x}^{3} - {15}{x}^{2} + {2x} - 3,{f}^{\prime \prime }\left( x\right)  = {12}{x}^{2} - {30x} + 2,
$$

$$
{f}^{\prime \prime \prime }\left( x\right)  = {24x} - {30},{f}^{\left( 4\right) }\left( x\right)  = {24},{f}^{\left( n\right) }\left( x\right)  = 0\left( {n \geq  5}\right) .
$$

$$
f\left( 4\right)  =  - {56},{f}^{\prime }\left( 4\right)  = {21},{f}^{\prime \prime }\left( 4\right)  = {74},{f}^{\prime \prime }\left( 4\right)  = {66},{f}^{\left( 4\right) }\left( 4\right)  = {24}\text{,}
$$

故

$$
{x}^{4} - 5{x}^{3} + {x}^{2} - {3x} + 4
$$

$$
= f\left( 4\right)  + {f}^{\prime }\left( 4\right) \left( {x - 4}\right)  + \frac{{f}^{\prime \prime }\left( 4\right) }{2!}{\left( x - 4\right) }^{2} + \frac{{f}^{\prime \prime \prime }\left( 4\right) }{3!}{\left( x - 4\right) }^{3} + \frac{{f}^{\left( 4\right) }\left( 4\right) }{4!}{\left( x - 4\right) }^{4}
$$

$$
=  - {56} + {21}\left( {x - 4}\right)  + {37}{\left( x - 4\right) }^{2} + {11}{\left( x - 4\right) }^{3} + {\left( x - 4\right) }^{4}.
$$

2. 应用麦克劳林公式,按 $x$ 的幂展开函数 $f\left( x\right)  = {\left( {x}^{2} - 3x + 1\right) }^{3}$ .

解 $f\left( x\right)  = {x}^{6} - 9{x}^{5} + {30}{x}^{4} - {45}{x}^{3} + {30}{x}^{2} - {9x} + 1, f\left( 0\right)  = 1$ ,

$$
{f}^{\prime }\left( x\right)  = 6{x}^{5} - {45}{x}^{4} + {120}{x}^{3} - {135}{x}^{2} + {60x} - 9,\;{f}^{\prime }\left( 0\right)  =  - 9,
$$

$$
{f}^{\prime \prime }\left( x\right)  = {30}{x}^{4} - {180}{x}^{3} + {360}{x}^{2} - {270x} + {60},
$$

$$
{f}^{\prime \prime }\left( x\right)  = {120}{x}^{3} - {540}{x}^{2} + {720x} - {270},
$$

$$
{f}^{\left( 5\right) }\left( x\right)  = {720x} - {1080},\;{f}^{\left( 5\right) }\left( 0\right)  =  - {1080},
$$

$$
{f}^{\left( 6\right) }\left( x\right)  = {720}\text{,}\;{f}^{\left( 6\right) }\left( 0\right)  = {720}\text{,}
$$

$$
{f}^{\left( n\right) }\left( x\right)  = 0\;\left( {n \geq  7}\right) ,
$$

故

$$
{\left( {x}^{2} - 3x + 1\right) }^{3}
$$

$$
= f\left( 0\right)  + {f}^{\prime }\left( 0\right) x + \frac{{f}^{\prime \prime }\left( 0\right) }{2!}{x}^{2} + \frac{{f}^{\prime \prime \prime }\left( 0\right) }{3!}{x}^{3} + \frac{{f}^{\left( 4\right) }\left( 0\right) }{4!}{x}^{4} + \frac{{f}^{\left( 5\right) }\left( 0\right) }{5!}{x}^{5} + \frac{{f}^{\left( 6\right) }\left( 0\right) }{6!}{x}^{6}
$$

$$
= 1 - {9x} + {30}{x}^{2} - {45}{x}^{3} + {30}{x}^{4} - 9{x}^{5} + {x}^{6}.
$$

3. 求函数 $f\left( x\right)  = \sqrt{x}$ 按(x - 4)的幂展开的带有拉格朗日余项的 3 阶泰勒公式.

解 因为 $f\left( x\right)  = \sqrt{x},{f}^{\prime }\left( x\right)  = \frac{1}{2}{x}^{-\frac{1}{2}},{f}^{\prime \prime }\left( x\right)  =  - \frac{1}{4}{x}^{-\frac{3}{2}},{f}^{\prime \prime \prime }\left( x\right)  = \frac{3}{8}{x}^{-\frac{5}{2}}$ ,

$$
{f}^{\left( 4\right) }\left( x\right)  =  - \frac{15}{16}{x}^{-\frac{7}{2}}, f\left( 4\right)  = 2,{f}^{\prime }\left( 4\right)  = \frac{1}{4},{f}^{\prime \prime }\left( 4\right)  =  - \frac{1}{32},{f}^{\prime \prime \prime }\left( 4\right)  = \frac{3}{256}\text{.}
$$

故

$$
\sqrt{x} = f\left( 4\right)  + {f}^{\prime }\left( 4\right) \left( {x - 4}\right)  + \frac{{f}^{\prime \prime }\left( 4\right) }{2!}{\left( x - 4\right) }^{2} + \frac{{f}^{\prime \prime \prime }\left( 4\right) }{3!}{\left( x - 4\right) }^{3} + \frac{{f}^{\left( 4\right) }\left( \xi \right) }{4!}{\left( x - 4\right) }^{4}
$$

$$
= 2 + \frac{1}{4}\left( {x - 4}\right)  - \frac{1}{64}{\left( x - 4\right) }^{2} + \frac{1}{512}{\left( x - 4\right) }^{3} - \frac{15}{{384}{\xi }^{7/2}}{\left( x - 4\right) }^{4}\text{,}
$$

其中 $\xi$ 介于 $x$ 与 4 之间.

24. 求函数 $f\left( x\right)  = \ln x$ 按(x - 2)的幂展开的带有佩亚诺余项的 $n$ 阶泰勒公式.

解 因为

$$
{f}^{\left( n\right) }\left( x\right)  = \frac{{\left( -1\right) }^{n - 1}\left( {n - 1}\right) !}{{x}^{n}},\;{f}^{\left( n\right) }\left( 2\right)  = \frac{{\left( -1\right) }^{n - 1}\left( {n - 1}\right) !}{{2}^{n}},
$$

故

$$
\ln x = f\left( 2\right)  + {f}^{\prime }\left( 2\right) \left( {x - 2}\right)  + \frac{{f}^{\prime \prime }\left( 2\right) }{2!}{\left( x - 2\right) }^{2} + \frac{{f}^{\prime \prime \prime }\left( 2\right) }{3!}{\left( x - 2\right) }^{3} + \cdots  +
$$

$$
\frac{{f}^{\left( n\right) }\left( 2\right) }{n!}{\left( x - 2\right) }^{n} + o\left\lbrack  {\left( x - 2\right) }^{n}\right\rbrack
$$

$$
= \ln 2 + \frac{1}{2}\left( {x - 2}\right)  - \frac{1}{{2}^{3}}{\left( x - 2\right) }^{2} + \frac{1}{3 \cdot  {2}^{3}}{\left( x - 2\right) }^{3} + \cdots  +
$$

$$
{\left( -1\right) }^{n - 1}\frac{1}{n \cdot  {2}^{n}}{\left( x - 2\right) }^{n} + o\left\lbrack  {\left( x - 2\right) }^{n}\right\rbrack  .
$$

5. 求函数 $f\left( x\right)  = \frac{1}{x}$ 按 $\left( {x + 1}\right)$ 的幂展开的带有拉格朗日余项的 $n$ 阶泰勒公式.

解 因为

$$
{f}^{\left( n\right) }\left( x\right)  = \frac{{\left( -1\right) }^{n}n!}{{x}^{n + 1}},\;{f}^{\left( n\right) }\left( {-1}\right)  =  - n!,
$$

故

$$
\frac{1}{x} = f\left( {-1}\right)  + {f}^{\prime }\left( {-1}\right) \left( {x + 1}\right)  + \frac{{f}^{\prime \prime }\left( {-1}\right) }{2!}{\left( x + 1\right) }^{2} + \frac{{f}^{\prime \prime \prime }\left( {-1}\right) }{3!}{\left( x + 1\right) }^{3} + \cdots  +
$$

$$
\frac{{f}^{\left( n\right) }\left( {-1}\right) }{n!}{\left( x + 1\right) }^{n} + \frac{{f}^{\left( n + 1\right) }\left( \xi \right) }{\left( {n + 1}\right) !}{\left( x + 1\right) }^{n + 1}
$$

$$
=  - \left\lbrack  {1 + \left( {x + 1}\right)  + {\left( x + 1\right) }^{2} + \cdots  + {\left( x + 1\right) }^{n}}\right\rbrack   + {\left( -1\right) }^{n + 1}{\xi }^{-\left( {n + 2}\right) }{\left( x + 1\right) }^{n + 1},
$$

其中 $\xi$ 介于 $x$ 与 -1 之间.

26. 求函数 $f\left( x\right)  = \tan x$ 的带有佩亚诺余项的 3 阶麦克劳林公式.

解 因为

$$
f\left( x\right)  = \tan x,\;{f}^{\prime }\left( x\right)  = {\sec }^{2}x,\;{f}^{\prime \prime }\left( x\right)  = 2{\sec }^{2}x\tan x,
$$