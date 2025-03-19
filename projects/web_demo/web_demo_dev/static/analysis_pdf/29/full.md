## 第一章 概率论的基本概念

1. 写出下列随机试验的样本空间 $S$ :

(1)记录一个班一次数学考试的平均分数(设以百分制记分).

(2)生产产品直到有 10 件正品为止,记录生产产品的总件数.

(3)对某工厂出厂的产品进行检查,合格的记上“正品”,不合格的记上“次品”, 如连续查出了 2 件次品就停止检查, 或检查了 4 件产品就停止检查, 记录检查的结果.

(4)在单位圆内任意取一点, 记录它的坐标.

解 (1) 以 $n$ 表示该班的学生数,总成绩的可能取值为 $0,1,2,3,\cdots ,{100n}$ , 所以试验的样本空间为

$$
S = \left\{  {\left. \frac{i}{n}\right| \;i = 0,1,2,\cdots ,{100n}}\right\}  .
$$

(2)设在生产第 10 件正品前共生产了 $k$ 件不合格品,样本空间为 $S = \{ {10} +$ $k \mid  k = 0,1,2,\cdots \}$ 或写成 $S = \{ {10},{11},{12},\cdots \}$ .

(3)采用 0 表示检查到一件次品,以 1 表示检查到一件正品,例如 0110 表示第一次与第四次检查到次品, 而第二次与第三次检查到的是正品, 样本空间可表示为

$$
S = \{ {00},{100},{0100},{0101},{0110},{1100},{1010},{1011},{0111},{1101},{1110},{1111}\} .
$$

(4)取一直角坐标系,则有 $S = \left\{  {\left( {x, y}\right)  \mid  {x}^{2} + {y}^{2} < 1}\right\}$ ,若取极坐标系,则有 $S$ $= \{ \left( {\rho ,\theta }\right)  \mid  \rho  < 1,0 \leq  \theta  < {2\pi }\}$ .

2. 设 $A, B, C$ 为三个事件,用 $A, B, C$ 的运算关系表示下列各事件:

(1) $A$ 发生, $B$ 与 $C$ 不发生.

(2) $A$ 与 $B$ 都发生,而 $C$ 不发生.

(3) $A, B, C$ 中至少有一个发生.

(4) $A, B, C$ 都发生.

(5) $A, B, C$ 都不发生.

(6) $A, B, C$ 中不多于一个发生.

(7) $A, B, C$ 中不多于两个发生.

(8) $A, B, C$ 中至少有两个发生.

解 以下分别用 ${D}_{i}\left( {i = 1,2,\cdots ,8}\right)$ 表示 $\left( 1\right) ,\left( 2\right) ,\cdots ,\left( 8\right)$ 中所给出的事件. 注意到一个事件不发生即为它的对立事件发生,例如事件 $A$ 不发生即为 $\bar{A}$ 发生.

(1) $A$ 发生, $B$ 与 $C$ 不发生,表示 $A,\bar{B},\bar{C}$ 同时发生,故 ${D}_{1} = \overset{⏜}{ABC}$ 或写成 ${D}_{1}$ $= A - B - C$ .

(2) $A$ 与 $B$ 都发生而 $C$ 不发生,表示 $A, B,\bar{C}$ 同时发生,故 ${D}_{2} = {AB}\bar{C}$ 或写成 ${D}_{2} = {AB} - C$ .

(3)由和事件的含义知,事件 $A \cup  B \cup  C$ 即表示 $A, B, C$ 中至少有一个发生, 故 ${D}_{3} = A \cup  B \cup  C$ .

也可以这样考虑: 事件 “ $A, B, C$ 至少有一个发生” 是事件 “ $A, B, C$ 都不发生”的对立事件,因此, ${D}_{3} = \overline{\bar{A}\bar{B}\bar{C}}$ .

也可以这样考虑: 事件 “ $A, B, C$ 中至少有一个发生” 表示三个事件中恰有一个发生或恰有两个发生或三个事件都发生,因此, ${D}_{3}$ 又可写成

$$
{D}_{3} = A\bar{B}\bar{C} \cup  \bar{A}B\bar{C} \cup  \bar{A}\bar{B}C \cup  {AB}\bar{C} \cup  A\bar{B}C \cup  \bar{A}{BC} \cup  {ABC}.
$$

(4) ${D}_{4} = {ABC}$ .

(5) ${D}_{5} = \bar{A}\bar{B}\bar{C}$ .

(6) “ $A, B, C$ 中不多于一个发生”表示 $A, B, C$ 都不发生或 $A, B, C$ 中恰有一个发生,因此, ${D}_{6} = \bar{A}\bar{B}\bar{C} \cup  A\bar{B}\bar{C} \cup  \bar{A}B\bar{C} \cup  \bar{A}\bar{B}C$ .

又“ $A, B, C$ 中不多于一个发生”表示“ $A, B, C$ 中至少有两个不发生”,亦即 $\bar{A}\bar{B},\bar{B}\bar{C},\bar{A}\bar{C}$ 中至少有一个发生,因此又有 ${D}_{6} = \bar{A}\bar{B} \cup  \bar{B}\bar{C} \cup  \bar{C}\bar{A}$ .

又 “ $A, B, C$ 中不多于一个发生” 是事件 $G =$ “ $A, B, C$ 中至少有两个发生” 的对立事件. 而事件 $G$ 可写成 $G = {AB} \cup  {BC} \cup  {CA}$ ,因此又可将 ${D}_{6}$ 写成

