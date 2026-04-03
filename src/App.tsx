import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Copy, 
  Check, 
  BookOpen, 
  ArrowRight,
  Terminal,
  Layers,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block group">
      <button onClick={handleCopy} className="copy-button">
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
      </button>
      <pre className="whitespace-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const NoteItem = ({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) => (
  <div className="note-item">
    {Icon ? <Icon size={18} className="mt-1 shrink-0 text-blue-500" /> : <span className="mt-1 shrink-0 text-blue-500">•</span>}
    <div className="flex-1">{children}</div>
  </div>
);

const ImportantBox = ({ children }: { children: React.ReactNode }) => (
  <div className="important-box">
    <div className="flex gap-3">
      <Zap size={20} className="shrink-0 text-orange-500" />
      <div>{children}</div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400">
            <BookOpen size={24} />
            <span className="text-lg tracking-tight">C++ Notes</span>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* CHAPTER 1 */}
            <section id="chapter-1" className="mb-16">
              <h1 className="chapter-title">📘 CHAPTER 1: INTRODUCTION (FOLLOWING MODULE ORDER)</h1>
              
              <h2 className="section-title">🔹 What is Programming?</h2>
              <p className="mb-4">Programming is a skill used by computer professionals.</p>
              <p className="mb-2">It gives you the ability to:</p>
              <NoteItem>make the computer perform tasks</NoteItem>
              <NoteItem>control what the computer does</NoteItem>
              
              <ImportantBox>
                <p className="font-bold">Important idea:</p>
                <p>👉 A computer does nothing unless you instruct it.</p>
              </ImportantBox>
              <p className="mt-4">So programming = giving instructions to the computer.</p>

              <h2 className="section-title">🔹 Why Do We Need to Learn Programming?</h2>
              <p className="mb-2">Most people only:</p>
              <NoteItem>use applications (apps, games, websites)</NoteItem>
              
              <div className="my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/20">
                <p className="font-bold text-blue-700 dark:text-blue-300">But those applications are:</p>
                <p>👉 created by programmers</p>
              </div>

              <p className="mb-2">So if you want to:</p>
              <NoteItem>build your own software</NoteItem>
              <NoteItem>create systems</NoteItem>
              <NoteItem>solve problems using computers</NoteItem>
              <p className="mt-4">You must learn programming.</p>
              
              <ImportantBox>
                <p className="font-bold">Also:</p>
                <p>👉 Programming is the way we “talk” to the computer.</p>
              </ImportantBox>

              <h2 className="section-title">🔹 What is a Programming Language?</h2>
              <p className="mb-4">A programming language is:</p>
              <p className="mb-4 italic">A set of symbols and rules used to instruct computer hardware.</p>
              <p className="mb-2 font-bold">Important points:</p>
              <NoteItem>It is written (not spoken)</NoteItem>
              <NoteItem>It follows strict rules</NoteItem>
              <NoteItem>It tells the computer exactly what to do</NoteItem>

              <h2 className="section-title">🔹 Skills Required to Be a Programmer</h2>
              <p className="mb-4">The module lists 3 major skills:</p>
              
              <h3 className="sub-section-title">1. Programming Language Skill</h3>
              <p className="mb-2">You must know at least one language (like C++).</p>
              <p className="mb-2">This allows you to:</p>
              <NoteItem>write instructions</NoteItem>
              <NoteItem>communicate with the machine</NoteItem>

              <h3 className="sub-section-title">2. Problem Solving Skill</h3>
              <p className="mb-4">This is very important.</p>
              <p className="mb-2">You must:</p>
              <NoteItem>understand the problem</NoteItem>
              <NoteItem>think logically</NoteItem>
              <NoteItem>find a correct solution</NoteItem>

              <h3 className="sub-section-title">3. Algorithm Development</h3>
              <p className="mb-2">You must be able to:</p>
              <NoteItem>create step-by-step solutions</NoteItem>
              <ImportantBox>
                <p className="font-bold">Important:</p>
                <NoteItem>Algorithm must be simple</NoteItem>
                <NoteItem>Must be understandable</NoteItem>
                <NoteItem>Must not depend on programming language</NoteItem>
              </ImportantBox>

              <h2 className="section-title">🔹 Syntax</h2>
              <p className="mb-4">Every programming language has rules.</p>
              <p className="mb-4">These rules are called:</p>
              <p className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">👉 Syntax</p>
              <p className="mb-4">Syntax tells you:</p>
              <NoteItem>how to write code correctly</NoteItem>
              <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <p className="font-bold text-red-700 dark:text-red-300">If syntax is wrong:</p>
                <p>❌ program will not run</p>
              </div>

              <h1 className="chapter-title mt-16">📘 1.1 Generations of Programming Languages</h1>
              <p className="mb-4">Languages are divided into:</p>
              <p className="mb-4 font-bold">👉 5 generations</p>
              <p className="mb-4">Also grouped into:</p>
              <NoteItem>Low level</NoteItem>
              <NoteItem>High level</NoteItem>

              <h2 className="section-title">🔹 Low-Level Languages</h2>
              <NoteItem>Machine dependent</NoteItem>
              <NoteItem>Hard to understand</NoteItem>

              <h2 className="section-title">🔹 High-Level Languages</h2>
              <NoteItem>Easy to read</NoteItem>
              <NoteItem>Machine independent</NoteItem>
              <p className="mt-4 font-bold">Examples:</p>
              <NoteItem>COBOL</NoteItem>
              <NoteItem>BASIC</NoteItem>

              <h2 className="section-title">🔹 1.1.1 First Generation (Machine Language)</h2>
              <NoteItem>Uses 0 and 1</NoteItem>
              <NoteItem>No translator needed</NoteItem>
              <NoteItem>Very fast</NoteItem>
              <NoteItem>Very efficient</NoteItem>
              <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <p className="font-bold text-red-700 dark:text-red-300">But:</p>
                <NoteItem>❌ Very difficult to write</NoteItem>
                <NoteItem>❌ Depends on machine</NoteItem>
              </div>

              <h2 className="section-title">🔹 1.1.2 Second Generation (Assembly Language)</h2>
              <NoteItem>Uses symbols instead of binary</NoteItem>
              <NoteItem>Needs assembler</NoteItem>
              <p className="mt-4 font-bold">Problems:</p>
              <NoteItem>Not portable</NoteItem>
              <NoteItem>Machine dependent</NoteItem>
              <p className="mt-4">Used for:</p>
              <p className="font-bold">👉 system software</p>

              <h2 className="section-title">🔹 1.1.3 Third Generation (High-Level Languages)</h2>
              <p className="mb-4 font-bold">Features:</p>
              <NoteItem>English-like</NoteItem>
              <NoteItem>Easy to use</NoteItem>
              <p className="mt-4 font-bold">Example:</p>
              <p className="font-mono text-lg text-blue-600 dark:text-blue-400">👉 Z = A + B</p>
              <ImportantBox>
                <p className="font-bold">Important:</p>
                <NoteItem>Needs translation to machine language</NoteItem>
                <NoteItem>Uses reserved words</NoteItem>
                <NoteItem>Procedural</NoteItem>
              </ImportantBox>
              <p className="mt-4 font-bold">👉 Programmer must say:</p>
              <NoteItem>what to do</NoteItem>
              <NoteItem>how to do it</NoteItem>

              <h2 className="section-title">🔹 1.1.4 Fourth Generation (4GL)</h2>
              <p className="mb-4 font-bold">Features:</p>
              <NoteItem>Very simple syntax</NoteItem>
              <NoteItem>English-like</NoteItem>
              <ImportantBox>
                <p className="font-bold">Important:</p>
                <NoteItem>Non-procedural</NoteItem>
              </ImportantBox>
              <p className="mt-4 font-bold">Meaning:</p>
              <p>👉 You say WHAT you want, not HOW</p>
              <p className="mt-4 font-bold">Used for:</p>
              <NoteItem>databases</NoteItem>
              <NoteItem>reports</NoteItem>
              <p className="mt-4 font-bold">Examples:</p>
              <NoteItem>SQL</NoteItem>
              <NoteItem>report generators</NoteItem>

              <h2 className="section-title">🔹 1.1.5 Fifth Generation (5GL)</h2>
              <p className="mb-4">Used for:</p>
              <NoteItem>Artificial Intelligence (AI)</NoteItem>
              <NoteItem>expert systems</NoteItem>
              <p className="mt-4 font-bold">Features:</p>
              <NoteItem>Human-like language</NoteItem>
              <p className="mt-4 font-bold">Example:</p>
              <p>👉 “get me John’s sales data”</p>
              <p className="mt-4 font-bold">Needs:</p>
              <NoteItem>powerful hardware</NoteItem>

              <h1 className="chapter-title mt-16">📘 1.2 Overview of Computers and Organization</h1>
              <p className="mb-8">A computer has 6 logical units</p>

              <h2 className="section-title">🔹 Input Unit</h2>
              <NoteItem>Takes data from user</NoteItem>
              <NoteItem>Sends to system</NoteItem>

              <h2 className="section-title">🔹 Output Unit</h2>
              <NoteItem>Shows processed data</NoteItem>

              <h2 className="section-title">🔹 Memory Unit</h2>
              <NoteItem>Stores data temporarily</NoteItem>
              <NoteItem>Stores results before output</NoteItem>

              <h2 className="section-title">🔹 CPU (Central Processing Unit)</h2>
              <NoteItem>Controls everything</NoteItem>
              <NoteItem>Coordinates all parts</NoteItem>

              <h2 className="section-title">🔹 ALU (Arithmetic Logic Unit)</h2>
              <p className="mb-2">Inside CPU</p>
              <p className="mb-2 font-bold">Does:</p>
              <NoteItem>calculations</NoteItem>
              <NoteItem>comparisons</NoteItem>

              <h2 className="section-title">🔹 Secondary Storage</h2>
              <NoteItem>Long-term storage</NoteItem>
              <NoteItem>Example: disk</NoteItem>

              <h1 className="chapter-title mt-16">📘 1.3 Evolution of Operating Systems</h1>
              <h2 className="section-title">🔹 Single User Batch Processing</h2>
              <p className="mb-4">One program at a time</p>
              <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <p className="font-bold text-red-700 dark:text-red-300">Problem:</p>
                <p>👉 wastes resources</p>
              </div>

              <h2 className="section-title">🔹 Multiprogramming</h2>
              <p>Many programs share system</p>

              <h2 className="section-title">🔹 Time Sharing</h2>
              <p className="mb-4">Users share CPU time</p>
              <ImportantBox>
                <p className="font-bold">Important:</p>
                <p>👉 CPU switches between users</p>
              </ImportantBox>

              <h1 className="chapter-title mt-16">📘 1.4 Major Programming Paradigms</h1>
              <h2 className="section-title">🔹 1.4.1 Procedural Programming</h2>
              <p className="mb-4 font-bold">Based on:</p>
              <p className="mb-4">👉 procedures/functions</p>
              <p className="mb-4 font-bold">Advantages:</p>
              <NoteItem>reusable code</NoteItem>
              <NoteItem>better control</NoteItem>

              <h2 className="section-title">🔹 1.4.2 Structured Programming</h2>
              <p className="mb-4">Program divided into small parts (modules)</p>
              <p className="mb-4 font-bold">Benefits:</p>
              <NoteItem>easy testing</NoteItem>
              <NoteItem>easy development</NoteItem>
              <p className="mt-4 font-bold italic">Also:</p>
              <p>👉 reduces use of GOTO</p>

              <h2 className="section-title">🔹 1.4.3 Object-Oriented Programming</h2>
              <p className="mb-4">Program made of objects</p>
              <p className="mb-4 font-bold">Advantages:</p>
              <NoteItem>flexible</NoteItem>
              <NoteItem>easy to maintain</NoteItem>

              <h1 className="chapter-title mt-16">📘 1.5 Problem Solving Process & Software Engineering</h1>
              <h2 className="section-title">🔹 1.5.1 Software Engineering</h2>
              <p className="mb-4 font-bold">Definition:</p>
              <p className="mb-4 italic">Creating and maintaining software using proper methods</p>
              <p className="mb-4 font-bold">Software Development Life Cycle:</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['Investigation', 'Analysis', 'Design', 'Implementation', 'Testing', 'Maintenance'].map((step, i) => (
                  <div key={step} className="flex items-center gap-2 rounded-md border p-2 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-200">{i+1}</span>
                    {step}
                  </div>
                ))}
              </div>

              <h2 className="section-title">🔹 1.5.2 Problem Solving</h2>
              <p className="mb-4 font-bold">Definition:</p>
              <p className="mb-4 italic">Transforming a problem into a solution</p>
              <p className="mb-4 font-bold">Problem Meaning:</p>
              <p className="mb-4">gap between current state and desired state</p>
              <p className="mb-4 font-bold">Approaches:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-orange-600 dark:text-orange-400">🔸 Top-Down</p>
                  <p>break big problem → small parts</p>
                </div>
                <div>
                  <p className="font-bold text-orange-600 dark:text-orange-400">🔸 Bottom-Up</p>
                  <p>build small parts → combine</p>
                </div>
              </div>

              <h1 className="chapter-title mt-16">📘 1.6 Basic Program Development Tips</h1>
              <p className="mb-4 italic">A good program must be:</p>
              <div className="space-y-4">
                <NoteItem icon={Check}>
                  <span className="font-bold">Reliable</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Works correctly always</p>
                </NoteItem>
                <NoteItem icon={Check}>
                  <span className="font-bold">Maintainable</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Easy to modify</p>
                </NoteItem>
                <NoteItem icon={Check}>
                  <span className="font-bold">Portable</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Works on different systems</p>
                </NoteItem>
                <NoteItem icon={Check}>
                  <span className="font-bold">Efficient</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Uses less memory and time</p>
                </NoteItem>
              </div>

              <h1 className="chapter-title mt-16">📘 1.7 Algorithm Design & Flowchart</h1>
              <h2 className="section-title">🔹 Algorithm</h2>
              <p className="mb-4 font-bold">Definition:</p>
              <p className="mb-4 italic">Finite set of steps to solve a problem</p>
              <p className="mb-4 font-bold">Properties:</p>
              <div className="flex flex-wrap gap-2">
                {['precise', 'simple', 'correct', 'efficient'].map(p => (
                  <span key={p} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium dark:bg-slate-800">{p}</span>
                ))}
              </div>

              <h2 className="section-title">🔹 1.7.1 Flowchart</h2>
              <p className="mb-4 italic">Flowchart = graphical representation of algorithm</p>
              <p className="mb-4 font-bold">Symbols:</p>
              <div className="space-y-1">
                <NoteItem>Terminal (start/end)</NoteItem>
                <NoteItem>Process</NoteItem>
                <NoteItem>Decision</NoteItem>
                <NoteItem>Input/Output</NoteItem>
                <NoteItem>Flow line</NoteItem>
                <NoteItem>Connectors</NoteItem>
              </div>

              <h1 className="chapter-title mt-16">📘 1.7.1 Flowchart (continued)</h1>
              <p className="mb-4">Flowchart = graphical representation of algorithm</p>
              <p className="mb-4 font-bold">Symbols:</p>
              <NoteItem>Terminal (start/end)</NoteItem>
              <NoteItem>Process</NoteItem>
              <NoteItem>Decision</NoteItem>
              <NoteItem>Input/Output</NoteItem>
              <NoteItem>Flow line</NoteItem>
              <NoteItem>Connectors</NoteItem>

              <h1 className="chapter-title mt-16">📘 1.8 Compilers and Interpreters</h1>
              <p className="mb-8 italic">Programs must be translated.</p>

              <h2 className="section-title">🔹 Compiler</h2>
              <NoteItem>Translates entire program</NoteItem>
              <NoteItem>Produces executable file</NoteItem>
              <p className="mt-4 font-bold">Examples:</p>
              <NoteItem>C++</NoteItem>
              <NoteItem>Pascal</NoteItem>

              <h2 className="section-title">🔹 Interpreter</h2>
              <NoteItem>Translates line by line</NoteItem>
              <NoteItem>Executes immediately</NoteItem>
              <p className="mt-4 font-bold">Examples:</p>
              <NoteItem>QBASIC</NoteItem>
              <NoteItem>Lisp</NoteItem>

              <h1 className="chapter-title mt-16">📘 1.9 Mechanics of Creating a Program (C++)</h1>
              <p className="mb-8 font-bold">Steps:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400">🔹 Edit</h3>
                  <p>Write program using editor</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400">🔹 Preprocess</h3>
                  <p>Handle directives (#include)</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400">🔹 Compile</h3>
                  <p>Convert to machine code</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400">🔹 Linking</h3>
                  <p>Combine libraries</p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400">🔹 Loading</h3>
                  <p>Run program in memory</p>
                </div>
              </div>
            </section>

            {/* CHAPTER 2 */}
            <section id="chapter-2" className="mb-16 border-t pt-16">
              <h1 className="chapter-title">📘 CHAPTER 2: BASICS OF C++ (FULL + DEEP EXPLANATION)</h1>
              
              <h2 className="section-title">🔹 2.1 Parts of a C++ Program</h2>
              <p className="mb-4 italic">Example from your module:</p>
              <CodeBlock code={`#include<iostream.h>
#include<conio.h>
void main()
{
  cout<<"\\n Hello World!";
  getch();
}`} />

              <div className="mt-8 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/20">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-purple-700 dark:text-purple-300">🧠 Deep Understanding</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-purple-600 dark:text-purple-400">🔸 #include</h4>
                    <p className="mb-2 italic">This is a preprocessor directive</p>
                    <p className="mb-2">👉 It tells the compiler:</p>
                    <p className="mb-2 font-medium">“Bring external code into my program”</p>
                    <p className="font-bold">Example:</p>
                    <NoteItem>iostream.h → for input/output</NoteItem>
                    <NoteItem>conio.h → for functions like getch()</NoteItem>
                  </div>

                  <div>
                    <h4 className="font-bold text-purple-600 dark:text-purple-400">🔸 main()</h4>
                    <p className="mb-2">Every C++ program must have main()</p>
                    <p className="mb-2">Execution starts here</p>
                    <p>👉 Think of it as the “entry point”</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-purple-600 dark:text-purple-400">🔸 {'{ }'} (Braces)</h4>
                    <p className="mb-2">Define a block of code</p>
                    <p>Everything inside = program body</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-purple-600 dark:text-purple-400">🔸 Statements</h4>
                    <p className="mb-2">Each instruction ends with ;</p>
                    <p className="font-bold">Example:</p>
                    <p className="font-mono text-sm">cout&lt;&lt;"Hello";</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-purple-600 dark:text-purple-400">🔸 cout</h4>
                    <p>Used for output (printing)</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-purple-600 dark:text-purple-400">🔸 getch()</h4>
                    <p className="mb-2">Waits for a key press</p>
                    <p>Keeps screen open</p>
                  </div>
                </div>
              </div>

              <h2 className="section-title">🔹 2.2 cout and cin</h2>
              <h3 className="sub-section-title">🔸 cout (Output)</h3>
              <p className="mb-4 font-bold">Syntax:</p>
              <p className="mb-4 font-mono text-blue-600 dark:text-blue-400">cout &lt;&lt; value;</p>
              <p className="mb-4">👉 Uses &lt;&lt; operator</p>
              <p className="mb-2 font-bold">Can print:</p>
              <NoteItem>text</NoteItem>
              <NoteItem>variables</NoteItem>
              <NoteItem>expressions</NoteItem>

              <h3 className="sub-section-title">🔸 cin (Input)</h3>
              <p className="mb-4 font-bold">Syntax:</p>
              <p className="mb-4 font-mono text-blue-600 dark:text-blue-400">cin &gt;&gt; variable;</p>
              <p className="mb-4">👉 Takes input from user</p>

              <div className="my-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 Important Concept</h4>
                <p className="mb-2">You can chain:</p>
                <p className="font-mono text-sm">cin &gt;&gt; a &gt;&gt; b;</p>
                <p className="font-mono text-sm">cout &lt;&lt; a &lt;&lt; b;</p>
              </div>

              <h2 className="section-title">🔹 2.3 Comments</h2>
              <h3 className="sub-section-title">🔸 Single Line</h3>
              <p className="font-mono text-sm text-green-600 dark:text-green-400">// this is a comment</p>
              <h3 className="sub-section-title">🔸 Multi Line</h3>
              <CodeBlock code={`/* this is
multi line */`} />

              <div className="mt-6 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/20">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-purple-700 dark:text-purple-300">🧠 Deep Idea</h3>
                <p className="mb-2">Comments are:</p>
                <NoteItem>ignored by compiler</NoteItem>
                <NoteItem>used for explanation</NoteItem>
                <p className="mt-4">👉 Too many comments = bad</p>
                <p>👉 Too few comments = confusing</p>
                <p className="mt-4 font-bold">Balance is key.</p>
              </div>

              <h2 className="section-title">🔹 2.4 Functions</h2>
              <h3 className="sub-section-title">🔸 What is a Function?</h3>
              <p className="italic">A function = block of code that performs a task</p>
              
              <h3 className="sub-section-title">🔸 Structure</h3>
              <NoteItem>Header (name, return type, parameters)</NoteItem>
              <NoteItem>Body (actual code)</NoteItem>

              <h3 className="sub-section-title">🔸 Example Flow</h3>
              <p className="flex items-center gap-2 font-medium">
                main() <ArrowRight size={14} /> calls function <ArrowRight size={14} /> function runs <ArrowRight size={14} /> returns back
              </p>

              <div className="my-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 Important Concepts</h4>
                <NoteItem>Functions can return values</NoteItem>
                <NoteItem>Or return nothing (void)</NoteItem>
                <NoteItem>Use return to send value back</NoteItem>
              </div>

              <h2 className="section-title">🔹 2.5 Variables and Constants</h2>
              <h3 className="sub-section-title">🔸 Variable</h3>
              <p className="mb-4">A variable is:</p>
              <p className="mb-4 font-bold">👉 a memory location used to store data</p>
              
              <div className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 3 Components</h4>
                <p>1. Data Type</p>
                <p>2. Name</p>
                <p>3. Value</p>
              </div>

              <h2 className="section-title">🔹 2.5.1 Data Types (VERY IMPORTANT)</h2>
              <h3 className="sub-section-title">🔸 Types</h3>
              <NoteItem>Integer → whole numbers</NoteItem>
              <NoteItem>Float → decimal numbers</NoteItem>
              <NoteItem>Char → single character</NoteItem>
              <NoteItem>Bool → true/false</NoteItem>

              <div className="my-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 Signed vs Unsigned (IMPORTANT)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">Signed</p>
                    <p>can store negative and positive</p>
                  </div>
                  <div>
                    <p className="font-bold">Unsigned</p>
                    <p>only positive</p>
                    <p>bigger positive range</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/20">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-purple-700 dark:text-purple-300">🧠 Deep Idea</h3>
                <p className="mb-4">Memory is limited.</p>
                <p className="mb-2 font-bold italic">So:</p>
                <p className="mb-2">Signed → uses bit for sign</p>
                <p>Unsigned → uses all bits for value</p>
              </div>

              <h2 className="section-title">🔹 Declaring Variables</h2>
              <p className="font-mono text-blue-600 dark:text-blue-400">int age;</p>

              <h2 className="section-title">🔹 Initializing Variables</h2>
              <p className="font-mono text-blue-600 dark:text-blue-400">int age = 20;</p>

              <h2 className="section-title">🔹 Scope (VERY IMPORTANT)</h2>
              <h3 className="sub-section-title">🔸 Global Variable</h3>
              <p>Accessible everywhere</p>
              <h3 className="sub-section-title">🔸 Local Variable</h3>
              <p>Only inside block {'{}'}</p>

              <div className="my-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 Key Idea</h4>
                <p>Scope = where variable can be used</p>
              </div>

              <h2 className="section-title">🔹 Typedef (User Defined Type)</h2>
              <p className="mb-4 font-mono text-blue-600 dark:text-blue-400">typedef unsigned short int USHORT;</p>
              <p>👉 Shortens complex types</p>

              <h2 className="section-title">🔹 Wrapping Around</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="sub-section-title">🔸 Signed Overflow</h3>
                  <p>Positive → becomes negative</p>
                </div>
                <div>
                  <h3 className="sub-section-title">🔸 Unsigned Overflow</h3>
                  <p>Max → goes back to 0</p>
                </div>
              </div>

              <h2 className="section-title">🔹 Characters</h2>
              <p className="mb-4 font-mono text-blue-600 dark:text-blue-400">char c = 'A';</p>
              <p>Stored as ASCII value.</p>

              <h2 className="section-title">🔹 Escape Characters</h2>
              <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                <div className="rounded border p-2">\n → new line</div>
                <div className="rounded border p-2">\t → tab</div>
                <div className="rounded border p-2">\\ → backslash</div>
              </div>

              <h2 className="section-title">🔹 Constants</h2>
              <h3 className="sub-section-title">🔸 Literal Constant</h3>
              <p className="font-mono text-blue-600 dark:text-blue-400">int x = 5;</p>
              <h3 className="sub-section-title">🔸 Symbolic Constant</h3>
              <p className="mb-2 italic">Using:</p>
              <NoteItem>#define</NoteItem>
              <NoteItem>const</NoteItem>

              <h2 className="section-title">🔹 Enum (VERY IMPORTANT)</h2>
              <p className="mb-4 font-mono text-blue-600 dark:text-blue-400">enum COLOR {'{RED, BLUE, GREEN}'};</p>
              <p>👉 Assigns integer values automatically</p>

              <h2 className="section-title">🔹 Memory Concept</h2>
              <p className="mb-2 italic">Memory:</p>
              <NoteItem>made of bytes</NoteItem>
              <NoteItem>each byte has address</NoteItem>
              <p className="mt-4">👉 Program stores data in memory locations</p>

              <h2 className="section-title">🔹 Expressions and Statements</h2>
              <h3 className="sub-section-title">🔸 Statement</h3>
              <p>Instruction ending with ;</p>
              <h3 className="sub-section-title">🔸 Expression</h3>
              <p className="mb-2">Anything that produces a value</p>
              <p className="font-bold italic">Example:</p>
              <p className="font-mono">3 + 2</p>

              <h2 className="section-title">🔹 2.8 Operators (VERY IMPORTANT)</h2>
              <p className="mb-4 font-bold italic">🔸 Types</p>
              <div className="space-y-6">
                <div>
                  <p className="font-bold">1. Assignment</p>
                  <p className="font-mono">x = 5;</p>
                </div>
                <div>
                  <p className="font-bold">2. Arithmetic</p>
                  <p className="font-mono text-lg">+ - * / %</p>
                </div>
                <div>
                  <p className="font-bold">3. Relational</p>
                  <p className="font-mono text-lg">== != &gt; &lt;</p>
                  <p className="mt-2 font-bold italic">Returns:</p>
                  <p>👉 true or false</p>
                </div>
                <div>
                  <p className="font-bold">4. Logical</p>
                  <p className="font-mono text-lg">&& || !</p>
                </div>
                <div>
                  <p className="font-bold">5. Increment / Decrement</p>
                  <p className="font-mono">a++</p>
                  <p className="font-mono">++a</p>
                  <p className="mt-2 font-bold italic">👉 prefix vs postfix difference</p>
                </div>
                <div>
                  <p className="font-bold">6. Conditional Operator</p>
                  <p className="font-mono">x = (a &gt; b ? a : b);</p>
                </div>
                <div>
                  <p className="font-bold">7. sizeof</p>
                  <p className="font-mono">sizeof(int)</p>
                </div>
                <div>
                  <p className="font-bold">8. Type Casting</p>
                  <p className="font-mono">(int)3.14</p>
                </div>
              </div>

              <h2 className="section-title">🔹 Operator Precedence</h2>
              <p className="mb-4">Order matters.</p>
              <p className="mb-2 font-bold italic">Example:</p>
              <p className="mb-2 font-mono">a = b + c * d;</p>
              <p className="font-bold">👉 multiplication first</p>

              <h1 className="chapter-title mt-20 text-orange-600 dark:text-orange-400">🔥🔥 NOW MOST IMPORTANT PART (YOUR REQUEST)</h1>
              
              <h1 className="chapter-title">💡 PSEUDOCODE (DEEP EXPLANATION)</h1>
              <h2 className="section-title">🔹 What is Pseudocode?</h2>
              <p className="mb-4">Pseudocode is:</p>
              <p className="mb-4 font-bold italic">A way of writing program logic in simple English-like steps.</p>

              <div className="mt-6 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/20">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-purple-700 dark:text-purple-300">🧠 Why Important?</h3>
                <NoteItem>Helps before coding</NoteItem>
                <NoteItem>Easy to understand</NoteItem>
                <NoteItem>No syntax rules</NoteItem>
              </div>

              <div className="my-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 Rules of Pseudocode</h4>
                <NoteItem>Use simple English</NoteItem>
                <NoteItem>One step at a time</NoteItem>
                <NoteItem>Clear and logical</NoteItem>
                <NoteItem>No programming syntax</NoteItem>
              </div>

              <div className="my-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 Example</h4>
                <p className="mb-2 italic">Problem: check even or odd</p>
                <p className="mb-2 font-bold italic">Pseudocode:</p>
                <div className="font-mono text-sm uppercase leading-relaxed">
                  START<br />
                  INPUT number<br />
                  IF number % 2 == 0 THEN<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;PRINT "Even"<br />
                  ELSE<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;PRINT "Odd"<br />
                  END
                </div>
              </div>

              <div className="mt-6 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/20">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-purple-700 dark:text-purple-300">🧠 Key Insight</h3>
                <p className="text-xl font-bold">👉 Pseudocode = bridge between idea and code</p>
              </div>

              <h1 className="chapter-title mt-16">💡 FLOWCHART (VERY VERY IMPORTANT)</h1>
              <h2 className="section-title">🔹 What is Flowchart?</h2>
              <p className="mb-4 italic">A graphical representation of algorithm</p>

              <div className="my-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 Why Important?</h4>
                <NoteItem>Easy to visualize logic</NoteItem>
                <NoteItem>Used in exams</NoteItem>
                <NoteItem>Helps debugging</NoteItem>
              </div>

              <h2 className="section-title">🔹 Main Symbols</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="sub-section-title">🔸 Start/End (Terminal)</h3>
                  <p>Oval shape</p>
                </div>
                <div>
                  <h3 className="sub-section-title">🔸 Process</h3>
                  <p className="mb-2">Rectangle</p>
                  <p>👉 calculation or step</p>
                </div>
                <div>
                  <h3 className="sub-section-title">🔸 Input/Output</h3>
                  <p className="mb-2">Parallelogram</p>
                  <p>👉 read or display</p>
                </div>
                <div>
                  <h3 className="sub-section-title">🔸 Decision</h3>
                  <p className="mb-2">Diamond</p>
                  <p>👉 yes/no condition</p>
                </div>
                <div>
                  <h3 className="sub-section-title">🔸 Flow Line</h3>
                  <p className="mb-2">Arrow</p>
                  <p>👉 direction</p>
                </div>
              </div>

              <div className="my-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-300">🔥 Example (Even or Odd)</h4>
                <p className="mb-2 font-bold italic">Flowchart Logic:</p>
                <div className="flex flex-col items-center gap-2 font-medium">
                  <div className="rounded-full border-2 border-slate-400 px-4 py-1">Start</div>
                  <ArrowRight className="rotate-90" size={16} />
                  <div className="border-2 border-slate-400 px-4 py-1">Input number</div>
                  <ArrowRight className="rotate-90" size={16} />
                  <div className="rotate-45 border-2 border-slate-400 p-4"><div className="-rotate-45 text-xs">Check number % 2</div></div>
                  <div className="flex w-full justify-center gap-8">
                    <div className="flex flex-col items-center">
                      <span className="text-xs">Yes</span>
                      <ArrowRight className="rotate-90" size={16} />
                      <div className="border-2 border-slate-400 px-4 py-1">Even</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs">No</span>
                      <ArrowRight className="rotate-90" size={16} />
                      <div className="border-2 border-slate-400 px-4 py-1">Odd</div>
                    </div>
                  </div>
                  <ArrowRight className="rotate-90" size={16} />
                  <div className="rounded-full border-2 border-slate-400 px-4 py-1">End</div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/20">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-purple-700 dark:text-purple-300">🧠 Deep Understanding</h3>
                <p className="mb-2 italic">Flowchart is:</p>
                <NoteItem>👉 Visual logic</NoteItem>
                <NoteItem>👉 Step-by-step thinking</NoteItem>
                <NoteItem>👉 No programming language needed</NoteItem>
              </div>

              <div className="my-12 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                <h4 className="mb-6 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-300">🔥 Pseudocode vs Flowchart</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-red-200 dark:border-red-900">
                        <th className="p-2 text-left">Pseudocode</th>
                        <th className="p-2 text-left">Flowchart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-red-100 dark:border-red-950">
                        <td className="p-2">Text</td>
                        <td className="p-2">Diagram</td>
                      </tr>
                      <tr className="border-b border-red-100 dark:border-red-950">
                        <td className="p-2">Easy to write</td>
                        <td className="p-2">Easy to see</td>
                      </tr>
                      <tr>
                        <td className="p-2">Flexible</td>
                        <td className="p-2">Structured</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 border-t bg-white/80 p-4 backdrop-blur-md dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-3xl justify-around text-xs font-medium text-slate-500 dark:text-slate-400">
          <a href="#chapter-1" className="flex flex-col items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
            <Layers size={20} />
            <span>Chapter 1</span>
          </a>
          <a href="#chapter-2" className="flex flex-col items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
            <Terminal size={20} />
            <span>Chapter 2</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
