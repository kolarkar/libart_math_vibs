var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "sec-statements_negations_quantifiers",
  "level": "1",
  "url": "sec-statements_negations_quantifiers.html",
  "type": "Section",
  "number": "1.1",
  "title": "Notes on: Statements, Negations, and Quantifiers",
  "body": " Notes on: Statements, Negations, and Quantifiers  These notes cover the fundamental concepts of statements, negations, and quantified statements as introduced in our material.   What is a Statement?   A statement is defined as a declarative sentence that has a truth value . This means the sentence is either true or false, even if we don't know which one it is.  Examples of Statements:   Today is Monday.  The ground is wet.    The material also states that in this class, we will consider declarative opinions as statements for the sake of learning, even though the truth values of opinions can be subjective.  A sentence that does not have a truth value (like a question or a command) is not a statement .     Negating Simple Statements   In logic, the negation of a statement is another statement which has the opposite truth value from the original statement. If the original statement is true, its negation is false, and vice-versa.  Forming negations of simple statements can be straightforward. Often, adding \"not\" or a phrase like \"It's not true that...\" works.  Examples of Negating Simple Statements:   Statement: Today is Monday.  Negation: Today is not Monday.  Negation: It's not true that today is Monday.    Statement: The ground is wet.  Negation: The ground is not wet.  Negation: It's not the case that the ground is wet.         Quantified Statements (Categorical Statements)   A quantified statement , also known as a categorical statement, is a statement that includes a quantifying word or phrase .  Quantified statements are classified as either Universal or Existential .    Existential Statements   Existential statements are quantified statements that assert the existence of at least one element in a category.  They typically use the word \"Some\" or related phrases.  The word \"some\" in logic means \"at least one, possibly more\" . It does not imply that there must be more than one.  Examples of Existential Statements:   \"Some A are B.\"  \"Some A aren't B.\"  Some boys don't love cars.  Some boys love cars.       Universal Statements   Universal statements are quantified statements that affirm or deny a quality about an entire category .  They typically use words like \"All\" or \"No\".  \"All A are B\" is considered a positive universal statement.  \"No A are B\" is considered a negative universal statement.  Examples of Universal Statements:   \"All A are B\"  \"No A are B\"  All boys love cars.  No boys love cars.        Diagramming Quantified Statements  Venn diagrams can be used to represent quantified statements visually. These diagrams typically involve overlapping circles representing categories.   Diagramming Universal Statements:   All A are B: To diagram this, the region of A that is not part of B is shaded . The shading indicates this region is empty (has no elements).   A Venn diagram with two overlapping circles, A and B. The part of circle A that does not overlap with circle B is shaded.   No A are B: To diagram this, the region where A and B overlap (the football-shaped region) is shaded . The shading indicates this region is empty.   A Venn diagram with two overlapping circles, A and B. The overlapping region between A and B is shaded.     Diagramming Existential Statements:   Some A are B (or Some B are A): This is diagrammed by placing an X in the region where A and B overlap . This indicates that at least one element exists in that specific region.   A Venn diagram with two overlapping circles, A and B. An 'x' is placed in the overlapping region between A and B.   Some A are not B: This is diagrammed by placing an X in the region of A which is not shared with B . This indicates at least one element exists in that specific region.   A Venn diagram with two overlapping circles, A and B. An 'x' is placed in the part of circle A that does not overlap with circle B.   Some B are not A: This is diagrammed by placing an X in the region of B which is not shared with A . This indicates at least one element exists in that specific region.   A Venn diagram with two overlapping circles, A and B. An 'x' is placed in the part of circle B that does not overlap with circle A.     In both universal and existential diagrams, the unmarked or unshaded regions may or may not have elements .   Examples with Specific Categories:   All boys love cars:  A Venn diagram with two overlapping circles, B (Boys) and C (Carlovers). The part of circle B that does not overlap with circle C is shaded.   This will become alt text.            B  C  All boys love cars  B \\equiv Boys  C \\equiv Car lovers        Some boys love cars:  A Venn diagram with two overlapping circles, B (Boys) and C (Carlovers). An 'x' is placed in the overlapping region between B and C.   A Venn diagram of some boys love cars.           X  B  C  Some boys love cars  B \\equiv Boys  C \\equiv Car lovers        No boys love cars:  A Venn diagram with two overlapping circles, B (Boys) and C (Carlovers). The overlapping region between B and C is shaded.   This will become alt text.            B  C  No boys love cars  B \\equiv Boys  C \\equiv Car lovers        Some boys don't love cars:  A Venn diagram with two overlapping circles, B (Boys) and C (Carlovers). An 'x' is placed in the part of circle B that does not overlap with circle C.   A Venn diagram of some boys love cars.           X  B  C  Some boys don't love cars  B \\equiv Boys  C \\equiv Car lovers           Negating Quantified Statements  Negating quantified statements involves changing the type of statement (universal to existential and vice-versa) and often changing the quality (affirmative to negative and vice-versa).   The rules for negating basic quantified statements are:  The negation of \" All A are B \" is \" Some A are not B \".   Two Venn diagrams side-by-side. The first diagram shows 'All A are B' (part of A outside B is shaded). The second diagram shows 'Some A are not B' (an 'x' is placed in the part of A outside B). A double-headed arrow connects the two diagrams, labeled 'Negation'.   The negation of \" Some A are B \" is \" No A are B \".   Two Venn diagrams side-by-side. The first diagram shows 'Some A are B' (an 'x' in the overlap). The second diagram shows 'No A are B' (the overlap is shaded). A double-headed arrow connects the two diagrams, labeled 'Negation'.     There is a difference between conversational English and formal logic when negating universal statements.  In conversational English, one might negate \"All Dogs are Mammals\" by saying \"All Dogs are not Mammals\" or \"Not All Dogs are Mammals\".  However, in symbolic logic , a universal statement must be negated with an existential statement .  The negation of \"All Dogs are Mammals\" is \"Some Dogs are not Mammals\" . This is because we need to assert the existence of at least one element (a dog) which defies the original \"all dogs are mammals\" statement. Using the word \"Some\" achieves this.   Examples of Negating Quantified Statements:   Negation of \" All boys love cars \" is \" Some boys don't love cars \". (Correct option B in Top Hat Question #1)  Negation of \" No birds can fly \" is \" Some birds can fly \".  The source material diagrams this as:  Two Venn diagrams side-by-side. The first diagram shows 'No birds are flying things' (overlap of B and F is shaded). The second diagram shows 'Some birds are flying things' (an 'x' in the overlap of B and F). A double-headed arrow connects the two diagrams, labeled 'Negation'. (Note: The diagrams use B for Birds and F for Flying things).    The source notes that \"Some birds are flying things\" is logically equivalent to \"Some flying things are birds\". Both are represented by an X in the overlapping region of Birds (B) and Flying things (F).  Two Venn diagrams side-by-side. The first diagram shows 'Some birds are flying things' (an 'x' in the overlap of B and F). The second diagram shows 'Some flying things are birds' (an 'x' in the overlap of F and B - which is the same region). A double-headed arrow connects the two diagrams, labeled 'is logically equivalent to'.    Therefore, both \"Some birds can fly\" and \"Some flying things are birds\" are listed as possible negations of \"No birds can fly\". (Options B and F in Top Hat Question #2).      "
},
{
  "id": "sec-statements_negations_quantifiers-6-3-1-2-2",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-3-1-2-2",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, A and B. The part of circle A that does not overlap with circle B is shaded.  "
},
{
  "id": "sec-statements_negations_quantifiers-6-3-1-2-4",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-3-1-2-4",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, A and B. The overlapping region between A and B is shaded.  "
},
{
  "id": "sec-statements_negations_quantifiers-6-3-2-2-2",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-3-2-2-2",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, A and B. An 'x' is placed in the overlapping region between A and B.  "
},
{
  "id": "sec-statements_negations_quantifiers-6-3-2-2-4",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-3-2-2-4",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, A and B. An 'x' is placed in the part of circle A that does not overlap with circle B.  "
},
{
  "id": "sec-statements_negations_quantifiers-6-3-2-2-6",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-3-2-2-6",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, A and B. An 'x' is placed in the part of circle B that does not overlap with circle A.  "
},
{
  "id": "sec-statements_negations_quantifiers-6-4",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Examples with Specific Categories: "
},
{
  "id": "sec-statements_negations_quantifiers-6-5-1-1",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-5-1-1",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, B (Boys) and C (Carlovers). The part of circle B that does not overlap with circle C is shaded.   This will become alt text.            B  C  All boys love cars  B \\equiv Boys  C \\equiv Car lovers      "
},
{
  "id": "sec-statements_negations_quantifiers-6-5-2-1",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-5-2-1",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, B (Boys) and C (Carlovers). An 'x' is placed in the overlapping region between B and C.   A Venn diagram of some boys love cars.           X  B  C  Some boys love cars  B \\equiv Boys  C \\equiv Car lovers      "
},
{
  "id": "sec-statements_negations_quantifiers-6-5-3-1",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-5-3-1",
  "type": "Figure",
  "number": "1.1.8",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, B (Boys) and C (Carlovers). The overlapping region between B and C is shaded.   This will become alt text.            B  C  No boys love cars  B \\equiv Boys  C \\equiv Car lovers      "
},
{
  "id": "sec-statements_negations_quantifiers-6-5-4-1",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-6-5-4-1",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": " A Venn diagram with two overlapping circles, B (Boys) and C (Carlovers). An 'x' is placed in the part of circle B that does not overlap with circle C.   A Venn diagram of some boys love cars.           X  B  C  Some boys don't love cars  B \\equiv Boys  C \\equiv Car lovers      "
},
{
  "id": "sec-statements_negations_quantifiers-7-3-1-1-2",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-7-3-1-1-2",
  "type": "Figure",
  "number": "1.1.10",
  "title": "",
  "body": " Two Venn diagrams side-by-side. The first diagram shows 'All A are B' (part of A outside B is shaded). The second diagram shows 'Some A are not B' (an 'x' is placed in the part of A outside B). A double-headed arrow connects the two diagrams, labeled 'Negation'.  "
},
{
  "id": "sec-statements_negations_quantifiers-7-3-1-1-4",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-7-3-1-1-4",
  "type": "Figure",
  "number": "1.1.11",
  "title": "",
  "body": " Two Venn diagrams side-by-side. The first diagram shows 'Some A are B' (an 'x' in the overlap). The second diagram shows 'No A are B' (the overlap is shaded). A double-headed arrow connects the two diagrams, labeled 'Negation'.  "
},
{
  "id": "sec-statements_negations_quantifiers-7-4",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-7-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Examples of Negating Quantified Statements: "
},
{
  "id": "sec-statements_negations_quantifiers-7-5-2-3-1-1",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-7-5-2-3-1-1",
  "type": "Figure",
  "number": "1.1.12",
  "title": "",
  "body": " Two Venn diagrams side-by-side. The first diagram shows 'No birds are flying things' (overlap of B and F is shaded). The second diagram shows 'Some birds are flying things' (an 'x' in the overlap of B and F). A double-headed arrow connects the two diagrams, labeled 'Negation'. (Note: The diagrams use B for Birds and F for Flying things).  "
},
{
  "id": "sec-statements_negations_quantifiers-7-5-2-3-2-1",
  "level": "2",
  "url": "sec-statements_negations_quantifiers.html#sec-statements_negations_quantifiers-7-5-2-3-2-1",
  "type": "Figure",
  "number": "1.1.13",
  "title": "",
  "body": " Two Venn diagrams side-by-side. The first diagram shows 'Some birds are flying things' (an 'x' in the overlap of B and F). The second diagram shows 'Some flying things are birds' (an 'x' in the overlap of F and B - which is the same region). A double-headed arrow connects the two diagrams, labeled 'is logically equivalent to'.  "
},
{
  "id": "sec-symbols_conjunctions_disjunctions",
  "level": "1",
  "url": "sec-symbols_conjunctions_disjunctions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Symbols, Conjunctions, and Disjunctions",
  "body": " Symbols, Conjunctions, and Disjunctions  Slides 1.2  "
},
{
  "id": "sec-DeMorgan_Laws",
  "level": "1",
  "url": "sec-DeMorgan_Laws.html",
  "type": "Section",
  "number": "1.3",
  "title": "DeMorgan’s Laws",
  "body": " DeMorgan's Laws  1.2 part 2 of the slides  "
},
{
  "id": "sec-conditionals_equivalencies",
  "level": "1",
  "url": "sec-conditionals_equivalencies.html",
  "type": "Section",
  "number": "1.4",
  "title": "Conditional Statements, Variations and Equivalencies",
  "body": " Conditional Statements, Variations and Equivalencies  Slides 1.3  "
},
{
  "id": "ch-Arguments_and_Analyses",
  "level": "1",
  "url": "ch-Arguments_and_Analyses.html",
  "type": "Chapter",
  "number": "2",
  "title": "Arguments and Diagramming",
  "body": " Arguments and Diagramming  Slides 1.4 to 1.7  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "3.1",
  "title": "Visualizing data",
  "body": " Visualizing data  In this chapter, we will talk about various ways of visualizing data, categorizing them, and getting information from them. Perhaps the visualising will be a chapter, and the section would be Venn Diagrams?  "
},
{
  "id": "sec-set-th-notation",
  "level": "1",
  "url": "sec-set-th-notation.html",
  "type": "Section",
  "number": "3.2",
  "title": "Some Notation for Set Theory",
  "body": " Some Notation for Set Theory  In this section we will be using Venn Diagrams to study Surveys, which is a topic in the area of math called Set Theory. We need to know a few basic definitions and some notation for our studies.   \\usepackage{tikz}    Definitions of Venn Diagrams Notations   Venn Def       Sets (or categories)  Sets (or categories) are represented with capital letters. In this example, A and B are the category names. The Universal Set is represented by the rectangular boundary around the sets    Elements  Elements in a set are sometimes named inside the set. In this example, Sally, Rhona and Shinyu are elements.    Regions in a Venn Diagram  Regions in a Venn diagram are sometimes numbered with Roman numerals, not to be confused as elements of the set.    Cardinality  The cardinality of set A, notated as , tells us the number of elements in the set. In this example, .    Intersection   A and B means the intersection, or overlap of sets A with B. The elements in A and B are the shared elements which are in both sets simultaneously. In this example A and B is region II.    Union   A or B means the union of set A with B, which contains all the elements which are in A, all those in B (and those in both). In this example, A or B refers to three regions: I, I, and III.    Complement  The complement of A, notated A', means the region(s) in the diagram which are not in category A. In this example, A' indicates regions III and IV, and . The elements of set A' are Shinyu, Zayna and Jaylon.    "
},
{
  "id": "sec-set-th-notation-4",
  "level": "2",
  "url": "sec-set-th-notation.html#sec-set-th-notation-4",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Definitions of Venn Diagrams Notations   Venn Def    "
},
{
  "id": "ch-Venn-Diagrams-5",
  "level": "1",
  "url": "ch-Venn-Diagrams-5.html",
  "type": "Section",
  "number": "3.3",
  "title": "Example 1: Survey 2 Categories, Overlapping \"or\"",
  "body": " Example 1: Survey 2 Categories, Overlapping \"or\"  A survey of 64 informed people revealed the following information:  45 believe that eggs are the superior fruit  49 believe that apples are the best  42 believe both of these things    Answer the following questions:   How many believe eggs are superior or believe that apples are best?  How many believe neither of these things?   Solution - what's the html division here? block?  To answer a question about cardinality of “Eggs or Apples”, we are looking for n(E or A). The four regions on this two circle Venn diagram are labeled with roman numerals.  First we will use a Venn diagram to organize the information. Let E represent the set of those who believe eggs are the superior fruit. Let A represent the set of those who believe apples are best. The universe (U) in this case is the set of 64 people who were surveyed.   Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''     The 42 who believe both will be in the football shaped intersection of E and A. We will label this region with it’s cardinality. In set notation we would say .   Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''     49 believe that apples are the best. This means n(A) = 49. We already labeled E and A to indicate n(E and A) = 42. Therefore, the right hand crescent shape of circle A will need to have 7 elements, to make a total of 49 elements in circle A.   Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''     45 believe that eggs are the superior fruit. Since n(E and A) = 42 and n(E) = 45, We can deduce that the left hand crescent shape inside category E has 3 elements   Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''     Now that we have the cardinalities inside the categories labeled, we will label the portion of the diagram outside the circles. 64 people were surveyed, so, . Therefore we label the portion outside the circles (Region IV) with 12.   Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''     Now our Venn Diagram is complete, and we are ready to answer any questions concerning this population. How many believe eggs are the superior fruit or believe that apples are best? This is asking for the cardinality of E or A, n(E or A). We will include elements from any region in either E or A or both. The Venn diagram shows that the answer is .  How many believe neither of these things? This is asking us for the cardinality outside of categories E and A. The Venn diagram shows that the answer is 12.   Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''     "
},
{
  "id": "ch-Venn-Diagrams-5-8",
  "level": "2",
  "url": "ch-Venn-Diagrams-5.html#ch-Venn-Diagrams-5-8",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''    "
},
{
  "id": "ch-Venn-Diagrams-5-10",
  "level": "2",
  "url": "ch-Venn-Diagrams-5.html#ch-Venn-Diagrams-5-10",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''    "
},
{
  "id": "ch-Venn-Diagrams-5-12",
  "level": "2",
  "url": "ch-Venn-Diagrams-5.html#ch-Venn-Diagrams-5-12",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": " Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''    "
},
{
  "id": "ch-Venn-Diagrams-5-14",
  "level": "2",
  "url": "ch-Venn-Diagrams-5.html#ch-Venn-Diagrams-5-14",
  "type": "Figure",
  "number": "3.3.4",
  "title": "",
  "body": " Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''    "
},
{
  "id": "ch-Venn-Diagrams-5-16",
  "level": "2",
  "url": "ch-Venn-Diagrams-5.html#ch-Venn-Diagrams-5-16",
  "type": "Figure",
  "number": "3.3.5",
  "title": "",
  "body": " Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''    "
},
{
  "id": "ch-Venn-Diagrams-5-19",
  "level": "2",
  "url": "ch-Venn-Diagrams-5.html#ch-Venn-Diagrams-5-19",
  "type": "Figure",
  "number": "3.3.6",
  "title": "",
  "body": " Definitions of Venn Diagrams Notations   Example: Survey | 2 categories | Overlapping ``or''    "
},
{
  "id": "sec-fcp-basics",
  "level": "1",
  "url": "sec-fcp-basics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Fundamental Counting Principle",
  "body": " Fundamental Counting Principle  Below this, everything is copied from the converted slides to html. There WILL be errors!  Intro Activity:  Let's take our play pieces like so: two pieces each with a different math symbol, 3 pieces each with a different Roman letter, and three pieces each with a different number. So we have eight different pieces in three different categories: symbols, letters, and numbers. How many different selections can we make if we choose one from each category?   Barb is going to choose three accessories to go with her new outfit.  She will choose one item from each of the following :  (1) Shoes:  Red Converse (RC); Blue Chacos (BC)  (2) Neck Accessory:  Floral Scarf (FS); Silver Chain (SC); Hemp Choker (HC)  (3) Bag:  Gold Coach Wristlet (GCW), Kate Spade Satchel (KSS); Boho Shoulder Bag (BSB)  Here is one way of doing this. List out every possible selection she could make by choosing one item from each category. There are 18 different 3-category selections, as follows.     1. RC-FS-GCW  2. RC-FS-KSS  3. RC-FS-BSB  4. RC-SC-GSW  5. RC-SC-KSS  6. RC-SC-BSB  7. RC-HC-GCW  8. RC-HC-KSS  9. RC-HC-BSB    10. BC-FS-GCW  11. BC-FS-KSS  12. BC-FS-BSB  13. BC-SC-GSW  14. BC-SC-KSS  15. BC-SC-BSB  16. BC-HC-GCW  17. BC-HC-KSS  18. BC-HC-BSB     "
},
{
  "id": "sec-fcp-basics-13",
  "level": "2",
  "url": "sec-fcp-basics.html#sec-fcp-basics-13",
  "type": "Table",
  "number": "4.1.1",
  "title": "",
  "body": "   1. RC-FS-GCW  2. RC-FS-KSS  3. RC-FS-BSB  4. RC-SC-GSW  5. RC-SC-KSS  6. RC-SC-BSB  7. RC-HC-GCW  8. RC-HC-KSS  9. RC-HC-BSB    10. BC-FS-GCW  11. BC-FS-KSS  12. BC-FS-BSB  13. BC-SC-GSW  14. BC-SC-KSS  15. BC-SC-BSB  16. BC-HC-GCW  17. BC-HC-KSS  18. BC-HC-BSB    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