$$
{D}_{6} = \overline{{AB} \cup  {BC} \cup  {CA}} = \overline{AB} \cap  \overline{BC} \cap  \overline{CA}\text{.}
$$

(7) “ $A, B, C$ 中不多于两个发生”表示 $A, B, C$ 都不发生或 $A, B, C$ 中恰有一个发生或 $A, B, C$ 中恰有两个发生. 因此, ${D}_{7} = \bar{A}\bar{B}\bar{C} \cup  A\bar{B}\bar{C} \cup  \bar{A}B\bar{C} \cup  \bar{A}\bar{B}C \cup$ ${AB}\bar{C} \cup  A\bar{B}C \cup  \bar{A}{BC}$ . 又 “ $A, B, C$ 中不多于两个发生” 表示 $A, B, C$ 中至少有一个不发生,亦即 $\bar{A},\bar{B},\bar{C}$ 中至少有一个发生,即有 ${D}_{7} = \bar{A} \cup  \bar{B} \cup  \bar{C}$ .

又“ $A, B, C$ 中不多于两个发生”是事件“ $A, B, C$ 三个都发生”的对立事件, 因此又有 ${D}_{7} = \overline{ABC}$ .

(8) ${D}_{8} = {AB} \cup  {BC} \cup  {CA}$ ,也可写成 ${D}_{8} = {ABC} \cup  \bar{A}{BC} \cup  A\bar{B}C \cup  {AB}\bar{C}$ .

注意: (i) 两事件的差可用对立事件来表示,例如 $A - B = A\bar{B}, A - {BC} =$ $A\overline{BC}$ .

(ii) 易犯的错误是,误将 $\overline{AB}$ 与 $\bar{A}\bar{B}$ 等同起来,事实上, $\overline{AB} = \bar{A} \cup  \bar{B} \neq  \bar{A}\bar{B}$ ,又如 $\overline{ABC} = \bar{A} \cup  \bar{B} \cup  \bar{C} \neq  \bar{A}\bar{B}\bar{C}$ .

(iii) 误以为 $S = A \cup  B \cup  C$ ,事实上, $S - A \cup  B \cup  C$ 可能不等于 $\varnothing$ ,一般 $S \supset  A$ $\cup  B \cup  C$ .

3. (1) 设 $A, B, C$ 是三个事件,且 $P\left( A\right)  = P\left( B\right)  = P\left( C\right)  = \frac{1}{4}, P\left( {AB}\right)  =$ $P\left( {BC}\right)  = 0, P\left( {AC}\right)  = \frac{1}{8}$ ,求 $A, B, C$ 至少有一个发生的概率.

(2)已知 $P\left( A\right)  = \frac{1}{2}, P\left( B\right)  = \frac{1}{3}, P\left( C\right)  = \frac{1}{5}, P\left( {AB}\right)  = \frac{1}{10}, P\left( {AC}\right)  = \frac{1}{15}$ , $P\left( {BC}\right)  = \frac{1}{20}, P\left( {ABC}\right)  = \frac{1}{30}$ ,求 $A \cup  B,\bar{A}\bar{B}, A \cup  B \cup  C,\bar{A}\bar{B}\bar{C},\bar{A}\bar{B}C,\bar{A}\bar{B} \cup  C$ 的概率.

(3) 已知 $P\left( A\right)  = \frac{1}{2}$ ,(i) 若 $A, B$ 互不相容,求 $P\left( {A\bar{B}}\right)$ ,(ii) 若 $P\left( {AB}\right)  = \frac{1}{8}$ , 求 $P\left( {A\bar{B}}\right)$ .

解 (1) $P\left( {A \cup  B \cup  C}\right)$

$$
= P\left( A\right)  + P\left( B\right)  + P\left( C\right)  - P\left( {AB}\right)  - P\left( {BC}\right)  - P\left( {AC}\right)  + P\left( {ABC}\right)
$$

$$
= \frac{5}{8} + P\left( {ABC}\right) \text{.}
$$

由 ${ABC} \subset  {AB}$ ,已知 $P\left( {AB}\right)  = 0$ ,故 $0 \leq  P\left( {ABC}\right)  \leq  P\left( {AB}\right)  = 0$ ,得 $P\left( {ABC}\right)$ $= 0$ . 所求概率为 $P\left( {A \cup  B \cup  C}\right)  = \frac{5}{8}$ .

(2) $P\left( {A \cup  B}\right)  = P\left( A\right)  + P\left( B\right)  - P\left( {AB}\right)  = \frac{1}{2} + \frac{1}{3} - \frac{1}{10} = \frac{11}{15}$ .

$P\left( {\bar{A}\bar{B}}\right)  = P\left( \overline{A \cup  B}\right)  = 1 - P\left( {A \cup  B}\right)  = \frac{4}{15}.$

$P\left( {A \cup  B \cup  C}\right)  = P\left( A\right)  + P\left( B\right)  + P\left( C\right)  - P\left( {AB}\right)  - P\left( {AC}\right)  - P\left( {BC}\right)  + P\left( {ABC}\right)$

$$
= \frac{1}{2} + \frac{1}{3} + \frac{1}{5} - \frac{1}{10} - \frac{1}{15} - \frac{1}{20} + \frac{1}{30} = \frac{51}{60} = \frac{17}{20}\text{.}
$$

