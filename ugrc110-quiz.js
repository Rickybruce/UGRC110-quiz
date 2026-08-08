/* ═══════════════════════════════════════════════════════════════
   UGRC 110 — ACADEMIC WRITING IA PAST QUESTIONS
   Source: Abednego Lomazah PASSCO compilation
   Answers verified from the answer sections in the PDF
   ans = 0-indexed (A=0, B=1, C=2, D=3)
═══════════════════════════════════════════════════════════════ */

const QUESTIONS = [

  /* ── SECTION 1: Academic Writing Fundamentals ── */
  {
    topic: "Academic Writing Basics",
    q: "To learn ____________ you should possess basic skills to use writing for communication.",
    opts: ["Descriptive writing", "Academic writing", "Writing", "Reading"],
    ans: 1,
    exp: "Academic writing requires possession of basic communication skills through writing."
  },
  {
    topic: "Academic Writing Basics",
    q: "Academic writing generally refers to all writing tasks assigned to students for the purpose of study at ____________ level.",
    opts: ["School", "College", "Primary", "Secondary"],
    ans: 1,
    exp: "Academic writing is specifically associated with college/university level study."
  },
  {
    topic: "Academic Writing Basics",
    q: "Academic writing is a serious and ____________ way of writing.",
    opts: ["Formal", "Informal", "Easy", "Difficult"],
    ans: 0,
    exp: "Academic writing is characterised by its serious and formal nature."
  },
  {
    topic: "Academic Materials",
    q: "____________ is an academic material.",
    opts: ["Newspaper", "Magazines", "Radio", "Thesis"],
    ans: 3,
    exp: "A thesis is an academic material produced within scholarly institutions. Newspapers, magazines, and radio are non-academic materials."
  },
  {
    topic: "Academic Materials",
    q: "____________ is a non-academic material.",
    opts: ["Theses", "Books", "Seminar", "Television"],
    ans: 3,
    exp: "Television is a non-academic material. Theses, books, and seminars can be considered academic."
  },
  {
    topic: "Academic Writing Basics",
    q: "Academic essay usually contains ____________ vocabulary.",
    opts: ["Technical", "Non-Technical", "Simple", "Slang"],
    ans: 0,
    exp: "Academic essays use technical, discipline-specific vocabulary appropriate to the field of study."
  },
  {
    topic: "Academic vs Non-Academic",
    q: "Non-academic essay contains ____________ ending.",
    opts: ["Clear", "Abrupt", "Formal", "Detailed"],
    ans: 1,
    exp: "Unlike academic essays which have clearly structured conclusions, non-academic essays often end abruptly."
  },
  {
    topic: "Academic Writing Basics",
    q: "Academic writers are normally referred to as ____________.",
    opts: ["Scholars", "Professors", "Teachers", "Guide"],
    ans: 0,
    exp: "Academic writers are referred to as scholars — they produce scholarly work."
  },
  {
    topic: "Academic Writing Basics",
    q: "When an academic paper is written for publication, it undergoes a process known as ____________.",
    opts: ["Blind Peer Reviewing", "Plagiarism", "Honor Code", "Review of Literature"],
    ans: 0,
    exp: "Academic papers submitted for publication go through blind peer review, where experts evaluate the work anonymously."
  },
  {
    topic: "Plagiarism & Ethics",
    q: "____________ is an act of stealing others' ideas and works and passing them as one's own.",
    opts: ["Blind Peer Reviewing", "Plagiarism", "Honor Code", "Review of Literature"],
    ans: 1,
    exp: "Plagiarism is the unethical act of presenting someone else's ideas or work as your own without proper attribution."
  },
  {
    topic: "Plagiarism & Ethics",
    q: "Some universities make it mandatory for all students to sign an agreement called ____________.",
    opts: ["Blind Peer Reviewing", "Plagiarism", "Honor Code", "Review of Literature"],
    ans: 2,
    exp: "An Honor Code is a formal agreement students sign pledging academic integrity."
  },
  {
    topic: "Plagiarism & Ethics",
    q: "Plagiarism is a/an ____________.",
    opts: ["Offence", "Review", "Agreement", "Writing"],
    ans: 0,
    exp: "Plagiarism is an academic offence that can result in serious consequences including expulsion."
  },
  {
    topic: "Essay Structure",
    q: "In an academic essay, body paragraphs are ____________.",
    opts: ["Short", "Argumentative", "Long", "Attractive"],
    ans: 2,
    exp: "Body paragraphs in an academic essay are long and detailed, providing full development of ideas with evidence and analysis."
  },
  {
    topic: "Academic vs Non-Academic",
    q: "In ____________ essay, tables and figures are not included.",
    opts: ["Academic", "Non-Academic", "Formal", "Review"],
    ans: 1,
    exp: "Non-academic essays typically do not include tables, figures, or other formal data presentation elements."
  },
  {
    topic: "Academic Writing Basics",
    q: "Academic style involves following certain principles of ____________ writing.",
    opts: ["Informal", "Formal", "Descriptive", "Argumentative"],
    ans: 1,
    exp: "Academic style is grounded in formal writing principles including objectivity, precision, and structured argumentation."
  },
  {
    topic: "Academic Writing Basics",
    q: "____________ expectation change significantly as a student moves from school to college.",
    opts: ["Reading", "Speaking", "Learning", "Writing Skill"],
    ans: 3,
    exp: "Writing skill expectations change significantly as students transition to college, where academic writing standards are much higher."
  },
  {
    topic: "Academic Writing Basics",
    q: "Papers sent for publication in a scholarly journal undergo ____________ and ____________.",
    opts: [
      "Blind Peer Reviewing and Honor Code",
      "Blind Peer Reviewing and Reading",
      "Blind Peer Reviewing and Referencing",
      "Blind Peer Reviewing and Evaluation"
    ],
    ans: 3,
    exp: "Scholarly papers undergo blind peer reviewing and evaluation before publication."
  },
  {
    topic: "Academic Writing Basics",
    q: "Any serious enquiry can be referred to as ____________.",
    opts: ["Essay", "Research", "Seminar", "Information"],
    ans: 1,
    exp: "Research is the term for any serious systematic enquiry aimed at discovering new knowledge."
  },
  {
    topic: "Academic Writing Basics",
    q: "____________ is an important prerequisite for aspiring writers.",
    opts: ["Speaking", "Talking", "Reading", "Reviewing"],
    ans: 2,
    exp: "Reading widely is an essential prerequisite for writers — it develops vocabulary, style, and knowledge."
  },
  {
    topic: "Critical Thinking",
    q: "____________ is a process of inspecting something closely and reflecting on it.",
    opts: ["Evaluation", "Critical Thinking", "Reviewing", "Plagiarism"],
    ans: 1,
    exp: "Critical thinking involves close inspection and thoughtful reflection on information or arguments."
  },
  {
    topic: "Academic Writing Basics",
    q: "An academic writer is expected to be ____________.",
    opts: ["Objective", "Subjective", "Intelligent", "Creative"],
    ans: 0,
    exp: "Academic writers must be objective — presenting evidence and reasoning without personal bias."
  },
  {
    topic: "Academic Writing Basics",
    q: "A sense of ____________ is assumed to be working as a guiding force in academic writings.",
    opts: ["Logic", "Humour", "Responsibility", "Brilliance"],
    ans: 2,
    exp: "A sense of responsibility — to accuracy, to sources, and to readers — guides academic writing."
  },
  {
    topic: "Academic vs Non-Academic",
    q: "Articles published in magazines, newspapers and websites are generally categorised as ____________ writing.",
    opts: ["Academic", "Non-Academic", "Research", "Thesis"],
    ans: 1,
    exp: "Popular media publications (magazines, newspapers, websites) are non-academic writing, not subject to scholarly review."
  },
  {
    topic: "Plagiarism & Ethics",
    q: "The easiest way to avoid ____________ is to distinguish your ideas from the ideas of others in your paper.",
    opts: ["Reviewing", "Evaluation", "Critical Thinking", "Plagiarism"],
    ans: 3,
    exp: "Clearly distinguishing your own ideas from those of others — through citations and attribution — is the key to avoiding plagiarism."
  },
  {
    topic: "Academic Writing Basics",
    q: "____________ writing is writing produced by scholars for other scholars.",
    opts: ["Academic", "Non-Academic", "Descriptive", "Critical"],
    ans: 0,
    exp: "Academic writing is a scholarly conversation — produced by experts for an audience of other experts."
  },
  {
    topic: "Essay Structure",
    q: "The genre of academic writing includes ____________.",
    opts: ["Notes", "Essays", "Observation", "Findings"],
    ans: 1,
    exp: "Essays are a primary genre of academic writing, alongside research papers, reports, dissertations, and proposals."
  },
  {
    topic: "Essay Writing",
    q: "____________ are crucial in determining the type of essays to be produced.",
    opts: ["Articles", "Question Words", "Adverbs", "Introduction"],
    ans: 1,
    exp: "Question words (discuss, analyse, compare, evaluate etc.) in essay prompts determine the type and approach of the essay."
  },
  {
    topic: "Essay Structure",
    q: "____________ mostly follow a linear structure.",
    opts: ["Thesis", "Academic Essay", "Non-Academic Essay", "Paragraph"],
    ans: 1,
    exp: "Academic essays follow a linear structure: introduction → body → conclusion, with a logical progression of ideas."
  },
  {
    topic: "Academic Writing Basics",
    q: "A research paper is ____________ than an essay.",
    opts: ["Easier", "Longer", "Shorter", "Illustrative"],
    ans: 1,
    exp: "A research paper is longer and more comprehensive than a standard essay, involving original research and extensive documentation."
  },
  {
    topic: "Essay Structure",
    q: "The simplest format of an essay includes ____________ paragraphs.",
    opts: ["Two", "Three", "Four", "Five"],
    ans: 3,
    exp: "The classic five-paragraph essay: 1 introduction + 3 body paragraphs + 1 conclusion = 5 paragraphs total."
  },
  {
    topic: "Essay Structure",
    q: "The simplest format of an essay includes ____________ body paragraphs.",
    opts: ["Two", "Three", "Four", "Five"],
    ans: 1,
    exp: "The standard simple essay format has three body paragraphs, each developing one main supporting point."
  },

  /* ── SECTION 2: Academic Writing Tasks ── */
  {
    topic: "Academic Writing Tasks",
    q: "____________ is what you present to explain objectives, purpose, methodology and detailed plan of a project you are wishing to undertake.",
    opts: ["Case study", "Proposal", "Research", "Review"],
    ans: 1,
    exp: "A proposal outlines objectives, purpose, methodology, and a detailed plan for a project before undertaking it."
  },
  {
    topic: "Academic Writing Tasks",
    q: "The main purpose of proposal writing practice is to demonstrate your ability to plan for a ____________.",
    opts: ["Present action", "Past action", "Case study", "Future action"],
    ans: 3,
    exp: "A proposal demonstrates your ability to plan for a future action — it is forward-looking."
  },
  {
    topic: "Academic Writing Tasks",
    q: "____________ is at the same time an approach to writing and a method of study.",
    opts: ["Proposal", "Review of literature", "Case study", "Research paper"],
    ans: 3,
    exp: "A research paper is both a method of studying a topic deeply and an approach to academic writing."
  },
  {
    topic: "Academic Writing Tasks",
    q: "The main skill involved in case study is ____________.",
    opts: ["Reading", "Problem solving", "Organisation", "Analysis"],
    ans: 1,
    exp: "Case study requires problem-solving skills — identifying issues, analysing them, and proposing solutions."
  },
  {
    topic: "Academic Writing Tasks",
    q: "____________ is an important component in a research paper.",
    opts: ["Case study", "Proposal", "Plagiarism", "Review of literature"],
    ans: 3,
    exp: "Review of literature is a crucial component of a research paper, establishing what is already known about the topic."
  },
  {
    topic: "Academic Writing Tasks",
    q: "The main purpose of review of literature as an academic writing activity is to display your ____________ of the subject.",
    opts: ["Knowledge", "Review", "Analysis", "Summary"],
    ans: 0,
    exp: "A literature review demonstrates the writer's knowledge of existing scholarship on a subject."
  },
  {
    topic: "Academic Writing Tasks",
    q: "____________ is expected to cover the broad area of research of the topic.",
    opts: ["Case study", "Report", "Proposal", "Review of literature"],
    ans: 3,
    exp: "A review of literature covers the broad area of research on a topic, surveying major works and perspectives."
  },
  {
    topic: "Academic Writing Tasks",
    q: "____________ is the mandatory final project in certain academic programmes.",
    opts: ["Dissertation", "Proposal", "Research", "Hypothesis"],
    ans: 0,
    exp: "A dissertation is the mandatory final major project (thesis) required for completion of certain academic programmes."
  },

  /* ── SECTION 3: Rhetorical Modes & Essay Types ── */
  {
    topic: "Rhetorical Modes",
    q: "The key function of narrative mode is ____________.",
    opts: ["Recounting events", "To explain categories", "To explain reasons", "To make claims"],
    ans: 0,
    exp: "Narrative mode recounts events — it tells a story or describes a sequence of events."
  },
  {
    topic: "Rhetorical Modes",
    q: "The key function of ____________ is to explain what you mean by something.",
    opts: ["Narration mode", "Description mode", "Definition mode", "Process analysis"],
    ans: 2,
    exp: "Definition mode explains the meaning of a term, concept, or phenomenon."
  },
  {
    topic: "Rhetorical Modes",
    q: "____________ mode is used to show similarities and differences.",
    opts: ["Comparison and Contrast", "Definition", "Narrative", "Argumentation"],
    ans: 0,
    exp: "Comparison and contrast mode examines how two or more subjects are similar and different."
  },
  {
    topic: "Rhetorical Modes",
    q: "____________ approach to writing aims at convincing readers to accept the writer's point of view.",
    opts: ["Expository", "Persuasive", "Analytical", "Descriptive"],
    ans: 1,
    exp: "The persuasive approach aims to convince the reader to adopt the writer's position through argument and evidence."
  },
  {
    topic: "Rhetorical Modes",
    q: "Narrative approach to writing presents ____________.",
    opts: ["Story", "Subject", "Information", "Definition"],
    ans: 0,
    exp: "Narrative writing presents a story — either fictional or non-fictional — recounting events."
  },
  {
    topic: "Documentation Styles",
    q: "The most popular mode of documentation style in subjects under humanities is ____________.",
    opts: ["MLA", "APA", "UGC", "ICSSR"],
    ans: 0,
    exp: "MLA (Modern Language Association) is the dominant citation style in humanities subjects like literature, languages, and arts."
  },
  {
    topic: "Documentation Styles",
    q: "Documentation style MLA stands for ____________.",
    opts: [
      "Malayalam Language Association",
      "Modern Language Association",
      "Marathi Language Association",
      "Medium Language Association"
    ],
    ans: 1,
    exp: "MLA stands for Modern Language Association — the organisation that developed this citation style primarily for humanities."
  },
  {
    topic: "Documentation Styles",
    q: "Research scholars in Social Sciences usually follow ____________ format for documentation.",
    opts: ["UGC", "ICSSR", "APA", "MLA"],
    ans: 2,
    exp: "APA (American Psychological Association) format is standard in social sciences including psychology, sociology, and education."
  },
  {
    topic: "Documentation Styles",
    q: "Documentation style APA stands for ____________.",
    opts: [
      "Afro-American Psychology Association",
      "American Psychological Association",
      "African Psychology Association",
      "Algerian Psychology Association"
    ],
    ans: 1,
    exp: "APA stands for American Psychological Association — the organisation that developed this citation style."
  },
  {
    topic: "Academic Writing Tasks",
    q: "____________ is one of the crucial elements of proposals in professional as well as academic contexts.",
    opts: ["Persuasion", "Definition", "Narration", "Description"],
    ans: 0,
    exp: "Persuasion is crucial in proposals — the writer must convince the reader/committee to approve or fund the proposed project."
  },
  {
    topic: "Pre-writing",
    q: "____________ is a group activity conducted at the beginning of a project to generate ideas.",
    opts: ["Audience Analysis", "Brainstorming", "Rhetorical Mode", "Interaction"],
    ans: 1,
    exp: "Brainstorming is a group (or individual) activity at the start of a project to rapidly generate as many ideas as possible."
  },

  /* ── SECTION 4: Essay Structure & Paragraphing ── */
  {
    topic: "Essay Structure",
    q: "____________ is the main part of an essay.",
    opts: ["Introductory paragraph", "Concluding paragraph", "Body paragraph", "Background information"],
    ans: 2,
    exp: "The body paragraph(s) form the main part of an essay, containing the arguments, evidence, and analysis."
  },
  {
    topic: "Pre-writing",
    q: "There are ____________ major steps preceding the submission of an academic assignment.",
    opts: ["Two", "Three", "Four", "Five"],
    ans: 1,
    exp: "The three major steps are: Pre-writing → Writing (Drafting) → Revising."
  },
  {
    topic: "Pre-writing",
    q: "The major steps preceding the submission of an academic assignment are pre-writing, writing and ____________.",
    opts: ["Reading", "Pre reading", "Revising", "Analysing"],
    ans: 2,
    exp: "The three steps are pre-writing, writing (drafting), and revising — revision is the final step before submission."
  },
  {
    topic: "Pre-writing",
    q: "The earliest step in the process of ____________ is identifying the purpose and audience of your writing.",
    opts: ["Essay writing", "Academic writing", "Assignment writing", "Seminar writing"],
    ans: 1,
    exp: "In academic writing, the earliest step is always identifying your purpose (why you are writing) and your audience (who you are writing for)."
  },
  {
    topic: "Pre-writing",
    q: "____________ in academic writing refers to your reason for writing.",
    opts: ["Audience", "Topic", "Analysis", "Purpose"],
    ans: 3,
    exp: "Purpose is your reason for writing — to inform, argue, analyse, describe, etc. It guides all decisions in academic writing."
  },
  {
    topic: "Pre-writing",
    q: "____________ is an important prerequisite for effective communication.",
    opts: ["Audience analysis", "Academic writing", "Reading analysis", "Topic analysis"],
    ans: 0,
    exp: "Audience analysis — understanding who your readers are — is essential before you can communicate effectively with them."
  },
  {
    topic: "Pre-writing",
    q: "The core of your work is your own distinct ____________.",
    opts: ["View", "Vision", "Voice", "Knowledge"],
    ans: 0,
    exp: "Your view — your original perspective and argument — forms the core of your academic work."
  },
  {
    topic: "Essay Structure",
    q: "In other genres of academic writing it is advisable to adopt a ____________ person.",
    opts: ["Third", "First", "Second", "Fourth"],
    ans: 0,
    exp: "Academic writing typically uses the third person (he, she, they, it) to maintain objectivity and formality."
  },
  {
    topic: "Essay Structure",
    q: "____________ is typically structured in three types of paragraphs.",
    opts: ["Non-academic essay", "Academic essay", "Novel", "Thesis"],
    ans: 1,
    exp: "An academic essay is structured in three paragraph types: introductory, body, and concluding paragraphs."
  },
  {
    topic: "Essay Structure",
    q: "The first paragraph of an academic essay is ____________.",
    opts: ["Concluding paragraph", "Introductory paragraph", "Body paragraph", "Content"],
    ans: 1,
    exp: "The introductory paragraph is always the first paragraph of an academic essay — it introduces the topic and states the thesis."
  },
  {
    topic: "Essay Structure",
    q: "The last paragraph of an academic essay is ____________.",
    opts: ["Concluding paragraph", "Introductory paragraph", "Body paragraph", "Content"],
    ans: 0,
    exp: "The concluding paragraph is the last paragraph — it summarises key points and restates the thesis without introducing new ideas."
  },
  {
    topic: "Essay Structure",
    q: "The main paragraph of an essay is ____________.",
    opts: ["Concluding paragraph", "Introductory paragraph", "Body paragraph", "Preface"],
    ans: 2,
    exp: "The body paragraph is the main paragraph type in an essay — it contains the key arguments and supporting evidence."
  },
  {
    topic: "Essay Structure",
    q: "____________ does not introduce any new ideas in an academic essay.",
    opts: ["Content", "Conclusion", "Introduction", "Body"],
    ans: 1,
    exp: "The conclusion does not introduce new ideas — it only summarises, synthesises, and restates the thesis in light of the discussion."
  },

  /* ── SECTION 5: Pre-writing Strategies ── */
  {
    topic: "Pre-writing",
    q: "Pre-writing means to ____________.",
    opts: [
      "Understand the topic",
      "Draft the concluding paragraph",
      "Draft the introductory paragraph",
      "Edit the essay"
    ],
    ans: 0,
    exp: "Pre-writing is the planning phase where you understand the topic, identify the audience and purpose, and generate ideas."
  },
  {
    topic: "Pre-writing",
    q: "____________ is the preliminary step before you start to write.",
    opts: ["Revising", "Reading", "Pre-writing", "Writing"],
    ans: 2,
    exp: "Pre-writing is done before the actual writing begins — it includes brainstorming, outlining, and research."
  },
  {
    topic: "Pre-writing",
    q: "____________ is used as a method to generate innovative ideas.",
    opts: ["Outlining", "Organising", "Brainstorming", "Revising"],
    ans: 2,
    exp: "Brainstorming is the primary method for generating innovative ideas — it encourages free, uncritical idea generation."
  },
  {
    topic: "Pre-writing",
    q: "____________ is essential to bring in the required logical ordering of your ideas.",
    opts: ["Outlining", "Organising", "Brainstorming", "Revising"],
    ans: 0,
    exp: "Outlining provides the logical structure and ordering of ideas before writing begins, acting as a blueprint for the essay."
  },
  {
    topic: "Essay Writing",
    q: "Focus, clarity and logical order of an essay are achieved through an effective ____________.",
    opts: ["Thesis", "Dissertation", "Statement", "Thesis statement"],
    ans: 3,
    exp: "The thesis statement provides the central argument that gives focus, clarity, and logical direction to the entire essay."
  },
  {
    topic: "Essay Writing",
    q: "When you are writing an essay on a novel, the text of the novel is treated as ____________ source.",
    opts: ["Primary", "Second", "Secondary", "Tertiary"],
    ans: 0,
    exp: "The text being studied (the novel itself) is the primary source. Critical articles about it are secondary sources."
  },
  {
    topic: "Essay Writing",
    q: "Evidence drawn from the text of your study is called ____________ evidence.",
    opts: ["Primary", "Analytical", "Theoretical", "Textual"],
    ans: 3,
    exp: "Textual evidence is evidence drawn directly from the text being studied — quotes, passages, and specific details."
  },
  {
    topic: "Essay Structure",
    q: "____________ invites the attention of the reader.",
    opts: ["Introductory paragraph", "Concluding paragraph", "Body paragraph", "Content"],
    ans: 0,
    exp: "The introductory paragraph must grab and invite the reader's attention — often through a hook, striking statement, or question."
  },
  {
    topic: "Paragraphing",
    q: "The purpose of a ____________ is to present one idea.",
    opts: ["Word", "Sentence", "Paragraph", "Noun"],
    ans: 2,
    exp: "A paragraph presents and develops one central idea — unity requires that all sentences in a paragraph relate to one idea."
  },
  {
    topic: "Paragraphing",
    q: "____________ is a concluding phrase.",
    opts: ["Finally", "That means", "Sure that", "Obviously"],
    ans: 0,
    exp: "'Finally' is a concluding/transitional phrase signalling the last point or the end of a list."
  },
  {
    topic: "Rhetorical Modes",
    q: "The terms ____________ and ____________ refer to the ways you can adopt to communicate effectively.",
    opts: [
      "Rhetoric and rhetorical",
      "Rhetoric and analytical",
      "Rhetorical and critical",
      "Rhetorical and informative"
    ],
    ans: 0,
    exp: "Rhetoric (the art of communication) and rhetorical (relating to rhetoric) together describe effective communication strategies."
  },
  {
    topic: "Rhetorical Modes",
    q: "____________ is a rhetorical mode aimed at explaining something with examples.",
    opts: ["Argumentative", "Descriptive", "Explanatory", "Illustrative"],
    ans: 3,
    exp: "Illustrative mode uses examples to explain and demonstrate ideas, making abstract concepts concrete."
  },
  {
    topic: "Rhetorical Modes",
    q: "____________ is a rhetorical mode suitable for relating a sequence of events or thoughts.",
    opts: ["Illustrative", "Rhetorical", "Descriptive", "Narrative"],
    ans: 3,
    exp: "Narrative mode relates events in sequence — it tells what happened and in what order."
  },
  {
    topic: "Rhetorical Modes",
    q: "Narratives can be classified as ____________ and ____________.",
    opts: [
      "Fictional and non-fictional",
      "Novel and fiction",
      "Novel and novella",
      "Story and poem"
    ],
    ans: 0,
    exp: "Narratives are classified as fictional (invented stories) and non-fictional (real events) — these are the two broad categories."
  },
  {
    topic: "Rhetorical Modes",
    q: "Argumentative writing is also called ____________ writing.",
    opts: ["Descriptive", "Detailed", "Analytical", "Persuasive"],
    ans: 3,
    exp: "Argumentative writing is synonymous with persuasive writing — both aim to convince the reader of a position."
  },
  {
    topic: "Essay Types",
    q: "____________ gives emphasis on convincing the reader by substantiating its claim with the help of supporting evidence.",
    opts: ["Descriptive essay", "Argumentative essay", "Definition essay", "Cause and effect essay"],
    ans: 1,
    exp: "An argumentative essay is built on claims supported by evidence — its primary goal is to convince the reader."
  },
  {
    topic: "Essay Types",
    q: "____________ is a way of explaining a word or phrase.",
    opts: ["Description", "Definition", "Argument", "Statement"],
    ans: 1,
    exp: "Definition provides the meaning or explanation of a word, term, or concept."
  },
  {
    topic: "Essay Types",
    q: "____________ essay deals with causes, effects, both cause and effect, and a phenomenon.",
    opts: ["Compare and contrast", "Cause and effect", "Descriptive", "Argumentative"],
    ans: 1,
    exp: "A cause and effect essay analyses why things happen (causes) and what results from them (effects)."
  },
  {
    topic: "Rhetorical Modes",
    q: "____________ is explaining how something works, happens, or is done.",
    opts: ["Audience analysis", "Textual analysis", "Process analysis", "Topic analysis"],
    ans: 2,
    exp: "Process analysis explains a procedure or how something works step by step."
  },
  {
    topic: "Essay Types",
    q: "The general purpose of ____________ and ____________ is to break broad subjects into smaller parts.",
    opts: [
      "Classification and division",
      "Division and analysis",
      "Classification and planning",
      "Classification and writing"
    ],
    ans: 0,
    exp: "Classification (grouping) and division (breaking into parts) both deal with organising broad subjects into manageable components."
  },
  {
    topic: "Essay Types",
    q: "____________ and ____________ essay presents similarities and differences.",
    opts: [
      "Classification and division",
      "Cause and effect",
      "Compare and contrast",
      "Compare and write"
    ],
    ans: 2,
    exp: "The compare and contrast essay explicitly examines both similarities and differences between two or more subjects."
  },
  {
    topic: "Essay Types",
    q: "Handbook is an example for ____________ process analysis.",
    opts: ["Directional", "Non-directional", "Informational", "Analytical"],
    ans: 0,
    exp: "A handbook gives directions/instructions — it is directional process analysis telling the reader how to do something."
  },
  {
    topic: "Essay Types",
    q: "'Accordingly', 'as a result', 'due to' are the phrases used in a ____________.",
    opts: [
      "Descriptive and analytical essay",
      "Argumentative and descriptive essay",
      "Definition and cause essay",
      "Cause and effect essay"
    ],
    ans: 3,
    exp: "These causal connectors (as a result, due to, accordingly) signal cause-and-effect relationships."
  },
  {
    topic: "Essay Types",
    q: "____________ is a word/phrase used in comparison/contrast essay.",
    opts: ["Also", "Due to", "Because", "So that"],
    ans: 0,
    exp: "'Also' is an additive/comparative connector used in compare and contrast essays to show similarity. 'Due to' and 'because' are causal."
  },
  {
    topic: "Essay Types",
    q: "____________ summarises the points compared/contrasted and restates the thesis statement.",
    opts: ["Introduction", "Content", "Preface", "Conclusion"],
    ans: 3,
    exp: "The conclusion of a compare and contrast essay summarises the comparison and restates the thesis."
  },
  {
    topic: "Essay Types",
    q: "____________ is taken into consideration while selecting examples in an illustrative essay.",
    opts: ["Scholars", "Teachers", "Source", "Audience"],
    ans: 3,
    exp: "When selecting examples in an illustrative essay, you must consider your audience — what will resonate with and be understood by them."
  },
  {
    topic: "Essay Types",
    q: "The two types of description are ____________.",
    opts: [
      "Objective and subjective",
      "Critical and objective",
      "Analytical and textual",
      "Cause and effect"
    ],
    ans: 0,
    exp: "Description is either objective (neutral, factual, unbiased) or subjective (personal, emotional, opinionated)."
  },
  {
    topic: "Essay Types",
    q: "The use of active verbs to create a lasting impression can be seen in ____________.",
    opts: ["Definition essay", "Descriptive essay", "Analytical essay", "Argumentative essay"],
    ans: 1,
    exp: "Descriptive essays use vivid, active verbs to paint a picture and create a lasting sensory impression on the reader."
  },
  {
    topic: "Essay Types",
    q: "____________ is an example for fictional narrative.",
    opts: ["Folklore", "Biography", "Autobiography", "News report"],
    ans: 0,
    exp: "Folklore is a fictional narrative — stories, legends, and myths passed through generations. Biography and autobiography are non-fictional; news reports are factual."
  },
  {
    topic: "Essay Types",
    q: "____________ is an example for non-fictional narrative.",
    opts: ["Story", "Novel", "Novella", "News report"],
    ans: 3,
    exp: "A news report is a non-fictional narrative — it recounts real events. Stories, novels, and novellas are fictional."
  },
  {
    topic: "Essay Types",
    q: "____________ description is predominantly personal.",
    opts: ["Objective", "Subjective", "Analytic", "Valuable"],
    ans: 1,
    exp: "Subjective description is personal — it incorporates the writer's feelings, opinions, and personal impressions."
  },
  {
    topic: "Essay Types",
    q: "In ____________ description, writers would not mention how interesting their observations were.",
    opts: ["Objective", "Subjective", "Analytic", "Valuable"],
    ans: 0,
    exp: "Objective description presents neutral facts without personal reactions — the writer would not say something was 'interesting' or 'beautiful'."
  },
  {
    topic: "Essay Types",
    q: "In ____________ writing, the use of figurative language is permitted to be subjective.",
    opts: ["Descriptive", "Definition", "Cause and effect", "Argumentative"],
    ans: 0,
    exp: "Descriptive writing allows subjective, figurative language (metaphors, similes, imagery) to create vivid impressions."
  },
  {
    topic: "Essay Types",
    q: "____________ essay presents a controlling idea or thesis, the illustration of which is done using examples.",
    opts: ["Definition essay", "Descriptive essay", "Illustrative essay", "Argumentative essay"],
    ans: 2,
    exp: "An illustrative essay makes a central claim (thesis) and supports it with a series of concrete examples."
  },
  {
    topic: "Essay Types",
    q: "____________ is a phrase used in an illustrative essay.",
    opts: ["In particular", "Due to", "Both", "Whereas"],
    ans: 0,
    exp: "'In particular' introduces a specific example — it is a typical phrase in illustrative essays. 'Due to' is causal; 'whereas' is contrastive."
  },
  {
    topic: "Essay Types",
    q: "Any kind of writing that brings out a story, fictional or real, can be called ____________.",
    opts: ["Description", "Definition", "Analysis", "Narrative"],
    ans: 3,
    exp: "Narrative writing encompasses any story-based writing, whether the story is invented (fictional) or based on real events (non-fictional)."
  },

  /* ── SECTION 6: Reading Techniques ── */
  {
    topic: "Reading Techniques",
    q: "Gathering information for academic writing is mainly through your ability to ____________.",
    opts: ["Listen carefully", "Read closely", "Speak clearly", "Write proficiently"],
    ans: 1,
    exp: "Reading closely is the primary means of gathering information for academic writing — it involves active engagement with texts."
  },
  {
    topic: "Reading Techniques",
    q: "When you read to prepare to write an academic essay, you can find information on the relevance of a particular book to your topic from ____________.",
    opts: [
      "The appendix",
      "The abstract and the index",
      "Lecturers and colleagues",
      "Information on the author"
    ],
    ans: 1,
    exp: "The abstract gives a summary of a book's content; the index shows what topics are covered — both help determine relevance."
  },
  {
    topic: "Reading Techniques",
    q: "____________ is used when looking for a telephone number in your address book.",
    opts: ["Scanning", "Skimming", "Critical reading", "Extensive reading"],
    ans: 0,
    exp: "Scanning is used when you are looking for a specific piece of information — like a name or number — without reading everything."
  },
  {
    topic: "Reading Techniques",
    q: "At the preview stage in reading, the reader is supposed to scan the following set of things.",
    opts: [
      "Subheading, visuals and prints",
      "Sub-heading, prints and visuals",
      "The title, subheading and visuals",
      "The title, visuals and the main heading"
    ],
    ans: 2,
    exp: "At the preview/survey stage of reading, you scan: the title, subheadings, and visuals to get an overview of the text."
  },
  {
    topic: "Reading Techniques",
    q: "The reading method known as SQ3R (SQRRR) helps us to ____________.",
    opts: [
      "Analyse, retain and organise knowledge",
      "Retain, analyse and organise knowledge",
      "Analyse, organise and retain knowledge",
      "Retain, organise and analyse knowledge"
    ],
    ans: 0,
    exp: "SQ3R helps us to analyse, retain, and organise knowledge — the method involves Survey, Question, Read, Recite, and Review."
  },
  {
    topic: "Reading Techniques",
    q: "Skimming is ____________.",
    opts: [
      "A reading for an overview",
      "Reading for specific information",
      "Critically analysing a text",
      "Memorising content"
    ],
    ans: 0,
    exp: "Skimming is reading quickly to get a general overview or the main idea of a text, without reading every word."
  },
  {
    topic: "Reading Techniques",
    q: "Proof-reading your work will be done through ____________.",
    opts: ["Scanning", "Skimming", "Critical reading", "Extensive reading"],
    ans: 2,
    exp: "Proof-reading requires critical reading — careful, close reading to identify errors in grammar, spelling, punctuation, and logic."
  },
  {
    topic: "Reading Techniques",
    q: "Which reading technique involves quickly glancing over a text to get a general idea of its content?",
    opts: ["Skimming", "Scanning", "Intensive reading", "Extensive reading"],
    ans: 0,
    exp: "Skimming involves quickly reading a text to grasp its general idea — reading headings, first sentences, and key words."
  },
  {
    topic: "Reading Techniques",
    q: "What is the primary purpose of the SQ3R method?",
    opts: [
      "To skim through a text quickly",
      "To improve reading speed",
      "To enhance reading comprehension",
      "To memorise every detail in a text"
    ],
    ans: 2,
    exp: "SQ3R (Survey, Question, Read, Recite, Review) is designed to enhance reading comprehension and retention of material."
  },
  {
    topic: "Reading Techniques",
    q: "Which reading technique involves focusing on specific keywords or phrases to locate particular information in a text?",
    opts: ["Skimming", "Scanning", "Detailed reading", "Analytical reading"],
    ans: 1,
    exp: "Scanning involves moving your eyes quickly over a text to find specific keywords, numbers, or information."
  },
  {
    topic: "Reading Techniques",
    q: "What is the purpose of pre-reading strategies?",
    opts: [
      "To read the text multiple times",
      "To improve reading speed",
      "To activate prior knowledge and set a purpose for reading",
      "To summarise the text before reading"
    ],
    ans: 2,
    exp: "Pre-reading strategies activate what you already know about a topic and help you set a clear purpose before reading."
  },
  {
    topic: "Reading Techniques",
    q: "What does the term 'subvocalisation' refer to in the context of reading?",
    opts: [
      "Reading aloud",
      "Reading silently",
      "Pronouncing words in one's mind while reading",
      "Skimming through a text"
    ],
    ans: 2,
    exp: "Subvocalisation is the habit of silently pronouncing words in your head as you read — it can slow down reading speed."
  },
  {
    topic: "Reading Techniques",
    q: "When using the PQRST method for reading, what does the 'R' stand for?",
    opts: ["Read", "Recall", "Research", "Review"],
    ans: 0,
    exp: "In PQRST (Preview, Question, Read, Summarise, Test), 'R' stands for Read — reading carefully to find answers and understand content."
  },
  {
    topic: "Reading Techniques",
    q: "When using the SQ3R method, what does the first 'S' stand for?",
    opts: ["Survey", "Skim", "Scan", "Summarise"],
    ans: 0,
    exp: "The first 'S' in SQ3R stands for Survey — getting an overview of the text before reading it fully."
  },
  {
    topic: "Reading Techniques",
    q: "What is the purpose of skimming when reading a text?",
    opts: [
      "To read slowly and carefully",
      "To understand every detail",
      "To get a general overview",
      "To memorise the content"
    ],
    ans: 2,
    exp: "Skimming provides a quick general overview of a text's content and main ideas."
  },
  {
    topic: "Reading Techniques",
    q: "How does scanning differ from skimming in reading?",
    opts: [
      "Scanning involves reading in detail",
      "Skimming is used to find specific information",
      "Scanning is used to find specific information; skimming gives a general idea",
      "Skimming is a slow reading technique"
    ],
    ans: 2,
    exp: "Scanning locates specific information; skimming gets a general overview. They serve different reading purposes."
  },

  /* ── SECTION 7: Paragraphing ── */
  {
    topic: "Paragraphing",
    q: "Which of the following cannot be classified as an academic essay?",
    opts: [
      "An assignment by a Level 200 student",
      "A long essay written by a Level 400 student",
      "A report written by a biology student",
      "An article written by a renowned journalist"
    ],
    ans: 3,
    exp: "A journalist's article targets the general public and follows journalistic conventions — it is not an academic essay produced in a scholarly context."
  },
  {
    topic: "Paragraphing",
    q: "The introduction and conclusion can be described as special paragraphs.",
    opts: ["True", "False", "Sometimes true", "Not applicable"],
    ans: 0,
    exp: "True — the introduction and conclusion are special paragraphs because they have unique functions distinct from body paragraphs."
  },
  {
    topic: "Paragraphing",
    q: "The academic essay is formally structured to have ____________.",
    opts: [
      "A beginning and an end",
      "An introduction, a main body and a conclusion",
      "Unity, coherence and completeness",
      "Subject matter and theme"
    ],
    ans: 1,
    exp: "An academic essay has three formal components: introduction, main body, and conclusion."
  },
  {
    topic: "Paragraphing",
    q: "Which one of the following is NOT a reason why academic papers are written?",
    opts: [
      "To report a current event nearby",
      "To report a piece of research conducted",
      "To synthesise research done by others",
      "To discuss a subject in a particular discipline"
    ],
    ans: 0,
    exp: "Reporting a current local event is journalism, not academic writing. Academic papers report research, synthesise scholarship, or discuss disciplinary subjects."
  },
  {
    topic: "Paragraphing",
    q: "Minor supporting sentences usually ____________.",
    opts: [
      "Link one sentence to another",
      "Support the topic sentence directly",
      "Support the major supporting sentence directly",
      "Help in summarising the main ideas in the paragraph"
    ],
    ans: 2,
    exp: "Minor supporting sentences provide additional support to major supporting sentences (not directly to the topic sentence)."
  },
  {
    topic: "Paragraphing",
    q: "Which of the following is the term used to describe ensuring linkages within a paragraph?",
    opts: ["Coherence", "Completeness", "Unity", "Academese"],
    ans: 0,
    exp: "Coherence refers to the logical flow and linkages between sentences within a paragraph — it ensures ideas connect smoothly."
  },
  {
    topic: "Paragraphing",
    q: "A paragraph can be indicated by ____________.",
    opts: [
      "Indentation and line spacing",
      "Capitalisation",
      "The use of signal words and pronouns",
      "Transitions only"
    ],
    ans: 0,
    exp: "Paragraphs are visually indicated by indentation (indent at the beginning) or line spacing (a blank line between paragraphs)."
  },
  {
    topic: "Paragraphing",
    q: "Which of the following is an academic writing composed by undergraduate students?",
    opts: ["Project work", "Thesis", "Journal article", "Dissertation"],
    ans: 0,
    exp: "Project work (long essays, research projects) is the standard academic writing form for undergraduates. Theses and dissertations are postgraduate."
  },
  {
    topic: "Paragraphing",
    q: "Rewriting includes reorganising, changing, deleting, and adding information. These occur at the ____________.",
    opts: ["Pre-drafting stage", "Drafting stage", "Post-drafting stage", "Writing stage"],
    ans: 2,
    exp: "Rewriting/revising happens at the post-drafting stage — after the initial draft is complete."
  },
  {
    topic: "Paragraphing",
    q: "Academic writings are composed by consulting multiple sources.",
    opts: ["True", "False", "Not multiple but single", "Both may be true"],
    ans: 0,
    exp: "True — academic writing requires consulting and citing multiple sources to build a well-supported argument."
  },
  {
    topic: "Paragraphing",
    q: "The topic sentence does this ____________.",
    opts: [
      "It gives focus to the essay",
      "It helps the writer state what the paragraph is about",
      "It helps the writer to reflect on the subject matter",
      "It helps the writer to signal a change, such as a contrast"
    ],
    ans: 1,
    exp: "The topic sentence states the main idea of the paragraph — it tells the reader what the paragraph is about."
  },
  {
    topic: "Paragraphing",
    q: "Identify the sentence that is formal and suitable for academic writing.",
    opts: [
      "Some of the theories suggested are ok to be considered",
      "I think the criticism can't be accepted against the study",
      "We aren't ready for another lockdown in a third world country",
      "The findings revealed that unemployment is on the rise"
    ],
    ans: 3,
    exp: "'The findings revealed that unemployment is on the rise' is formal, objective, uses full words (not contractions), and is impersonal — suitable for academic writing."
  },
  {
    topic: "Paragraphing",
    q: "Which of the following is NOT always expected in a paragraph?",
    opts: ["Explanations", "Topic sentence", "Counter argument", "Examples"],
    ans: 2,
    exp: "A counter argument is not always expected in every paragraph — only in argumentative/persuasive contexts. Topic sentences, explanations, and examples are standard paragraph components."
  },
  {
    topic: "Paragraphing",
    q: "Identify the sentence that is impersonal and suitable for academic writing.",
    opts: [
      "Our suggestions are laudable",
      "They collected reports from three sources",
      "I cannot establish the truth",
      "The tools and materials used were listed"
    ],
    ans: 3,
    exp: "'The tools and materials used were listed' uses passive voice and avoids personal pronouns — it is impersonal and academically appropriate."
  },
  {
    topic: "Paragraphing",
    q: "Which of the following is NOT a technique used in developing a paragraph?",
    opts: ["Comparison", "Process", "Cause and effect analysis", "Paragraph unity"],
    ans: 3,
    exp: "Paragraph unity is a quality of a good paragraph, not a development technique. Comparison, process, and cause and effect are paragraph development techniques."
  },
  {
    topic: "Paragraphing",
    q: "The product approach to essay writing is not recommended in academic writing because ____________.",
    opts: [
      "It focuses on the product only",
      "It focuses on the process only",
      "It focuses on the stages only",
      "It focuses on both the product and the process"
    ],
    ans: 0,
    exp: "The product approach only focuses on the final product, neglecting the writing process (planning, drafting, revising) — so it is not recommended."
  },
  {
    topic: "Paragraphing",
    q: "The main skills involved in scholarly writing chronologically include ____________.",
    opts: [
      "Listening, reading, speaking and writing",
      "Listening, note-making, reading and writing",
      "Listening, speaking, reading and writing",
      "Listening, speaking, reading and note-making"
    ],
    ans: 1,
    exp: "Scholarly writing involves: Listening (lectures) → Note-making → Reading (sources) → Writing — in that chronological order."
  },
  {
    topic: "Paragraphing",
    q: "What does the principle of unity in paragraphing refer to?",
    opts: [
      "Including unrelated ideas in a paragraph",
      "Ensuring all sentences in a paragraph support a central idea",
      "Using different fonts for each sentence",
      "Starting a new paragraph for every sentence"
    ],
    ans: 1,
    exp: "Unity means every sentence in a paragraph supports one central idea — no irrelevant information is included."
  },
  {
    topic: "Paragraphing",
    q: "Which of the following best describes coherence in paragraphing?",
    opts: [
      "Having random sentences in a paragraph",
      "Using complex vocabulary throughout a paragraph",
      "Ensuring sentences flow logically from one to the next",
      "Starting each sentence with the same word"
    ],
    ans: 2,
    exp: "Coherence means sentences flow logically from one to another, with clear connections and transitions."
  },
  {
    topic: "Paragraphing",
    q: "How does completeness contribute to effective paragraphing?",
    opts: [
      "Including only one idea per paragraph",
      "Ending a paragraph abruptly",
      "Providing sufficient information to fully develop the central idea",
      "Using vague language throughout the paragraph"
    ],
    ans: 2,
    exp: "Completeness means providing enough information, examples, and explanation to fully develop the paragraph's central idea."
  },
  {
    topic: "Paragraphing",
    q: "What is the purpose of a topic sentence in a paragraph?",
    opts: [
      "To introduce a new idea",
      "To conclude the paragraph",
      "To provide supporting details",
      "To express the main idea of the paragraph"
    ],
    ans: 3,
    exp: "The topic sentence expresses the main idea of the paragraph — all other sentences in the paragraph support and develop this idea."
  },
  {
    topic: "Paragraphing",
    q: "How can transitions enhance coherence in paragraphing?",
    opts: [
      "By using different fonts for each sentence",
      "By linking ideas and guiding the reader from one point to the next",
      "By including unrelated information",
      "By repeating the same sentence multiple times"
    ],
    ans: 1,
    exp: "Transitions (however, furthermore, therefore, etc.) link ideas and guide the reader through the logical progression of the essay."
  },
  {
    topic: "Paragraphing",
    q: "What role do supporting details play in a well-developed paragraph?",
    opts: [
      "To introduce a new topic",
      "To confuse the reader",
      "To provide evidence and examples that strengthen the central idea",
      "To repeat the topic sentence in different words"
    ],
    ans: 2,
    exp: "Supporting details provide evidence, examples, statistics, and explanations that strengthen and develop the central idea of the paragraph."
  },

  /* ── SECTION 8: Essay Writing & Thesis ── */
  {
    topic: "Essay Writing",
    q: "What is the purpose of the introduction in an essay?",
    opts: [
      "To present the main argument",
      "To provide supporting evidence",
      "To summarise the conclusion",
      "To engage the reader"
    ],
    ans: 3,
    exp: "The introduction's primary purpose is to engage the reader and draw them into the essay, while also presenting the topic and thesis."
  },
  {
    topic: "Essay Writing",
    q: "Which part of an essay typically contains the thesis statement?",
    opts: ["Introduction", "Body paragraphs", "Conclusion", "Title"],
    ans: 0,
    exp: "The thesis statement is located in the introduction — typically at the end of the introductory paragraph."
  },
  {
    topic: "Essay Writing",
    q: "What is the function of the topic sentence in a body paragraph?",
    opts: [
      "Provide a transition to the next paragraph",
      "Introduce the main idea of the paragraph",
      "Conclude the paragraph",
      "Offer a counterargument"
    ],
    ans: 1,
    exp: "The topic sentence introduces the main idea of its paragraph — it is usually the first sentence of a body paragraph."
  },
  {
    topic: "Essay Writing",
    q: "How does a conclusion differ from an introduction in an essay?",
    opts: [
      "The conclusion introduces the main argument",
      "The conclusion summarises key points",
      "The conclusion engages the reader",
      "The conclusion provides background information"
    ],
    ans: 1,
    exp: "The conclusion summarises the key points made in the essay and restates the thesis — unlike the introduction which introduces the topic."
  },
  {
    topic: "Essay Writing",
    q: "Which of the following is NOT a part of the typical essay structure?",
    opts: ["Hook", "Thesis statement", "Conclusion", "Table of contents"],
    ans: 3,
    exp: "A table of contents is a feature of longer documents (dissertations, reports) — not part of a typical essay structure."
  },
  {
    topic: "Essay Writing",
    q: "What is the purpose of the body paragraphs in an essay?",
    opts: [
      "To introduce the main argument",
      "To provide background information",
      "To support the thesis statement",
      "To restate the introduction"
    ],
    ans: 2,
    exp: "Body paragraphs develop and support the thesis statement with arguments, evidence, and analysis."
  },
  {
    topic: "Essay Writing",
    q: "What is the purpose of the conclusion in an essay?",
    opts: [
      "To introduce new ideas",
      "To summarise key points",
      "To present the thesis statement",
      "To provide background information"
    ],
    ans: 1,
    exp: "The conclusion summarises the key points, restates the thesis in light of the discussion, and brings the essay to a close."
  },
  {
    topic: "Essay Writing",
    q: "What is the main purpose of a thesis statement in an essay?",
    opts: ["Introduce the topic", "Provide evidence", "Present the main idea", "Conclude the essay"],
    ans: 2,
    exp: "The thesis statement presents the main idea or central argument of the essay — it is the controlling statement."
  },
  {
    topic: "Essay Writing",
    q: "Where is the thesis statement usually found in an essay?",
    opts: ["Introduction", "Conclusion", "Body paragraphs", "Title"],
    ans: 0,
    exp: "The thesis statement is found in the introduction — typically at the end of the introductory paragraph."
  },
  {
    topic: "Essay Writing",
    q: "Which of the following is NOT a characteristic of a strong thesis statement?",
    opts: ["Specific", "Vague", "Arguable", "Clear"],
    ans: 1,
    exp: "A strong thesis statement must be specific, arguable, and clear. Vagueness is a weakness — a strong thesis must be precise."
  },
  {
    topic: "Essay Writing",
    q: "What is the purpose of revising a thesis statement during the writing process?",
    opts: [
      "To change the main idea",
      "To confuse the reader",
      "To strengthen the argument",
      "To remove supporting evidence"
    ],
    ans: 2,
    exp: "Revising the thesis as you write helps sharpen and strengthen the central argument as your ideas develop."
  },
  {
    topic: "Essay Writing",
    q: "Which of the following should NOT be included in a thesis statement?",
    opts: ["Personal opinions", "Specific argument", "Clear focus", "Multiple ideas"],
    ans: 3,
    exp: "A thesis statement should focus on ONE main idea — including multiple ideas makes it unfocused and difficult to develop."
  },

  /* ── SECTION 9: Citations & Plagiarism ── */
  {
    topic: "Citations & Plagiarism",
    q: "What is the purpose of citing sources in academic writing?",
    opts: [
      "To show off your knowledge",
      "To give credit to the original authors",
      "To make your paper longer",
      "To confuse the readers"
    ],
    ans: 1,
    exp: "Citations acknowledge the original authors, avoid plagiarism, and allow readers to locate the sources you used."
  },
  {
    topic: "Citations & Plagiarism",
    q: "Which of the following is an example of a commonly used citation style?",
    opts: [
      "MLA (Modern Language Association)",
      "LOL (Lots of Links)",
      "OMG (Obligatory Mentioning of Guides)",
      "TTYL (Texting Talk Y'all Later)"
    ],
    ans: 0,
    exp: "MLA (Modern Language Association) is a real, widely-used citation style — the others are not legitimate citation formats."
  },
  {
    topic: "Citations & Plagiarism",
    q: "Plagiarism is best defined as ____________.",
    opts: [
      "Using someone else's work without permission or credit",
      "Rewriting a sentence in your own words",
      "Making up sources in your bibliography",
      "Copying your friend's homework"
    ],
    ans: 0,
    exp: "Plagiarism is using someone else's work, ideas, or words without permission or proper credit — presenting them as your own."
  },
  {
    topic: "Citations & Plagiarism",
    q: "Which of the following is NOT a form of plagiarism?",
    opts: [
      "Copying and pasting text from a website without citation",
      "Paraphrasing someone else's work without giving credit",
      "Quoting a source and providing proper citation",
      "Creating original content based on your research"
    ],
    ans: 2,
    exp: "Quoting with proper citation is NOT plagiarism — it is the correct, ethical way to use someone else's words."
  },
  {
    topic: "Citations & Plagiarism",
    q: "In APA citation style, how should an in-text citation typically look?",
    opts: [
      "(Author's first name, year of publication)",
      "(Author's last name, page number)",
      "[Author's last name, year of publication]",
      "Author's last name, (year of publication)"
    ],
    ans: 2,
    exp: "APA in-text citation format: (Author's Last Name, Year) using parentheses. Option C shows this with brackets, which is the closest — though technically APA uses round brackets: (Author, Year)."
  },
  {
    topic: "Citations & Plagiarism",
    q: "When should you cite a source in your paper?",
    opts: [
      "Only if the author is famous",
      "Only for direct quotes",
      "Only for information you didn't know before",
      "Whenever you use someone else's ideas, words, or data"
    ],
    ans: 3,
    exp: "You must cite a source whenever you use someone else's ideas, words, data, or arguments — whether quoting, paraphrasing, or summarising."
  },

  /* ── SECTION 10: Research Paper Components ── */
  {
    topic: "Research Paper Components",
    q: "What section of a research paper provides additional information that is not essential to the main text?",
    opts: ["Abstract", "Appendix", "Endnote", "Footnote"],
    ans: 1,
    exp: "The appendix contains supplementary information (tables, raw data, instruments) that supports the paper but is not essential to the main text."
  },
  {
    topic: "Research Paper Components",
    q: "Which part of a document lists all the sources used in writing the paper?",
    opts: ["Bibliography", "Reference list", "Appendix", "Abstract"],
    ans: 0,
    exp: "A bibliography lists all sources consulted (whether cited or not). A reference list only includes sources actually cited in the text."
  },
  {
    topic: "Research Paper Components",
    q: "Where is the summary of a research paper typically found?",
    opts: ["Abstract", "Content", "Footnote", "Endnote"],
    ans: 0,
    exp: "The abstract is the summary of a research paper — it briefly covers the purpose, methods, findings, and conclusions."
  },
  {
    topic: "Research Paper Components",
    q: "What is the term for a long essay or dissertation involving personal research, written by a candidate for a university degree?",
    opts: ["Dissertation", "Thesis", "Project work", "Abstract"],
    ans: 1,
    exp: "A thesis is a long research-based essay written for a university degree. 'Dissertation' is sometimes used interchangeably but can refer to doctoral-level work."
  },
  {
    topic: "Research Paper Components",
    q: "What is the term for a list of references cited in a document?",
    opts: ["Bibliography", "Appendix", "Abstract", "Content"],
    ans: 0,
    exp: "A bibliography (or reference list) is the section listing all the sources cited or consulted in the document."
  },
  {
    topic: "Research Paper Components",
    q: "In a research paper, where would you find additional material like charts, graphs, or detailed information?",
    opts: ["Endnote", "Footnote", "Appendix", "Reference list"],
    ans: 2,
    exp: "The appendix contains additional supporting material — charts, graphs, questionnaires, raw data — that would disrupt the main text."
  },
  {
    topic: "Research Paper Components",
    q: "Which part of a document provides a brief overview of the main points and purpose of the work?",
    opts: ["Thesis", "Project work", "Abstract", "Content"],
    ans: 2,
    exp: "The abstract provides a concise overview of the research paper — its purpose, methods, key findings, and conclusions."
  },
  {
    topic: "Research Paper Components",
    q: "What is the purpose of a literature review in academic writing?",
    opts: [
      "To summarise your findings",
      "To evaluate existing research",
      "To present your methodology",
      "To list references"
    ],
    ans: 1,
    exp: "A literature review evaluates, synthesises, and critiques existing research relevant to your topic."
  },
  {
    topic: "Research Paper Components",
    q: "Which of the following is NOT typically included in an academic proposal?",
    opts: ["Research question", "Methodology", "Results", "Significance of the study"],
    ans: 2,
    exp: "A proposal is written before the research is conducted — it cannot include results, which come after the research is complete."
  },
  {
    topic: "Research Paper Components",
    q: "What should a preview of an academic work provide?",
    opts: [
      "Detailed methodology",
      "Summary of existing research",
      "Introduction to the topic",
      "References"
    ],
    ans: 2,
    exp: "A preview introduces the topic to the reader, giving an initial orientation before the full work is read."
  },
  {
    topic: "Research Paper Components",
    q: "Which section of an academic work outlines the research question and objectives?",
    opts: ["Introduction", "Literature review", "Methodology", "Conclusion"],
    ans: 0,
    exp: "The introduction states the research question, objectives, and scope of the study."
  },
  {
    topic: "Research Paper Components",
    q: "What is the purpose of a methodology section in academic writing?",
    opts: [
      "To present the results",
      "To analyse data",
      "To outline the research process",
      "To list references"
    ],
    ans: 2,
    exp: "The methodology section outlines how the research was conducted — the methods, tools, procedures, and rationale."
  },
  {
    topic: "Research Paper Components",
    q: "What is the primary function of citations in academic writing?",
    opts: [
      "To provide examples",
      "To show appreciation to the authors",
      "To support your arguments",
      "To list references"
    ],
    ans: 2,
    exp: "Citations support your arguments by providing evidence from credible sources and acknowledging intellectual debt."
  },
  {
    topic: "Research Paper Components",
    q: "In academic writing, what does the term 'peer-reviewed' refer to?",
    opts: [
      "Research conducted by colleagues",
      "Articles reviewed by experts in the field",
      "Personal opinions",
      "Popular magazines"
    ],
    ans: 1,
    exp: "Peer-reviewed means the article has been evaluated by independent experts (peers) in the same field before publication."
  },
  {
    topic: "Research Paper Components",
    q: "Which of the following is NOT a common citation style used in academic writing?",
    opts: ["MLA", "APA", "Harvard", "Chicago Bulls"],
    ans: 3,
    exp: "MLA, APA, Harvard, and Chicago are legitimate citation styles. 'Chicago Bulls' is a basketball team — not a citation style."
  },
  {
    topic: "Research Paper Components",
    q: "What is the main difference between primary and secondary sources in academic writing?",
    opts: [
      "Primary sources are more recent",
      "Secondary sources are original research",
      "Primary sources are firsthand accounts",
      "Secondary sources are always more reliable"
    ],
    ans: 2,
    exp: "Primary sources are firsthand, original accounts (raw data, original texts, eyewitness accounts). Secondary sources are interpretations or analyses of primary sources."
  },
  {
    topic: "Research Paper Components",
    q: "What is the purpose of an appendix in academic writing?",
    opts: [
      "To introduce the topic",
      "To provide additional information",
      "To summarise key findings",
      "To list references"
    ],
    ans: 1,
    exp: "The appendix provides additional supplementary information that supports the study but is too detailed for the main text."
  },

  /* ── SECTION 11: Grammar & Sentences ── */
  {
    topic: "Grammar",
    q: "What is a run-on sentence?",
    opts: [
      "A sentence that is too short",
      "A sentence that combines two or more independent clauses without proper punctuation or conjunctions",
      "A sentence that is too long and complex",
      "A sentence that lacks a subject"
    ],
    ans: 1,
    exp: "A run-on sentence incorrectly joins two or more independent clauses without proper punctuation (period, semicolon) or a conjunction."
  },
  {
    topic: "Grammar",
    q: "What is a sentence fragment?",
    opts: [
      "A complete sentence with a subject and a verb",
      "A sentence that is too long",
      "A group of words that is missing a subject or a verb or does not express a complete thought",
      "A sentence that uses too many transitional words"
    ],
    ans: 2,
    exp: "A sentence fragment is an incomplete sentence — it lacks a subject, a verb, or does not express a complete thought."
  },
  {
    topic: "Grammar",
    q: "Which of the following is a sentence fragment?",
    opts: [
      "Running in the park.",
      "She went to the store.",
      "The dog barked loudly.",
      "We played basketball."
    ],
    ans: 0,
    exp: "'Running in the park' is a fragment — it has no subject and no complete predicate. Who is running? What happened?"
  },
  {
    topic: "Grammar",
    q: "What is the purpose of transitional words in a sentence?",
    opts: [
      "To confuse the reader",
      "To add unnecessary details",
      "To connect ideas, show relationships between sentences, and improve the flow of writing",
      "To make the sentence shorter"
    ],
    ans: 2,
    exp: "Transitions connect ideas, signal relationships (contrast, addition, cause, sequence), and improve the logical flow of writing."
  },
  {
    topic: "Grammar",
    q: "Which of the following is a transitional word indicating addition?",
    opts: ["However", "Therefore", "Furthermore", "Nevertheless"],
    ans: 2,
    exp: "'Furthermore' signals addition (adding more information). 'However' and 'nevertheless' signal contrast; 'therefore' signals result."
  },
  {
    topic: "Grammar",
    q: "What do transitional words like 'however' and 'nevertheless' indicate in a sentence?",
    opts: ["Contrast", "Addition", "Cause and effect", "Time sequence"],
    ans: 0,
    exp: "'However' and 'nevertheless' both signal contrast — they indicate that the upcoming idea contradicts or qualifies the previous one."
  },
  {
    topic: "Grammar",
    q: "Which transitional word is used to show cause and effect?",
    opts: ["Consequently", "In addition", "For example", "On the other hand"],
    ans: 0,
    exp: "'Consequently' shows that one thing caused another — it is a causal transition. 'In addition' adds; 'for example' illustrates; 'on the other hand' contrasts."
  },
  {
    topic: "Grammar",
    q: "When should transitional words be used in a piece of writing?",
    opts: [
      "Only at the beginning of a paragraph",
      "Only in the conclusion",
      "Throughout the writing to guide the reader from one idea to the next",
      "Only in dialogue"
    ],
    ans: 2,
    exp: "Transitional words should be used throughout the entire piece of writing — between sentences and paragraphs — to guide the reader."
  },
  {
    topic: "Grammar",
    q: "'Psychologically, she was traumatized by the sad news.' The word 'psychologically' is classified as ____________.",
    opts: ["Adverb", "Adjective", "Noun", "Verb"],
    ans: 0,
    exp: "'Psychologically' is an adverb — it modifies the verb 'was traumatized', describing how she was affected."
  },
  {
    topic: "Grammar",
    q: "'The conference commences in August this year.' What tense was the above statement made in?",
    opts: [
      "Simple present tense",
      "Simple present future tense",
      "Simple past tense",
      "Future perfect tense"
    ],
    ans: 0,
    exp: "'Commences' is simple present tense. The sentence uses the simple present to describe a scheduled future event — this is a common use of the simple present for timetabled events."
  }
];

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */
let state = {
  questions:  [],
  idx:        0,
  streak:     0,
  maxStreak:  0,
  correct:    0,
  wrong:      0,
  answered:   false,
  pending:    null,
};

