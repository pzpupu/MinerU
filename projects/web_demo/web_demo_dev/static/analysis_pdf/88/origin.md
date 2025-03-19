## Combinatorics

Po-Shen Loh

June 2012

## 1 Problems

1. (Team contest 2012.) Prove that every simple planar graph can be oriented so that all out-degrees are at most 3 .

Solution: Every planar graph has the property that $E < {3V}$ . We seek a perfect matching from the left in the following auxiliary bipartite graph. The left side has one vertex corresponding to each edge of the planar graph. The right side has 3 copies of the original vertex set. We link a vertex of the left (corresponding to an edge ${uv}$ ) to all 3 copies of each of $u$ and $v$ on the right.

Suppose the Hall condition fails, i.e., that there is a subset $S$ of the left such that it has $\left| {N\left( S\right) }\right|  < \left| S\right|$ . Let $s = \left| S\right|$ , and note that $\left| {N\left( S\right) }\right|  = {3t}$ for some integer $t$ , because everything on the right is in triplicate. This means that in our original graph, there is a subset of $t$ vertices which spans at least $s > {3t}$ edges, which is impossible.

2. (Sweden 2010.) A herd consists of 101 cows. Any 100 of them can be split into two groups of 50 cows each such that the weights of the two groups are equal. Prove that all the cows have the same weight.

Solution: Let the weights of the cows be the vector $x = {\left( {x}_{1},\ldots ,{x}_{101}\right) }^{t}$ . Then there is a particular matrix $A$ with entries from $\{ 0, \pm  1\}$ such that ${Ax} = 0$ , and the structure of $A$ is such that the main diagonal is entirely 0, and in each row, the number of +1 's is exactly 50, and the number of -1 's is exactly 50. Observe that the all-ones vector is in the null space of $A$ . It suffices to show that the dimension of the null space is exactly 1 . Let $n = {101}$ .

To see this, consider the $\left( {n - 1}\right)  \times  \left( {n - 1}\right)$ upper left submatrix of $A$ , and call this $B$ . The structure of $B$ is such that it has all 0 ’s on the main diagonal, and every other entry is $\pm  1$ . Its determinant modulo 2 is precisely the same as the determinant of the matrix $C = {J}_{n - 1} - {I}_{n - 1}$ over ${\mathbb{F}}_{2}$ . Note that ${C}^{2} = {J}_{n - 1}^{2} - 2{J}_{n - 1} + {I}_{n - 1} = {I}_{n - 1}$ because ${J}_{n - 1}$ has even dimension. So $C$ is non-singular, hence its determinant over ${\mathbb{F}}_{2}$ is 1, hence its determinant over $\mathbb{R}$ is odd, hence nonzero.

Therefore, $B$ has rank $n - 1$ , i.e., its column space has dimension $n - 1$ . Now turn $B$ into an $\left( {n - 1}\right)  \times  n$ matrix ${B}^{\prime }$ by adding back the rightmost column. This could only increase the dimension of the column space, but the column space already has full rank, so the rank of ${B}^{\prime }$ is $n - 1$ . Therefore, the rank of $A$ is at least $n - 1$ , and the dimension of the null space is exactly 1 as we already have found an annihilating vector.

3. (Sweden 2010.) A town has ${3n}$ citizens. Any two persons in the town have at least one common friend in this same town. Show that one can choose a group consisting of $n$ citizens such that every person of the remaining ${2n}$ citizens has at least one friend in this group of $n$ .

Solution: The codegree condition implies that the diameter of the graph is at most 2 . We prove that every $n$ -vertex graph with diameter $\leq  2$ has a dominating set (a subset $S$ of vertices such that every other vertex is either in, or has a neighbor in $S$ ) of size only $\leq  \sqrt{n\log n} + 1$ . To see this, let $p = \sqrt{\frac{\log n}{n}}.$

Observe that since the diameter is at most 2, if any vertex has degree $\leq  {np}$ , then its neighborhood already is a dominating set of suitable size. Therefore, we may assume that all vertices have degree strictly greater than ${np}$ . It feels "easy" to find a small dominating set in this graph because all degrees are high. Consider a random sample of ${np}$ vertices (selected uniformly at random, with replacement), and let $S$ be their union. Note that $\left| S\right|  \leq  {np}$ . Now the probability that a particular fixed vertex $v$ fails to have a neighbor in $S$ is strictly less than ${\left( 1 - p\right) }^{np}$ , because we need each of ${np}$ independent samples to miss the neighborhood of $v$ . This is at most ${e}^{-n{p}^{2}} \leq  {e}^{-\log n} = {n}^{-1}$ . Therefore, a union bound over the $n$ choices of $v$ produces the result.