$$
P\left( {\bar{A}\bar{B}\bar{C}}\right)  = P\left( \overline{A \cup  B \cup  C}\right)  = 1 - P\left( {A \cup  B \cup  C}\right)  = \frac{3}{20}\text{.}
$$

$$
P\left( {\bar{A}\bar{B}C}\right)  = P\left( {\bar{A}\bar{B}\left( {S - \bar{C}}\right) }\right)  = P\left( {\bar{A}\bar{B} - \bar{A}\bar{B}\bar{C}}\right)  = P\left( {\bar{A}\bar{B}}\right)  - P\left( {\bar{A}\bar{B}\bar{C}}\right)
$$

$$
= \frac{4}{15} - \frac{3}{20} = \frac{{16} - 9}{60} = \frac{7}{60}\text{.}
$$

记 $p = P\left( {\bar{A}\bar{B} \cup  C}\right)$ ,由加法公式

$$
p = P\left( {\bar{A}\bar{B}}\right)  + P\left( C\right)  - P\left( {\bar{A}\bar{B}C}\right)  = \frac{4}{15} + \frac{1}{5} - \frac{7}{60} = \frac{7}{20}.
$$

(3) (i) $P\left( {A\bar{B}}\right)  = P\left( {A\left( {S - B}\right) }\right)  = P\left( {A - {AB}}\right)  = P\left( A\right)  - P\left( {AB}\right)  = \frac{1}{2}$ .

(ii) $P\left( {A\bar{B}}\right)  = P\left( {A\left( {S - B}\right) }\right)  = P\left( {A - {AB}}\right)  = P\left( A\right)  - P\left( {AB}\right)$

$$
= \frac{1}{2} - \frac{1}{8} = \frac{3}{8}\text{.}
$$

4. 设 $A, B$ 是两个事件

(1)已知 $A\bar{B} = \bar{A}B$ ,验证 $A = B$ .

(2)验证事件 $A$ 和事件 $B$ 恰有一个发生的概率为 $P\left( A\right)  + P\left( B\right)  =$ ${2P}\left( {AB}\right)$ .

解 (1) 假设 $A\bar{B} = \bar{A}B$ ,故有 $\left( {A\bar{B}}\right)  \cup  \left( {AB}\right)  = \left( {\bar{A}B}\right)  \cup  \left( {AB}\right)$ ,从而 $A\left( {\bar{B} \cup  B}\right)$ $= \left( {\bar{A} \cup  A}\right) B$ ,即 ${AS} = {SB}$ ,故有 $A = B$ .

(2) $A, B$ 恰好有一个发生的事件为 $A\bar{B} \cup  \bar{A}B$ ,其概率为

$$
P\left( {A\bar{B} \cup  \bar{A}B}\right)  = P\left( {A\bar{B}}\right)  + P\left( {\bar{A}B}\right)  = P\left( {A\left( {S - B}\right) }\right)  + P\left( {B\left( {S - A}\right) }\right)
$$

$$
= P\left( {A - {AB}}\right)  + P\left( {B - {AB}}\right)  = P\left( A\right)  + P\left( B\right)  - {2P}\left( {AB}\right) \text{.}
$$

5. 10 片药片中有 5 片是安慰剂.

(1)从中任意抽取 5 片,求其中至少有 2 片是安慰剂的概率.

(2)从中每次取一片,作不放回抽样,求前 3 次都取到安慰剂的概率.

解 (1) $p = 1 - P$ (取到的 5 片药片均不是安慰剂)

$- P$ (取到的 5 片药片中只有 1 片是安慰剂)

$$
= 1 - \left( \begin{array}{l} 5 \\  0 \end{array}\right) \left( \begin{matrix} {10} - 5 \\  5 \end{matrix}\right) /\left( \begin{matrix} {10} \\  5 \end{matrix}\right)  - \left( \begin{array}{l} 5 \\  1 \end{array}\right) \left( \begin{matrix} {10} - 5 \\  4 \end{matrix}\right) /\left( \begin{matrix} {10} \\  5 \end{matrix}\right)  = \frac{113}{126}.
$$

(2) $p = \frac{5}{10} \cdot  \frac{4}{9} \cdot  \frac{3}{8} = \frac{1}{12}$ .

6. 在房间里有 10 个人, 分别佩戴从 1 号到 10 号的纪念章, 任选 3 人记录其纪念章的号码.

(1)求最小号码为 5 的概率.

(2)求最大号码为 5 的概率.

解 $E$ : 在房间里任选 3 人,记录其佩戴的纪念章的号码. 10 人中任选 3 人共有 $\left( \begin{matrix} {10} \\  3 \end{matrix}\right)  = {120}$ 种选法,此即为样本点的总数. 以 $A$ 记事件“最小的号码为 5”, 以 $B$ 记事件“最大的号码为 5 ”.

(1)因选到的最小号码为 5 , 则其中一个号码为 5 且其余两个号码都大于 5,它们可从 $6 \sim  {10}$ 这 5 个数中选取,故 $N\left( A\right)  = \left( \begin{array}{l} 5 \\  2 \end{array}\right)$ ,从而

$$
P\left( A\right)  = N\left( A\right) /N\left( S\right)  = \left( \begin{array}{l} 5 \\  2 \end{array}\right) /\left( \begin{matrix} {10} \\  3 \end{matrix}\right)  = \frac{1}{12}.
$$

