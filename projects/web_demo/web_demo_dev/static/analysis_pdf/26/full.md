## 怎样用三角函数的定义解题

现行高中数学教材关于三角函数是用坐标定义的, 至于这种定义方法的地位和作用, 在教材中仅仅表现为讨论三角函数的符号,推导有同角的三角函数的八个基本关系式和 $k$ . ${360}^{ \circ  } + \alpha \left( {k \in  \mathbf{Z}}\right) ,{180}^{ \circ  } + \alpha , - \alpha$ 三组诱导公式.

本节将对三角函数的坐标定义在解题中的作用作一介绍.

为简化运算,不失一般性,设任意角 $\alpha$ 终边上与坐标原点距离为 1 的点的坐标为(x, y), 于是, 由三角函数的定义有

$$
\sin \alpha  = y,\cos \alpha  = x,\tan \alpha  = \frac{y}{x}
$$

$$
\cot \alpha  = \frac{x}{y},\sec \alpha  = \frac{1}{x},\csc \alpha  = \frac{1}{y}
$$

倍角、半角的三角函数用坐标可以表示为

$$
\sin {2\alpha } = {2xy}
$$

①

$$
\cos {2\alpha } = {x}^{2} - {y}^{2} = 1 - 2{y}^{2} = 2{x}^{2} - 1
$$

②

$$
\tan {2\alpha } = \frac{2xy}{{x}^{2} - {y}^{2}} = \frac{2xy}{1 - 2{y}^{2}} = \frac{2xy}{2{x}^{2} - 1}
$$

③

$$
\sin \frac{\alpha }{2} =  \pm  \sqrt{\frac{1 - x}{2}}
$$

④

$$
\cos \frac{\alpha }{2} =  \pm  \sqrt{\frac{1 + x}{2}}
$$

⑤

$$
\tan \frac{\alpha }{2} =  \pm  \sqrt{\frac{1 - x}{1 + x}} = \frac{y}{1 + x} = \frac{1 - x}{y}
$$

⑥

若设 $\alpha ,\beta$ 终边上与原点距离为 1 的点的坐标分别为 $\left( {{x}_{1},{y}_{1}}\right) ,\left( {{x}_{2},{y}_{2}}\right)$ ,则两角和与两角差的三角函数可用坐标表示为

$$
\sin \left( {\alpha  + \beta }\right)  = {y}_{1}{x}_{2} + {x}_{1}{y}_{2}
$$

⑦

$$
\cos \left( {\alpha  + \beta }\right)  = {x}_{1}{x}_{2} - {y}_{1}{y}_{2}
$$

⑧

$$
\sin \left( {\alpha  - \beta }\right)  = {y}_{1}{x}_{2} - {x}_{1}{y}_{2}
$$

⑨

$$
\cos \left( {\alpha  - \beta }\right)  = {x}_{1}{x}_{2} + {y}_{1}{y}_{2}
$$

⑩

$$
\tan \left( {\alpha  + \beta }\right)  = \frac{{y}_{1}{x}_{2} + {x}_{1}{y}_{2}}{{x}_{1}{x}_{2} - {y}_{1}{y}_{2}}
$$

①

$$
\tan \left( {\alpha  - \beta }\right)  = \frac{{y}_{1}{x}_{2} - {x}_{1}{y}_{2}}{{x}_{1}{x}_{2} + {y}_{1}{y}_{2}}
$$

⑫

正因为三角函数可以用坐标定义, 因此许多三角函数问题可以通过三角函数的定义化为代数问题, 从而可以借助代数的方法处理三角函数问题. 从下面几例可看出, 用三角函数定义解题, 不仅有规可循、思路新颖, 而且运算简捷、书写方便.

例 1 若 $\sin \alpha  + \sin \beta  = a,\cos \alpha  + \cos \beta  = b,\tan \alpha  + \tan \beta  = c$ 且 $c \neq  0$ . 证明: $\left( {{a}^{2} + }\right.$ ${\left. {b}^{2}\right) }^{2} - 4{a}^{2} = \frac{8ab}{c}.$

分析 这是一个综合性较强的“难题”, 原证法不仅用到和差化积、倍角、半角等公式, 而且运算量相当大. 改用坐标定义的证法则思路清晰、运算简捷.

证明 设 $\alpha ,\beta$ 终边上与原点距离为 1 的点的坐标分别为 $\left( {{x}_{1},{y}_{1}}\right) ,\left( {{x}_{2},{y}_{2}}\right)$ ,由三角函数的定义, 题设条件等价于

$$
{y}_{1} + {y}_{2} = a,{x}_{1} + {x}_{2} = b,\frac{{y}_{1}}{{x}_{1}} + \frac{{y}_{2}}{{x}_{2}} = c
$$

所以