4. (Graham-Pollak.) If the edges of the complete graph ${K}_{n}$ are partitioned into the disjoint union of $m$ complete bipartite graphs, then $m \geq  n - 1$ .

5. (Belarus 2010, adapted.) A $6 \times  6$ table is given, with some cells colored black and some colored white. You can take any $t \times  t$ square in the table, with $2 \leq  t \leq  6$ , and invert all of the colors in the square. You can do this as many times as you wish. Is it always possible to reach the all-black configuration?

Solution: Answer: no. The elementary operations do not span enough dimension in ${\mathbb{F}}_{2}^{36}$ . There are ${252} \times  2$ squares. Note that if we take the ${43} \times  3$ squares inside a $4 \times  4$ region, then their sum ${\;\operatorname{mod}\;2}$ is just the 4 corners. Then we can add in $4\;2 \times  2$ squares, two filling the middle columns and two filling the middle rows. This now gave a sum mod 2 with 1 ’s everywhere except the central $2 \times  2$ . Adding that one on top, we find the all 1’s $4 \times  4$ square, which after adding the ${42} \times  2$ squares that cover it, give all-0 . Therefore, if we already have all of the $2 \times  2$ squares in our basis, we can generate the 4th $3 \times  3$ square in any $4 \times  4$ area. So, we only need to take the top-left $3 \times  3$ square, the 3 more $3 \times  3$ squares along the top row, and the 3 more $3 \times  3$ squares along the left side. From these we can generate all the rest of the $3 \times  3$ squares, and this has cost us only 7 generators.

A similar argument shows that 3 of the $5 \times  5$ squares in the table generate the fourth. All $4 \times  4$ and $6 \times  6$ squares can be generated from the $2 \times  2$ squares, so we are able to generate everything using only ${25} + 7 + 3 = {35} < {36}$ vectors, and therefore cannot fill ${\mathbb{F}}_{2}^{36}$ .

6. (Sperner capacity of cyclic triangle, also Iran 2006.) Let $A$ be a collection of vectors of length $n$ from ${\mathbb{Z}}_{3}$ with the property that for any two distinct vectors $a, b \in  A$ there is some coordinate $i$ such that ${b}_{i} = {a}_{i} + 1$ , where addition is defined modulo 3 . Prove that $\left| A\right|  \leq  {2}^{n}$ .

Solution: For each $a \in  A$ , define the ${\mathbb{Z}}_{3}$ -polynomial ${f}_{a}\left( \mathbf{x}\right)  \mathrel{\text{:=}} \mathop{\prod }\limits_{{i = 1}}^{n}\left( {{x}_{i} - {a}_{i} - 1}\right)$ . Observe that this is multilinear. Clearly, for all $a \neq  b \in  A,{f}_{a}\left( b\right)  = 0$ , and ${f}_{a}\left( a\right)  \neq  0$ ; therefore, the ${f}_{a}$ are linearly independent, and bounded in cardinality by the dimension of the space of multilinear polynomials in $n$ variables, which is ${2}^{n}$ .

7. Let $\mathbf{A}$ be an $m \times  n$ matrix over ${\mathbb{F}}_{2}$ , and let1be the $m$ -element all-ones vector in ${\mathbb{F}}_{2}^{m}$ . Then the matrix equation $\mathbf{{Ax}} = \mathbf{1}$ has no solution if and only if there is an odd number of row vectors in $\mathbf{A}$ whose sum (over ${\mathbb{F}}_{2}$ ) is the zero vector.

Solution: The "if" direction is obvious, because the sum of the equations corresponding to those special row vectors would yield0on the LHS, while the RHS would be1, because the sum of an odd number of 1 's is 1 .