(2)同理, $N\left( B\right)  = \left( \begin{array}{l} 4 \\  2 \end{array}\right)$ ,故

$$
P\left( B\right)  = N\left( B\right) /N\left( S\right)  = \left( \begin{array}{l} 4 \\  2 \end{array}\right) /\left( \begin{matrix} {10} \\  3 \end{matrix}\right)  = \frac{1}{20}.
$$

$$
\text{www.TopSage.com}
$$

7. 某油漆公司发出 17 桶油漆, 其中白漆 10 桶、黑漆 4 桶、红漆 3 桶, 在搬运中所有标签脱落, 交货人随意将这些油漆发给顾客. 问一个订货为 4 桶白漆、 3 桶黑漆和 2 桶红漆的顾客,能按所订颜色如数得到订货的概率是多少?

解 $E$ : 在 17 桶油漆中任取 9 桶给顾客. 以 $A$ 表示事件 “顾客取到 4 桶白漆、 3 桶黑漆与 2 桶红漆”,则有 $N\left( S\right)  = \left( \begin{matrix} {17} \\  9 \end{matrix}\right) , N\left( A\right)  = \left( \begin{matrix} {10} \\  4 \end{matrix}\right) \left( \begin{array}{l} 4 \\  3 \end{array}\right) \left( \begin{array}{l} 3 \\  2 \end{array}\right)$ ,故

$$
P\left( A\right)  = N\left( A\right) /N\left( S\right)  = \left( \begin{array}{l} {10} \\  4 \end{array}\right) \left( \begin{array}{l} 4 \\  3 \end{array}\right) \left( \begin{array}{l} 3 \\  2 \end{array}\right) /\left( \begin{matrix} {17} \\  9 \end{matrix}\right)  = \frac{252}{2431}.
$$

8. 在 1500 件产品中有 400 件次品、 1100 件正品. 任取 200 件.

(1)求恰有 90 件次品的概率.

(2)求至少有 2 件次品的概率.

解 $E$ : 从 1500 件产品中任取 200 件产品. 以 $A$ 表示事件“恰有 90 件次品”,以 ${B}_{i}$ 表示事件“恰有 $i$ 件次品”, $i = 0,1$ ,以 $C$ 表示事件“至少有 2 件次品”.

(1) $N\left( S\right)  = \left( \begin{matrix} 1 & {500} \\  2 & 0 \end{matrix}\right)$ ,

$$
N\left( A\right)  = \left( \begin{matrix} {400} \\  {90} \end{matrix}\right) \left( \begin{matrix} {1100} \\  {200} - {90} \end{matrix}\right)  = \left( \begin{matrix} {400} \\  {90} \end{matrix}\right) \left( \begin{matrix} {1100} \\  {110} \end{matrix}\right) ,
$$

故

$$
P\left( A\right)  = N\left( A\right) /N\left( S\right)  = \left( \begin{matrix} {400} \\  {90} \end{matrix}\right) \left( \begin{matrix} 1 & {100} \\  {110} &  \end{matrix}\right) /\left( \begin{matrix} {1500} \\  {200} \end{matrix}\right) .
$$

(2) $C = S - {B}_{0} - {B}_{1}$ ,其中, ${B}_{0},{B}_{1}$ 互不相容,所以

$$
P\left( C\right)  = P\left( {S - {B}_{0} - {B}_{1}}\right)  = P\left( {S - \left\lbrack  {{B}_{0} \cup  {B}_{1}}\right\rbrack  }\right)
$$

$$
= 1 - P\left( {{B}_{0} \cup  {B}_{1}}\right)  = 1 - P\left( {B}_{0}\right)  - P\left( {B}_{1}\right) .
$$

因

$$
N\left( {B}_{0}\right)  = \left( \begin{matrix} 1 & {100} \\  {200} &  \end{matrix}\right) ,\;N\left( {B}_{1}\right)  = \left( \begin{matrix} {400} \\  1 \end{matrix}\right) \left( \begin{matrix} 1 & {100} \\  {199} &  \end{matrix}\right) ,
$$

故

$$
P\left( {B}_{0}\right)  = \left( \begin{matrix} 1 & {100} \\  {200} &  \end{matrix}\right) /\left( \begin{matrix} 1 & {500} \\  {200} &  \end{matrix}\right) ,\;P\left( {B}_{1}\right)  = \left( \begin{matrix} {400} \\  1 \end{matrix}\right) \left( \begin{matrix} 1 & {100} \\  {199} &  \end{matrix}\right) /\left( \begin{matrix} {1500} \\  {200} \end{matrix}\right) ,
$$

因此有

$$
P\left( C\right)  = 1 - \left( \begin{matrix} 1 & {100} \\  {200} &  \end{matrix}\right) /\left( \begin{matrix} 1 & {500} \\  {200} &  \end{matrix}\right)  - \left( \begin{matrix} {400} \\  1 \end{matrix}\right) \left( \begin{matrix} 1 & {100} \\  {199} &  \end{matrix}\right) /\left( \begin{matrix} 1 & {500} \\  {200} &  \end{matrix}\right)
$$

$$
= 1 - \left\lbrack  {\left( \begin{matrix} 1 & {100} \\  {200} &  \end{matrix}\right)  + \left( \begin{matrix} {400} \\  1 \end{matrix}\right) \left( \begin{matrix} 1 & {100} \\   & {199} \end{matrix}\right) }\right\rbrack  /\left( \begin{matrix} 1 & {500} \\  {200} &  \end{matrix}\right) .
$$

