112 Chapter 6 Differentiation and Integration Lebesgue's Theorem If the function of differentiable clusters. If the function $f$ is monotone or then - matrix able almost everywhere on(a, b). Motione on the open interval(a, b), then it is Proof Assume $f$ is increasing. Furthermore, continuity of Lebesgue an ascending sequence of open bounded. Otherwise, express (a, b)as the union of an ascending direct assume(a, b)is bounded. Otherwise the union of the sets

$$
{E}_{\alpha ,\beta } = \{ x \in  \left( {a, b}\right)  \mid  \bar{D}f\left( x\right)  > \alpha  > \beta  > {Df}\left( x\right) \}
$$

$\alpha$ and $\beta$ are rational numbers. Hence there are an integral

countable subadditivity of outer fluxes, since this is a countable collection. Let measure zero. Fix rational outer measure, it suffices to prove that only the $\mathcal{O}$ for which $\alpha ,\beta$ with $\alpha  > \beta$ and set $E = {E}_{\alpha ,\beta }$ . Let $\epsilon  > 0$ . Choose an open set

$E \subseteq  \mathcal{O} \subseteq  \left( {a, b}\right)$ and $m\left( \mathcal{O}\right)  \leq  {m}^{ * }\left( E\right)  + \epsilon$

be the collection of closed, bounded into the real collection.(10)

Lemma tells us that ${Df} < \beta$ on $E,\mathcal{F}$ is a Vitali covering of $E$ and and for which that there is a finite disjoint subcollection ${\left\{  \left\lbrack  {c}_{k},{d}_{k}\right\rbrack  \right\}  }_{k = 1}^{n}$ of $\mathcal{F}$ for which

$$
{m}^{ * }\left\lbrack  {E \sim  \mathop{\bigcup }\limits_{{k = 1}}^{n}\left\lbrack  {{c}_{k},{d}_{k}}\right\rbrack  }\right\rbrack   < \epsilon . \tag{11}
$$

By the choice of the intervals $\left\lbrack  {{c}_{k},{d}_{k}}\right\rbrack$ , the inclusion of the union of the union of the interval. Intervals ${\left\{  \left\lbrack  {c}_{k},{d}_{k}\right\rbrack  \right\}  }_{k = 1}^{n}$ in $\mathcal{O}$ and (10),

$$
\mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {f\left( {d}_{k}\right)  - f\left( {c}_{k}\right) }\right\rbrack   < \beta \left\lbrack  {\mathop{\sum }\limits_{{k = 1}}^{n}\left( {{d}_{k} - {c}_{k}}\right) }\right\rbrack   \leq  \beta  \cdot  m\left( \mathcal{O}\right)  \leq  \beta  \cdot  \left\lbrack  {{m}^{ * }\left( E\right)  + \epsilon }\right\rbrack  . \tag{12}
$$

For $1 \leq  k \leq  n$ , we infer from the preceding lemma, applied to the restriction of $f$ to $\left\lbrack  {{c}_{k},{d}_{k}}\right\rbrack$ ,

Therefore, by (11),

$$
{m}^{ * }\left( {E \cap  \left( {{c}_{k},{d}_{k}}\right) }\right)  \leq  \frac{1}{\alpha }\left\lbrack  {f\left( {d}_{k}\right)  - f\left( {c}_{k}\right) }\right\rbrack  .
$$

$$
{m}^{ * }\left( E\right)  \leq  \mathop{\sum }\limits_{{k = 1}}^{n}{m}^{ * }\left( {E \cap  \left( {{c}_{k},{d}_{k}}\right) }\right)  + \epsilon  \leq  \frac{1}{\alpha }\left\lbrack  {\mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {f\left( {d}_{k}\right)  - f\left( {c}_{k}\right) }\right\rbrack  }\right\rbrack   + \epsilon . \tag{13}
$$

We infer from (12) and (13) that

$$
{m}^{ * }\left( E\right)  \leq  \frac{\beta }{\alpha } \cdot  {m}^{ * }\left( E\right)  + \frac{1}{\alpha } \cdot  \epsilon  + \epsilon \text{ for all }\epsilon  > 0.
$$

Therefore, since $0 \leq  {m}^{ * }\left( E\right)  < \infty$ and $\beta /\alpha  < 1,{m}^{ * }\left( E\right)  = 0$ .

Lebesgue’s Theorem is the best possible in the sense that if $F$ is a set of measure the open interval(a, b), there is an increasing function on(ab). Therefore be differentiable at each point in $E$ (see Problem 10). Remark Frigyes Riesz and Béla Sz.-Nagy ${}^{2}$ remark that Lebesgue’s Theorem is "one of the most striking and most important in real variable theory." Indeed, in 1872 Karl Weierstrass presented mathematics with a continuous function on an open interval which failed to be differentiable at any point. ${}^{3}$ Further pathology was revealed and there followed a period of uncertainty regarding the spread of pathology in mathematical analysis. Lebesgue's Theorem. which was published in 1904, and its consequences, which we pursue in Section 5, helped restore confidence in the harmony of mathematics analysis.

Section 6.2 Differentiability of Monotone Functions: Lebesgue's Theorem 113