For the "only if" direction, suppose that the bulleted condition is not fulfilled; we will show that there is a solution. Apply Gaussian Elimination, reducing the matrix $\left\lbrack  {\mathbf{A},\mathbf{1}}\right\rbrack$ to row-reduced-echelon form. Note that this process replaces every row by a linear combination of the original rows. However, over ${\mathbb{F}}_{2}$ , linear combinations are simply sums of selected rows, because the only scalars are $\{ 0,1\}$ . By our assumption, this process will never create a row that looks like $\left\lbrack  {0,\ldots ,0,1}\right\rbrack$ , which is the only obstruction to the existence of a solution. Therefore, a solution exists.

8. (Sutner; also Iran TST 1996 and Germany TST 2004.) Suppose that each of the vertices of a simple graph is equipped with an indicator light and a button. Each vertex's button simultaneously toggles the states of all of its neighbors, as well as its own state. Initially, all lights are off. Prove that it is possible to turn on all of the lights.

Solution: Let $A$ be the adjacency matrix plus the identity matrix, which is a matrix of zeroes and ones which is symmetric $\left( {{A}_{ij} = {A}_{ji}}\right.$ for all $\left. {i, j}\right)$ such that ${A}_{ii} = 1$ for all $i$ . We show that there exists a subset of the rows whose sum is a vector all of whose components are odd. Let a selection correspond to a vector $\mathbf{x}$ over ${\mathbb{F}}_{2}$ . A valid selection is a solution of ${\mathbf{A}}^{T}\mathbf{x} = \mathbf{1}$ , which is the same as $\mathbf{{Ax}} = \mathbf{1}$ since $\mathbf{A}$ is symmetric. Consider an odd collection of rows, say indexed by $\left\{  {{r}_{1},\ldots ,{r}_{t}}\right\}$ . Create the $t$ -vertex graph $G$ with adjacency matrix corresponding to the indices $\left\{  {{r}_{1},\ldots ,{r}_{t}}\right\}$ , but not putting loops on each vertex (as would have been required since all ${A}_{ii} = 1$ ).

We need to show that the sum of this odd collection of rows is nonzero. But suppose it is zero. Then, since each ${A}_{{r}_{i}{r}_{i}} = 1$ , the graph $G$ must have all degrees odd. However, $G$ also has an odd number of vertices, which is impossible! Therefore, the previous problem ensures that there is a solution.

9. (Gallai; also USAMO 2008/6.) The vertex set of any graph can be partitioned into two (possibly empty) sets such that each set induces a subgraph with all degrees even.

Solution: Hint: for every vertex $v$ of even degree, attach a brand new vertex ${v}^{\prime }$ which is adjacent only to it. Now all degrees are odd, hence all sets $N\left( v\right)  \cup  \{ v\}$ are even, and so if $X$ is an odd-parity cover, then ${X}^{c}$ is also an odd-parity cover. Immediately, we have that all degrees within each $X$ and ${X}^{c}$ are even, but there are extra vertices, so we need to show that deleting the extra vertices keeps all degrees even.

But every special pair $\left\{  {v,{v}^{\prime }}\right\}$ as introduced above must be separated by any odd-parity cover, because ${v}^{\prime }$ has degree exactly 1 . Therefore, if we restrict both of $X$ and ${X}^{c}$ to the original vertex set (simply discarding the new vertices ${v}^{\prime }$ ), all degrees will still be even.

10. (Sweden 2010.) Some of $n$ students in a class $\left( {n \geq  4}\right)$ are friends. Any $n - 1$ students in the class can form a circle so that any two students next to each other on the circle are friends, but all $n$ students cannot form a similar circle. Find the smallest possible value of $n$ .

Solution: Answer: $n = {10}$ , the Petersen graph. It is well-known that the Petersen graph is not Hamiltonian, but it is easy to see that if one deletes any vertex, one can find a Hamilton cycle. This is easy to check by symmetry, because all outer vertices are the same, and all inner vertices are the same.

To see why Petersen is not Hamiltonian, observe that it is two disjoint 5-vertex graphs linked by a single perfect matching. Any Hamilton cycle must cross back and forth between the parts. If it just goes across once, and then back, then on each side it must visit all 5 vertices in one go. Those are paths of length 4 , and it's easy to see that if one takes 4 consecutive edges along the outer cycle, then it doesn't complete to an H-cycle. Otherwise, the H-path must go across, back, across, and back. It can't do more times because there are only 5 matching edges. In this case, WLOG start with two consecutive outer edges, and take forced moves until we are stuck without an H-cycle.