9. 从 5 双不同的鞋子中任取 4 只,问这 4 只鞋子中至少有两只配成一双的概率是多少?

解 $E$ : 从 5 双不同的鞋子中任取 4 只. 以 $A$ 表示事件“所取 4 只鞋子中至少有两只配成一双鞋子”,则 $\bar{A}$ 表示事件“所取 4 只鞋子无配对”. 先计算 $P\left( \bar{A}\right)$ 较为简便. 以下按 $N\left( \bar{A}\right)$ 的不同求法,列出本题的 3 种解法,另外还给出一种直接求 $P\left( A\right)$ 的解法.

解法 (i) 考虑 4 只鞋子是有次序一只一只取出的. 自 5 双 (10 只) 鞋子中任取 4 只共有 ${10} \times  9 \times  8 \times  7$ 种取法, $N\left( S\right)  = {10} \times  9 \times  8 \times  7$ . 现在来求 $N\left( \bar{A}\right)$ . 第一只可以任意取, 共有 10 种取法, 第二只只能在剩下的 9 只中且除去与已取的第一只配对的 8 只鞋子中任取一只, 共 8 种取法. 同理第三只、第四只各有 6 种、 4 种取法,从而 $N\left( \bar{A}\right)  = {10} \times  8 \times  6 \times  4$ . 故

$$
, P\left( A\right)  = 1 - P\left( \bar{A}\right)  = 1 - N\left( \bar{A}\right) /N\left( S\right)
$$

$$
= 1 - \frac{{10} \times  8 \times  6 \times  4}{{10} \times  9 \times  8 \times  7} = \frac{13}{21}.
$$

解法 (ii) 从 10 只鞋子中任取 4 只,共有 $\left( \begin{matrix} {10} \\  4 \end{matrix}\right)$ 种取法,即 $N\left( S\right)  = \left( \begin{matrix} {10} \\  4 \end{matrix}\right)$ . 为求 $N\left( \bar{A}\right)$ ,先从 5 双鞋子中任取 4 双共有 $\left( \begin{array}{l} 5 \\  4 \end{array}\right)$ 种取法,再自取出的每双鞋子中各取 1 只 (在一双中取一只共有 2 种取法),共有 ${2}^{4}$ 种取法,即 $N\left( \bar{A}\right)  = \left( \begin{array}{l} 5 \\  4 \end{array}\right) {2}^{4}$ . 故

$$
P\left( A\right)  = 1 - P\left( \bar{A}\right)  = 1 - \frac{\left( \begin{array}{l} 5 \\  4 \end{array}\right) {2}^{4}}{\left( \begin{matrix} {10} \\  4 \end{matrix}\right) } = \frac{13}{21}.
$$

解法 (iii) 现在来求 $N\left( \bar{A}\right)$ . 先从 5 只左脚鞋子中任取 $k$ 只 $(k = 0,1,2,3$ , 4),有 $\left( \begin{array}{l} 5 \\  k \end{array}\right)$ 种取法,而剩下的 $4 - k$ 只鞋子只能从 (不能与上述所取的配对的) 5- $k$ 只右脚鞋子中选取,即对于每个固定的 $k$ ,有 $\left( \begin{array}{l} 5 \\  k \end{array}\right) \left( \begin{array}{l} 5 - k \\  4 - k \end{array}\right)$ 种取法. 故 魁

$$
N\left( \bar{A}\right)  = \mathop{\sum }\limits_{{k = 0}}^{4}\left( \begin{array}{l} 5 \\  k \end{array}\right) \left( \begin{array}{l} 5 - k \\  4 - k \end{array}\right)  = {80}.
$$

故

$$
P\left( A\right)  = 1 - P\left( \bar{A}\right)  = 1 - N\left( \bar{A}\right) /N\left( S\right)  = 1 - \frac{80}{\left( \begin{matrix} {10} \\  4 \end{matrix}\right) } = \frac{13}{21}.
$$

解法 (iv) 以 ${A}_{i}$ 表示事件“所取 4 只鞋子中恰能配成 $i$ 双” $\left( {i = 1,2}\right)$ ,则 $A$ $= {A}_{1} \cup  {A}_{2},{A}_{1}{A}_{2} = \varnothing$ ,故 $P\left( A\right)  = P\left( {A}_{1}\right)  + P\left( {A}_{2}\right)$ . 因 ${A}_{2}$ 为 4 只恰能配成 2 双, 它可直接从 5 双鞋子中成双地取得,故 $N\left( {A}_{2}\right)  = \left( \begin{array}{l} 5 \\  2 \end{array}\right) .N\left( {A}_{1}\right)$ 的算法是: 先从 5 双中取 1 双,共有 $\left( \begin{array}{l} 5 \\  1 \end{array}\right)$ 种取法,另外两只能从其他 8 只中取,共有 $\left( \begin{array}{l} 8 \\  2 \end{array}\right)$ 种取法,不过这种取法中将成双的也算在内了, 应去掉. 从而

$$
N\left( {A}_{1}\right)  = \left( \begin{array}{l} 5 \\  1 \end{array}\right) \left\lbrack  {\left( \begin{array}{l} 8 \\  2 \end{array}\right)  - \left( \begin{array}{l} 4 \\  1 \end{array}\right) }\right\rbrack   = {120}.
$$