$$
c\left\lbrack  {{\left( {a}^{2} + {b}^{2}\right) }^{2} - 4{a}^{2}}\right\rbrack   = \left( {\frac{{y}_{1}}{{x}_{1}} + \frac{{y}_{2}}{{x}_{2}}}\right) \left\{  {{\left\lbrack  {\left( {y}_{1} + {y}_{2}\right) }^{2} + {\left( {x}_{1} + {x}_{2}\right) }^{2}\right\rbrack  }^{2} - 4{\left( {y}_{1} + {y}_{2}\right) }^{2}}\right\}
$$

注意到 ${x}_{1}^{2} + {y}_{1}^{2} = 1,{x}_{2}^{2} + {y}_{2}^{2} = 1$ ,上式可整理为

$$
c\left\lbrack  {{\left( {a}^{2} + {b}^{2}\right) }^{2} - 4{a}^{2}}\right\rbrack   = 8\left( {1 + {x}_{1}{x}_{2} + {y}_{1}{y}_{2}}\right) \left( {{x}_{1}{y}_{2} + {x}_{2}{y}_{1}}\right)  =
$$

$$
8\left( {{x}_{1} + {x}_{2}}\right) \left( {{y}_{1} + {y}_{2}}\right)  = {8ab}
$$

因为 $c \neq  0$ ,所以 ${\left( {a}^{2} + {b}^{2}\right) }^{2} - 4{a}^{2} = \frac{8ab}{c}$ .

例 2 若 $\sin \alpha  + \sin \beta  + \sin \gamma  = 0,\cos \alpha  + \cos \beta  + \cos \gamma  = 0$ ,求 ${\cos }^{2}\alpha  + {\cos }^{2}\beta  + {\cos }^{2}\gamma$ 的值.

分析 这是一个带有多个条件等式的计算题, 用三角函数的定义的解法如下.

解 设 $\alpha ,\beta ,\gamma$ 终边上与原点距离为 1 的点的坐标分别为 $\left( {{x}_{1},{y}_{1}}\right) ,\left( {{x}_{2},{y}_{2}}\right) ,\left( {{x}_{3},{y}_{3}}\right)$ , 于是由条件得

$$
{y}_{1} + {y}_{2} + {y}_{3} = 0,{x}_{1} + {x}_{2} + {x}_{3} = 0
$$

将 ${x}_{3} =  - \left( {{x}_{1} + {x}_{2}}\right) ,{y}_{3} =  - \left( {{y}_{1} + {y}_{2}}\right)$ 代入 ${x}_{3}^{2} + {y}_{3}^{2} = 1$ ,并注意到 ${x}_{1}^{2} + {y}_{1}^{2} = 1,{x}_{2}^{2} + {y}_{2}^{2} =$ 1,得

$$
{x}_{1}{x}_{2} + {y}_{1}{y}_{2} =  - \frac{1}{2}
$$

若 ${y}_{2} \neq  0$ ( ${y}_{2} = 0$ 时,由读者处理),那么

$$
{y}_{1} =  - \frac{1}{{y}_{2}}\left( {\frac{1}{2} + {x}_{1}{x}_{2}}\right)
$$

将其代入 ${x}_{1}^{2} + {y}_{1}^{2} = 1$ ,注意到 ${y}_{2}^{2} = 1 - {x}_{2}^{2}$ ,整理,得

$$
{x}_{1}^{2} + {y}_{1}^{2} + {x}_{1}{x}_{2} = \frac{3}{4}
$$

又

$$
{\cos }^{2}\alpha  + {\cos }^{2}\beta  + {\cos }^{2}\gamma  = {x}_{1}^{2} + {x}_{2}^{2} + {x}_{3}^{2} = {x}_{1}^{2} + {x}_{2}^{2} + {\left\lbrack  -\left( {x}_{1} + {x}_{2}\right) \right\rbrack  }^{2} =
$$

$$
2\left( {{x}_{1}^{2} + {x}_{2}^{2} + {x}_{1}{x}_{2}}\right)  = \frac{3}{2}
$$

所以

$$
{\cos }^{2}\alpha  + {\cos }^{2}\beta  + {\cos }^{2}\gamma  = \frac{3}{2}
$$

例 3 已知 $a{\sin }^{2}\theta  + b{\cos }^{2}\theta  = c, a{\csc }^{2}\theta  + b{\sec }^{2}\theta  = d$ ,求证: $\frac{d}{a - b} + \frac{a}{b - c} + \frac{b}{c - a} = 0$ .

分析 与例 1 类似, 这是一个带有多个条件的证明题. 条件三角恒等式的证明是三角函数中既重要又难掌握的一个类型, 题型多变, 方法不一, 用定义法证明目的要明确得多.

证明 设 $\theta$ 终边上与原点距离为 1 的点的坐标为(x, y),由定义、题设条件有

$$
a{y}^{2} + b{x}^{2} = c
$$

①

$$
\frac{a}{{y}^{2}} + \frac{b}{{x}^{2}} = d
$$

②

又

$$
{x}^{2} + {y}^{2} = 1
$$

③