Now we must show that no $n \leq  9$ will work. First key observation: if there is a vertex of degree 2 or less, then it's impossible. Indeed, if so, then delete a neighbor of it; the remainder must be Hamiltonian, but now this vertex has degree $\leq  1$ , contradiction. Thus the minimum degree is at least 3, which already disposes of all cases $n \leq  6$ .

Next observation: let $v$ be the max-degree vertex. Since $G - v$ is still Hamiltonian, take an H-cycle of the remainder. If two adjacent vertices of the cycle are neighbors of $v$ , then we can extend, contradiction. So $v$ ’s neighbors on the cycle are separated by at least one vertex each.

For $n = 7$ , we can’t have all degrees equal to 3, because the sum of degrees must be even. Thus there is a degree-4 vertex. But the remainder cycle has 6 vertices, so it's impossible to alternate. (Another way to see that $n = 7$ fails: using an H-cycle from $G - v$ , and then adding $v$ , we get an H-path with $v$ as an endpoint, but the other endpoint has degree $\geq  3$ , and $4 + 3 \geq  n$ , so the Ore-type condition wins.) For $n = 8$ , the above alternating condition shows that it is over if there is a vertex of degree 4 . Hence the graph is 3-regular. Pull out a vertex, and look on the remaining 7-cycle. Add back its neighbors, and there is actually only one way to do so with proper spacing. Then there are only 2 ways to complete to a 3-regular graph, and in both cases the entire thing is Hamiltonian.

For $n = 9$ , we can’t have all odd degrees, so there’s a vertex of degree 4 . It must interact with the remaining 8-cycle in exactly one way: alternating neighbors. Now the rest of the vertices on the 8-cycle need degrees $\geq  3$ . Let $A$ be the set of neighbors of $v$ , and let $B$ be the others. If two consecutive (separated only by a single vertex of $A$ ) vertices of $B$ are adjacent, then one can see that the whole thing is Hamiltonian. If two opposite vertices of $B$ are adjacent, then also the whole thing is Hamiltonian. Thus the only way to relieve the degrees is to have the vertices of $B$ adjacent to vertices of $A$ that they are not already adjacent to. And we can't create any vertices of degree 5 , or else done by failing to alternate as above. Then there is exactly one way to make this graph, and already, all vertices of $A$ have degree 4 and all vertices of $B$ have degree 3, and $v$ has degree 4 . No more edges can be added because connecting two vertices of $B$ wins already as above. Thus this is the whole graph. But deleting any vertex of $A$ we can see that the remainder is not Hamiltonian.

11. (Hungary 2010.) Prove that the edges of the complete graph with 2009 vertices can be labeled with $1,2,\ldots ,\left( \begin{matrix} {2009} \\  2 \end{matrix}\right)$ such that the sum of the labels corresponding to all edges having a given vertex is different for any two vertices.

Solution: Let $n = {2009}$ . Consider the random labeling. Let $u$ and $v$ be two fixed vertices. The label of the edge between $u$ and $v$ is irrelevant for the bad event that the label sums are equal at $u$ and $v$ . Expose the $n - 2$ labels of edges from $u$ to $\left\lbrack  n\right\rbrack   \smallsetminus  \{ u, v\}$ . Let their sum be $S$ . Next we want to expose the $n - 2$ labels of the edges from $v$ to $\left\lbrack  n\right\rbrack   \smallsetminus  \{ u, v\}$ . It suffices to show that conditioned on the $n - 2$ labels we already saw from $u$ , their sum equals $S$ with probability less than $1/\left( \begin{array}{l} n \\  2 \end{array}\right)$ , because then a union bound implies that there is a labeling that avoids all bad events.

Intuitively, the probability is actually of order ${n}^{-5/2}$ . To see this, suppose that the $n - 2$ new random labels are sampled independently with replacement from the full set $I = \left\{  {1,\ldots ,\left( \begin{array}{l} n \\  2 \end{array}\right) }\right\}$ . If we sample one integer from $I$ , the variance is of order ${n}^{4}$ . Therefore, the variance of this slightly different sum is of order ${n}^{5}$ , and since we are adding i.i.d. random variables, the distribution is "nice", and the probability that the sum is any particular number is of order at most ${n}^{-5/2}$ .