$N\left( S\right)$ 仍为解法 (ii) 中的 $\left( \begin{matrix} {10} \\  4 \end{matrix}\right)  = {210}$ 种,故

$$
P\left( A\right)  = P\left( {A}_{1}\right)  + P\left( {A}_{2}\right)  = \frac{N\left( {A}_{1}\right) }{N\left( S\right) } + \frac{N\left( {A}_{2}\right) }{N\left( S\right) }
$$

$$
= \frac{{120} + {10}}{210} = \frac{13}{21}\text{. }
$$

10. 在 11 张卡片上分别写上 probability 这 11 个字母, 从中任意连抽 7 张, 求其排列结果为 ability 的概率.

解法 (i) $E$ : 自 11 个字母中随机地接连抽 7 个字母并依次排列. 将 11 个字母中的两个 $\mathrm{b}$ 看成是可分辨的,两个 $\mathrm{i}$ 也看成是可分辨的, $N\left( S\right)  = {A}_{11}^{7}$ . 以 $A$ 记事件“排列结果为 ability”,则 $N\left( A\right)  = 4$ (因 $\mathrm{b}$ 有两种取法, $\mathrm{i}$ 也有两种取法), 因而

$$
P\left( A\right)  = N\left( A\right) /N\left( S\right)  = \frac{4}{{A}_{11}^{7}} = {2.4} \times  {10}^{-6}.
$$

解法 (ii) 本题也可利用乘法定理来计算. 以 ${A}_{1},{B}_{2},{I}_{3},{L}_{4},{I}_{5},{T}_{6},{Y}_{7}$ 依次表示取得字母 $\mathrm{a},\mathrm{b},\mathrm{i},\mathrm{l},\mathrm{i},\mathrm{t},\mathrm{y}$ 各事件,则所求概率为

$$
P\left( {{A}_{1}{B}_{2}{I}_{3}{L}_{4}{I}_{5}{T}_{6}{Y}_{7}}\right)  = P\left( {A}_{1}\right) P\left( {{B}_{2} \mid  {A}_{1}}\right) P\left( {{I}_{3} \mid  {A}_{1}{B}_{2}}\right)
$$

$$
\times  P\left( {{L}_{4} \mid  {A}_{1}{B}_{2}{I}_{3}}\right) P\left( {{I}_{5} \mid  {A}_{1}{B}_{2}{I}_{3}{L}_{4}}\right)
$$

$$
\times  P\left( {{T}_{6} \mid  {A}_{1}{B}_{2}{I}_{3}{L}_{4}{I}_{5}}\right) P\left( {{Y}_{7} \mid  {A}_{1}{B}_{2}{I}_{3}{L}_{4}{I}_{5}{T}_{6}}\right)
$$

$$
= \frac{1}{11} \cdot  \frac{2}{10} \cdot  \frac{2}{9} \cdot  \frac{1}{8} \cdot  \frac{1}{7} \cdot  \frac{1}{6} \cdot  \frac{1}{5} = \frac{4}{{A}_{11}^{7}}\text{.}
$$

注意,在解法 (i) 中仅当将两个 $\mathrm{i}$ 看成是可以区分的,两个 $\mathrm{b}$ 看成是可以区分的, 才属于古典概型问题.

11. 将 3 只球随机地放入 4 个杯子中去, 求杯子中球的最大个数分别为 1 , 2,3 的概率.

解 $E$ : 将 3 只球随机地放入 4 个杯子中去. 易知共有 ${4}^{3}$ 种放置法. 以 ${A}_{i}$ 表示事件 “杯子中球的最大个数为 $i$ ”, $i = 1,2,3$ .

${A}_{3}$ 只有当 3 只球放在同一杯子中时才能发生,有 4 个杯子可以任意选择, 于是 $N\left( {A}_{3}\right)  = \left( \begin{array}{l} 4 \\  1 \end{array}\right)$ ,故

$$
P\left( {A}_{3}\right)  = N\left( {A}_{3}\right) /N\left( S\right)  = \left( \begin{array}{l} 4 \\  1 \end{array}\right) /{4}^{3} = \frac{1}{16}.
$$

${A}_{1}$ 只有当每个杯子最多放一只球时才能发生. 因而 $N\left( {A}_{1}\right)  = 4 \cdot  3 \cdot  2 =$ ${A}_{4}^{3}$ ,故

$$
P\left( {A}_{1}\right)  = N\left( {A}_{1}\right) /N\left( S\right)  = {A}_{4}^{3}/{4}^{3} = \frac{3}{8}.
$$

又 ${A}_{1} \cup  {A}_{2} \cup  {A}_{3} = S$ ,且 ${A}_{i}{A}_{j} = \varnothing \left( {i \neq  j}\right)$ ,故 $P\left( {A}_{1}\right)  + P\left( {A}_{2}\right)  + P\left( {A}_{3}\right)  = 1$ , 从而

$$
P\left( {A}_{2}\right)  = 1 - \frac{1}{16} - \frac{3}{8} = \frac{9}{16}.
$$

12. 50 只铆钉随机地取来用在 10 个部件上, 其中有 3 只铆钉强度太弱. 每个部件用 3 只铆钉. 若将 3 只强度太弱的铆钉都装在一个部件上, 则这个部件强度就太弱. 问发生一个部件强度太弱的概率是多少?