从式 ①,②,③ 中消去 $x, y$ ,将 ${x}^{2} = 1 - {y}^{2}$ 分别代入式 ①,②,再消去 $y$ ,得

$$
\frac{d}{a - b} + \frac{a}{b - c} + \frac{b}{c - a} = 0
$$

例 4 设 $\alpha$ 为锐角,求证: $\left( {1 + \frac{1}{\sin \alpha }}\right) \left( {1 + \frac{1}{\cos \alpha }}\right)  \geq  3 + 2\sqrt{2}$ .

证明 设角 $\alpha$ 终边上与原点距离为 1 的点的坐标为(x, y),因为 $\alpha$ 为锐角, $x > 0, y >$ 0 , 由三角函数的定义得

$$
\left( {1 + \frac{1}{\sin \alpha }}\right) \left( {1 + \frac{1}{\cos \alpha }}\right)  = \left( {1 + \frac{1}{y}}\right) \left( {1 + \frac{1}{x}}\right)  = 1 + \left( {\frac{1}{x} + \frac{1}{y}}\right)  + \frac{1}{xy} \geq
$$

$$
1 + 2\sqrt{\frac{1}{xy}} + \frac{1}{xy} = {\left( 1 + \sqrt{\frac{1}{xy}}\right) }^{2}
$$

因为 ${x}^{2} + {y}^{2} = 1,{x}^{2} + {y}^{2} \geq  {2xy}$ ,所以 ${xy} \leq  \frac{1}{2}$ . 故

$$
{\left( 1 + \sqrt{\frac{1}{xy}}\right) }^{2} \geq  {\left( 1 + \sqrt{2}\right) }^{2} = 3 + 2\sqrt{2}
$$

所以

$$
\left( {1 + \frac{1}{\sin \alpha }}\right) \left( {1 + \frac{1}{\cos \alpha }}\right)  \geq  3 + 2\sqrt{2}
$$

例 5 设 $\tan \frac{\theta }{2} = \frac{\tan \theta  + m - 1}{\tan \theta  + m + 1}, m$ 为实数,试证: $m$ 的值不可能在 1 与 -1 之间.

证明 设 $\theta$ 终边上与原点距离为 1 的点的坐标为(x, y),由三角函数的定义及式 ⑥ 知

$$
\tan \theta  = \frac{y}{x},\tan \frac{\theta }{2} = \frac{y}{1 + x}
$$

将其代入题设条件

$$
\tan \frac{\theta }{2} = \frac{\tan \theta  + m - 1}{\tan \theta  + m + 1}
$$

整理, 得

$$
\frac{y}{1 + x} = \frac{y + \left( {m - 1}\right) x}{y + \left( {m + 1}\right) x}
$$

解得 $m = \frac{1}{x}$ .

因为 $\left| x\right|  \leq  1$ ,所以 $\left| m\right|  \geq  1$ ,即 $m$ 不可能在 1 与 -1 之间.

例 6 已知 $\sin \left( {\alpha  + \beta }\right)  = \frac{1}{2},\sin \left( {\alpha  - \beta }\right)  = \frac{1}{3}$ ,求 $\tan \alpha  : \tan \beta$ 的值.

解 原解法用合分比定理、和差化积等公式, 改用定义处理则不复杂. 由 ⑦, ⑨ 两式, 题设条件可改写为

$$
{y}_{1}{x}_{2} + {y}_{2}{x}_{1} = \frac{1}{2}
$$

①

$$
{y}_{1}{x}_{2} - {y}_{2}{x}_{1} = \frac{1}{3}
$$

②

① + ②,得

$$
2{y}_{1}{x}_{2} = \frac{5}{6}
$$

①-②,得

$$
2{x}_{1}{y}_{2} = \frac{1}{6}
$$

① $/$ ②,得

$$
\frac{{x}_{2}{y}_{1}}{{y}_{2}{x}_{1}} = 5
$$

所以 $\tan \alpha  : \tan \beta  = 5$ .

例 7 设 $0 < \alpha  < \pi ,0 < \beta  < \pi$ ,且 $\cos \alpha  + \cos \beta  - \cos \left( {\alpha  + \beta }\right)  = \frac{3}{2}$ ,求 $\alpha ,\beta$ 的值.

解 设角 $\alpha ,\beta$ 终边上与原点距离为 1 的点的坐标分别为 $\left( {{x}_{1},{y}_{1}}\right) ,\left( {{x}_{2},{y}_{2}}\right)$ ,由式 ⑧ 及定义可将

$$
\cos \alpha  + \cos \beta  - \cos \left( {\alpha  + \beta }\right)  = \frac{3}{2}
$$

改写为

$$
{x}_{1} + {x}_{2} - \left( {{x}_{1}{x}_{2} - {y}_{1}{y}_{2}}\right)  = \frac{3}{2}
$$

①

因为

$$
{x}_{1}^{2} + {y}_{1}^{2} = 1
$$

②

$$
{x}_{2}^{2} + {y}_{2}^{2} = 1
$$