Now we formalize this. We make exactly $n - 3$ i.i.d. samples from $I$ . After this, we look to see whether we ever got the same label multiple times, or if we repeated a label we saw from $u$ . For each of these occurrences, we re-sample uniformly from $I$ until we find new labels, and ultimately build a set of $n - 3$ distinct new labels. Finally, we repeat this procedure until we get a final new label, and that produces a set of $n - 2$ labels which are distinct from those from $u$ , while also uniformly distributed over all possibilities.

The first observation is that during the first round, the probability that we hit a repeat label is less than $\left( {{2n} - 2}\right) /\left( \begin{array}{l} n \\  2 \end{array}\right)  = \frac{4}{n}$ . Therefore, the number of times we will have to resample in the second round is stochastically dominated by $\operatorname{Bin}\left\lbrack  {n,\frac{4}{n}}\right\rbrack$ , and the probability that such a Binomial exceeds $\log n$ is at

most

$$
\left( \begin{matrix} n \\  \log n \end{matrix}\right) {\left( \frac{4}{n}\right) }^{\log n} < {\left( \frac{4e}{\log n}\right) }^{\log n} \ll  {n}^{-3}.
$$

Now note that success (getting a sum of exactly $S$ ) comes in one of two ways: (1) if the Binomial exceeds $\log n$ , and then we get lucky, or (2) the Binomial stays below $\log n$ , the sum of the $n - 3$ labels after the first round is within ${n}^{2}\log n$ of $S$ , and then after the second round, the final label in the third round makes the sum exactly $S$ . The chance of winning from (1) is at most ${n}^{-3}$ from above. The chance of winning from (2) is at most the probability that the sum of the $n - 3$ labels after the first round is within ${n}^{2}\log n$ of $S$ , and the final label makes the sum exactly $S$ .

We calculate this by multiplying upper bounds of the probabilities that (a) the first round sum is within ${n}^{2}\log n$ of $S$ and (b) the conditional probability that the third round label makes the sum exactly equal to $S$ . The latter probability is obviously at most $\frac{3}{{n}^{2}}$ because there is only one choice for it which would make the sum $S$ . The probability of (a) can be bounded by the Central Limit Theorem, because the first round sum is precisely the sum of i.i.d. random variables with bounded second moment. So, by the CLT, the probability that this sum lies within any given window of at most ${n}^{2}\log n$ , given that the variance of the sum should be of order ${n}^{5}$ , is $o\left( 1\right)$ .

12. (Sweden 2010.) The numbers $1,2,\ldots ,{n}^{2}$ are placed randomly in an $n \times  n$ table. Prove that there are two adjacent cells (in a row or a column) such that the numbers in them differ by at least $n$ .

Solution: Isoperimetric inequality. Consider where the numbers $1,2,\ldots , t$ have been placed. Look on all squares that are adjacent to these (the "vertex" expansion). If the number of such squares is at least $n$ , then immediately we know that by the time $t + 1,\ldots , t + n$ are placed, in particular the $t + n$ one must be close to a square with a number $\leq  t$ (like a pigeonhole type of idea). The key transition point is when $t = \frac{n\left( {n - 1}\right) }{2}$ . At this point, the boundary must have at least $n$ squares.

Some ideas on how to show this: you can compress the hit squares toward the left, and only reduce the boundary. You can then compress all hit squares down, and only reduce the boundary. Now we have a staircase pattern. Let the nonzero rows have ${a}_{1} \geq  {a}_{2} \geq  \cdots  \geq  {a}_{m}$ hit squares. Any ${a}_{i}$ which is not the full $n$ can contribute +1 to the boundary (at its right end). Also, if ${a}_{i} > {a}_{i + 1}$ , then we contribute ${a}_{i} - {a}_{i + 1}$ . These can be reconciled by saying that the boundary is the sum of all ${a}_{i} - {a}_{i + 1}$ , adding another +1 for every pair with ${a}_{i} = {a}_{i + 1}$ .

## 2 More problems

1. (Balkan 2001/4, adapted.) A cube of side 3 is divided into 27 unit cubes. The unit cubes are labeled 1 to 27, in lexicographical order according to their 3-dimensional coordinates. A move consists of swapping the cube labeled 27 with one of its 6 neighbors. Is it possible to find a finite sequence of moves at the end of which cube 27 is in its original position, but every one of cubes $1,2,\ldots ,{26}$ has moved to the positions originally occupied by cubes ${26},{25},\ldots ,1$ ?

