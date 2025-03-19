## Midterm 2

Modern Algebra (Math 403) Instructor: Jarod Alper Winter 2018 February 23, 2018 Name:

## Read all of the following information before starting the exam:

- You may not consult any outside sources (calculator, phone, computer, textbook, notes, other students, ...) to assist in answering the exam problems. All of the work will be your own!

- Write clearly!! You need to write your solutions carefully and clearly in order to convince me that your solution is correct. Partial credit will be awarded.

- Good luck!

<table><tr><td colspan="2">Problem</td><td>Points</td></tr><tr><td>1</td><td>(25 points)</td><td/></tr><tr><td>2</td><td>(25 points)</td><td/></tr><tr><td>3</td><td>(25 points)</td><td/></tr><tr><td>4</td><td>(25 points)</td><td/></tr><tr><td/><td>(100 points)</td><td/></tr></table>

Problem 1. As always, make sure your answers are fully justified.

(a) If $p$ is a prime integer, is the polynomial $f\left( x\right)  = {x}^{p} - p \in  \mathbb{Q}\left\lbrack  x\right\rbrack$ irreducible?

Solution: Since $p$ is a prime such that (1) $p$ does not divide the leading coefficient of $f,\left( 2\right) p$ divides all coefficients of $f$ other than the leading coefficient and (3) ${p}^{2}$ does not divide the constant term, we may apply Eisenstein’s criterion to conclude that $f\left( x\right)$ is irreducible.

(b) Is the polynomial $f\left( x\right)  = {x}^{4} + {3x} + 1 \in  \mathbb{Q}\left\lbrack  x\right\rbrack$ irreducible?

Solution: By Gauss’s lemma, if $f\left( x\right)  \in  \mathbb{Q}\left\lbrack  x\right\rbrack$ is reducible, then $f\left( x\right)$ has a factorization over $\mathbb{Z}\left\lbrack  x\right\rbrack$ as a product of non-constant polynomials in $\mathbb{Z}\left\lbrack  x\right\rbrack$ . This in turn implies that for every prime integer $p \in  \mathbb{Z}$ , the image of $f\left( x\right)$ under the ring homomorphism $\mathbb{Z}\left\lbrack  x\right\rbrack   \rightarrow  \mathbb{Z}/p\left\lbrack  x\right\rbrack$ is also reducible (Homework Problem 5.6). If we take $p = 2$ , then the image of $f$ in $\mathbb{Z}/2\left\lbrack  x\right\rbrack$ is $\bar{f}\left( x\right)  = {x}^{4} + x + 1$ . Since $\bar{f}\left( 0\right)  = \bar{f}\left( 1\right)  = 1,\bar{f}$ has no linear factors. On the other hand, the only irreducible polynomial in $\mathbb{Z}/2\left\lbrack  x\right\rbrack$ of degree 2 is ${x}^{2} + x + 1$ and this polynomial does not divide $\bar{f}$ (indeed, using the division algorithm, we compute that $\left. {\bar{f}\left( x\right)  = \left( {{x}^{2} + x + 1}\right) \left( {{x}^{2} + x}\right)  + 1}\right)$ . Since $\bar{f} \in  \mathbb{Z}\left\lbrack  x\right\rbrack$ has no linear or quadratic factors, $\bar{f} \in  \mathbb{Z}/2\left\lbrack  x\right\rbrack$ is irreducible and we may conclude that $f \in  \mathbb{Q}\left\lbrack  x\right\rbrack$ is irreducible.

## Problem 2.

(a) Show that there exists an irreducible polynomial $f \in  \mathbb{Z}/2\left\lbrack  x\right\rbrack$ of degree 4 .

Solution: In Problem 1(b), we saw that $f\left( x\right)  = {x}^{4} + x + 1 \in  \mathbb{Z}/2\left\lbrack  x\right\rbrack$ is irreducible.

(b) Show that there exists a finite field with 16 elements.

Solution: Since $\mathbb{Z}/2\left\lbrack  x\right\rbrack$ is a PID and $f\left( x\right)  = {x}^{4} + x + 1 \in  \mathbb{Z}/2\left\lbrack  x\right\rbrack$ is irreducible, we know from lecture that the ideal $\left( f\right)  \subset  \mathbb{Z}/2\left\lbrack  x\right\rbrack$ is maximal. Therefore $\mathbb{Z}/2\left\lbrack  x\right\rbrack  /\left( f\right)$ is a field with 16 elements.

## Problem 3.

(a) Let $p$ be a prime integer. Find a factorization of ${x}^{p} - x \in  \mathbb{Z}/p\left\lbrack  x\right\rbrack$ as a product of irreducible polynomials.

Solution: Let $f\left( x\right)  = {x}^{p} - x \in  \mathbb{Z}/p\left\lbrack  x\right\rbrack$ . Fermat’s Little Theorem states that ${a}^{p} \equiv  a{\;\operatorname{mod}\;p}$ for any integer $a$ . In other words, for every element $\alpha  \in  \mathbb{Z}/p$ , $f\left( \alpha \right)  = 0$ or equivalently $x - \alpha$ divides $f$ . The elements $x - \alpha  \in  \mathbb{Z}/p\left\lbrack  x\right\rbrack$ are pairwise relatively prime and therefore the product $\mathop{\prod }\limits_{{\alpha  \in  \mathbb{Z}/p}}\left( {x - \alpha }\right)$ also divides ${x}^{p} - x$ , but since this product has the same degree and same leading term as the polynomial $f$ , we conclude that