③

②+③ $- 2 \times$ ①,并整理,得

$$
{\left( {x}_{1} + {x}_{2} - 1\right) }^{2} + {\left( {y}_{1} - {y}_{2}\right) }^{2} = 0
$$

所以 ${x}_{1} + {x}_{2} - 1 = 0$ 且 ${y}_{1} - {y}_{2} = 0$ .

由 ${y}_{1} = {y}_{2}$ ,②-③ 得 ${x}_{1}^{2} - {x}_{2}^{2} = 0$ ,即

$$
\left( {{x}_{1} - {x}_{2}}\right) \left( {{x}_{1} + {x}_{2}}\right)  = 0
$$

因为 ${x}_{1} + {x}_{2} = 1$ ,所以 ${x}_{1} - {x}_{2} = 0$ .

解方程组 $\left\{  \begin{array}{l} {x}_{1} + {x}_{2} = 1 \\  {x}_{1} - {x}_{2} = 0 \end{array}\right.$ 得 ${x}_{1} = {x}_{2} = \frac{1}{2}$ ,所以 $\cos \alpha  = \cos \beta  = \frac{1}{2}$ .

因为 $0 < \alpha  < \pi ,0 < \beta  < \pi$ ,所以 $\alpha  = \beta  = \frac{\pi }{3}$ .

注 用三角函数定义解题,要时刻注意 ${x}^{2} + {y}^{2} = 1,\left| x\right|  \leq  1,\left| y\right|  \leq  1$ . 许多解题思路、解题技巧, 往往正是利用这一点.

## 怎样求三角函数连乘积的值

先看一个例子.

试求 $\cos {20}^{ \circ  }\cos {40}^{ \circ  }\cos {80}^{ \circ  }$ 的值.

解 设 $c = \cos {20}^{ \circ  }\cos {40}^{ \circ  }\cos {80}^{ \circ  }, s = \sin {20}^{ \circ  }\sin {40}^{ \circ  }\sin {80}^{ \circ  }$ ,所以

$$
{cs} = \frac{1}{2}\sin {40}^{ \circ  } \cdot  \frac{1}{2}\sin {80}^{ \circ  } \cdot  \frac{1}{2}\sin {160}^{ \circ  } =
$$

$$
\frac{1}{8}\sin {40}^{ \circ  }\sin {80}^{ \circ  }\sin {20}^{ \circ  } = \frac{1}{8}s
$$

因为 $s \neq  0$ ,所以 $c = \frac{1}{8}$ ,即 $\cos {20}^{ \circ  }\cos {40}^{ \circ  }\cos {80}^{ \circ  } = \frac{1}{8}$ .

公式 $\mathop{\prod }\limits_{{k = 0}}^{n}\cos {2}^{k}\alpha  = \frac{\sin {2}^{n + 1}\alpha }{{2}^{n + 1}\sin \alpha }\left( {\alpha  \neq  {k\pi }, k \in  \mathbf{Z}}\right)$ .

证明 令 $c = \mathop{\prod }\limits_{{k = 0}}^{n}\cos {2}^{k}\alpha , s = \mathop{\prod }\limits_{{k = 0}}^{n}\sin {2}^{k}\alpha$ . 所以

$$
{cs} = \mathop{\prod }\limits_{{k = 0}}^{n}\sin {2}^{k}\alpha \cos {2}^{k}\alpha  = \frac{1}{{2}^{n + 1}}\mathop{\prod }\limits_{{k = 0}}^{n}\sin {2}^{k + 1}\alpha  =
$$

$$
\frac{1}{{2}^{n + 1}} \cdot  \frac{\sin {2}^{n + 1}\alpha }{\sin \alpha }\mathop{\prod }\limits_{{k = 0}}^{n}\sin {2}^{k}\alpha  =
$$

$$
\frac{\sin {2}^{n + 1}\alpha }{{2}^{n + 1}\sin \alpha } \cdot  s, s \neq  0
$$

所以

$$
c = \frac{\sin {2}^{n + 1}\alpha }{{2}^{n + 1}\sin \alpha }
$$

即

$$
\mathop{\prod }\limits_{{k = 0}}^{n}\cos {2}^{k}\alpha  = \frac{\sin {2}^{n + 1}\alpha }{{2}^{n + 1}\sin \alpha }
$$

当 $\alpha  = \frac{\pi }{{2}^{n + 1} + 1}$ 时

$$
\sin {2}^{n + 1}\alpha  = \sin \left( {\pi  - \alpha }\right)  = \sin \alpha
$$

所以

$$
\mathop{\prod }\limits_{{k = 0}}^{n}\cos \frac{{2}^{k}\pi }{{2}^{n + 1} + 1} = \frac{1}{{2}^{n + 1}}
$$

当 $\alpha  = \frac{2\pi }{{2}^{n + 1} + 1}$ 时

$$
\mathop{\prod }\limits_{{k = 0}}^{n}\cos \frac{{2}^{k + 1}\pi }{{2}^{n + 1} + 1} = \frac{-1}{{2}^{n + 1}}
$$

几点说明:

(1)上面仅就余弦函数讨论. 显然, 它完全可以推广到正弦函数及正余弦混合乘积的情况.

例 1 求 $\sin {6}^{ \circ  }\sin {42}^{ \circ  }\sin {66}^{ \circ  }\sin {78}^{ \circ  }$ 的值.

解 设 $s = \sin {6}^{ \circ  }\sin {42}^{ \circ  }\sin {66}^{ \circ  }\sin {78}^{ \circ  }, c = \cos {6}^{ \circ  }\cos {42}^{ \circ  }\cos {66}^{ \circ  }\cos {78}^{ \circ  }$ . 所以

${sc} = \frac{1}{{2}^{4}}\sin {12}^{ \circ  }\sin {84}^{ \circ  }\sin {132}^{ \circ  }\sin {156}^{ \circ  } = \frac{1}{{2}^{4}}\cos {78}^{ \circ  }\cos {6}^{ \circ  }\cos {42}^{ \circ  }\cos {66}^{ \circ  } =$

$\frac{1}{{2}^{4}} \cdot  c, c \neq  0$

所以 $s = \frac{1}{{2}^{4}}$ ,即

$$
\sin {6}^{ \circ  }\sin {42}^{ \circ  }\sin {66}^{ \circ  }\sin {78}^{ \circ  } = \frac{1}{{2}^{4}}
$$

例 2 求 $4\sin {18}^{ \circ  }\cos {36}^{ \circ  }$ 的值.

解 设 $c = 4\sin {18}^{ \circ  }\cos {36}^{ \circ  }, s = \cos {18}^{ \circ  }\sin {36}^{ \circ  }$ . 所以

$$
{cs} = \sin {36}^{ \circ  }\sin {72}^{ \circ  } = \sin {36}^{ \circ  }\cos {18}^{ \circ  } = s
$$

因为 $s \neq  0$ ,所以 $c = 1$ . 即 $4\sin {18}^{ \circ  }\cos {36}^{ \circ  } = 1$ .

(2)对于三角函数和式求值问题的处理,我们可首先将三角函数和式化为连乘积,然后利用以上方法来求值.

例 3 求 $\cos \frac{2\pi }{7} + \cos \frac{4\pi }{7} + \cos \frac{6\pi }{7}$ 的值.

解 $\cos \frac{2\pi }{7} + \cos \frac{4\pi }{7} + \cos \frac{6\pi }{7} = 2\cos \frac{3\pi }{7}\cos \frac{\pi }{7} + 2\cos \frac{3\pi }{7}\cos \frac{3\pi }{7} - 1 =$

$$
2\cos \frac{3\pi }{7}\left( {\cos \frac{\pi }{7} + \cos \frac{3\pi }{7}}\right)  - 1 =
$$

$$
4\cos \frac{3\pi }{7}\cos \frac{2\pi }{7}\cos \frac{\pi }{7} - 1
$$

令 $c = 4\cos \frac{3\pi }{7}\cos \frac{2\pi }{7}\cos \frac{\pi }{7}, s = \sin \frac{3\pi }{7}\sin \frac{2\pi }{7}\sin \frac{\pi }{7}$ . 所以

$$
{cs} = \frac{1}{2}\sin \frac{6\pi }{7}\sin \frac{4\pi }{7}\sin \frac{2\pi }{7} = \frac{1}{2}\sin \frac{\pi }{7}\sin \frac{3\pi }{7}\sin \frac{2\pi }{7} = \frac{1}{2}s
$$

因为 $s \neq  0$ ,所以 $c = \frac{1}{2}$ ,所以

$$
\cos \frac{2\pi }{7} + \cos \frac{4\pi }{7} + \cos \frac{6\pi }{7} =  - \frac{1}{2}
$$

(3)对于非三角函数的连乘积求值与化简之类的问题,也可以用以上方法来解决.

例 4 化简 $\mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} + 1}\right)$ .

