# Morse-Kelly Set Theory


## The primitive notions

The primitive notions in **Morse-Kelly set theory** (MK) are “**class**” and “**membership**”. These primitive notions are denoted by the monadic predicate $\mathfrak{Cls}$ and the dyadic predicate $\in$. The notation $\mathfrak{Cls}(x)$ means “$x$ is a class,” and $x \in y$ means “$x$ is an element (member) of $y$” or “$x$ belongs to $y$.” Since MK is a first-order axiomatization (with equality), $x = y$, $x \in y$ and $\mathfrak{Cls} (x)$ are the atomic formulas in the language of MK.

An important, though usually omitted, axiom is

$$
\forall x\; \mathfrak{Cls}(x).
$$

That is, everything is a class. Since every variable is a class in this context, if $\phi$ is an MK formula, we can simply write $\forall x \; \phi$ instead of $\forall x \; (\mathfrak{Cls}(x) \Rightarrow \phi)$ and write $\exists x \; \phi$ instead of $\exists x\; (\mathfrak{Cls}(x) \land \phi)$.

Some authors consider the MK set theory to be a two-sorted system, where both “set” and “class” are primitive notions. This is a reasonable perspective under certain choices of axioms. However, based on the axioms discussed in this article, the notion of "sets" is rendered redundant since it is definable.

## Sets and proper classes

In Morse-Kelly set theory, we define the monadic formula $\mathfrak{M}$ as
$$
\mathfrak{M}(x) \iff \exists y\; (x \in y).
$$
It is interpreted as “$x$ is an element.” or “$x$ is a set.” It is important to note that the concept of sets is not hereby defined, since $\mathfrak{M}$ is not a part of the formal language of MK but rather a metalinguistic construct used for discussing the formal system. Thus, $\exists x \; \mathfrak{M}(x)$ is neither derivable nor refutable without necessary axioms.

The existence of sets is solely derived from the axiom of infinity (see below), where $\exists x\; \mathfrak{M}(x)$ is a syntactical consequence of the axiom. Thus, the definition of sets is derived: a class $x$ is a **set** if and only if $\mathfrak{M}(x)$. On the other hand, the existence of sets is irrelevant to any other axioms by the property of implication.

## Axioms

### The axiom of extensionality

Two classes are the same class if they consist of exactly the same element. In symbols:
$$
\forall X\; \forall Y\; (\forall z \; (z \in X \Leftrightarrow z \in Y) \implies X = Y).
$$

<hr>

The converse,
$$
\forall X\; \forall Y\; (X = Y \implies \forall z \; (z \in X \Leftrightarrow z \in Y)).
$$
is guaranteed by the [[First-Order Logic Axiomatizations|axiom of identity I2]].

### The axiom schema of class comprehension

Let $\phi$ be a monadic formula in the language of MK. Then,
$$
\exists X\; \forall x\; (x \in X \iff (\phi(x) \land \mathfrak{M}(x))).
$$

where $\mathfrak{M}(x)$ abbreviates $\exists y\; (x \in y)$.

<hr>

The validity of the class-builder notation is guaranteed by the axiom schema of class comprehension.

A direct consequence of the axiom is the existence of **proper classes**, those classes that are not sets. By the axiom, there exists a class $R = \{x: x \notin x \land \mathfrak{M}(x)\}$. If $R$ is a set, then it raises Russell’s paradox.

Since, in the assertion of the axiom, $\phi$ can be any monadic MK formula, the definitions of fundamental class operations, such as union, intersection, and complement, can be derived.

In NBG, the **class existence theorem** is similar to the axiom schema of class comprehension, but with one key difference. In the class existence theorem, each bounded variable (if there is any) in $\phi$ must be a set. This is one reason why MK properly extends NBG.

For example, the validity of unions that can be written in the form of $\bigcup X$, where $X$ is a class, is guaranteed. Explicitly, given a class $X$, we define the union of $X$ as
$$
\bigcup X = \{ x \mid \underbrace{\exists S\; (S \in X \land x \in S)}_{\phi(x)} \},
$$
where $S$ is bounded and $S \in X$ implies $\mathfrak{M}(S)$.

In MK, however, there is no such restriction on the bounded variables in $\phi$ (if there is any). Therefore, given a monadic MK formula $P$, the union of all classes $X$ satisfies $P(X)$ can be defined:
$$
\bigcup_{P(X)} X = \{x \mid \underbrace{\exists X\; (P(X) \land x \in X)}_{\phi(x)} \},
$$
where $X$ is bounded but $P(X)$ does not necessarily imply $\mathfrak{M}(X)$.

For the similar reason, while the existence of the **universal class** $\mathscr{U} = \{ x : \mathfrak{M}(x) \}$ can be solely derived from the axiom schema of class comprehension in MK, it is derivable, but not solely derivable, from the class existence theorem in NBG.

That is one reason that why MK properly extents NBG.


### The axiom of foundation

Every non-empty class $X$ contains an element $y$ such that $X$ and $y$ are disjoint. In symbols:

$$
\forall X\; (\exists x \; (x \in X) \Rightarrow \exists y\; (y \in X \land \forall z\; (z \in x \Rightarrow z \notin y))).
$$

<hr>

In the terms of intersection $\cap$ and empty class $\emptyset$, the axiom states that every non-empty class $X$ contains an element $y$ such that $y \cap X = \emptyset$. A direct consequence of the this is $\forall x\; (x \notin x)$. Since suppose $\exists x \; (x \in x)$, we have
$$
\begin{aligned}
x \in \{x\} &\implies x \cap \{x\} = x
\end{aligned}
$$
and $x \ne \emptyset$ since $x \in x$. This contradicts the axiom of foundation.

For any class $x$ and $y$, $x \in y \land y \in x$ is also impossible. Since if was true, then we have
$$
y \in x \cap \{x,y\} \land x \in y \cap \{x,y\},
$$
contradicting the axiom of foundation.

In the context of well-founded relations, the axiom of foundation states that every non-empty class $X$ contains an element $y$ that is minimal under the membership relation $\in$. (Note that, such a minimal element $y$ is not necessarily unique in $X$.)

The axiom of foundation is a relatively strong axiom that does not need to be invoked in many case. For example, in the set-theoretic model of the natural numbers $\mathbb{N}$, the axiom is redundant since the structure of $\mathbb{N}$ inherently satisfies well-foundedness due to its construction.

However, if the axiom of foundation is assumed in the universal class $\mathscr{U}$, it can be proven that the entire class $\mathscr{U}$ can be constructed starting from the empty set $\emptyset$. (See [[Von Neumann Universe|Von Neumann Universe]])


### The axiom of power set

If $x$ is a set, then there is a set $P$ includes of all subclasses of $x$. In symbols:

$$
\mathfrak{M}(x) \Rightarrow \exists y\; (\mathfrak{M}(y) \land \forall u\; (u \subseteq x \Rightarrow u \in y)).
$$

<hr>

A straightforward corollary of the axiom is: if $x$ is a set, then each subclass $u \subseteq x$ is a set, called a **subset** of $x$. Thus, by the axiom schema of class comprehension, we defined the **power** of $x$ as $\mathcal P(x) = \{ u \subseteq x \}$. By the axiom, there exists a set $y$ such that $\mathcal P(x) \subseteq y$. Then, $\mathcal P(x)$ is a set since $y$ is set.

### The axiom of paring
If $x$ and $y$ are sets, then there is a set $p = \{x,y\}$. In symbols:

$$
(\mathfrak{M}(x) \land \mathfrak{M}(y)) \Rightarrow \exists p \; \forall z\; (z \in p \Leftrightarrow (z = x \lor z = y)).
$$

<hr>

The axiom of pairing, together with the axiom of extensionality, derives the formal definitions of ordered pairs, i.e., sets in the form of $(x,y)$. In this context, we invoke **Kuratowski's definition of ordered pairs**:
$$
(x,y) = \{ \{x\}, \{x,y\} \}
$$
where $x$ and $y$ are sets. According to the axiom schema of class comprehension, if $X$ and $Y$ are classes, the **Cartesian product** $X \times Y$ is defined as
$$
X \times Y = \{ (x,y) \mid x \in X \land y \in Y \}.
$$

Thus, the definitions of relations and functions (as specific types of classes) can be derived.

Furthermore, if $X$ and $Y$ are sets, then $X \times Y$ is also a set, since $X \times Y \subseteq \mathcal{P}(\mathcal{P}(X \cup Y))$.

### The axiom of infinity 

There exists a class $I$ such that
1. $\mathfrak{M}(I)$, and
2. $\exists e\; (\forall x\; (x \notin e) \land e \in I )$, and
3. $\forall x\; (x \in I \Rightarrow \exists y\; (y = x \cup \{x\} \land y \in I))$.

<hr>

The Axiom of Infinity provides a set-theoretic basis for the definition of natural numbers $\mathbb{N}$. This set-theoretic construct aligns with Peano’s axiomatization of natural numbers, where $0$ is defined as the empty set $\emptyset$, and the successor function $s$ is defined as:
$$
s: \mathscr{U} \setminus \{\emptyset\} \to \mathscr{U}, \quad x \mapsto x \cup \{x\}
$$

(See [[The Set Theoretic Definition of Natural Numbers|The Set Theoretic Definition of Natural Numbers]].)

### The axiom of replacement

Given a class $X$ and a function $f : X \to \mathscr U$, if $X$ is a set, then every $Y \subseteq f[X]$ is a set.

### The axiom of global choice

For any class $C$, there exists a function $f: C \to \bigcup C$ such that $f(x) \in x$ for any $x \in C$.

<hr>

The axiom of union in ZFC states that: if $X$ is a set, then $\bigcup X$ is a set. This is redundant in MK since it can be derived from the axiom of replacement and global choice. (See [[The Redundancy of the Axiom of Union in Morse Kelly Set Theory|The Redundancy of the Axiom of Union in Morse Kelly Set Theory]].)