$$
f\left( x\right)  = \mathop{\prod }\limits_{{\alpha  \in  \mathbb{Z}/p}}\left( {x - \alpha }\right)
$$

and this is the desired factorization since each polynomial $x - \alpha$ is irreducible for $\alpha  \in  \mathbb{Z}/p$ .

(b) Find a factorization of $5 \in  \mathbb{Z}\left\lbrack  i\right\rbrack$ as a product of irreducible elements.

Solution: Clearly, we have that $5 = \left( {2 + i}\right) \left( {2 - i}\right)$ . It remains to show that both $2 + i$ and $2 - i$ are irreducible elements in $\mathbb{Z}\left\lbrack  i\right\rbrack$ . For a complex number $z = a + {bi}$ , the square of the modulus of $z$ is ${\left| z\right| }^{2} = {a}^{2} + {b}^{2}$ . Suppose $2 + i = {xy}$ with $x, y \in  \mathbb{Z}\left\lbrack  i\right\rbrack$ . Then $5 = {\left| 2 + i\right| }^{2} = {\left| x\right| }^{2}{\left| y\right| }^{2}$ . Since 5 is prime, either $\left| x\right|$ or $\left| y\right|$ must be 1 . It follows that either $x$ or $y$ is a unit. Thus, $2 + i$ is irreducible. The identical argument shows that $2 - i$ is irreducible since ${\left| 2 - i\right| }^{2}$ is also 5 .

Problem 4. Show that $\mathbb{Z}\left\lbrack  \sqrt{-2}\right\rbrack$ is a UFD.

Solution: It suffices to show that $\mathbb{Z}\left\lbrack  \sqrt{-2}\right\rbrack$ is a Euclidean domain since we may use the theorem in lecture that any Euclidean domain is a UFD. First, clearly $\mathbb{Z}\left\lbrack  \sqrt{-2}\right\rbrack$ is an integral domain as it is a subring of the complex numbers. Consider the function

$$
N : \mathbb{Z}\left\lbrack  \sqrt{-2}\right\rbrack   \rightarrow  {\mathbb{Z}}_{ \geq  0},\;a + b\sqrt{-2} \mapsto  {a}^{2} + 2{b}^{2}.
$$

Clearly, $N\left( 0\right)  = 0$ . We need to show that for any elements $x, y \in  \mathbb{Z}\left\lbrack  \sqrt{-2}\right\rbrack$ with $y \neq  0$ , then there exists $q, r \in  \mathbb{Z}\left\lbrack  \sqrt{-2}\right\rbrack$ such that $x = {qy} + r$ and with $N\left( r\right)  < N\left( q\right)$ .

Write $x = a + b\sqrt{-2}$ and $y = c + d\sqrt{-2}$ . As elements in $\mathbb{C}$ , we can write

$$
\frac{x}{y} = \frac{a + b\sqrt{-2}}{c + d\sqrt{-2}} = \frac{a + b\sqrt{-2}}{c + d\sqrt{-2}} \cdot  \left( \frac{c - d\sqrt{-2}}{c - d\sqrt{-2}}\right)  = \left( \frac{{ac} + {bd}}{N\left( y\right) }\right)  + \left( \frac{{bc} - {ad}}{N\left( y\right) }\right) \sqrt{-2}
$$

Choose integers $e, f$ such that $\left| {\frac{{ac} + {bd}}{N\left( y\right) } - e}\right|  \leq  \frac{1}{2}$ and $\left| {\frac{{bc} - {ad}}{N\left( y\right) } - f}\right|  \leq  \frac{1}{2}$ . Then

$$
{\left| \frac{x}{y} - \left( e + f\sqrt{-2}\right) \right| }^{2} = {\left| \left( \frac{{ac} + {bd}}{N\left( y\right) } - e\right)  + \left( \frac{{bc} - {ad}}{N\left( y\right) } - f\right) \sqrt{-2}\right| }^{2}
$$

$$
= {\left( \frac{{ac} + {bd}}{N\left( y\right) } - e\right) }^{2} + 2{\left( \frac{{bc} - {ad}}{N\left( y\right) } - f\right) }^{2}
$$

$$
\leq  {\left( \frac{1}{2}\right) }^{2} + 2{\left( \frac{1}{2}\right) }^{2} = \frac{3}{4}
$$

$$
\text{< 1}
$$

Let $q = e + f\sqrt{-2}$ and $r = x - {qy}$ . Then clearly we have that $x = {qy} + r$ . Moreover,

$$
N\left( r\right)  = N\left( {{qy} - x}\right)  = {\left| x - qy\right| }^{2} = {\left| y\right| }^{2} \cdot  {\left| \frac{x}{y} - q\right| }^{2} < {\left| y\right| }^{2} = N\left( y\right) .
$$

This shows that $\mathbb{Z}\left\lbrack  \sqrt{-2}\right\rbrack$ is a Euclidean domain.