解 令 $c = \mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} + 1}\right) , s = \mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} - 1}\right)$ ,所以

$$
{cs} = \mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k + 1}} - 1}\right)  = \frac{{x}^{{2}^{n + 1}} - 1}{x - 1}s, x \neq  1, s \neq  0
$$

得

$$
\mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} + 1}\right)  = \frac{{x}^{{2}^{n + 1}} - 1}{x - 1}
$$

若 $\left| x\right|  < 1$ ,得

$$
\mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} + 1}\right)  = \frac{1}{x - 1}
$$

例 5 化简 $\mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} + \frac{1}{{x}^{{2}^{k}}}}\right)$ .

解 若 $x = 1$ ,显然上式等于 ${2}^{n + 1}$ .

若 $x \neq  1$ ,设 $c = \mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} + \frac{1}{{x}^{{2}^{k}}}}\right) , s = \mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} - \frac{1}{{x}^{{2}^{k}}}}\right)$ . 所以

$$
{cs} = \mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k + 1}} - \frac{1}{{x}^{{2}^{k + 1}}}}\right)  = \frac{{x}^{{2}^{k + 1}} - \frac{1}{{x}^{{2}^{k + 1}}}}{x - \frac{1}{x}} \cdot  s, s \neq  0
$$

所以

$$
\mathop{\prod }\limits_{{k = 0}}^{n}\left( {{x}^{{2}^{k}} + \frac{1}{{x}^{{2}^{k}}}}\right)  = \frac{{x}^{{2}^{n + 1}} - \frac{1}{{x}^{{2}^{n + 1}}}}{x - \frac{1}{x}}
$$