解 将部件自 1 到 10 编号. $E$ : 随机地取铆钉,使各部件都装 3 只铆钉. 以 ${A}_{i}$ 表示事件“第 $i$ 号部件强度太弱”. 由题设,仅当 3 只强度太弱的铆钉同时装在第 $i$ 号部件上, ${A}_{i}$ 才能发生. 由于从 50 只铆钉中任取 3 只装在第 $i$ 号部件上共有 $\left( \begin{matrix} {50} \\  3 \end{matrix}\right)$ 种取法,强度太弱的铆钉仅有 3 只,它们都装在第 $i$ 号部件上,只有 $\left( \begin{array}{l} 3 \\  3 \end{array}\right)  = 1$ 种取法,故

$$
P\left( {A}_{i}\right)  = 1/\left( \begin{matrix} {50} \\  3 \end{matrix}\right)  = \frac{1}{19600},\;i = 1,2,\cdots ,{10},
$$

且知 ${A}_{1},{A}_{2},\cdots ,{A}_{10}$ 两两互不相容,因此,10 个部件中有一个强度太弱的概率为

$$
p = P\left\{  {{A}_{1} \cup  {A}_{2} \cup  \cdots  \cup  {A}_{10}}\right\}
$$

$$
= P\left( {A}_{1}\right)  + P\left( {A}_{2}\right)  + \cdots  + P\left( {A}_{10}\right)
$$

$$
= \frac{10}{19600} = \frac{1}{1960}\text{. }
$$

13. 一俱乐部有 5 名一年级学生, 2 名二年级学生, 3 名三年级学生, 2 名四年级学生.

(1)在其中任选 4 名学生,求一、二、三、四年级的学生各一名的概率.

(2)在其中任选 5 名学生,求一、二、三、四年级的学生均包含在内的概率.

解 (1) 共有 $5 + 2 + 3 + 2 = {12}$ 名学生,在其中任选 4 名共有 $\left( \begin{matrix} {12} \\  4 \end{matrix}\right)  = {495}$ 种选法,其中每年级各选 1 名的选法有 $\left( \begin{array}{l} 5 \\  1 \end{array}\right) \left( \begin{array}{l} 2 \\  1 \end{array}\right) \left( \begin{array}{l} 3 \\  1 \end{array}\right) \left( \begin{array}{l} 2 \\  1 \end{array}\right)  = {60}$ 种选法,因此,所求概率为 $p = \frac{60}{495} = \frac{4}{33}$ .

(2)在 12 名学生中任选 5 名的选法共有 $\left( \begin{matrix} {12} \\  5 \end{matrix}\right)  = {792}$ 种. 在每个年级中有一个年级取 2 名, 而其他 3 个年级各取 1 名的取法共有

$$
\left( \begin{array}{l} 5 \\  2 \end{array}\right) \left( \begin{array}{l} 2 \\  1 \end{array}\right) \left( \begin{array}{l} 3 \\  1 \end{array}\right) \left( \begin{array}{l} 2 \\  1 \end{array}\right)  + \left( \begin{array}{l} 5 \\  1 \end{array}\right) \left( \begin{array}{l} 2 \\  2 \end{array}\right) \left( \begin{array}{l} 3 \\  1 \end{array}\right) \left( \begin{array}{l} 2 \\  1 \end{array}\right)  + \left( \begin{array}{l} 5 \\  1 \end{array}\right) \left( \begin{array}{l} 2 \\  1 \end{array}\right) \left( \begin{array}{l} 3 \\  2 \end{array}\right) \left( \begin{array}{l} 2 \\  1 \end{array}\right)  + \left( \begin{array}{l} 5 \\  1 \end{array}\right) \left( \begin{array}{l} 2 \\  1 \end{array}\right) \left( \begin{array}{l} 3 \\  1 \end{array}\right) \left( \begin{array}{l} 2 \\  2 \end{array}\right)  = {240}\text{(种).}
$$

于是所求的概率为

$$
p = \frac{240}{792} = \frac{10}{33}.
$$

14. (1) 已知 $P\left( \bar{A}\right)  = {0.3}, P\left( B\right)  = {0.4}, P\left( {A\bar{B}}\right)  = {0.5}$ ,求条件概率 $P(B \mid  A$ $\cup  \bar{B}$ ).

(2)已知 $P\left( A\right)  = \frac{1}{4}, P\left( {B \mid  A}\right)  = \frac{1}{3}, P\left( {A \mid  B}\right)  = \frac{1}{2}$ ,试求 $P\left( {A \cup  B}\right)$ .

解 (1) $P\left( {B \mid  A \cup  \bar{B}}\right)  = \frac{P\left( {B\left( {A \cup  \bar{B}}\right) }\right) }{P\left( {A \cup  \bar{B}}\right) }$

$$
= \frac{P\left( {AB}\right) }{P\left( A\right)  + P\left( \bar{B}\right)  - P\left( {A\bar{B}}\right) }.
$$

由题设得 $P\left( A\right)  = 1 - P\left( \bar{A}\right)  = {0.7}, P\left( \bar{B}\right)  = 1 - P\left( B\right)  = {0.6}, P\left( {AB}\right)  = P(A$ $\left. \left( {S - \bar{B}}\right) \right)  = P\left( A\right)  - P\left( {A\bar{B}}\right)  = {0.2}$ ,故

