Here is an important result we talked about in class, that the composition of continuous functions is continuous.

Theorem 1. Let $g : \left( {a, b}\right)  \rightarrow  \left( {A, B}\right)$ be continuous and $f : \left( {A, B}\right)  \rightarrow  \mathbb{R}$ also be continuous. Then the composition $f \circ  g : \left( {a, b}\right)  \rightarrow  \mathbb{R}$ is continuous. (The composition $f \circ  g$ is the function defined by $\left( {f \circ  g}\right) \left( x\right)  = f\left( {g\left( x\right) }\right)$ .)

Problem 1. Prove this along the following lines. Let ${x}_{0} \in  \left( {a, b}\right)$ and $\varepsilon  > 0$ . (a) Explain why there here is a ${\delta }_{1} > 0$ so that

$$
\left| {y - g\left( {x}_{0}\right) }\right|  < {\delta }_{1}\; \Rightarrow  \;\left| {f\left( y\right)  - f\left( {g\left( {x}_{0}\right) }\right) }\right|  < \varepsilon .
$$

Hint: Any "solution" that has more than four sentences will be marked wrong. It is a definition.

(b) Explain why there is a $\delta  > 0$ so that

$$
\left| {x - {x}_{0}}\right|  < \delta \; \Rightarrow  \;\left| {g\left( x\right)  - g\left( {x}_{0}\right) }\right|  < {\delta }_{1}
$$

Hint: See the previous hint.

(c) Finish the proof.

Theorem 2. Let $f : I \rightarrow  \mathbb{R}$ be a continuous function on the interval I. If $f$ is injective (i.e. one-to-one) then $f$ is strictly monotone. (That is $f$ is either strictly increasing or strictly decreasing.)

Proof. We are not going to prove this. It is not hard, but after looking at several texts, the only proofs I could find evolved really annoying proofs by cases. (The lemma needed is that if $f$ is injective, but not strictly monotone, then there are ${x}_{1} < {x}_{2} < {x}_{3}$ in the domain of $f$ so that $f\left( {x}_{2}\right)$ is not between $\left. {f\left( {x}_{1}\right) \text{and}f\left( {x}_{3}\right) \text{.}}\right)$

Remark. As we know that the square root function is continuous on $\lbrack 0,\infty )$ , that polynomials are continuous, and rational functions are continuous at points where the denominator is not zero, the last result implies the following are continuous

$$
f\left( x\right)  = \sqrt{5{x}^{4} + 2{x}^{2} + 3}\;\text{(the stuff in the}\sqrt{}\text{is positive)}
$$

$$
g\left( x\right)  = \frac{\sqrt{{x}^{2} + 9}}{{x}^{4} + 7}.
$$

And once we know that cos is continuous we will have that

$$
h\left( x\right)  = \cos \left( \frac{{x}^{2} + {\cos }^{2}\left( x\right) }{5 + \sqrt{2 + \cos \left( x\right) }}\right)
$$

is continuous. And of course we can build up much more complicated functions by repeated use of function composition.

Proposition 3. Let $f : \left\lbrack  {a, b}\right\rbrack   \rightarrow  \left\lbrack  {A, B}\right\rbrack$ be continuous and strictly increasing. Then the inverse ${f}^{-1} : \left\lbrack  {A, B}\right\rbrack   \rightarrow  \left\lbrack  {a, b}\right\rbrack$ is also strictly increasing. (A corresponding statement is true for continuous strictly decreasing functions.)

Problem 2. Prove this.

Problem 3. Let $f : \left( {a, b}\right)  \rightarrow  \left( {A, B}\right)$ be continuous and onto (i.e. surjective) and strictly increasing. Show that for any ${y}_{0} \in  \left( {A, B}\right)$ that

$$
\mathop{\lim }\limits_{{y \rightarrow  {y}_{0}^{ - }}}{f}^{-1}\left( y\right)  = {f}^{-1}\left( {y}_{0}\right) .
$$

Hint: From Proposition 3 the function ${f}^{-1}$ is increasing. Therefore

$$
\alpha  = \mathop{\lim }\limits_{{y \rightarrow  {y}_{0}^{ - }}}{f}^{-1}\left( y\right)
$$

exits from a result you proved on the last homework. Assume, towards a contradiction, that $\alpha  \neq  {f}^{-1}\left( {y}_{0}\right)$ .

(a) Then $\alpha  < {f}^{-1}\left( {y}_{0}\right)$ . Hint: As ${f}^{-1}$ is increasing, if $y < {y}_{0}$ , then ${f}^{-1}\left( y\right)  < {f}^{-1}\left( {y}_{0}\right)$ .

(b) Show if $y < {y}_{0}$ , then ${f}^{-1}\left( y\right)  \leq  \alpha$ .

(c) As $f$ is increasing and $\alpha  < {f}^{-1}\left( {y}_{0}\right)$ we have $f\left( \alpha \right)  < f\left( {{f}^{-1}\left( {y}_{0}\right) }\right)  = {y}_{0}$ . Let ${y}_{1}$ be so that $f\left( \alpha \right)  < {y}_{1} < {y}_{0}$ . Explain why there is an ${x}_{1}$ with $f\left( {x}_{1}\right)  = {y}_{1}$ . Thus ${f}^{-1}\left( {y}_{1}\right)  = {x}_{1}$ .

(d) Explain why (c) contradicts (b) which completes the proof. Hint: Show ${f}^{-1}\left( {y}_{1}\right)  > \alpha$ .