Solution: No. In order for 27 to return to its initial position, we must take an even number of swaps, so the parity of the permutation must remain invariant. However, we are asking for 13 transpositions, which is an odd relative permutation.

2. (Balkan 1994/3.) Let ${a}_{1},{a}_{2},\ldots ,{a}_{n}$ be a permutation of the numbers $1,2,\ldots , n$ , with $n \geq  2$ . Determine the largest possible value of the sum

$$
S\left( n\right)  = \left| {{a}_{2} - {a}_{1}}\right|  + \left| {{a}_{3} - {a}_{2}}\right|  + \cdots  + \left| {{a}_{n} - {a}_{n - 1}}\right| .
$$

Solution: Each absolute value is replaced by either $+ \left( \cdot \right)$ or $- \left( \cdot \right)$ . This has the effect of creating $\mathop{\sum }\limits_{i}{\delta }_{i}{a}_{i}$ where ${\delta }_{1},{\delta }_{n}$ are each only $\pm  1$ , and all other ${\delta }_{i}$ are in $\{ 0, \pm  2\}$ , with the constraint that the sum of all coefficients ${\delta }_{i}$ is exactly 0 . Given a ${\delta }_{i}$ sequence, the Rearrangement inequality tells us that the optimal permutation is aligned in the same order as the ${\delta }_{i}$ .

So, if we had a pair of 0 ’s, we’d be better off replacing them with a pair of ±2, because one can ensure to assign the $\pm  2$ in the order that gives positive contribution to the total sum. If there is exactly one 0, then we can take one of the $\pm  1$ ’s, and flip its sign, and then adjust the 0 to one of $\pm  2$ to conserve the total sum equal to zero. If necessary, we can also swap the ${a}_{i}$ ’s so that they are arranged in the proper order with the new ${\delta }_{i}$ . This always improves the sum. Therefore, there are no 0 ’s, and the unique way to do this is to have the number of +2 and -2 as balanced as possible, and using the unique way to finish with one each of +1 and -1 , or two of the same.

It remains to show that there is a way to select the permutation that achieves this maximum from Rearrangement. It’s easy to see that this always works, by considering the cases of $n$ odd and $n$ even separately.

3. (Balkan 1994/4.) Find the smallest number $n \geq  5$ for which there can exist a set of $n$ people, such that any two people who are acquainted have no common acquaintances, and any two people who are not acquainted have exactly two common acquaintances.

Solution: Answer: 16, corresponding to the Clebsch graph, a strongly regular graph. Construction: Cayley graph on ${\mathbf{Z}}_{2}^{4}$ , with generators 1000,0100,0010,0001,1111. The key is that we have an Abelian group, with all elements of order 2, so it suffices to show that for all nonzero group elements, they are either generators, or can be achieved as the sum of exactly one pair of generators. As there are 5 generators, and $\left( \begin{array}{l} 5 \\  2 \end{array}\right)  = {10}$ pairs, it suffices to show that every nonzero group element appears as some sum or generator. If the group element has Hamming weight 1 or 4 , it is already a generator. If it has weight 2, then it is the sum of 2 weight-1 generators. If it has weight 3, then it is the sum of 1111 and one weight-1 generator.

Now we show that there are no smaller constructions with $n \geq  5$ . (The case $n = 4$ is achievable by the 4-cycle.) Consider a vertex $v$ , and let $d$ be its degree. Since the graph is triangle-free, its neighbors $N\left( v\right)$ form an independent set. Since it has diameter 2, the second neighborhood is everything else. Consider then a vertex $w \nsim  v$ . By the codegree condition, $w$ is adjacent to exactly two of $N\left( v\right)$ . This holds for every $w \nsim  v$ , and the pairs of neighbors of $v$ must be distinct, as if a pair $x, y \in  N\left( v\right)$ was used more than once, then $x, y$ would have codegree at least 3, contradiction. Furthermore, for every pair $x, y \in  N\left( v\right)$ , the codegree condition implies that there is some $w$ in the second neighborhood that is adjacent to both of them. Therefore, the second neighborhood has size exactly $\left( \begin{array}{l} d \\  2 \end{array}\right)$ , and we have