$$
P\left( {B \mid  A \cup  \bar{B}}\right)  = \frac{0.2}{{0.7} + {0.6} - {0.5}} = {0.25}.
$$

(2)

$$
P\left( {AB}\right)  = P\left( {B \mid  A}\right) P\left( A\right)  = \frac{1}{12},
$$

$$
P\left( B\right)  = P\left( {AB}\right) /P\left( {A \mid  B}\right)  = \frac{1}{12}/\frac{1}{2} = \frac{1}{6},
$$

故

$$
P\left( {A \cup  B}\right)  = P\left( A\right)  + P\left( B\right)  - P\left( {AB}\right)
$$

$$
= \frac{1}{4} + \frac{1}{6} - \frac{1}{12} = \frac{1}{3}\text{. }
$$

15. 掷两颗骰子,已知两颗骰子点数之和为 7 ,求其中有一颗为 1 点的概率 (用两种方法).

解 $E$ : 掷两颗骰子,观察其出现之点数. 以 $A$ 记事件“两骰子点数之和为 7”,以 $B$ 记事件“两颗骰子中有一颗出现 1 点”.

解法 (i) 按条件概率的定义式: $P\left( {B \mid  A}\right)  = \frac{P\left( {AB}\right) }{P\left( A\right) }$ 来求条件概率. 设想两颗骰子是可分辨的, 样本空间为

$$
S = \{ \left( {1,1}\right) ,\left( {1,2}\right) ,\cdots ,\left( {1,6}\right) ,\left( {2,1}\right) ,\left( {2,2}\right) ,\cdots ,\left( {2,6}\right) ,\cdots ,\left( {6,6}\right) \} ,
$$

$$
A = \{ \left( {1,6}\right) ,\left( {2,5}\right) ,\left( {3,4}\right) ,\left( {4,3}\right) ,\left( {5,2}\right) ,\left( {6,1}\right) \} ,
$$

${AB} = \{ \left( {1,6}\right) ,\left( {6,1}\right) \}$ . 现在 $N\left( S\right)  = {36}, N\left( A\right)  = 6, N\left( {AB}\right)  = 2$ ,因此

$$
P\left( {B \mid  A}\right)  = \frac{2/{36}}{6/{36}} = \frac{1}{3}.
$$

解法 (ii) 按条件概率的含义来求 $P\left( {B \mid  A}\right)$ . 样本空间原有 36 个样本点,现在知道了 “ $A$ 已经发生” 这一信息,根据这一信息,不在 $A$ 中的样本点就不可能出现了,因而试验所有可能结果所成的集合就是 $A$ ,而 $A$ 中共有 6 个可能结果, 其中只有两个结果(1,6)和(6,1)有一颗骰子出现 1 点,因此

$$
P\left( {B \mid  A}\right)  = \frac{2}{6} = \frac{1}{3}.
$$

16. 据以往资料表明, 某一 3 口之家, 患某种传染病的概率有以下规律:

$P\{$ 孩子得病 $\}  = {0.6}, P\{$ 母亲得病 $\mid$ 孩子得病 $\}  = {0.5}$ ,

$P\{$ 父亲得病 $\mid$ 母亲及孩子得病 $\}  = {0.4}$ ,

求母亲及孩子得病但父亲未得病的概率.

解 以 $A$ 记事件“孩子得病”,以 $B$ 记事件“母亲得病”,以 $C$ 记事件“父亲得病”,按题意需要求 $P\left( {ABC}\right)$ . 已知 $P\left( A\right)  = {0.6}, P\left( {B \mid  A}\right)  = {0.5}, P\left( {C \mid  {BA}}\right)  =$ 0.4 , 由乘法定理得

$$
P\left( {{AB}\bar{C}}\right)  = P\left( {\bar{C}{BA}}\right)  = P\left( {\bar{C} \mid  {BA}}\right) P\left( {BA}\right)
$$

$$
= P\left( {\bar{C} \mid  {BA}}\right) P\left( {B \mid  A}\right) P\left( A\right)
$$

$$
= \left( {1 - P\left( {C \mid  {BA}}\right) }\right) P\left( {B \mid  A}\right) P\left( A\right)
$$

$$
= {0.6} \times  {0.5} \times  {0.6} = {0.18}\text{.}
$$

17. 已知在 10 件产品中有 2 件次品, 在其中取两次, 每次任取一件, 作不放回抽样. 求下列事件的概率:(\$)

(1)两件都是正品；

(2)两件都是次品；

(3)一件是正品,一件是次品；强

(4)第二次取出的是次品.

解 $E$ : 在 10 件产品中 (其中有 2 件次品) 任取两次,每次取 1 件,作不放回抽样. 以 ${A}_{i}\left( {i = 1,2}\right)$ 表示事件“第 $i$ 次抽出的是正品”. 因为是不放回抽样,所以

(1) $P\left( {{A}_{1}{A}_{2}}\right)  = P\left( {{A}_{2} \mid  {A}_{1}}\right) P\left( {A}_{1}\right)  = \frac{7}{9} \times  \frac{8}{10} = \frac{28}{45}$ .

(2) $P\left( {{\bar{A}}_{1}{\bar{A}}_{2}}\right)  = P\left( {{\bar{A}}_{2} \mid  {\bar{A}}_{1}}\right) P\left( {\bar{A}}_{1}\right)  = \frac{1}{9} \times  \frac{2}{10} = \frac{1}{45}$ .