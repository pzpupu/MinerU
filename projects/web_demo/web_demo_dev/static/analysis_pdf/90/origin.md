## MEMORIAL UNIVERSITY OF NEWFOUNDLAND DEPARTMENT OF MATHEMATICS AND STATISTICS

ASSIGNMENT 1 Due: Sept 14, 2007

1. Find all solutions for the following systems of linear equations by writing the solution in parametric form. How many parameters are in the solution?

(a) $\left\{  \begin{array}{l} x + y - z = 2 \\  x - y = 0 \end{array}\right.$

Solution: From the second equation we find that $x = y$ . Thus if $x$ is chosen arbitrary, say $x = t$ then $y = t$ as well. Substitute this values in the first equation to get

${2t} - z = 2$ . Thus $z = {2t} - 2$ . Finally, we write the answer in the form $\left\{  \begin{array}{l} x = t \\  y = t \\  z = {2t} - 2, \end{array}\right.$

where $t$ is any number.

There is one parameter, $t$ .

(b) $\left\{  \begin{array}{l} x + {2y} - {3z} = 4 \\  x - {2y} = 1 \end{array}\right.$

Solution: From the second equation we find that $x = {2y} + 1$ . Thus if $y$ is chosen arbitrary, say $y = t$ then $x = {2t} + 1$ . Substitute this values in the first equation to get $\left( {{2t} + 1}\right)  + {2t} - {3z} = 4$ . Thus ${3z} = {4t} - 3$ . Finally, we write the answer in the form

$\left\{  {\begin{array}{l} x = {2t} + 1 \\  y = t \\  z = \left( {{4t} - 3}\right) /3, \end{array}\text{ where }t}\right.$ is any number.

There is one parameter, $t$ .

c) $\left\{  \begin{array}{l} x + {2y} - {3z} + u = 4 \\  x + z = 0 \end{array}\right.$

Solution: From the second equation we find that $x =  - z$ . Thus if $z$ is chosen arbitrary, say $z = t$ then $x =  - t$ . Substitute this values in the first equation to get $- t + {2y} - {3t} +$ $u = 4$ . We still have freedom to choose, or example, $y = s$ . Then $- {4t} + {2s} + u = 4$ . Thus $u = 4 + {4t} - {2s}$ . Finally, we write the answer in the form $\left\{  \begin{array}{l} x =  - t \\  y = s \\  z = t \\  u = 4 + {4t} - {2s}, \end{array}\right.$ where $t$ and $s$ are any numbers.

There are two parameters, $t$ and $s$ .

(d) $x + y + z + u + v + {10} = 0$ .

Solution: We can arbitrary choose values of four variables and the remaining variables will be defined by them. For example, $\left\{  {\begin{array}{l} x = t \\  y = s \\  z = q \\  u = r \\  v =  - {10} - t - s - q - r, \end{array}\text{ where }t, s, q, r}\right.$ are any numbers. There are four parameters, $t, s, q, r$ .

2. Solve each of the systems algebraically and geometrically (or argue that it does not have a solution). Write the augmented matrix corresponding to each of the systems.

(a) $\left\{  \begin{array}{l} x + {2y} = 1 \\  x + 1 = 0 \\  y - 1 = 0 \end{array}\right.$

Answer: Algebraic solution gives $x =  - 1, y = 1$ .

Geometric solution comes from graphing three lines: $y = \left( {1 - x}\right) /2, x =  - 1, y = 1$ , and observing that they all intersect at point(-1,1).

Augmented matrix is $\left\lbrack  \begin{array}{rrr} 1 & 2 & 1 \\  1 & 0 &  - 1 \\  0 & 1 & 1 \end{array}\right\rbrack$

(b) $\left\{  \begin{array}{l} x + {2y} = 3 \\  {10y} + {5x} = {30} \end{array}\right.$

Answer:

Algebraic solution leads to the conclution that the system is inconsistent (no such pair(x, y)is possible).

Geometric solution comes from graphing two lines: $y = \left( {3 - x}\right) /2 =  - x/2 + 3/2$ , $y =  - x/2 + 3$ , and observing that they are parallel, and thus there is no point of intersection.

Augmented matrix is $\left\lbrack  \begin{array}{rrr} 1 & 2 & 3 \\  5 & {10} & {30} \end{array}\right\rbrack$

(c) $\left\{  \begin{array}{l} x + {2y} = 1 \\  x - 1 = 0 \\  y + 1 = 0 \end{array}\right.$

Answer:

Algebraic solution leads to the conclution that the system is inconsistent (no such pair(x, y)is possible).

Geometric solution comes from graphing three lines: $y = \left( {1 - x}\right) /2, x = 1, y =  - 1$ , and observing that there is no common point of intersection.

Augmented matrix is $\left\lbrack  \begin{array}{rrr} 1 & 2 & 1 \\  1 & 0 & 1 \\  0 & 1 &  - 1 \end{array}\right\rbrack$

(d) $\left\{  \begin{array}{l} x + {2y} = 1 \\  x - {2y} = 1 \end{array}\right.$

Answer:

Algebraic solution gives $x = 1, y = 0$ .

Geometric solution comes from graphing two lines: $y = \left( {1 - x}\right) /2, y = \left( {x - 1}\right) /2$ , and observing that they intersect at point(1,0).

Augmented matrix is $\left\lbrack  \begin{array}{rrr} 1 & 2 & 1 \\  1 &  - 2 & 1 \end{array}\right\rbrack$

3. Write a linear system corresponding to the given augmented matrix.

$$
\left\lbrack  \begin{array}{rrrrrr} 6 & 2 &  - 3 & 4 & 1 & 0 \\  5 & 0 & 0 & 1 & {200} & 2 \end{array}\right\rbrack
$$

Answer:

$$
\left\{  \begin{array}{l} {6x} + {2y} - {3z} + {4u} + {5v} = 0 \\  {5x} + u + {200v} = 2 \end{array}\right.
$$

4. Give an example of a system of three linear equations in two variables that has infinitely many solutions.

Answer:

$$
\left\{  \begin{array}{l} x + y = 1 \\  {2x} + {2y} = 2 \\  {3x} + {3y} = 3 \end{array}\right.
$$

such a system has parametric solution $\left\{  \begin{array}{l} x = t \\  y = 1 - t, \end{array}\right.$ where $t$ is arbitrary number. This gives infinitly many solutions.

5. In order to cook a party-style pizza Margo needs 10 mushrooms and 3 large tomatoes. For a casual-style pizza she needs 5 mushrooms and 2 large tomatoes. Given that 200 mushrooms and 70 large tomatoes were consumed in a cooking, find how many pizzas of each style were cooked by Margo.

Solution: Let $x$ be the number of party-style pizzas and $y$ be the number of casual-style pizzas. Then we have system of linear equations $\left\{  \begin{array}{l} {10x} + {5y} = {200} \\  {3x} + {2y} = {70} \end{array}\right.$ Solving the system we have $x = {10}, y = {20}$ .

Thus the answer is: Margo cooked 10 party-style pizzas and 20 casual-style pizzas, and thus she must have been exhausted!

6. Compose your own word problem that requires solution of a system of linear equations. Solve the problem.