/* ═══════════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ═══════════════════════════════════════════════════════════════
   QUIZ CONTROL
═══════════════════════════════════════════════════════════════ */
const PROGRESS_KEY = 'ugrc110_progress';

function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({
      idx:       state.idx,
      streak:    state.streak,
      maxStreak: state.maxStreak,
      correct:   state.correct,
      wrong:     state.wrong,
    }));
  } catch(e) {}
}

function clearProgress() {
  try { localStorage.removeItem(PROGRESS_KEY); } catch(e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

function startQuiz() {
  state.questions = [...QUESTIONS]; // fixed order, no shuffle

  const saved = loadProgress();
  if (saved && saved.idx > 0 && saved.idx < state.questions.length) {
    // Resume from saved position
    state.idx       = saved.idx;
    state.streak    = saved.streak    || 0;
    state.maxStreak = saved.maxStreak || 0;
    state.correct   = saved.correct   || 0;
    state.wrong     = saved.wrong     || 0;
  } else {
    state.idx       = 0;
    state.streak    = 0;
    state.maxStreak = 0;
    state.correct   = 0;
    state.wrong     = 0;
  }

  state.answered = false;
  state.pending  = null;

  document.getElementById('q-count-display').textContent = state.questions.length;
  showScreen('screen-quiz');
  renderQuestion();
}

function retryQuiz() { startQuiz(); }
function backToMenu() { showScreen('screen-setup'); }

function quitQuiz() {
  if (confirm('Quit quiz? Progress will be saved — you can resume later.')) {
    showScreen('screen-setup');
  }
}

function nextQuestion() {
  state.idx++;
  if (state.idx >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

/* ═══════════════════════════════════════════════════════════════
   RENDER QUESTION
═══════════════════════════════════════════════════════════════ */
function renderQuestion() {
  state.answered = false;
  state.pending  = null;

  const q   = state.questions[state.idx];
  const tot = state.questions.length;

  // Progress
  const pct = (state.idx / tot) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('q-num-label').textContent  = `Q ${state.idx + 1} / ${tot}`;

  // Content
  document.getElementById('q-topic-tag').textContent = q.topic;
  document.getElementById('q-text').textContent      = q.q;

  // Options
  const keys    = ['A', 'B', 'C', 'D'];
  const optList = document.getElementById('options-list');
  optList.innerHTML = '';

  q.opts.forEach((opt, oi) => {
    const btn = document.createElement('button');
    btn.className = 'option';

    btn.innerHTML = `
      <span class="opt-key">${keys[oi]}</span>
      <span class="opt-text">${opt}</span>
    `;

    // Single click → pending
    btn.addEventListener('click', () => {
      if (state.answered) return;
      optList.querySelectorAll('.option').forEach(b => b.classList.remove('pending'));
      state.pending = oi;
      btn.classList.add('pending');
    });

    // Double click → confirm
    btn.addEventListener('dblclick', () => {
      if (state.answered) return;
      lockAnswer(oi);
    });

    optList.appendChild(btn);
  });

  // Reset feedback
  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  fb.innerHTML = '';

  // Hide next
  document.getElementById('next-row').classList.remove('show');

  // Last question label
  const isLast = (state.idx === state.questions.length - 1);
  document.getElementById('btn-next').textContent = isLast ? 'SEE RESULTS →' : 'NEXT →';
}

/* ═══════════════════════════════════════════════════════════════
   LOCK ANSWER
═══════════════════════════════════════════════════════════════ */
function lockAnswer(chosen) {
  if (state.answered) return;
  state.answered = true;

  const q       = state.questions[state.idx];
  const correct = (chosen === q.ans);
  const keys    = ['A', 'B', 'C', 'D'];
  const btns    = document.querySelectorAll('.option');

  // Disable all
  btns.forEach(b => {
    b.classList.remove('pending');
    b.setAttribute('disabled', '');
  });

  // Mark chosen + correct
  btns[chosen].classList.add(correct ? 'correct' : 'wrong');
  if (!correct && btns[q.ans]) btns[q.ans].classList.add('correct');

  // Score
  if (correct) {
    state.correct++;
    state.streak++;
    if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    if (state.streak >= 3) showStreakPopup();
  } else {
    state.wrong++;
    state.streak = 0;
  }

  updateStreakDisplay();

  // Feedback
  const fb = document.getElementById('feedback');
  if (correct) {
    fb.className = 'feedback fb-correct show';
    fb.innerHTML = `<span class="fb-label">✓ Correct</span>${q.exp}`;
  } else {
    fb.className = 'feedback fb-wrong show';
    fb.innerHTML = `<span class="fb-label">✗ Incorrect — correct answer: ${keys[q.ans]}</span>${q.exp}`;
  }

 // Save progress after every answer
  saveProgress();

  // Show next
  document.getElementById('next-row').classList.add('show');
}

/* ═══════════════════════════════════════════════════════════════
   STREAK
═══════════════════════════════════════════════════════════════ */
function updateStreakDisplay() {
  const box = document.getElementById('streak-box');
  document.getElementById('streak-val').textContent = state.streak;
  box.classList.toggle('hot', state.streak >= 3);
}

let popupTimer = null;
function showStreakPopup() {
  const pop = document.getElementById('streak-popup');
  document.getElementById('popup-num').textContent = state.streak;
  clearTimeout(popupTimer);
  pop.classList.add('show');
  popupTimer = setTimeout(() => pop.classList.remove('show'), 1500);
}

/* ═══════════════════════════════════════════════════════════════
   RESULTS
═══════════════════════════════════════════════════════════════ */
function showResults() {
  const total = state.questions.length;
  const pct   = Math.round((state.correct / total) * 100);

  const pctEl = document.getElementById('result-pct');
  pctEl.textContent = pct + '%';
  pctEl.className   = 'result-pct ' + (pct >= 50 ? 'pass' : 'fail');

  const grades = [
    [80, 'Distinction — Outstanding'],
    [70, 'Credit — Very Good'],
    [60, 'Good — Above Average'],
    [50, 'Pass — Satisfactory'],
    [0,  'Below Pass — More Study Needed']
  ];
  document.getElementById('result-grade').textContent =
    grades.find(([min]) => pct >= min)[1];

  document.getElementById('res-streak').textContent  = state.maxStreak;
  document.getElementById('res-correct').textContent = state.correct;
  document.getElementById('res-wrong').textContent   = state.wrong;
  document.getElementById('res-total').textContent   = total;

  clearProgress(); // wipe save on natural completion
  showScreen('screen-results');
}

// Show question count on load
document.getElementById('q-count-display').textContent = QUESTIONS.length;