例 6 化简 $\mathop{\prod }\limits_{{k = 1}}^{n}\left( {{x}^{{2}^{k}} - {a}^{{2}^{k - 1}}{x}^{{2}^{k - 1}} + {a}^{{2}^{k}}}\right)$ .

解 令 $c = \mathop{\prod }\limits_{{k = 1}}^{n}\left( {{x}^{{2}^{k}} - {a}^{{2}^{k - 1}}{x}^{{2}^{k - 1}} + {a}^{{2}^{k}}}\right) , s = \mathop{\prod }\limits_{{k = 1}}^{n}\left( {{x}^{{2}^{k}} + {a}^{{2}^{k - 1}}{x}^{{2}^{k - 1}} + {a}^{{2}^{k}}}\right)$ . 所以

$$
{cs} = \mathop{\prod }\limits_{{k = 1}}^{n}\left\lbrack  {{\left( {x}^{{2}^{k}} + {a}^{{2}^{k}}\right) }^{2} - {a}^{{2}^{k}}{x}^{{2}^{k}}}\right\rbrack   = \mathop{\prod }\limits_{{k = 1}}^{n}\left( {{x}^{{2}^{k + 1}} + {a}^{{2}^{k}}{x}^{{2}^{k}} + {a}^{{2}^{k + 1}}}\right)  =
$$

$$
\frac{{x}^{{2}^{n + 1}} + {a}^{{2}^{n}}{x}^{{2}^{n}} + {a}^{{2}^{n + 1}}}{{x}^{2} + {ax} + {a}^{2}} \cdot  s, s \neq  0
$$

所以

$$
\mathop{\prod }\limits_{{k = 1}}^{n}\left( {{x}^{{2}^{k}} - {a}^{{2}^{k - 1}}{x}^{{2}^{k - 1}} + {a}^{{2}^{k}}}\right)  = \frac{{x}^{{2}^{n + 1}} + {a}^{{2}^{n}}{x}^{{2}^{n}} + {a}^{{2}^{n + 1}}}{{x}^{2} + {ax} + {a}^{2}}
$$

例 7 化简 $\mathop{\prod }\limits_{{k = 1}}^{{n - 1}}\left( {2\cos {2}^{k}\theta  - 1}\right)$ .

解 令 $c = \mathop{\prod }\limits_{{k = 1}}^{{n - 1}}\left( {2\cos {2}^{k}\theta  - 1}\right) , s = \mathop{\prod }\limits_{{k = 1}}^{{n - 1}}\left( {2\cos {2}^{k}\theta  + 1}\right)$ ,所以

$$
{cs} = \mathop{\prod }\limits_{{k = 1}}^{{n - 1}}\left( {4{\cos }^{2}{2}^{k}\theta  - 1}\right)  = \mathop{\prod }\limits_{{k = 1}}^{{n - 1}}\left\lbrack  {2\left( {2{\cos }^{2}{2}^{k}\theta  - 1}\right)  + 1}\right\rbrack   = \mathop{\prod }\limits_{{k = 1}}^{{n - 1}}\left( {2\cos {2}^{k + 1}\theta  + 1}\right)  =
$$

$$
\frac{2\cos {2}^{n}\theta  + 1}{2\cos {2\theta } + 1} \cdot  s, s \neq  0
$$

得

$$
\mathop{\prod }\limits_{{k = 1}}^{{n - 1}}\left( {2\cos {2}^{k}\theta  - 1}\right)  = \frac{2\cos {2}^{n}\theta  + 1}{2\cos {2\theta } + 1}
$$

习 题

1. 求 $\cos \frac{\pi }{15}\cos \frac{2\pi }{15}\cdots \cos \frac{7\pi }{15}$ 的值.

2. 求证: $\mathop{\prod }\limits_{{k = 1}}^{k}\cos \frac{\alpha }{{2}^{k}} = \frac{\sin \alpha }{{2}^{n}\sin \frac{\alpha }{{2}^{n}}}$ ,从而推得 $\mathop{\prod }\limits_{{k = 1}}^{\infty }\cos \frac{x}{{2}^{k}} = \frac{\sin x}{x}$ .

## 怎样在三角函数中运用比例性质解题