Let $f$ be integrable over the closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ . Extend $f$ to take the value $f\left( b\right)$ on $(b, b + 1\rbrack$ . For $0 < h \leq  1$ , define the divided difference function Diff $h\;f$ and average value function ${\operatorname{Av}}_{h}f$ of $\left\lbrack  {a, b}\right\rbrack$ by

$$
{\operatorname{Diff}}_{h}f\left( x\right)  = \frac{f\left( {x + h}\right)  - f\left( x\right) }{h}\text{ and }{\operatorname{Av}}_{h}f\left( x\right)  = \frac{1}{h} \cdot  {\int }_{x}^{x + h}f\text{ for all }x \in  \left\lbrack  {a, b}\right\rbrack  .
$$

By a change of variables in the integral and cancellation, for all $a \leq  u < v \leq  b$ ,

$$
{\int }_{u}^{v}{\operatorname{Diff}}_{h}f = {\operatorname{Av}}_{h}f\left( v\right)  - {\operatorname{Av}}_{h}f\left( u\right) . \tag{14}
$$

Corollary 4 Let $f$ be an increasing function on the closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ . Then ${f}^{\prime }$ is integrable over $\left\lbrack  {a, b}\right\rbrack$ and

$$
{\int }_{b}^{a}{f}^{\prime } \leq  f\left( b\right)  - f\left( a\right)  \tag{15}
$$

Proof Since $f$ is increasing on $\left\lbrack  {a, b + 1}\right\rbrack$ , it is measurable (see Problem 22) and therefore the divided difference functions are also measurable. Lebesgue's Theorem tells us that $J$ is differentiable almost everywhere on(a, b). Therefore $\left\{  {{\operatorname{Diff}}_{1}, f}\right\}$ is a sequence of nonnegative measurable functions that converges pointwise almost everywhere on $\left\lbrack  {a, b}\right\rbrack$ to ${f}^{\prime }$ . According to Fatou’s Lemma,

$$
{\int }_{a}^{b}{f}^{\prime } \leq  \mathop{\liminf }\limits_{{n \rightarrow  \infty }}\left\lbrack  {{\int }_{a}^{b}{\operatorname{Diff}}_{1/n}f}\right\rbrack   \tag{16}
$$

By the change of variable formula (14), for each natural number $n$ , since $f$ is increasing,

$$
{\int }_{a}^{b}{\operatorname{Diff}}_{1/n}f = \frac{1}{1/n} \cdot  {\int }_{b}^{b + 1/n}f - \frac{1}{1/n} \cdot  {\int }_{a}^{a + 1/n}f = f\left( b\right)  - \frac{1}{1/n} \cdot  {\int }_{a}^{a + 1/n} \leq  f\left( b\right)  - f\left( a\right) .
$$

Thus

$$
\mathop{\limsup }\limits_{{n \rightarrow  \infty }}\left\lbrack  {{\int }_{a}^{b}{\operatorname{Diff}}_{1/n}f}\right\rbrack   \leq  f\left( b\right)  - f\left( a\right) . \tag{17}
$$

The inequality (15) follows from the inequalities (16) and (17).

---

${}_{3}^{2}$ See page 5 of their book Functional Analysis [RSN90].

A simpler example of such a function, due to Bartel van der Waerden is examined in CO respectively. Filzpatrick’s Advanced Calculus [Fil09]. A review ran van van werden, is examined in Chapter 8 of Patrick

---

114 Chapter 6 Differentiation and Integration Remark The integral in (15) is independent of the values taken by $f$ at the endpoints $\phi$ hand, in a right-hand side of this equality holds for the extension of an agency. On form of equality (15) is

$$
{\int }_{a}^{b}{f}^{\prime } \leq  \mathop{\sup }\limits_{{x \in  \left( {a, b}\right) }}f\left( x\right)  - \mathop{\inf }\limits_{{x \in  \left( {a, b}\right) }}f\left( x\right) . \tag{18}
$$

The right-hand side of this inequality equals $f\left( b\right)  - f\left( a\right)$ if and only if $f$ is continuous at the endpoints. However, even if $f$ is increasing and continuous on $\left\lbrack  {a, b}\right\rbrack$ inequality (1) the strict. It is strict for the Cantor-Lebesgue function $\varphi$ on $\left\lbrack  {0,1}\right\rbrack$ since $\varphi \left( 1\right)  - \varphi \left( 0\right)  - 1$ The threshold revision is almost everywhere on(0,1). We show that for an increasing function $f$ on $\left\lbrack  {a, b}\right\rbrack  ,\left( {15}\right)$ is an equality if and only if the function is absolutely continuous on $\left\lbrack  {a, b}\right\rbrack$ (see the johncoming Corollary 12).

Remark For a continuous function $f$ on a closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ that is differentiable on the open interval(a, b), in the absence of a monotonicity assumption on $f$ we cannot infer defined on $\left\lbrack  {0,1}\right\rbrack$ by

$$
f\left( x\right)  = \left\{  \begin{array}{ll} {x}^{2}\sin \left( {1/{x}^{2}}\right) & \text{ for }0 < x \leq  1 \\  0 & \text{ for }x = 0, \end{array}\right.
$$

${f}^{\prime }$ is not integrable over $\left\lbrack  {0,1}\right\rbrack$ .

## PROBLEMS

5. Show that the Vitali Covering Lemma does not extend to the case in which the covering collection has degenerate closed intervals. The correction corrections

5. Show that the Vitali Covering Lemma does extend to the case in which the covering collection consists of nondegenerate general intervals.

7. Let $f$ be continuous on $\mathbf{R}$ . Is there an open interval on which $f$ is monotone?

8. Let $I$ and $J$ be closed, bounded intervals and $\gamma  > 0$ be such that $\ell \left( I\right)  > \gamma .\ell \left( J\right)$ . Assume $I \cap  J \neq  \varnothing$ . Show that if $\gamma  \geq  1/2$ , then $J \subseteq  5 * I$ , where $5 * I$ denotes the interval with the center as $I$ and five times its length. Is the same true if $0 < \gamma  < 1/2$ ?

9. Show that a set $E$ of real numbers has measure zero if and only if there is a countable collection of open intervals ${\left\{  {I}_{k}\right\}  }_{k = 1}^{\infty }$ for which each point in $E$ belongs to infinitely many of the ${I}_{k}$ ’s and ${\sum }_{k = 1}^{\infty }\ell \left( {I}_{k}\right)  < \infty .$

10. (Riesz-Nagy) Let $E$ be a set of measure zero contained in the open interval(a, b). According the preceding problem, there is a countable collection of open intervals contained in(a, b) ${\left\{  \left( {c}_{k},{a}_{k}\right) \right\}  }_{k = 1}^{n}$ , for which each point in $E$ belongs to infinitely many intervals in the collection and $\mathop{\sum }\limits_{{k = 1}}^{\infty }\left( {{d}_{k} - {c}_{k}}\right)  < \infty$ . Define

$$
f\left( x\right)  = \mathop{\sum }\limits_{{k = 1}}^{\infty }\ell \left( {\left( {{c}_{k},{d}_{k}}\right)  \cap  \left( {-\infty , x}\right) }\right) \text{ for all }x\text{ in }\left( {a, b}\right) .
$$

Show that $f$ is increasing and fails to be differentiable at each point in $E$ .

116 Chapter 6 Differentiation and Integration

23. Show that a continuous function $f$ on $\left\lbrack  {a, b}\right\rbrack$ is Lipschitz if its upper and lower derivatives are bounded on(a, b).

24. Show that for $f$ defined in the last remark of this section, ${f}^{\prime }$ is not integrable over $\left\lbrack  {0,1}\right\rbrack$ .

### 6.3 FUNCTIONS OF BOUNDED VARIATION: JORDAN'S THEOREM

Lebesgue's Theorem tells us that a monotone function on an open interval is differentiable almost everywhere. Therefore the difference of two increasing functions on an open interval also is differentiable almost everywhere. We now provide a characterization of the class of functions on a closed, bounded interval that may be expressed as the difference of increasing functions, which shows that this class is surprisingly large: it includes, for instance, all Lipschitz functions.

Let $f$ be a real-valued function defined on the closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ and $P = \left\{  {{x}_{0},\ldots ,{x}_{k}}\right\}$ be a partition of $\left\lbrack  {a, b}\right\rbrack$ . Define the variation of $f$ with respect to $P$ by

$$
V\left( {f, P}\right)  = \mathop{\sum }\limits_{{i = 1}}^{k}\left| {f\left( {x}_{i}\right)  - f\left( {x}_{i - 1}\right) }\right| ,
$$

and the total variation of $f$ on $\left\lbrack  {a, b}\right\rbrack$ by

$$
{TV}\left( f\right)  = \sup \{ V\left( {f, P}\right)  \mid  P\text{ a partition of }\left\lbrack  {a, b}\right\rbrack  \} .
$$

For a subinterval $\left\lbrack  {c, d}\right\rbrack$ of $\left\lbrack  {a, b}\right\rbrack  ,{TV}\left( {f}_{\left\lbrack  c, d\right\rbrack  }\right)$ denotes the total variation of the restriction of $f$ to $\left\lbrack  {c, d}\right\rbrack$ .

Definition A real-valued function $f$ on the closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ is said to be of bounded variation on $\left\lbrack  {a, b}\right\rbrack$ provided

$$
{TV}\left( f\right)  < \infty \text{.}
$$

Example Let $f$ be an increasing function on $\left\lbrack  {a, b}\right\rbrack$ . Then $f$ is of bounded variation on $\left\lbrack  {a, b}\right\rbrack$ and

$$
{TV}\left( f\right)  = f\left( b\right)  - f\left( a\right) .
$$

Indeed, for any partition $P = \left\{  {{x}_{0},\ldots ,{x}_{k}}\right\}$ of $\left\lbrack  {a, b}\right\rbrack$ ,

$$
V\left( {f, P}\right)  = \mathop{\sum }\limits_{{i = 1}}^{k}\left| {f\left( {x}_{i}\right)  - f\left( {x}_{i - 1}\right) }\right|  = \mathop{\sum }\limits_{{i = 1}}^{k}\left\lbrack  {f\left( {x}_{i}\right)  - f\left( {x}_{i - 1}\right) }\right\rbrack   = f\left( b\right)  - f\left( a\right) .
$$

Example Let $f$ be a Lipschitz function on $\left\lbrack  {a, b}\right\rbrack$ . Then $f$ is of bounded variation of $\left\lbrack  {a, b}\right\rbrack$ . and ${TV}\left( f\right)  \leq  c \cdot  \left( {b - a}\right)$ , where

$$
\left| {f\left( u\right)  - f\left( v\right) }\right|  \leq  c\left| {u - v}\right| \text{ for all }u, v\text{ in }\left\lbrack  {a, b}\right\rbrack  .
$$

Indeed, for a partition $P = \left\{  {{x}_{0},\ldots ,{x}_{k}}\right\}$ of $\left\lbrack  {a, b}\right\rbrack$ ,

$$
V\left( {f, P}\right)  = \mathop{\sum }\limits_{{i = 1}}^{k}\left| {f\left( {x}_{i}\right)  - f\left( {x}_{i - 1}\right) }\right|  \leq  c \cdot  \mathop{\sum }\limits_{{i = 1}}^{k}\left\lbrack  {{x}_{i} - {x}_{i - 1}}\right\rbrack   = c \cdot  \left\lbrack  {b - a}\right\rbrack  .
$$

Section 6.3 Functions of Bounded Variation: Jordan's Theorem 117

Thus, $c \cdot  \left\lbrack  {b - a}\right\rbrack$ is an upper bound of the set of all variations of $f$ with respect to a partition of $\left\lbrack  {a, b}\right\rbrack$ and hence ${TV}\left( f\right)  \leq  c \cdot  \left\lbrack  {b - a}\right\rbrack$ .

Example Define the function $f$ on $\left\lbrack  {0,1}\right\rbrack$ by

$$
f\left( x\right)  = \left\{  \begin{array}{ll} x\cos \left( {\pi /{2x}}\right) & \text{ if }0 < x \leq  1 \\  0 & \text{ if }x = 0. \end{array}\right.
$$

Then $f$ is continuous on $\left\lbrack  {0,1}\right\rbrack$ . But $f$ is not of bounded variation on $\left\lbrack  {0,1}\right\rbrack$ . Indeed, for a natural number $n$ , consider the partition ${P}_{n} = \{ 0,1/{2n},1/\left\lbrack  {{2n} - 1}\right\rbrack  ,\ldots ,1/3,1/2,1\}$ of [0, 1]. Then

$$
V\left( {f,{P}_{n}}\right)  = 1 + 1/2 + \ldots  + 1/n.
$$

Hence $f$ is not of bounded variation on $\left\lbrack  {0,1}\right\rbrack$ , since the harmonic series diverges.

Observe that if $c$ belongs to $\left( {a, b}\right) , P$ is a partition of $\left\lbrack  {a, b}\right\rbrack$ , and ${P}^{\prime }$ is the refinement of $P$ obtained by adjoining $c$ to $P$ , then, by the triangle inequality, $V\left( {f, P}\right)  \leq  V\left( {f,{P}^{\prime }}\right)$ . Thus. in the definition of the total variation of a function on $\left\lbrack  {a, b}\right\rbrack$ , the supremum can be taken over partitions of $\left\lbrack  {a, b}\right\rbrack$ that contain the point $c$ . Now a partition $P$ of $\left\lbrack  {a, b}\right\rbrack$ that contains the point $c$ induces, and is induced by, partitions ${P}_{1}$ and ${P}_{2}$ of $\left\lbrack  {a, c}\right\rbrack$ and $\left\lbrack  {c, b}\right\rbrack$ , respectively, and for such partitions

$$
V\left( {{f}_{\left\lbrack  a, b\right\rbrack  }, P}\right)  = V\left( {{f}_{\left\lbrack  a, c\right\rbrack  },{P}_{1}}\right)  + V\left( {{\dot{f}}_{\left\lbrack  c, b\right\rbrack  },{P}_{2}}\right) . \tag{19}
$$

Take the supremum among such partitions to conclude that

$$
{TV}\left( {f}_{\left\lbrack  a, b\right\rbrack  }\right)  = {TV}\left( {f}_{\left\lbrack  a, c\right\rbrack  }\right)  + {TV}\left( {f}_{\left\lbrack  c, b\right\rbrack  }\right) . \tag{20}
$$

We infer from this that if $f$ is of bounded variation on $\left\lbrack  {a, b}\right\rbrack$ , then

$$
{TV}\left( {f}_{\left\lbrack  a, v\right\rbrack  }\right)  - {TV}\left( {f}_{\left\lbrack  a, u\right\rbrack  }\right)  = {TV}\left( {f}_{\left\lbrack  u, v\right\rbrack  }\right)  \geq  0\text{ for all }a \leq  u < v \leq  b. \tag{21}
$$

Therefore the function $x \mapsto  {TV}\left( {f}_{\left\lbrack  a, x\right\rbrack  }\right)$ , which we call the total variation function for $f$ , is a real-valued increasing function on $\left\lbrack  {a, b}\right\rbrack$ . Moreover, for $a \leq  u < v \leq  b$ , if we take the crudest partition $P = \{ u, v\}$ of $\left\lbrack  {u, v}\right\rbrack$ , we have

$$
f\left( u\right)  - f\left( v\right)  \leq  \left| {f\left( v\right)  - f\left( u\right) }\right|  = V\left( {{f}_{\left\lbrack  u, v\right\rbrack  }, P}\right)  \leq  {TV}\left( {f}_{\left\lbrack  u, v\right\rbrack  }\right)  = {TV}\left( {f}_{\left\lbrack  a, v\right\rbrack  }\right)  - {TV}\left( {f}_{\left\lbrack  a, u\right\rbrack  }\right) .
$$

Thus

$$
f\left( v\right)  + {TV}\left( {f}_{\left\lbrack  a, v\right\rbrack  }\right)  \geq  f\left( u\right)  + {TV}\left( {f}_{\left\lbrack  a, u\right\rbrack  }\right) \text{ for all }a \leq  u < v \leq  b. \tag{22}
$$

We have established the following lemma.

Lemma 5 Let the function $f$ be of bounded variation on the closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ $\left\lbrack  {a, b}\right\rbrack$ : has the following explicit expression as the difference of two increasing functions on

$$
f\left( x\right)  = \left\lbrack  {f\left( x\right)  + {TV}\left( {f}_{\left\lbrack  a, x\right\rbrack  }\right) }\right\rbrack   - {TV}\left( {f}_{\left\lbrack  a, x\right\rbrack  }\right) \text{ for all }x \in  \left\lbrack  {a, b}\right\rbrack  . \tag{23}
$$

Jordan’s Theorem A function $f$ is of bounded variation on the closed bounded interval $\left\lbrack  {a, b}\right\rbrack$ if and only if it is the difference of two increasing functions on $\lbrack a, b$

118 Chapter 6 Differentiation and Integration Proof Let $f$ be of bounded variation on $\left\lbrack  {a, b}\right\rbrack$ . The preceding lemma provides an explicit representation of $f$ as the difference of increasing functions. To prove the converse, let $J = g - h$ on $\left\lbrack  {a, b}\right\rbrack$ , where $g$ and $h$ are increasing functions on $\left\lbrack  {a, b}\right\rbrack$ . For any partition $P = \left\{  {{x}_{0},\ldots ,{x}_{k}}\right\}$ of $\left\lbrack  {a, b}\right\rbrack  ,$

$$
V\left( {f, P}\right)  = \mathop{\sum }\limits_{{i = 1}}^{k}\left| {f\left( {x}_{i}\right)  - f\left( {x}_{i - 1}\right) }\right|
$$

$$
= \mathop{\sum }\limits_{{i = 1}}^{k}\left| {\left\lbrack  {g\left( {x}_{i}\right)  - g\left( {x}_{i - 1}\right) }\right\rbrack   + \left\lbrack  {h\left( {x}_{i - 1}\right)  - h\left( {x}_{i}\right) }\right\rbrack  }\right|
$$

$$
\leq  \mathop{\sum }\limits_{{i = 1}}^{k}\left| {g\left( {x}_{i}\right)  - g\left( {x}_{i - 1}\right) }\right|  + \mathop{\sum }\limits_{{i = 1}}^{k}\left| {h\left( {x}_{i - 1}\right)  - h\left( {x}_{i}\right) }\right|
$$

$$
= \mathop{\sum }\limits_{{i = 1}}^{k}\left\lbrack  {g\left( {x}_{i}\right)  - g\left( {x}_{i - 1}\right) }\right\rbrack   + \mathop{\sum }\limits_{{i = 1}}^{k}\left\lbrack  {h\left( {x}_{i}\right)  - h\left( {x}_{i - 1}\right) }\right\rbrack
$$

$$
= \left\lbrack  {g\left( b\right)  - g\left( a\right) }\right\rbrack   + \left\lbrack  {h\left( b\right)  - h\left( a\right) }\right\rbrack  .
$$

Thus, the set of variations of $f$ with respect to partitions of $\left\lbrack  {a, b}\right\rbrack$ is bounded above by $\left\lbrack  {g\left( b\right)  - g\left( a\right) }\right\rbrack   + \left\lbrack  {h\left( b\right)  - h\left( a\right) }\right\rbrack$ and therefore $f$ is of bounded variation of $\left\lbrack  {a, b}\right\rbrack$ .

We call the expression of a function of bounded variation $f$ as the difference of increasing functions a Jordan decomposition of $f$ .

Corollary 6 If the function $f$ is of bounded variation on the closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ . then it is differentiable almost everywhere on the open interval(a, b)and ${f}^{\prime }$ is integrable over $\left\lbrack  {a, b}\right\rbrack$ .

Proof According to Jordan’s Theorem, $f$ is the difference of two increasing functions on $\left\lbrack  {a, b}\right\rbrack$ . Thus Lebesgue’s Theorem tells us that $f$ is the difference of two functions which are differentiable almost everywhere on(a, b). Therefore $f$ is differentiable almost everywhere on(a, b). The integrability of ${f}^{\prime }$ follows from Corollary 4 .

## PROBLEMS

25. Suppose $f$ is continuous on $\left\lbrack  {0,1}\right\rbrack$ . Must there be a nondegenerate closed subinterval $\left\lbrack  {a, b}\right\rbrack$ or $\left\lbrack  {0,1}\right\rbrack$ for which the restriction of $f$ to $\left\lbrack  {a, b}\right\rbrack$ is of bounded variation?

26. Let $f$ be the Dirichlet function, the characteristic function of the rationals in $\left\lbrack  {0,1}\right\rbrack$ . Is $f$ of

27. Define $f\left( x\right)  = \sin x$ on $\left\lbrack  {0,{2\pi }}\right\rbrack$ . Find two increasing functions $h$ and $g$ for which $f = h - g$ on

28. Let $f$ be a step function on $\left\lbrack  {a, b}\right\rbrack$ . Find a formula for its total variation.

29. (a) Define

$$
f\left( x\right)  = \left\{  \begin{array}{ll} {x}^{2}\cos \left( {1/{x}^{2}}\right) & \text{ if }x \neq  0, x \in  \left\lbrack  {-1,1}\right\rbrack  \\  0 & \text{ if }x = 0. \end{array}\right.
$$

Is $f$ of bounded variation on $\left\lbrack  {-1,1}\right\rbrack$ ?

(b) Define

$$
g\left( x\right)  = \left\{  \begin{array}{ll} {x}^{2}\cos \left( {1/x}\right) & \text{ if }x \neq  0, x \in  \left\lbrack  {-1,1}\right\rbrack  \\  0 & \text{ if }x = 0. \end{array}\right.
$$

Is $g$ of bounded variation on $\left\lbrack  {-1,1}\right\rbrack$ ?

30. Show that the linear combination of two functions of bounded variation is also of bounded variation. Is the product of two such functions also of bounded variation?

31. Let $P$ be a partition of $\left\lbrack  {a, b}\right\rbrack$ that is a refinement of the partition ${P}^{\prime }$ . For a real-valued function $f$ on $\left\lbrack  {a, b}\right\rbrack$ , show that $V\left( {f,{P}^{\prime }}\right)  \leq  V\left( {f, P}\right)$ .

32. Assume $f$ is of bounded variation on $\left\lbrack  {a, b}\right\rbrack$ . Show that there is a sequence of partitions $\left\{  {P}_{n}\right\}$ of $\left\lbrack  {a, b}\right\rbrack$ for which the sequence $\left\{  {{TV}\left( {f,{P}_{n}}\right) }\right\}$ is increasing and converges to ${TV}\left( f\right)$ .

33. Let $\left\{  {f}_{n}\right\}$ be a sequence of real-valued functions on $\left\lbrack  {a, b}\right\rbrack$ that converges pointwise on $\left\lbrack  {a, b}\right\rbrack$ to the real-valued function $f$ . Show that

$$
{TV}\left( f\right)  \leq  \liminf {TV}\left( {f}_{n}\right) .
$$

34. Let $f$ and $g$ be of bounded variation on $\left\lbrack  {a, b}\right\rbrack$ . Show that

$$
{TV}\left( {f + g}\right)  \leq  {TV}\left( f\right)  + {TV}\left( g\right) \text{ and }{TV}\left( {\alpha f}\right)  = \left| \alpha \right| {TV}\left( f\right) .
$$

35. For $\alpha$ and $\beta$ positive numbers, define the function $f$ on $\left\lbrack  {0,1}\right\rbrack$ by

$$
f\left( x\right)  = \left\{  \begin{array}{ll} {x}^{\alpha }\sin \left( {1/{x}^{\beta }}\right) & \text{ for }0 < x \leq  1 \\  0 & \text{ for }x = 0. \end{array}\right.
$$

Show that if $\alpha  > \beta$ , then $f$ is of bounded variation on $\left\lbrack  {0,1}\right\rbrack$ , by showing that ${f}^{\prime }$ is integrable over $\left\lbrack  {0,1}\right\rbrack$ . Then show that if $\alpha  \leq  \beta$ , then $f$ is not of bounded variation on $\left\lbrack  {0,1}\right\rbrack$ .

36. Let $f$ fail to be of bounded variation on $\left\lbrack  {0,1}\right\rbrack$ . Show that there is a point ${x}_{0}$ in $\left\lbrack  {0,1}\right\rbrack$ such that $f$ fails to be of bounded variation on each nondegenerate closed subinterval of $\left\lbrack  {0,1}\right\rbrack$ that contains ${x}_{0}$ .

### 6.4 ABSOLUTELY CONTINUOUS FUNCTIONS

Definition $A$ real-valued function $f$ on a closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ is said to be absolutely continuous on $\left\lbrack  {a, b}\right\rbrack$ provided for each $\epsilon  > 0$ , there is a $\delta  > 0$ such that for every finite disjoint collection ${\left\{  \left( {a}_{k},{b}_{k}\right) \right\}  }_{k = 1}^{n}$ of open intervals in(a, b),

$$
\text{if}\mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {{b}_{k} - {a}_{k}}\right\rbrack   < \delta \text{, then}\mathop{\sum }\limits_{{k = 1}}^{n}\left| {f\left( {b}_{k}\right)  - f\left( {a}_{k}\right) }\right|  < \epsilon \text{.}
$$

The criterion for absolute continuity in the case the finite collection of intervals consists of a single interval is the criterion for the uniform continuity of $f$ on $\left\lbrack  {a, b}\right\rbrack$ . Thus absolutely continuous functions are continuous. The converse is false, even for increasing functions.

120 Chapter 6 Differentiation and Integration Example The Cantor-Lebesgue function $\varphi$ is increasing and continuous on $\left\lbrack  {0,1}\right\rbrack$ but it is not absolutely continuous (see also Problems 40 and 48). Indeed, to see that $\varphi$ is not absolutely continuous, let $n$ be a natural number. At the $n$ -th stage of the construction of the Cantor set, a disjoint collection ${\left\{  \left\lbrack  {c}_{k},{d}_{k}\right\rbrack  \right\}  }_{1 \leq  k < {2}^{n}}$ of ${2}^{n}$ subintervals of $\left\lbrack  \begin{array}{ll} 0 & 1 \end{array}\right\rbrack$ have been constructed that cover the Cantor set, each of which has length ${\left( 1/3\right) }^{n}$ . The Cantor-Lebesgue is constant on each of the intervals that comprise the complement in $\left\lbrack  {0,1}\right\rbrack$ of this collection of intervals. Therefore, since $\varphi$ is increasing and $\varphi \left( 1\right)  - \varphi \left( 0\right)  = 1$ ,

$$
\mathop{\sum }\limits_{{1 \leq  k \leq  {2}^{n}}}\left\lbrack  {{d}_{k} - {c}_{k}}\right\rbrack   = {\left( 2/3\right) }^{n}\text{ while }\mathop{\sum }\limits_{{1 \leq  k \leq  {2}^{n}}}\left\lbrack  {\varphi \left( {d}_{k}\right)  - \varphi \left( {c}_{k}\right) }\right\rbrack   = 1.
$$

There is no response to the $\epsilon  = 1$ challenge regarding the criterion for $\varphi$ to be absolutely

Clearly linear combinations of absolutely continuous functions are absolutely continu. This however, the composition of absolutely continuous functions may fail to be absoluted. continuous (see Problems 43, 44, and 45).

absolutely continuous on [a, b]. Proposition 7 If the function $f$ is Lipschitz on a closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ , then it is

Proof Let $c > 0$ be a Lipschitz constant for $f$ on $\left\lbrack  {a, b}\right\rbrack$ , that is,

$$
\left| {f\left( u\right)  - f\left( v\right) }\right|  \leq  c\left| {u - v}\right| \text{ for all }u, v \in  \left\lbrack  {a, b}\right\rbrack  .
$$

Then, regarding the criterion for the absolute continuity of $f$ , it is clear that $\delta  = \epsilon /c$ responds

There are absolutely continuous functions that fail to be Lipschitz the function Problem 37).

Theorem 8 Let the function $f$ be absolutely continuous on the closed homogeneous is of bounded variation.

Proof We first prove that $f$ is of bounded variation. Indeed, let $\delta$ respond to the [a, b] into N is the criterion for the absolute continuity of $f$ . Let $P$ be a tree of of $\delta$ in relative to the value of ${\left\{  \left\lbrack  {c}_{k},{d}_{k}\right\rbrack  \right\}  }_{k = 1}^{N}$ , each of length less than $\delta$ . Then by the relation of for infication to the absolute continuity of $f$ , it is clear that ${TV}/f$ , is the definition The additivity formula (19) extends to finite sums. Hence

$$
{TV}\left( f\right)  = \mathop{\sum }\limits_{{k = 1}}^{N}{TV}\left( {f}_{\left\lbrack  {c}_{k},{d}_{k}\right\rbrack  }\right)  \leq  N.
$$

Therefore $f$ is of bounded variation. In view of (23) and the absolute condition continuous functions, to show that $f$ is the difference of increasing distance functions it suffices to show that the total variation function for $f$ is absolutely continuous. Let $\epsilon  > 0$ . Choose $\delta$ as a response to the $\epsilon /2$ challenge regarding the criterion for the absolute continuity of $f$ on $\left\lbrack  {a, b}\right\rbrack$ . Let ${\left\{  \left( {c}_{k},{d}_{k}\right) \right\}  }_{k = 1}^{n}$ be a disjoint collection of open subintervals of(a, b)for which $\mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {{d}_{k} - {c}_{k}}\right\rbrack   < \delta$ . For $1 \leq  k \leq  n$ , let ${P}_{k}$ be a partition of $\left\lbrack  {{c}_{k},{d}_{k}}\right\rbrack$ . By the choice of $\delta$ in relation to the absolute continuity of $f$ on $\left\lbrack  {a, b}\right\rbrack$ ,

$$
\mathop{\sum }\limits_{{k = 1}}^{n}{TV}\left( {{f}_{\left\lbrack  {c}_{k},{d}_{k}\right\rbrack  },{P}_{k}}\right)  < \epsilon /2
$$

Take the supremum as, for $1 \leq  k \leq  n,{P}_{k}$ vary among partitions of $\left\lbrack  {{c}_{k},{d}_{k}}\right\rbrack$ , to obtain

$$
\mathop{\sum }\limits_{{k = 1}}^{n}{TV}\left( {f}_{\left\lbrack  {c}_{k},{d}_{k}\right\rbrack  }\right)  \leq  \epsilon /2 < \epsilon
$$

We infer from (21) that, for $1 \leq  k \leq  n,{TV}\left( {f}_{\left\lbrack  {c}_{k},{d}_{k}\right\rbrack  }\right)  = {TV}\left( {f}_{\left\lbrack  a,{d}_{k}\right\rbrack  }\right)  - {TV}\left( {f}_{\left\lbrack  a,{c}_{k}\right\rbrack  }\right)$ . Hence

$$
\text{if}\mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {{d}_{k} - {c}_{k}}\right\rbrack   < \delta \text{, then}\mathop{\sum }\limits_{{k = 1}}^{n}\left| {{TV}\left( {f}_{\left\lbrack  a,{d}_{k}\right\rbrack  }\right)  - {TV}\left( {f}_{\left\lbrack  a,{c}_{k}\right\rbrack  }\right) }\right|  < \epsilon \text{.} \tag{24}
$$

Therefore the total variation function for $f$ is absolutely continuous on $\left\lbrack  {a, b}\right\rbrack$ .

Theorem 9 Let the function $f$ be continuous on the closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ . Then $f$ is absolutely continuous on $\left\lbrack  {a, b}\right\rbrack$ if and only if the family of divided difference functions $\{ {\operatorname{Diff}}_{h}f{\} }_{0 < h \leq  1}$ is uniformly integrable over $\left\lbrack  {a, b}\right\rbrack$ .

Proof. First assume ${\left\{  {\operatorname{Diff}}_{h}f\right\}  }_{0 < h \leq  1}$ is uniformly integrable over $\left\lbrack  {a, b}\right\rbrack$ . Let $\epsilon  > 0$ . Choose

$\delta  > 0$ for which

$$
{\int }_{E}\left| {{\operatorname{Diff}}_{h}f}\right|  < \epsilon /2\text{ if }m\left( E\right)  < \delta \text{ and }0 < h \leq  1.
$$

We claim that $\delta$ responds to the $\epsilon$ challenge regarding the criterion for $f$ to be absolutely continuous. Indeed, let ${\left\{  \left( {c}_{k},{d}_{k}\right) \right\}  }_{k = 1}^{n}$ be a disjoint collection of open subintervals of(a, b) for which $\mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {{d}_{k} - {c}_{k}}\right\rbrack   < \delta$ . For $0 < h \leq  1$ and $1 \leq  k \leq  n$ , by (14),

$$
{\mathrm{{Av}}}_{h}f\left( {d}_{k}\right)  - {\mathrm{{Av}}}_{h}f\left( {c}_{k}\right)  = {\int }_{{c}_{k}}^{{d}_{k}}{\operatorname{Diff}}_{h}f.
$$

Therefore

$$
\mathop{\sum }\limits_{{k = 1}}^{n}\left| {{\operatorname{Av}}_{h}f\left( {d}_{k}\right)  - {\operatorname{Av}}_{h}f\left( {c}_{k}\right) }\right|  \leq  \mathop{\sum }\limits_{{k = 1}}^{n}{\int }_{{c}_{k}}^{{d}_{k}}\left| {{\operatorname{Diff}}_{h}f}\right|  = {\int }_{E}\left| {{\operatorname{Diff}}_{h}f}\right| ,
$$

where $E = \mathop{\bigcup }\limits_{{k = 1}}^{n}\left( {{c}_{k},{d}_{k}}\right)$ has measure less than $\delta$ . Thus, by the choice of $\delta$ ,

$$
\mathop{\sum }\limits_{{k = 1}}^{n}\left| {{\mathrm{{Av}}}_{h}f\left( {d}_{k}\right)  - {\mathrm{{Av}}}_{h}f\left( {c}_{k}\right) }\right|  < \epsilon /2\text{ for all }0 < h \leq  1.
$$

Since $f$ is continuous, take the limit as $h \rightarrow  {0}^{ + }$ to obtain

$$
\mathop{\sum }\limits_{{k = 1}}^{n}\left| {f\left( {d}_{k}\right)  - f\left( {c}_{k}\right) }\right|  \leq  \epsilon /2 < \epsilon
$$

122 Chapter 6 Differentiation and Integration Hence $f$ is absolutely continuous.

To prove the converse, suppose $f$ is absolutely continuous. The preceding theorem is the As the difference of increasing absolutely continuous functions is increasing, so that the divided difference functions are not close to $\delta  > 0$ such that graph lifts of ${\left\{  {\operatorname{Diff}}_{h}f\right\}  }_{0 < h \leq  1}$ , let $\epsilon  > 0$ . We must show that there is a $0 > 0$ such that for each measurable subset $E$ of(a, b),

$$
{\int }_{E}{\operatorname{Diff}}_{h}f < \epsilon \text{ if }m\left( E\right)  < \delta \text{ and }0 < h \leq  1. \tag{25}
$$

According to Theorem 11 of Chapter 2, a measurable set $F$ is contained in $\alpha  \in  C$ and $G$ $m\left( {x \sim  E}\right)  = 0$ . But every ${G}_{\delta }$ set is the intersection of a descending set of a the reviewer, every open set is the disjoint union of a countable collection of components Therefore every open set is the union of an ascending sequence of open set There is the union of a finite disjoint collection of open intervals. Therefore, by the other correction, to verify (25) it suffices to find a $\delta  > 0$ such that for ${\left\lbrack  \left( a, d\right) \right\rbrack  }^{n}$ , disjoint collection of open subintervals of(a, b),

$$
{\int }_{E}{\operatorname{Diff}}_{h}f < \epsilon /2\text{ if }m\left( E\right)  < \delta \text{, where }E = \mathop{\bigcup }\limits_{{k = 1}}^{n}\left( {{c}_{k},{d}_{k}}\right) \text{, and }0 < h \leq  1. \tag{26}
$$

Choose $\delta  > 0$ as the response to the $\epsilon /2$ challenge regarding the criterion for the absolute cancellation, $f$ on $\left\lbrack  {a, b + 1}\right\rbrack$ . By a change of variables for the Riemann integral and

${\int }_{u}^{v}{\operatorname{Diff}}_{h}f = \frac{1}{h} \cdot  {\int }_{0}^{h}g\left( t\right) {dt}$ , where $g\left( t\right)  = f\left( {v + t}\right)  - f\left( {u + t}\right)$ for $0 \leq  t \leq  1$ and $a \leq  u < v \leq  b$ .

Therefore, if ${\left\{  \left( {c}_{k},{d}_{k}\right) \right\}  }_{k = 1}^{n}$ is a disjoint collection of open subintervals of(a, b),

$$
{\int }_{E}{\operatorname{Diff}}_{h}f = \frac{1}{h} \cdot  {\int }_{0}^{h}g\left( t\right) {dt}
$$

where

$$
E = \mathop{\bigcup }\limits_{{k = 1}}^{n}\left( {{c}_{k},{d}_{k}}\right) \text{ and }g\left( !\right)  = \mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {f\left( {{d}_{k} + t}\right)  - f\left( {{c}_{k} + t}\right) }\right\rbrack  \text{ for all }0 \leq  t \leq  1.
$$

If $\mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {{d}_{k} - {c}_{k}}\right\rbrack   < \delta$ , then, for $0 \leq  t \leq  1,\mathop{\sum }\limits_{{k = 1}}^{n}\left\lbrack  {\left( {{d}_{k} + t}\right)  - \left( {{c}_{k} + t}\right) }\right\rbrack   < \delta$ , and therefore $g\left( t\right)  < \epsilon /2$ .

$$
{\int }_{E}{\operatorname{Diff}}_{h}f = \frac{1}{h} \cdot  {\int }_{0}^{h}g\left( t\right) {dt} < \epsilon /2.
$$

Hence (26) is verified for this choice of $\delta$ .

Remark For a nondegenerate closed, bounded interval $\left\lbrack  {a, b}\right\rbrack$ , let ${\mathcal{F}}_{Lin},{\mathcal{F}}_{AC}$ , and ${\mathcal{F}}_{BV}$ denote the families of functions on $\left\lbrack  {a, b}\right\rbrack$ that are Lipschitz, absolutely continuous and of bounded variation, respectively. We have the following strict inclusions:

$$
{\mathcal{F}}_{\text{Lip }} \subseteq  {\mathcal{F}}_{AC} \subseteq  {\mathcal{F}}_{BV} \tag{27}
$$