# The Redundancy of the Axiom of Union in MK

**Theorem (The Axiom of Union).** If $X$ is a set, then
$$
\exists U\; (\mathfrak{M}(U) \land \; \forall x \; (x \in U \Leftrightarrow \exists S \; (S \in X \land x \in S) )),
$$
where $\mathfrak{M}(U)$ denotes “$U$ is a set.” In the union notation, that is:
$$
\exists U\; \left(\mathfrak{M}(U) \land U = \bigcup X\right).
$$

**Proof.** Let $X$ be a set, and let $U = \bigcup X$. We are required to show that $U$ is a set.

For any set $x$, let $f_x : x \to H(x)$ be an injection, where $H(x)$ denotes for the Hartogs number of $x$.

Let $X$ be a set, and let $U = \bigcup X$. Let $Y = \sup \{ H(x) \mid x \in H \}$. (Note that $Y$ is an ordinal number.) 

Let $x \in X$ and $t \in x$. We have $f_x(t) \in H(x)$. Since the ordinal numbers are transitive, $H(x) \in Y$ implies $H(x) \subseteq Y$. Thus, $f_x(t) \in Y$. By universal quantification, this holds for all $x \in X$ and $t \in x$. Thus, let
$$
g := \left\{ \left( \underline{(x,t)}, \underline{(f_X(x), f_x(t))} \right) \mid x \in X \land t \in x \right\},
$$
then $g$ is a function which is a subclass of $(X \times U) \times (H(X) \times Y)$. Since, for any $x \in X$, $f_X$ and $f_x$ are both injective, $g$ is injective.

Let $h \subseteq (X \times U) \times U$ be a projection, i.e.,
$$
h := \left\{ ((x,t),t) \mid x \in X \land t \in U \right\}
$$
$h$ is surjective, because, for any $t \in U$, there exists at least one $x \in X$ such that $t \in x$. Thus, let $\varphi \subseteq h^{-1}$ be an injection mapping from $U$ to $X \times U$.

Now, we have $g \circ \varphi$ being an function mapping from $U$ to $H(X) \times Y$. Since $g$ and $\varphi$ are both injective, so is $g \circ \varphi$. Thus, we have
$$
U = (g \circ \varphi)^{-1}[H(X) \times Y]
$$

Since $H(X) \times Y$ is a set, by the axiom of replacement, the image $U$ is a set.

$\blacksquare$