在三角函数中, 一些与比例有关的问题运用比例性质来解非常方便. 因为它目标明确、 思路清晰, 可以克服解题的盲目性, 得到简捷的途径. 这里略举两例说明.

## 一、直接以比值来解题

例 1 在 $\bigtriangleup {ABC}$ 中,已知 $\left( {\sin B + \sin C}\right)  : \left( {\sin C + \sin A}\right)  : \left( {\sin A + \sin B}\right)  = 5 : 6 : 7$ . 求证: $\cos A : \cos B : \cos C =  - 4 : {11} : {14}$ .

证明 根据题意可设

$$
\left\{  \begin{array}{l} \sin B + \sin C = {5k} \\  \sin C + \sin A = {6k}, k \neq  0 \\  \sin A + \sin B = {7k} \end{array}\right.
$$

①

②

③

(①+②+③) $\times  \frac{1}{2}$ ,得

$$
\sin A + \sin B + \sin C = {9k}
$$

④

④-①,④-②,④-③分别得

$$
\sin A = {4k},\sin B = {3k},\sin C = {2k}
$$

根据正弦定理把角的正弦的比转化为所对边的比, 得

$$
a = 4{k}^{\prime }, b = 3{k}^{\prime }, c = 2{k}^{\prime },{k}^{\prime } \neq  0
$$

根据余弦定理得

$$
\cos A = \frac{{\left( 3{k}^{\prime }\right) }^{2} + {\left( 2{k}^{\prime }\right) }^{2} - {\left( 4{k}^{\prime }\right) }^{2}}{2\left( {3{k}^{\prime }}\right) \left( {2{k}^{\prime }}\right) } =  - \frac{1}{4}
$$

同理可得

$$
\cos B = \frac{11}{16},\cos C = \frac{7}{8}
$$

所以

$$
\cos A : \cos B : \cos C =  - \frac{1}{4} : \frac{11}{16} : \frac{7}{8} =  - 4 : {11} : {14}
$$

## 二、间接以比值来解题

一些含有约束条件的证明题, 如果比值较隐蔽, 则先分别在已知条件和求证结论中分离出比值, 然后比较已知和求证结论中比值的异同及根据已知和求证结论中关系式的特点, 运用恒等变换, 推出求证结论.

例 2 已知 $\tan \left( {\alpha  + \beta }\right)  = 3\tan \alpha$ . 求证: $\sin \left( {{2\alpha } + {2\beta }}\right)  + \sin {2\alpha } = 2\sin {2\beta }$ .

分析 从已知条件分离出比值 $\frac{\tan \left( {\alpha  + \beta }\right) }{\tan \alpha } = \frac{3}{1}$ ,从结论中分离出比值 $\frac{\sin \left( {{2\alpha } + {2\beta }}\right)  + \sin {2\alpha }}{\sin {2\beta }} = \frac{2}{1}$ . 由 $\frac{3}{1}$ 到 $\frac{2}{1}$ 可用分比即 $\frac{3 - 1}{1} \Rightarrow  \frac{2}{1}$ 或合分比即 $\frac{3 + 1}{3 - 1} \Rightarrow  \frac{2}{1}$ ,故有两条途径. 又根据分离出比值的已知和求证关系左边分子分母的特点, 采用合分比定理比用分比定理更为容易.

证明 (1) 若 $\tan \alpha  = 0$ ,则 $\tan \left( {\alpha  + \beta }\right)  = 0$ ,所以 $\alpha  = {k}_{1}\pi \left( {{k}_{1} \in  \mathbf{Z}}\right) ,\alpha  + \beta  = {k}_{2}\pi \left( {{k}_{2} \in  }\right.$ $\mathbf{Z}),\beta  = \left( {{k}_{2} - {k}_{1}}\right) \pi$ .

左边 $= \sin 2{k}_{2}\pi  + \sin 2{k}_{1}\pi  = 0$ ,右边 $= 2\sin 2\left( {{k}_{2} - {k}_{1}}\right) \pi  = 0$ .

所以左边 $=$ 右边,证毕.

(2)若 $\tan \alpha  \neq  0$ ,则 $\frac{\tan \left( {\alpha  + \beta }\right) }{\tan \alpha } = \frac{3}{1}$ .

用分比定理得

$$
\frac{\tan \left( {\alpha  + \beta }\right)  - \tan \alpha }{\tan \alpha } = \frac{3 - 1}{1}
$$

即

$$
\left\lbrack  {\frac{\sin \left( {\alpha  + \beta }\right) }{\cos \left( {\alpha  + \beta }\right) } - \frac{\sin \alpha }{\cos \alpha }}\right\rbrack  /\frac{\sin \alpha }{\cos \alpha } = \frac{2}{1}
$$

所以

$$
\frac{\sin \beta }{\cos \left( {\alpha  + \beta }\right) \sin \alpha } = \frac{2}{1},\sin \left( {{2\alpha } + \beta }\right)  - \sin \beta  = \sin \beta
$$

所以

$$
\sin \left( {{2\alpha } + \beta }\right)  = 2\sin {2\beta }
$$

在上式两边同乘以 $2\cos \beta$ ,得

$$
\sin \left( {{2\alpha } + {2\beta }}\right)  + \sin {2\alpha } = 2\sin {2\beta }
$$

在三角函数中, 运用比例性质解题的关键是要求学生能掌握解题的方向. 而要掌握解题的方向, 则必须分析已知条件和求证结论, 分别分离出比值, 比较比值的异同, 针对求证目标, 运用比例性质进行恒等变换, 使因果特点一致.

## 怎样求 ${\sin }^{2}\alpha  + {\sin }^{2}\beta  + a\sin \alpha \sin \beta$ 的值

题目:

( 1 )求 ${\cos }^{2}{10}^{ \circ  } + {\cos }^{2}{50}^{ \circ  } - \sin {40}^{ \circ  }\sin {80}^{ \circ  }$ 的值.

( 2 )求 ${\sin }^{2}{20}^{ \circ  } + {\cos }^{2}{80}^{ \circ  } + \sqrt{3}\sin {20}^{ \circ  }\cos {80}^{ \circ  }$ 的值.

(3) 求 ${\sin }^{2}{20}^{ \circ  } + {\cos }^{2}{50}^{ \circ  } + \sin {20}^{ \circ  }\cos {50}^{ \circ  }$ 的值.

( 4 )求 ${\sin }^{2}{22}^{ \circ  } + {\sin }^{2}{23}^{ \circ  } + \sqrt{2}\sin {22}^{ \circ  }\sin {23}^{ \circ  }$ 的值.

以上各题均可以化成

$$
{\sin }^{2}\alpha  + {\sin }^{2}\beta  + a\sin \alpha \sin \beta
$$

的形式, 其解法较多. 下面用配偶法解题 (4), 余者类推.

解 设

$$
p = {\sin }^{2}{22}^{ \circ  } + {\sin }^{2}{23}^{ \circ  } + \sqrt{2}\sin {22}^{ \circ  }\sin {23}^{ \circ  }
$$

$$
q = {\cos }^{2}{22}^{ \circ  } + {\cos }^{2}{23}^{ \circ  } + \sqrt{2}\cos {22}^{ \circ  }\cos {23}^{ \circ  }
$$

易得

$$
q + p = 2 + \sqrt{2}\cos {1}^{ \circ  }
$$

①

$$
q - p = \cos {44}^{ \circ  } + \cos {46}^{ \circ  } + \sqrt{2}\cos {45}^{ \circ  } =
$$

$$
2\cos {45}^{ \circ  }\cos {1}^{ \circ  } + 1 = \sqrt{2}\cos {1}^{ \circ  } + 1
$$

②

① 一 ② 得 $p = \frac{1}{2}$ ,即

$$
{\sin }^{2}{22}^{ \circ  } + {\sin }^{2}{23}^{ \circ  } + \sqrt{2}\sin {22}^{ \circ  }\sin {23}^{ \circ  } = \frac{1}{2}
$$

题目解完了,总有 “意犹未尽” 之感. 观察上面一组题目,莫非在 * 中的定值 $a$ 和定值 $\alpha  + \beta$ (或 $\alpha  - \beta$ ) 之间存在某种必然联系? 下面就对式 * 用配偶法探求之:

设 $p = {\sin }^{2}\alpha  + {\sin }^{2}\beta  + a\sin \alpha \sin \beta , q = {\cos }^{2}\alpha  + {\cos }^{2}\beta  + a\cos \alpha \cos \beta$ ,则

$$
p + q = 2 + a\cos \left( {\alpha  - \beta }\right)
$$

③

$$
q - p = 2\cos \left( {\alpha  + \beta }\right) \cos \left( {\alpha  - \beta }\right)  + a\cos \left( {\alpha  + \beta }\right)
$$

④

③ - ④ 得

$$
{2p} = 2 + a\cos \left( {\alpha  - \beta }\right)  - 2\cos \left( {\alpha  + \beta }\right) \cos \left( {\alpha  - \beta }\right)  - a\cos \left( {\alpha  + \beta }\right)
$$

即

$$
{2p} = 2 - a\cos \left( {\alpha  + \beta }\right)  + \left\lbrack  {a - 2\cos \left( {\alpha  + \beta }\right) }\right\rbrack  \cos \left( {\alpha  - \beta }\right)
$$

⑤

或

$$
{2p} = 2 + a\cos \left( {\alpha  - \beta }\right)  - \left\lbrack  {a + 2\cos \left( {\alpha  - \beta }\right) }\right\rbrack  \cos \left( {\alpha  + \beta }\right)
$$

⑥

在式 ⑤ 中,若有 $\cos \left( {\alpha  + \beta }\right)  = \frac{a}{2}$ ,则 $p = 1 - \frac{{a}^{2}}{4}$ .