$$
n = 1 + d + \left( \begin{array}{l} d \\  2 \end{array}\right) .
$$

This severely restricts the number of possibilities for $n$ . If $d = 2$ , then $n = 4$ , which is too small. If $d = 3$ , then $n = 7$ , but then the sum of all degrees is odd, which is impossible. If $d = 4$ , then $n = {11}$ . No other integer $d$ gives $n = {11}$ , so the graph is 4 -regular. However, after drawing $v$ and its 4 neighbors, there are 6 neighbors left, each adjacent to a distinct pair of $N\left( v\right)$ . Let $w$ be in the second neighborhood. It must have degree 4, and already has degree 2 into $N\left( v\right)$ . However, every $u \in  N\left( v\right)$ has its neighborhood as an independent set. Looking over the $u \in  N\left( v\right)$ which are adjacent to $w$ , we find that there is only one other ${w}^{\prime }$ in the second neighborhood which is permitted to be adjacent to $w$ , so there is no way to make the degree of 4 . Finally, if $d = 5$ , then $n = {16}$ , and we found a construction with those parameters.

4. (Balkan 1989/4.) Let $\mathcal{F}$ be a family of 3-element subsets of $\{ 1,\ldots , n\}$ , such that every pair of distinct elements of $\mathcal{F}$ has intersection size at most 1 . Let $f\left( n\right)$ be the greatest possible number of elements of

$\mathcal{F}$ . Prove that

$$
\frac{{n}^{2} - {4n}}{6} \leq  f\left( n\right)  \leq  \frac{{n}^{2} - n}{6}.
$$

Solution: We are decomposing the edges of ${K}_{n}$ into edge-disjoint triangles, plus junk. So the RHS follows immediately, as each triangle eats 3 edges out of the $\left( \begin{array}{l} n \\  2 \end{array}\right)$ . For the LHS, we could apply Wilson’s theorem when $n$ is even and $3 \mid  n\left( {n - 1}\right)$ . FIX

5. (Balkan 1985/4.) There are 1985 participants to an international meeting. In any group of three participants there are at least two who speak the same language. It is known that each participant speaks at most five languages. Prove that there exist at least 200 participants who speak the same language.

Solution: This is a 1985-edge hypergraph with matching number at most 2, where every hyperedge has size at most 5 . We seek a vertex of degree at least 200 .

Take a maximum matching. It has at most 2 edges, hence at most 10 vertices. Let those vertices be $S$ . The number of edges not in this matching is at least 1983. By pigeonhole, one of the vertices of $S$ is incident to at least 198.3 of the non-matching edges, hence at least 199. But it's also incident to the matching edge that contains it, therefore giving degree at least 200.

6. (APMO 2003/5.) Given two positive integers $m$ and $n$ , find the smallest positive integer $k$ such that among any $k$ people, either there are ${2m}$ of them who form $m$ pairs of mutually acquainted people or there are ${2n}$ of them forming $n$ pairs of mutually unacquainted people.

7. (Chvátal.) Let $T$ be a tree, and let $t$ be the number of edges in $T$ . The Ramsey number $R\left( {{K}_{k}, T}\right)$ is the minimum integer $n$ such that every red-blue coloring of the edges of ${K}_{n}$ contains a red ${K}_{k}$ or a blue $T$ (not necessarily induced). Prove that $R\left( {{K}_{k}, T}\right)  = \left( {k - 1}\right) t + 1$ , and show that this is tight.

8. (Chvátal for hypergraphs.) Let $r \geq  2$ be a positive integer, and let $T$ be an $r$ -uniform hypertree with $t$ edges. The Ramsey number ${R}_{r}\left( {{K}_{k}, T}\right)$ is the minimum integer $n$ such that every red-blue coloring of the edges of the complete $r$ -uniform hypergraph on $n$ vertices contains a red ${K}_{k}^{\left( r\right) }$ or a blue $T$ (not necessarily induced). Prove that ${R}_{r}\left( {{K}_{k}, T}\right)  \leq  \left( {k - 1}\right) t + 1$ , and show that this is tight when $\left( {r - 1}\right)  \mid  \left( {k - 1}\right)$ .

9. (Open.) What if $\left( {r - 1}\right)  \nmid  \left( {k - 1}\right)$ ?