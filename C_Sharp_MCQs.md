# C# Programming (Microsoft 20483B) - Comprehensive MCQ Bank

> **Total Questions:** 195  
> **Coverage:** Comprehensive coverage based on official course materials.  
> **Interactive Features:** Click *"View Answer & Explanation"* below each question to test your knowledge.

---


## Module 1: Review of Visual C# Syntax

### Question 1

Which of the following is a value type in C#?  

- [ ] **A) System.String**
- [x] **B) System.Int32**
- [ ] **C) System.Array**
- [ ] **D) System.Delegate**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
System.Int32 (int) is a struct, which is a value type stored directly on the stack or inline inside an object. String, Array, and Delegate are reference types stored on the managed heap.

</details>

---

### Question 2

What will be the result of the following code snippet?  
int a = 10;  
int b = 3;  
double result = a / b;  
Console.WriteLine(result);  

- [ ] **A) 3.3333333333333335**
- [ ] **B) 3**
- [x] **C) 3.0**
- [ ] **D) Compilation Error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
Because both operands 'a' and 'b' are integers, integer division is performed, yielding integer 3. That value is then implicitly converted to double 3.0 before being stored in 'result'.

</details>

---

### Question 3

What is the correct syntax for declaring a nullable integer in C#?  

- [ ] **A) nullable<int> x;**
- [x] **B) int? x;**
- [ ] **C) Nullable.Int x;**
- [ ] **D) int x = null?;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'int?' is the syntactic shorthand in C# for 'Nullable<int>', allowing the value type int to represent null alongside standard integer values.

</details>

---

### Question 4

Which operator in C# is known as the null-coalescing operator?  

- [ ] **A) ?.**
- [x] **B) ??**
- [ ] **C) ?:**
- [ ] **D) !.**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The '??' operator is the null-coalescing operator. It returns the left-hand operand if it is not null; otherwise, it evaluates and returns the right-hand operand.

</details>

---

### Question 5

How do you declare a two-dimensional rectangular array of integers with 3 rows and 4 columns?  

- [ ] **A) int[][] matrix = new int[3][4];**
- [x] **B) int[,] matrix = new int[3, 4];**
- [ ] **C) int[3, 4] matrix = new int[,];**
- [ ] **D) Array<int, 2> matrix = new Array(3, 4);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In C#, 'int[,]' declares a rectangular multidimensional array, initialized as 'new int[3, 4]'. 'int[][]' declares a jagged array (an array of arrays).

</details>

---

### Question 6

What is the purpose of the 'checked' keyword in C#?  

- [ ] **A) To ensure reference types are not null before dereferencing**
- [x] **B) To explicitly enable arithmetic overflow checking at runtime, throwing an OverflowException**
- [ ] **C) To verify type compatibility before casting**
- [ ] **D) To validate method arguments against null or empty values**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
By default, arithmetic operations on integral types do not check for overflow. Wrapping them in a 'checked' block forces the runtime to raise an OverflowException if an operation exceeds bounds.

</details>

---

### Question 7

Which of the following loops evaluates its condition AFTER the body has executed at least once?  

- [ ] **A) while loop**
- [ ] **B) for loop**
- [x] **C) do-while loop**
- [ ] **D) foreach loop**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
A 'do-while' loop is a post-test loop, ensuring that the code inside the loop executes at least once before the condition is checked.

</details>

---

### Question 8

What is the scope and type of a variable declared with the 'var' keyword?  

- [ ] **A) Dynamically typed at runtime and can change type later**
- [x] **B) Statically and strongly typed at compile time inferred from initialization expression**
- [ ] **C) Always of type System.Object**
- [ ] **D) A variant type compatible with COM objects only**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'var' is implicitly typed at compile-time. The C# compiler determines the exact type based on the right-hand initialization expression, making it strictly strongly-typed.

</details>

---

### Question 9

What does the null-conditional operator '?.' do when evaluating 'person?.Address?.City' if 'person' is null?  

- [ ] **A) Throws a NullReferenceException immediately**
- [x] **B) Returns null without evaluating Address or City**
- [ ] **C) Returns an empty string ""**
- [ ] **D) Returns default integer 0**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The null-conditional operator '?.' short-circuits: if the left-hand operand is null, it immediately returns null without evaluating the remainder of the chain.

</details>

---

### Question 10

Which conversion requires an explicit cast in C#?  

- [ ] **A) Converting int to double**
- [ ] **B) Converting short to int**
- [x] **C) Converting double to int**
- [ ] **D) Converting byte to long**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
Converting 'double' to 'int' is a narrowing conversion that could cause loss of fractional data or overflow, requiring an explicit cast: (int)myDouble.

</details>

---

### Question 11

What is string immutability in C#?  

- [x] **A) String objects cannot be modified after creation; modifying operations create a new string on the heap**
- [ ] **B) Strings can only be allocated on the stack**
- [ ] **C) String variables cannot be reassigned**
- [ ] **D) Strings are automatically encrypted in memory**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Strings in C# are immutable reference types. Any operation that appears to modify a string (such as Replace or ToUpper) actually creates and returns a brand-new string instance on the managed heap.

</details>

---

### Question 12

What is the result of evaluating 'default(int)' and 'default(string)' in C#?  

- [x] **A) 0 and null**
- [ ] **B) null and ""**
- [ ] **C) -1 and null**
- [ ] **D) 0 and ""**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The default literal or operator produces the default value of a type: 0 for numeric value types like int, and null for reference types like string.

</details>

---

### Question 13

Which bitwise operator performs a bitwise exclusive OR (XOR) in C#?  

- [x] **A) ^**
- [ ] **B) |**
- [ ] **C) &**
- [ ] **D) ~**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The caret '^' operator computes the bitwise (or logical) exclusive OR of its operands, returning 1 only if exactly one of the bits is 1.

</details>

---

### Question 14

What is string interpolation syntax introduced in C# 6.0?  

- [x] **A) $"Hello {name}, you have {count} items"**
- [ ] **B) @"Hello {0}", name**
- [ ] **C) String.Format("Hello %s", name)**
- [ ] **D) #"Hello {name}"**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
String interpolation uses the '$' prefix before a string literal, allowing expressions embedded inside curly braces '{expression}' to be formatted and evaluated directly.

</details>

---

### Question 15

What is the requirement when executing a 'switch' statement on a string in C#?  

- [x] **A) Each non-empty case block must explicitly terminate with a jump statement (such as break, return, or goto)**
- [ ] **B) String switches are not supported in C#**
- [ ] **C) Cases must be listed in alphabetical order**
- [ ] **D) The switch statement cannot have a default case**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
C# enforces the 'no fall-through' rule: every non-empty case block must terminate with an explicit jump statement such as break, return, throw, or goto case.

</details>

---


## Module 2: Methods, Exceptions & Monitoring

### Question 16

What is the key difference between the 'ref' and 'out' parameter modifiers in C#?  

- [ ] **A) 'out' parameters must be initialized before passing, whereas 'ref' parameters do not**
- [x] **B) 'ref' parameters must be initialized before passing, whereas 'out' parameters must be assigned a value inside the method before returning**
- [ ] **C) 'out' parameters pass by value, while 'ref' passes by reference**
- [ ] **D) 'ref' can only be used with value types, while 'out' can only be used with reference types**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A 'ref' argument must be initialized by the caller prior to passing. An 'out' argument does not need to be initialized before the call, but the called method is required to assign it before returning.

</details>

---

### Question 17

In C# exception handling, when is the 'finally' block executed?  

- [ ] **A) Only if an exception occurs and is successfully caught**
- [ ] **B) Only if no exception occurs**
- [x] **C) Always, regardless of whether an exception occurs or is caught**
- [ ] **D) Only if an unhandled exception crashes the application**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
The 'finally' block always executes when control leaves the try block, whether normally, through a caught exception, or when rethrowing, ensuring cleanup of unmanaged resources.

</details>

---

### Question 18

What is the recommended way to rethrow the original exception inside a catch block while preserving the original stack trace?  

- [ ] **A) throw ex;**
- [x] **B) throw;**
- [ ] **C) return ex;**
- [ ] **D) throw new Exception(ex.Message);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Using 'throw;' without specifying an exception object rethrows the currently active exception and preserves the original call stack trace. 'throw ex;' resets the stack trace to the catch block.

</details>

---

### Question 19

Which of the following is an example of a named argument call in C#?  

- [x] **A) PrintData(name: "Alice", age: 30);**
- [ ] **B) PrintData("Alice" as name, 30 as age);**
- [ ] **C) PrintData(@name = "Alice", @age = 30);**
- [ ] **D) PrintData(ref "Alice", out 30);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Named arguments in C# allow passing parameters by name using the syntax 'parameterName: value', decoupling caller parameter order from method definition order.

</details>

---

### Question 20

What restriction applies to optional parameters in a C# method signature?  

- [ ] **A) They must appear before all required parameters**
- [x] **B) They must appear after all required parameters**
- [ ] **C) They cannot have default compile-time constant values**
- [ ] **D) They can only be used with reference types**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Optional parameters (parameters with default values) must appear after all required parameters at the end of the parameter list (unless followed by a 'params' array).

</details>

---

### Question 21

Which class in System.Diagnostics provides methods and properties that only emit output in builds compiled with the DEBUG symbol defined?  

- [ ] **A) System.Diagnostics.Trace**
- [x] **B) System.Diagnostics.Debug**
- [ ] **C) System.Diagnostics.EventLog**
- [ ] **D) System.Diagnostics.PerformanceCounter**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
System.Diagnostics.Debug calls are decorated with [Conditional("DEBUG")] and are stripped out by the compiler in Release builds, whereas System.Diagnostics.Trace works in both Debug and Release.

</details>

---

### Question 22

How do you specify multiple catch blocks for different exception types?  

- [x] **A) Order catch blocks from the most derived (specific) exception to the most general (System.Exception)**
- [ ] **B) Order catch blocks starting with System.Exception first**
- [ ] **C) Order does not matter because the runtime checks all catch blocks simultaneously**
- [ ] **D) Catch blocks can only handle one exception type per try block**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
C# catch blocks are evaluated sequentially from top to bottom. Specific derived exceptions (e.g. FileNotFoundException) must precede general exceptions (e.g. IOException, Exception) or a compiler error occurs.

</details>

---

### Question 23

What is the purpose of the 'params' keyword in a method parameter?  

- [ ] **A) It permits passing parameters by reference**
- [x] **B) It allows passing a variable number of arguments as a single comma-separated list or an array**
- [ ] **C) It marks the method as asynchronous**
- [ ] **D) It enforces that parameters cannot be modified**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'params' allows callers to pass comma-separated arguments or an array of the specified type without explicitly instantiating an array. It must be the last parameter.

</details>

---

### Question 24

Which class in System.Diagnostics allows you to route trace and debug output to files, consoles, or custom destinations?  

- [x] **A) TraceListener**
- [ ] **B) TraceRouter**
- [ ] **C) EventBroadcaster**
- [ ] **D) LogSink**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
TraceListener (such as DefaultTraceListener, TextWriterTraceListener, ConsoleTraceListener) receives messages from Trace or Debug and writes them to designated targets.

</details>

---

### Question 25

What exception is thrown when an index is outside the bounds of an array?  

- [ ] **A) ArgumentOutOfRangeException**
- [x] **B) IndexOutOfRangeException**
- [ ] **C) NullReferenceException**
- [ ] **D) InvalidOperationException**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Accessing an element of an array with an index less than zero or greater than/equal to the array's Length throws System.IndexOutOfRangeException.

</details>

---

### Question 26

What does an Exception Filter ('when' clause) accomplish in a C# catch block?  

- [x] **A) Catches an exception only if a specified boolean expression evaluates to true without unwinding the stack if false**
- [ ] **B) Converts exceptions into warnings**
- [ ] **C) Re-throws the exception after a specified delay**
- [ ] **D) Silently suppresses the exception**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Exception filters ('catch (HttpException ex) when (ex.ErrorCode == 404)') evaluate a condition before unwinding the call stack, preserving stack state if the condition is not met.

</details>

---

### Question 27

What base class should custom application exceptions inherit from in modern .NET?  

- [x] **A) System.Exception**
- [ ] **B) System.ApplicationException**
- [ ] **C) System.SystemException**
- [ ] **D) System.Error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Microsoft guidelines recommend deriving custom exceptions from System.Exception. System.ApplicationException was originally intended for user code but is now officially discouraged.

</details>

---

### Question 28

What attribute in System.Runtime.CompilerServices automatically injects the name of the calling method into an optional parameter?  

- [x] **A) [CallerMemberName]**
- [ ] **B) [CallingMethod]**
- [ ] **C) [MethodName]**
- [ ] **D) [SourceContext]**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
[CallerMemberName] instructs the compiler to automatically pass the member name of the caller as the default value of an optional string parameter, commonly used in INotifyPropertyChanged.

</details>

---

### Question 29

What method in System.Environment terminates a process immediately without executing any finally blocks or finalizers?  

- [x] **A) Environment.FailFast()**
- [ ] **B) Environment.Exit()**
- [ ] **C) Process.GetCurrentProcess().Kill()**
- [ ] **D) Thread.CurrentThread.Abort()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Environment.FailFast(message) terminates the process immediately, writing an entry to the Windows Event Log and bypassing all finally blocks, finalizers, and exception handlers to prevent corruption.

</details>

---

### Question 30

What does a TraceSwitch object allow developers to do?  

- [x] **A) Dynamically filter trace and debug output levels (Off, Error, Warning, Info, Verbose) using configuration files without recompiling**
- [ ] **B) Toggle between 32-bit and 64-bit compilation**
- [ ] **C) Switch between synchronous and asynchronous logging**
- [ ] **D) Route database connections**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.Diagnostics.TraceSwitch provides a multi-level switch to control tracing and debugging levels (Off, Error, Warning, Info, Verbose) declaratively via App.config.

</details>

---


## Module 3: Graphical Applications (XAML/WPF)

### Question 31

What does XAML stand for in .NET GUI application development?  

- [x] **A) eXtensible Application Markup Language**
- [ ] **B) eXtended Application Management Logic**
- [ ] **C) XML Application Model Layout**
- [ ] **D) eXecutable Application Markup Logic**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
XAML stands for Extensible Application Markup Language, an XML-based declarative language used in WPF, UWP, and Xamarin/MAUI to define UI layouts and hierarchies.

</details>

---

### Question 32

Which WPF layout panel positions child elements in rows and columns?  

- [ ] **A) StackPanel**
- [ ] **B) Canvas**
- [x] **C) Grid**
- [ ] **D) WrapPanel**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
The Grid panel arranges child controls into tabular cells defined by RowDefinitions and ColumnDefinitions, assigning elements via Grid.Row and Grid.Column attached properties.

</details>

---

### Question 33

Which WPF panel positions child elements using explicit X and Y coordinates?  

- [x] **A) Canvas**
- [ ] **B) DockPanel**
- [ ] **C) StackPanel**
- [ ] **D) Grid**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Canvas allows absolute positioning of child elements relative to its boundaries using Canvas.Left, Canvas.Top, Canvas.Right, and Canvas.Bottom attached properties.

</details>

---

### Question 34

What is a Routed Event in WPF that travels UP the element tree from the source element to the root?  

- [ ] **A) Direct event**
- [ ] **B) Tunneling event**
- [x] **C) Bubbling event**
- [ ] **D) Broadcast event**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
A Bubbling event starts at the element where the event originated and moves upward through ancestor elements to the visual tree root. Tunneling events travel downward and typically start with 'Preview'.

</details>

---

### Question 35

How do you stop a routed event from continuing its propagation along the element tree?  

- [x] **A) Set e.Handled = true;**
- [ ] **B) Call e.Cancel();**
- [ ] **C) Set e.StopBubbling = true;**
- [ ] **D) Call e.Dispose();**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Setting the 'Handled' property of the RoutedEventArgs instance to 'true' marks the event as processed, preventing most downstream or upstream handlers from firing.

</details>

---

### Question 36

In WPF XAML, what does the prefix 'x:' in 'x:Name' designate?  

- [ ] **A) An attached property in CSS**
- [x] **B) The standard XAML namespace (http://schemas.microsoft.com/winfx/2006/xaml)**
- [ ] **C) An XML schema validation tag**
- [ ] **D) An asynchronous data binding**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'x:' prefix maps to the core XAML schema, which defines language features like x:Name, x:Key, x:Class, and x:Type.

</details>

---

### Question 37

Which WPF layout control automatically wraps child elements to the next line when space runs out?  

- [ ] **A) StackPanel**
- [x] **B) WrapPanel**
- [ ] **C) DockPanel**
- [ ] **D) UniformGrid**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
WrapPanel positions child elements sequentially from left to right or top to bottom, breaking content to the next line when edge boundaries are exceeded.

</details>

---

### Question 38

What is the relationship between the XAML markup file (e.g. MainWindow.xaml) and its code-behind file (MainWindow.xaml.cs)?  

- [ ] **A) They represent two unrelated classes that communicate through sockets**
- [x] **B) They are two parts of the same partial class compiled together into one type**
- [ ] **C) The code-behind inherits from the XAML class**
- [ ] **D) The XAML file dynamically interprets the code-behind at runtime**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Both files define the same class using the 'partial' keyword. The compiler merges the declarative XAML (transformed into BAML and generated C#) with your code-behind class.

</details>

---

### Question 39

Which WPF control is best suited for allowing the user to select one option from a mutually exclusive group?  

- [ ] **A) CheckBox**
- [x] **B) RadioButton**
- [ ] **C) ListBox**
- [ ] **D) TextBox**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
RadioButton controls that share a GroupName are mutually exclusive; selecting one automatically deselects all other radio buttons in the group.

</details>

---

### Question 40

What method must be called in the code-behind constructor of a WPF Window to parse the XAML and wire up controls?  

- [ ] **A) LoadComponent()**
- [x] **B) InitializeComponent()**
- [ ] **C) RenderXAML()**
- [ ] **D) BindElements()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
InitializeComponent() is generated by the build tool (BAML compiler) to instantiate the UI visual tree, locate elements, and wire up event handlers defined in XAML.

</details>

---

### Question 41

What is a DependencyProperty in WPF?  

- [x] **A) A property backed by a centralized property store that supports data binding, styling, animations, and default value inheritance**
- [ ] **B) A property that depends on an external database connection**
- [ ] **C) A private field with a public getter only**
- [ ] **D) An auto-property generated by the C# compiler**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Dependency Properties register with the WPF property system (DependencyProperty.Register) to enable rich features including data binding, styles, animation storyboards, and property value inheritance.

</details>

---

### Question 42

Which interface must a ViewModel or model class implement to notify WPF data-bound UI controls that a property value has changed?  

- [x] **A) INotifyPropertyChanged**
- [ ] **B) IObservable**
- [ ] **C) IDataBindingSource**
- [ ] **D) IPropertyListener**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
INotifyPropertyChanged defines the PropertyChanged event. Raising this event notifies the WPF binding engine to update the corresponding UI elements.

</details>

---

### Question 43

Which binding mode ensures that changes in the UI automatically update the source data object AND changes in the source update the UI?  

- [x] **A) TwoWay**
- [ ] **B) OneWay**
- [ ] **C) OneWayToSource**
- [ ] **D) OneTime**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
BindingMode.TwoWay synchronizes data in both directions: source to target and target to source, standard for interactive controls like TextBox.Text.

</details>

---

### Question 44

What interface is implemented to create command objects that bind UI actions (like Button clicks) to ViewModel logic in WPF?  

- [x] **A) ICommand**
- [ ] **B) IAction**
- [ ] **C) IDelegateCommand**
- [ ] **D) IRoutedAction**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.Windows.Input.ICommand defines Execute(), CanExecute(), and CanExecuteChanged, decoupling UI trigger controls from the execution logic.

</details>

---

### Question 45

What is the purpose of the DataContext property in a WPF element hierarchy?  

- [x] **A) It establishes the default source object for all data bindings on the element and its child visual tree**
- [ ] **B) It specifies the SQL Server database connection string**
- [ ] **C) It defines the primary color theme**
- [ ] **D) It handles graphics rendering on the GPU**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
DataContext defines the data source for data binding. Child elements in the visual tree inherit their parent's DataContext unless explicitly overridden.

</details>

---


## Module 4: Classes & Type-Safe Collections

### Question 46

Which access modifier restricts access to members only within the same class or derived classes in the same assembly?  

- [ ] **A) protected**
- [ ] **B) internal**
- [ ] **C) protected internal**
- [x] **D) private protected**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `D`

**Explanation:**  
'private protected' (introduced in C# 7.2) restricts access to derived types that are declared within the same assembly. (Note: 'protected internal' allows access from any derived class OR any class in the same assembly).

</details>

---

### Question 47

What is the primary benefit of generic collections like List<T> over non-generic collections like ArrayList?  

- [ ] **A) Generic collections do not consume heap memory**
- [x] **B) Type safety at compile-time and avoidance of boxing/unboxing overhead for value types**
- [ ] **C) Generic collections can store different types in the same instance**
- [ ] **D) Automatic database synchronization**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Generic collections (System.Collections.Generic) provide compile-time type validation and eliminate the performance cost of boxing and unboxing value types when inserting or retrieving elements.

</details>

---

### Question 48

Which generic collection stores elements as key/value pairs with fast O(1) average lookup by key?  

- [ ] **A) List<KeyValuePair<TKey, TValue>>**
- [x] **B) Dictionary<TKey, TValue>**
- [ ] **C) Queue<T>**
- [ ] **D) LinkedList<T>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Dictionary<TKey, TValue> is implemented as a hash table, providing amortized O(1) time complexity for key-based insertions, deletions, and lookups.

</details>

---

### Question 49

What is an auto-implemented property in C#?  

- [ ] **A) A property that calculates its value dynamically from other properties**
- [x] **B) A property where the compiler automatically generates a private, anonymous backing field: public int Age { get; set; }**
- [ ] **C) A static property shared across all instances**
- [ ] **D) A property mapped directly to an external database table**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Auto-implemented properties (e.g., 'public string Name { get; set; }') allow concise property declaration where the C# compiler creates the private backing store field behind the scenes.

</details>

---

### Question 50

Which collection class represents a First-In, First-Out (FIFO) collection?  

- [ ] **A) Stack<T>**
- [x] **B) Queue<T>**
- [ ] **C) SortedSet<T>**
- [ ] **D) HashSet<T>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Queue<T> operates on a FIFO basis using Enqueue() and Dequeue(). Stack<T> operates on a LIFO (Last-In, First-Out) basis using Push() and Pop().

</details>

---

### Question 51

What happens when you try to add a duplicate key to a Dictionary<TKey, TValue> using the Add() method?  

- [ ] **A) The existing key's value is silently overwritten**
- [x] **B) An ArgumentException is thrown**
- [ ] **C) The new entry is silently discarded**
- [ ] **D) The key is appended with an incrementing integer**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Calling 'dictionary.Add(key, value)' throws an ArgumentException if the key already exists. In contrast, using the indexer 'dictionary[key] = value' overwrites the existing value.

</details>

---

### Question 52

What is a static constructor in C# and when does it execute?  

- [ ] **A) It is called each time an instance of the class is created**
- [x] **B) It is executed once automatically before any instance is created or any static member is referenced**
- [ ] **C) It requires parameters to configure global class settings**
- [ ] **D) It can be called explicitly using ClassName.Constructor()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A static constructor has no access modifiers and no parameters. The CLR invokes it exactly once before the class is first accessed or instantiated in an AppDomain.

</details>

---

### Question 53

Which collection class ensures that no duplicate elements exist and offers high-performance set operations (union, intersection)?  

- [ ] **A) List<T>**
- [ ] **B) ArrayList**
- [x] **C) HashSet<T>**
- [ ] **D) Queue<T>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
HashSet<T> stores distinct elements without duplicates, providing high-performance set operations like UnionWith, IntersectWith, and ExceptWith using hashing.

</details>

---

### Question 54

What does object initializer syntax allow in C#?  

- [x] **A) Initializing properties/fields of an object at creation time without explicitly invoking a parameterized constructor: var p = new Person { Name = "John", Age = 25 };**
- [ ] **B) Allocating objects directly to unmanaged memory**
- [ ] **C) Automatically serializing an object to XML upon instantiation**
- [ ] **D) Defining constructor overloads dynamically at runtime**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Object initializer syntax allows assigning values to any accessible fields or properties of an object upon creation within braces '{ ... }' after the 'new' expression.

</details>

---

### Question 55

How can you constrain a generic type parameter T to only accept classes that implement IDisposable and have a public parameterless constructor?  

- [x] **A) where T : IDisposable, new()**
- [ ] **B) where T == IDisposable && new()**
- [ ] **C) [Constraint(IDisposable, DefaultConstructor)]**
- [ ] **D) <T extends IDisposable : new>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Generic constraints in C# use the 'where' clause. The 'new()' constraint specifies a parameterless constructor and must always be listed last: 'where T : IDisposable, new()'.

</details>

---

### Question 56

What does the 'yield return' statement do inside a method returning IEnumerable<T>?  

- [x] **A) Generates an iterator state machine that yields elements one at a time on demand as the caller enumerates**
- [ ] **B) Returns the entire collection as an array immediately**
- [ ] **C) Suspends the thread for a specified duration**
- [ ] **D) Yields CPU execution to the operating system**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'yield return' enables custom lazy iteration. The compiler synthesizes a state machine class implementing IEnumerator<T> that produces values on demand when MoveNext() is called.

</details>

---

### Question 57

What is the difference between IComparable<T> and IComparer<T>?  

- [x] **A) IComparable<T> defines a type's default internal comparison method (CompareTo); IComparer<T> defines an external comparison strategy (Compare) passed into sort methods**
- [ ] **B) IComparable is for value types; IComparer is for reference types**
- [ ] **C) IComparer is deprecated in modern C#**
- [ ] **D) There is no functional difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
IComparable<T> provides natural ordering implemented directly by the class via CompareTo(T other). IComparer<T> is implemented by a separate helper class to provide alternate sorting criteria.

</details>

---

### Question 58

Which collection maintains its elements in sorted order by key with O(log n) insertion and lookup?  

- [x] **A) SortedDictionary<TKey, TValue>**
- [ ] **B) Dictionary<TKey, TValue>**
- [ ] **C) List<T>**
- [ ] **D) Queue<T>**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SortedDictionary<TKey, TValue> is implemented as a binary search tree (red-black tree), keeping keys sorted with O(log n) retrieval, insertion, and deletion complexity.

</details>

---

### Question 59

In C# generic interfaces, what does the 'out' keyword signify on a type parameter (e.g. IEnumerable<out T>)?  

- [x] **A) Covariance: allows using a more derived type than originally specified (T is used only in output positions)**
- [ ] **B) Contravariance: allows using a less derived type**
- [ ] **C) The parameter is passed by reference**
- [ ] **D) The collection cannot be read**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'out' marks a generic type parameter as covariant, meaning you can assign an IEnumerable<Derived> to an IEnumerable<Base>. T can only appear as method return values.

</details>

---

### Question 60

What is the difference between List<T> and IReadOnlyList<T>?  

- [x] **A) IReadOnlyList<T> exposes only Count and an indexer getter, preventing consumers from modifying the collection directly**
- [ ] **B) IReadOnlyList cannot be enumerated**
- [ ] **C) IReadOnlyList is stored in read-only ROM memory**
- [ ] **D) List<T> cannot be passed into methods**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
IReadOnlyList<T> provides a read-only view of an indexed collection, omitting Add, Remove, and indexer setters to prevent mutation by callers.

</details>

---


## Module 5: Class Hierarchy & Inheritance

### Question 61

What keyword is used in a derived class to invoke a constructor or method of its base class?  

- [ ] **A) super**
- [ ] **B) parent**
- [x] **C) base**
- [ ] **D) this**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
In C#, the 'base' keyword is used to access members of the base class or invoke base class constructors: 'public Derived() : base() { }'.

</details>

---

### Question 62

What keyword must be placed on a base class method to allow a derived class to override it?  

- [ ] **A) abstract or static**
- [x] **B) virtual or abstract**
- [ ] **C) sealed or dynamic**
- [ ] **D) internal or partial**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In C#, methods are non-virtual by default. A base class method must be marked 'virtual' or 'abstract' to permit overriding in derived classes using the 'override' keyword.

</details>

---

### Question 63

What is the difference between 'override' and 'new' when modifying a method in a derived class?  

- [ ] **A) 'override' creates a new method while 'new' replaces the virtual dispatch table**
- [x] **B) 'override' participates in polymorphic dynamic dispatch, while 'new' hides the base method without overriding it**
- [ ] **C) 'new' can only be used with interfaces**
- [ ] **D) There is no functional difference; they are interchangeable**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'override' modifies the virtual method table, enabling polymorphic behavior when called via a base reference. 'new' hides the inherited method; calling it through a base reference still executes the base implementation.

</details>

---

### Question 64

Can a C# class inherit from multiple base classes directly?  

- [ ] **A) Yes, C# supports full multiple implementation inheritance**
- [x] **B) No, C# supports single class inheritance, but a class can implement multiple interfaces**
- [ ] **C) Yes, if all base classes are abstract**
- [ ] **D) Only if the classes are marked with the [MultipleInheritance] attribute**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
C# only allows single class inheritance (a class can only derive from one base class), but permits a class to implement any number of interfaces.

</details>

---

### Question 65

What happens when a class is marked as 'sealed'?  

- [ ] **A) It cannot be instantiated**
- [x] **B) It cannot be inherited by another class**
- [ ] **C) All its methods must be virtual**
- [ ] **D) Its properties become read-only**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'sealed' keyword prevents other classes from inheriting from the sealed class. It can also be applied to overridden virtual methods to stop further overriding in subclasses.

</details>

---

### Question 66

What does the 'as' operator do when casting an incompatible reference type?  

- [ ] **A) Throws an InvalidCastException**
- [x] **B) Returns null without throwing an exception**
- [ ] **C) Triggers a compile-time syntax error**
- [ ] **D) Generates a default instance of the target type**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'as' operator performs a safe cast on reference or nullable types. If the cast fails due to incompatible types, it evaluates to null instead of throwing an InvalidCastException.

</details>

---

### Question 67

What is true regarding an 'abstract' class in C#?  

- [ ] **A) It can be instantiated directly using 'new'**
- [x] **B) It cannot be instantiated directly and is intended to serve as a common base class**
- [ ] **C) It cannot contain any concrete methods with implementation**
- [ ] **D) All derived classes must also be declared abstract**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
An abstract class cannot be instantiated directly with 'new'. It can contain both abstract members (without bodies) and concrete members (with full implementations).

</details>

---

### Question 68

How does the 'is' pattern-matching operator work in modern C# (e.g. 'if (obj is Person p)')?  

- [x] **A) Checks compatibility, casts the object to type Person, and assigns it to 'p' if true**
- [ ] **B) Only checks boolean equality of pointers**
- [ ] **C) Clones obj into a new Person instance**
- [ ] **D) Compares string representations of obj and Person**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The type-pattern 'is' operator tests whether 'obj' is of type Person, and if true, assigns the casted reference to the variable 'p' within the enclosing conditional scope.

</details>

---

### Question 69

What is the key difference between an interface and an abstract class?  

- [ ] **A) Interfaces can have fields and constructors; abstract classes cannot**
- [x] **B) A class can implement multiple interfaces but inherit from only one abstract class; interfaces cannot define instance state (fields)**
- [ ] **C) Abstract classes cannot have access modifiers on members**
- [ ] **D) Interfaces are value types, while abstract classes are reference types**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A class can implement multiple interfaces, but only inherit from a single abstract class. Interfaces define a contract of members without instance fields, whereas abstract classes can hold state and constructors.

</details>

---

### Question 70

What is the universal root class from which all types in .NET directly or indirectly derive?  

- [ ] **A) System.Type**
- [ ] **B) System.ValueType**
- [x] **C) System.Object**
- [ ] **D) System.Base**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
System.Object (aliased as 'object') is the ultimate base class for all classes, structs, enums, and delegates in the .NET CLR type hierarchy.

</details>

---

### Question 71

What is Explicit Interface Implementation in C#?  

- [x] **A) Implementing an interface member so it is only callable when the object is cast directly to that interface type: void IDisposable.Dispose() { }**
- [ ] **B) Declaring all interface members with the public keyword**
- [ ] **C) Writing interface code in a separate assembly**
- [ ] **D) Implementing interfaces using reflection only**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Explicit interface implementation prefixes the member with the interface name without access modifiers. The member is hidden from the class's public interface and only accessible through an interface reference.

</details>

---

### Question 72

Can an overridden virtual method in a derived class be marked 'sealed'?  

- [x] **A) Yes, 'sealed override' prevents further derived classes from overriding that specific method again**
- [ ] **B) No, sealed can only be applied to entire classes**
- [ ] **C) Yes, but only in abstract classes**
- [ ] **D) Only if the method has no parameters**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Applying 'sealed override' to a method in a derived class stops the virtual inheritance chain, prohibiting any further subclasses from overriding that method.

</details>

---

### Question 73

What does the 'protected internal' access modifier mean in C#?  

- [x] **A) Accessible by any code in the same assembly OR by any derived class in any assembly**
- [ ] **B) Accessible only by derived classes within the same assembly**
- [ ] **C) Accessible only within the declaring class**
- [ ] **D) Accessible by all classes in the entire solution**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'protected internal' is a union: members are accessible to any class in the same assembly, as well as to derived classes located in other external assemblies.

</details>

---

### Question 74

What happens if a derived class introduces a method with the exact same signature as a base class method without using 'override' or 'new'?  

- [x] **A) The code compiles with a compiler warning that the method hides an inherited member, defaulting to 'new' behavior**
- [ ] **B) A fatal compiler error occurs**
- [ ] **C) The base method is overridden polymorphically**
- [ ] **D) Both methods are merged into one**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Omitting 'override' or 'new' results in a compiler warning CS0108. The compiler assumes 'new' (hiding), but explicitly adding 'new' silences the warning.

</details>

---

### Question 75

How does C# avoid the 'Diamond Problem' of multiple inheritance common in C++?  

- [x] **A) By strictly disallowing multiple class inheritance while allowing multiple interface implementation**
- [ ] **B) By renaming colliding methods automatically**
- [ ] **C) By ignoring the second base class**
- [ ] **D) By executing both base methods in parallel**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
By restricting classes to a single inheritance hierarchy while permitting implementation of multiple interfaces, C# completely eliminates state and constructor ambiguity found in multiple inheritance.

</details>

---


## Module 6: Reading and Writing Local Data

### Question 76

What is the primary difference between the System.IO.File class and the System.IO.FileInfo class?  

- [x] **A) File provides static methods; FileInfo provides instance methods with cached file properties**
- [ ] **B) File is used only for text files; FileInfo is used only for binary files**
- [ ] **C) FileInfo requires administrative privileges; File does not**
- [ ] **D) File operates asynchronously; FileInfo operates synchronously**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.IO.File is a static utility class best for one-off operations (each call checks security permissions). System.IO.FileInfo is an instance class that caches metadata and is optimized for repeated operations on a specific file.

</details>

---

### Question 77

Which class in System.IO is designed specifically for reading character data from a stream with encoding support?  

- [ ] **A) BinaryReader**
- [x] **B) StreamReader**
- [ ] **C) FileStream**
- [ ] **D) StringWriter**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
StreamReader reads characters from a byte stream in a particular character encoding (such as UTF-8), providing methods like ReadLine() and ReadToEnd().

</details>

---

### Question 78

Why should FileStream and StreamReader objects be wrapped inside a 'using' statement in C#?  

- [x] **A) To ensure that Dispose() is called immediately when leaving scope, releasing underlying OS file handles**
- [ ] **B) To speed up disk rotation speed**
- [ ] **C) To encrypt the file automatically on write**
- [ ] **D) To bypass operating system file locks**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'using' statement translates to a try/finally block that guarantees Dispose() is called on the IDisposable object, deterministically releasing operating system file handles and unmanaged resources.

</details>

---

### Question 79

Which method of System.IO.File reads the entire contents of a text file into a single string?  

- [ ] **A) File.ReadLines()**
- [ ] **B) File.ReadAllBytes()**
- [x] **C) File.ReadAllText()**
- [ ] **D) File.ReadString()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
File.ReadAllText(path) opens a text file, reads all lines into a single string, and closes the file automatically.

</details>

---

### Question 80

What is serialization in .NET?  

- [x] **A) The process of converting an object's state into a stream of bytes or text format (XML/JSON) for storage or transmission**
- [ ] **B) Compiling C# source code into MSIL bytecode**
- [ ] **C) Organizing database tables into first normal form**
- [ ] **D) Ensuring multi-threaded operations execute in strict sequential order**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Serialization is the process of converting the state of an object graph into a linear format (binary, XML, JSON) so it can be saved to disk, memory, or sent across a network.

</details>

---

### Question 81

Which class in System.IO provides static methods for manipulating file and directory path strings safely across operating systems?  

- [ ] **A) System.IO.DriveInfo**
- [x] **B) System.IO.Path**
- [ ] **C) System.IO.FileSystemInfo**
- [ ] **D) System.IO.DirectoryInfo**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
System.IO.Path contains cross-platform static helper methods such as Path.Combine(), Path.GetExtension(), and Path.GetFileName() to handle directory path strings safely.

</details>

---

### Question 82

Which serializer in System.Xml.Serialization serializes only public fields and read/write properties of an object?  

- [ ] **A) BinaryFormatter**
- [x] **B) XmlSerializer**
- [ ] **C) DataContractSerializer**
- [ ] **D) SoapFormatter**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
XmlSerializer only serializes public fields and public read/write properties of classes that have a public parameterless constructor. It does not serialize private or protected members.

</details>

---

### Question 83

What method in FileStream forces buffered data to be written to the underlying physical storage device?  

- [ ] **A) Clear()**
- [x] **B) Flush()**
- [ ] **C) Commit()**
- [ ] **D) Sync()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The Flush() or FlushAsync() method flushes the stream's internal memory buffer to the underlying destination device, ensuring that all written data is committed.

</details>

---

### Question 84

What is the benefit of File.ReadLines() over File.ReadAllLines() when processing a 10 GB log file?  

- [ ] **A) ReadLines() loads all lines into memory at once as a string[]**
- [x] **B) ReadLines() returns an IEnumerable<string> that streams lines lazily one by one, avoiding high memory consumption**
- [ ] **C) ReadLines() automatically compresses the file**
- [ ] **D) ReadLines() runs synchronously while ReadAllLines() is asynchronous**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
File.ReadLines returns an IEnumerable<string> that yields lines lazily, reading from disk on demand. File.ReadAllLines allocates an entire string[] array in memory upfront, risking OutOfMemoryException on large files.

</details>

---

### Question 85

Which class is used to write primitive data types in binary format directly to a stream?  

- [x] **A) BinaryWriter**
- [ ] **B) StreamWriter**
- [ ] **C) StringWriter**
- [ ] **D) TextWriter**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.IO.BinaryWriter writes primitive data types (integers, booleans, floating-point numbers) in raw binary format to an underlying stream.

</details>

---

### Question 86

Which stream in System.IO.Compression compresses data written to it using the standard DEFLATE compression algorithm?  

- [x] **A) DeflateStream**
- [ ] **B) ZipArchiveStream**
- [ ] **C) CompressStream**
- [ ] **D) PackedStream**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
DeflateStream (and GZipStream) in System.IO.Compression wraps an underlying stream to compress or decompress data using the industry-standard Deflate algorithm.

</details>

---

### Question 87

Which stream class creates a stream whose backing store is physical memory rather than a disk file?  

- [x] **A) MemoryStream**
- [ ] **B) RamStream**
- [ ] **C) BufferStream**
- [ ] **D) VirtualStream**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.IO.MemoryStream encapsulates an in-memory byte array as a stream, ideal for temporary serialization or buffering without disk I/O overhead.

</details>

---

### Question 88

What method in System.IO.Path retrieves the path to the current user's temporary folder?  

- [x] **A) Path.GetTempPath()**
- [ ] **B) Path.GetTemporaryDirectory()**
- [ ] **C) Path.TempFolder**
- [ ] **D) Directory.GetTemp()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Path.GetTempPath() returns the path of the current system user's temporary directory (e.g. C:\Users\User\AppData\Local\Temp\).

</details>

---

### Question 89

What parameter in FileStream constructors controls whether other processes can open the same file concurrently?  

- [x] **A) FileShare (e.g. FileShare.Read, FileShare.None)**
- [ ] **B) FileAccess**
- [ ] **C) FileMode**
- [ ] **D) FileOptions**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
FileShare determines how the file will be shared by other processes (FileShare.None blocks others; FileShare.Read allows concurrent reading).

</details>

---

### Question 90

What method allows moving the current read/write position to an arbitrary offset within a seekable stream?  

- [x] **A) stream.Seek(offset, SeekOrigin)**
- [ ] **B) stream.MoveTo(offset)**
- [ ] **C) stream.PositionOffset(offset)**
- [ ] **D) stream.Jump(offset)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The Seek(long offset, SeekOrigin origin) method sets the position within the current stream relative to Begin, Current, or End.

</details>

---


## Module 7: Accessing a Database

### Question 91

What does ORM stand for in software development?  

- [x] **A) Object-Relational Mapping**
- [ ] **B) Operational Relationship Model**
- [ ] **C) Organized Record Management**
- [ ] **D) Object Resource Monitoring**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ORM stands for Object-Relational Mapping, a software architecture technique that maps relational database tables, columns, and relationships to object-oriented classes and properties.

</details>

---

### Question 92

In Entity Framework, which primary class coordinates database connectivity and change tracking for entity models?  

- [ ] **A) SqlConnection**
- [x] **B) DbContext**
- [ ] **C) ObjectBroker**
- [ ] **D) DataAdapter**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
DbContext is the primary class in Entity Framework that manages database connections, provides DbSet<TEntity> collections, configures models, and tracks changes to persist updates.

</details>

---

### Question 93

What is 'deferred execution' (lazy evaluation) in LINQ queries?  

- [ ] **A) The query executes on a background thread automatically**
- [x] **B) The query definition is not sent to the database until the results are enumerated (e.g. with foreach or ToList())**
- [ ] **C) The query is cached forever in memory**
- [ ] **D) The database aborts long-running queries**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In LINQ, query creation does not execute the query. Execution is deferred until the query variable is iterated over (e.g., using a foreach loop) or an immediate execution method like ToList(), ToArray(), or Count() is called.

</details>

---

### Question 94

Which LINQ method immediately forces execution of a query and returns results in a List<T>?  

- [ ] **A) .Where()**
- [ ] **B) .Select()**
- [x] **C) .ToList()**
- [ ] **D) .OrderBy()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
Methods like ToList(), ToArray(), and ToDictionary() force immediate execution of the LINQ query pipeline and materialize the results into memory.

</details>

---

### Question 95

In ADO.NET, which object provides a high-performance, read-only, forward-only stream of data from a SQL database?  

- [ ] **A) DataSet**
- [ ] **B) DataTable**
- [x] **C) SqlDataReader**
- [ ] **D) SqlDataAdapter**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
SqlDataReader reads data rows in a forward-only, read-only manner directly from the database connection, minimizing memory footprint and overhead compared to DataSet.

</details>

---

### Question 96

How do you prevent SQL Injection attacks when executing queries in ADO.NET?  

- [ ] **A) Concatenate all user input directly into the SQL string**
- [x] **B) Use parameterized queries with SqlParameter objects**
- [ ] **C) Store SQL strings in XML files**
- [ ] **D) Run the query inside a try-catch block**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Parameterized queries (e.g., cmd.Parameters.AddWithValue("@name", userInput)) treat user input strictly as literal values rather than executable code, completely preventing SQL injection.

</details>

---

### Question 97

Which method must be called on a DbContext instance to persist all pending inserts, updates, and deletes to the database?  

- [ ] **A) context.Submit()**
- [x] **B) context.SaveChanges()**
- [ ] **C) context.CommitTransaction()**
- [ ] **D) context.Persist()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
SaveChanges() (or SaveChangesAsync()) examines the ChangeTracker for all modified, added, and deleted entities and issues the corresponding INSERT, UPDATE, and DELETE SQL statements within a transaction.

</details>

---

### Question 98

What is the difference between LINQ method syntax and LINQ query syntax?  

- [x] **A) Method syntax uses extension methods with lambdas (e.g. .Where(x => x.Active)); query syntax uses SQL-like clauses (from...where...select)**
- [ ] **B) Query syntax compiles to faster machine code than method syntax**
- [ ] **C) Method syntax can only be used with XML, not databases**
- [ ] **D) Query syntax requires an active internet connection**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
LINQ query syntax provides declarative 'from...where...select' keywords, which the compiler translates directly into equivalent fluent method syntax calls using extension methods and lambdas.

</details>

---

### Question 99

In Entity Framework Code First, what is used to define constraints such as [Required] or [MaxLength(50)] directly on entity properties?  

- [x] **A) Data Annotations**
- [ ] **B) XAML styles**
- [ ] **C) SQL Triggers**
- [ ] **D) Assembly Manifests**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Data Annotations (from System.ComponentModel.DataAnnotations) provide declarative attributes like [Key], [Required], and [StringLength] to define validation rules and database schema mappings.

</details>

---

### Question 100

What is 'Eager Loading' in Entity Framework?  

- [x] **A) Loading related navigation properties upfront in the initial query using the .Include() method**
- [ ] **B) Loading child entities only when their property is first accessed at runtime**
- [ ] **C) Downloading the entire database schema upon application startup**
- [ ] **D) Running queries synchronously on the UI thread**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Eager Loading uses the .Include() method to load related entities as part of the initial database query via JOINs, avoiding the 'N+1 query problem' associated with lazy loading.

</details>

---

### Question 101

What is the performance advantage of using '.AsNoTracking()' in Entity Framework read queries?  

- [x] **A) Disables the DbContext Change Tracker, reducing memory allocation and CPU overhead for read-only queries**
- [ ] **B) Bypasses network firewalls**
- [ ] **C) Prevents other users from reading data**
- [ ] **D) Encrypts query results**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
When querying data for display without plans to update, calling .AsNoTracking() tells EF not to create tracking snapshot entries in memory, significantly improving performance.

</details>

---

### Question 102

How is optimistic concurrency control implemented in Entity Framework?  

- [x] **A) Using a timestamp/rowversion column decorated with [Timestamp] or properties decorated with [ConcurrencyCheck]**
- [ ] **B) Locking the entire database table during reads**
- [ ] **C) Retrying failed transactions indefinitely**
- [ ] **D) Using exclusive database transactions**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Optimistic concurrency compares the current rowversion/timestamp in the database with the original value at read time in the UPDATE WHERE clause, throwing a DbUpdateConcurrencyException if mismatched.

</details>

---

### Question 103

Why must navigation properties be declared as 'virtual' in Entity Framework models when lazy loading is enabled?  

- [x] **A) To allow EF dynamic proxy classes to override the property and inject lazy-loading database queries when accessed**
- [ ] **B) To allow properties to be null**
- [ ] **C) To serialize properties to JSON**
- [ ] **D) To store properties in RAM**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
EF generates dynamic runtime proxy classes that inherit from the entity model and override virtual navigation properties to trigger database fetches upon first access.

</details>

---

### Question 104

Which command in the Package Manager Console applies pending Entity Framework Code First migrations to the target database?  

- [x] **A) Update-Database**
- [ ] **B) Add-Migration**
- [ ] **C) Apply-Schema**
- [ ] **D) Sync-Database**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'Update-Database' inspects the migration history table (__EFMigrationsHistory) and executes the pending migration scripts against the target database.

</details>

---

### Question 105

What method on DbContext or DbSet allows executing raw SQL queries that map to entity types?  

- [x] **A) dbSet.SqlQuery() (or FromSqlRaw in EF Core)**
- [ ] **B) dbSet.ExecuteQuery()**
- [ ] **C) dbContext.RunSql()**
- [ ] **D) dbSet.NativeCommand()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SqlQuery() (in EF6) and FromSqlRaw() (in EF Core) execute raw SQL SELECT statements and map the returned result sets directly into strongly-typed entity instances.

</details>

---


## Module 8: Accessing Remote Data

### Question 106

Which modern class in System.Net.Http is recommended for sending HTTP requests and receiving HTTP responses in .NET?  

- [ ] **A) WebClient**
- [ ] **B) HttpWebRequest**
- [x] **C) HttpClient**
- [ ] **D) Socket**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
HttpClient is the modern, flexible, asynchronous class for making HTTP requests in .NET. It is intended to be instantiated once and reused throughout the application lifecycle.

</details>

---

### Question 107

What protocol and format standard does WCF Data Services use to expose and consume data over the web?  

- [x] **A) OData (Open Data Protocol) over HTTP**
- [ ] **B) SOAP with binary TCP encoding**
- [ ] **C) FTP over SSL**
- [ ] **D) GraphQL over WebSockets**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
WCF Data Services implements the OData (Open Data Protocol) standard, exposing data as RESTful resources using standard HTTP verbs (GET, POST, PUT, DELETE) and AtomPub/JSON formats.

</details>

---

### Question 108

Which HTTP method should be used to retrieve data from a remote REST API without modifying server state?  

- [ ] **A) POST**
- [x] **B) GET**
- [ ] **C) PUT**
- [ ] **D) DELETE**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
HTTP GET is safe and idempotent, used specifically to request representations of specified target resources from the server without causing side effects.

</details>

---

### Question 109

What asynchronous method of HttpClient sends an HTTP GET request and returns the response body directly as a string?  

- [x] **A) GetStringAsync()**
- [ ] **B) FetchTextAsync()**
- [ ] **C) DownloadString()**
- [ ] **D) ReadAsString()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HttpClient.GetStringAsync(uri) sends a GET request to the specified URI and returns the response body as a string asynchronously.

</details>

---

### Question 110

Which HTTP status code indicates that the requested resource was successfully created on the server?  

- [ ] **A) 200 OK**
- [x] **B) 201 Created**
- [ ] **C) 204 No Content**
- [ ] **D) 301 Moved Permanently**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
HTTP 201 Created indicates that the request succeeded and resulted in one or more new resources being created on the server (common response for POST operations).

</details>

---

### Question 111

What serializer in System.Runtime.Serialization.Json can serialize objects into JSON format and deserialize JSON back into objects?  

- [x] **A) DataContractJsonSerializer**
- [ ] **B) BinaryFormatter**
- [ ] **C) SoapFormatter**
- [ ] **D) XmlSerializer**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
DataContractJsonSerializer is a .NET Framework class that serializes objects decorated with [DataContract] and [DataMember] attributes to and from JSON.

</details>

---

### Question 112

Why is it best practice to reuse a single instance of HttpClient rather than instantiating a new one for every request?  

- [ ] **A) HttpClient cannot be disposed**
- [x] **B) Creating and disposing new instances rapidly exhausts underlying operating system sockets (socket exhaustion in TIME_WAIT state)**
- [ ] **C) Only one HttpClient can run per computer**
- [ ] **D) It prevents compiler optimization**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Instantiating and disposing HttpClient per request leaves underlying OS TCP sockets in the TIME_WAIT state, rapidly leading to socket exhaustion under moderate to heavy loads.

</details>

---

### Question 113

In OData query options, which query string parameter is used to sort the retrieved results by a given property?  

- [ ] **A) $filter**
- [ ] **B) $select**
- [x] **C) $orderby**
- [ ] **D) $top**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
The '$orderby' OData query option specifies an expression for ordering the records returned by the query (e.g., $orderby=Price desc).

</details>

---

### Question 114

What class is used with HttpClient to send multipart form data such as file uploads?  

- [ ] **A) StringContent**
- [x] **B) MultipartFormDataContent**
- [ ] **C) ByteArrayContent**
- [ ] **D) StreamContent**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
MultipartFormDataContent is a specialized HttpContent container for sending multi-part MIME form data (useful for uploading files alongside form fields).

</details>

---

### Question 115

Which method in HttpResponseMessage throws an HttpRequestException if the HTTP response indicates failure (status code outside 200-299)?  

- [ ] **A) CheckSuccess()**
- [x] **B) EnsureSuccessStatusCode()**
- [ ] **C) ThrowOnFailure()**
- [ ] **D) ValidateStatus()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
HttpResponseMessage.EnsureSuccessStatusCode() validates the IsSuccessStatusCode property and throws an HttpRequestException if the status code indicates an error.

</details>

---

### Question 116

How do you attach a JWT Bearer authentication token to an HttpClient request?  

- [x] **A) client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);**
- [ ] **B) client.Headers.Add("Bearer-Token", token);**
- [ ] **C) client.AddAuth(token);**
- [ ] **D) client.SetSecurityToken(token);**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Setting 'DefaultRequestHeaders.Authorization' to an AuthenticationHeaderValue with scheme "Bearer" and parameter 'token' injects standard HTTP Authorization headers into outgoing requests.

</details>

---

### Question 117

Which class configures connection pooling, cookie containers, and automatic decompression for an HttpClient?  

- [x] **A) HttpClientHandler**
- [ ] **B) WebRequestHandler**
- [ ] **C) HttpConfiguration**
- [ ] **D) SocketManager**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HttpClientHandler is passed to the HttpClient constructor to configure low-level transport settings including CookieContainer, UseCookies, and AutomaticDecompression.

</details>

---

### Question 118

What attribute in WCF is applied to an interface to declare it as an exposed service contract?  

- [x] **A) [ServiceContract]**
- [ ] **B) [WebMethod]**
- [ ] **C) [RemoteService]**
- [ ] **D) [WCFInterface]**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.ServiceModel.ServiceContractAttribute marks an interface or class as defining an exposed WCF service contract, with individual methods marked with [OperationContract].

</details>

---

### Question 119

How can you cancel a pending HttpClient asynchronous request if it exceeds a custom timeout?  

- [x] **A) Pass a CancellationToken from a CancellationTokenSource configured with CancelAfter()**
- [ ] **B) Call client.Abort()**
- [ ] **C) Kill the thread**
- [ ] **D) Dispose the operating system socket**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Methods like GetAsync, PostAsync, and SendAsync accept a CancellationToken. Using 'new CancellationTokenSource(TimeSpan.FromSeconds(5))' cancels the request if the duration elapses.

</details>

---

### Question 120

Which HTTP method should be used when updating an existing resource by replacing its entire state?  

- [x] **A) PUT**
- [ ] **B) GET**
- [ ] **C) POST**
- [ ] **D) PATCH**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
HTTP PUT is idempotent and represents replacing the target resource completely. HTTP PATCH is used for partial updates, and POST is for creating new resources.

</details>

---


## Module 9: UI Design & Styling

### Question 121

In WPF XAML, what element is used to group reusable visual property settings (such as Background, FontSize, Margin) into a single definition?  

- [x] **A) Style**
- [ ] **B) Template**
- [ ] **C) ResourceDictionary**
- [ ] **D) Trigger**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A <Style> element allows you to set a collection of property values on controls of a specific TargetType using <Setter Property="..." Value="..." /> elements.

</details>

---

### Question 122

What is the difference between StaticResource and DynamicResource in WPF?  

- [x] **A) StaticResource evaluates the resource once at compile/load time, while DynamicResource evaluates and updates the reference whenever the resource changes at runtime**
- [ ] **B) DynamicResource works only with strings; StaticResource works with all types**
- [ ] **C) StaticResource can only be defined in App.xaml**
- [ ] **D) DynamicResource is deprecated in modern .NET**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
StaticResource resolves the resource reference once during initial loading and will not detect subsequent changes. DynamicResource looks up the resource at runtime whenever the resource key or dictionary changes.

</details>

---

### Question 123

What is a ControlTemplate in WPF?  

- [x] **A) A template that defines the visual appearance and visual tree structure of a control, separating appearance from control behavior**
- [ ] **B) A C# class file template in Visual Studio**
- [ ] **C) A database table design pattern**
- [ ] **D) A style that only affects text elements**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A ControlTemplate replaces or defines the visual tree of a control (how it looks), completely decoupling visual representation from the control's programmatic functionality and behavior.

</details>

---

### Question 124

What is the purpose of a DataTemplate in WPF?  

- [ ] **A) To configure database connection strings in XAML**
- [x] **B) To define the visual presentation and layout of data objects (e.g. in a ListBox or ItemsControl)**
- [ ] **C) To restrict user data input formats**
- [ ] **D) To define server schemas**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A DataTemplate defines how data objects are visualized when bound to UI controls like ListBox, ComboBox, or ContentControl.

</details>

---

### Question 125

What is the difference between a UserControl and a CustomControl in WPF?  

- [x] **A) A UserControl combines existing controls using XAML and code-behind; a CustomControl inherits directly from Control and relies on themes/generic.xaml for lookless templating**
- [ ] **B) CustomControls cannot be styled with ControlTemplates**
- [ ] **C) UserControls cannot have event handlers**
- [ ] **D) There is no difference; they are synonymous**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
UserControls are composed of existing controls with an associated XAML/code-behind file. CustomControls are lookless controls that inherit from Control and provide default styling via Themes/Generic.xaml.

</details>

---

### Question 126

Which property on a Style allows it to inherit property setters from an existing style?  

- [ ] **A) Inherits**
- [x] **B) BasedOn**
- [ ] **C) Extends**
- [ ] **D) ParentStyle**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'BasedOn' attribute allows a Style to inherit setters and behaviors from a base style: <Style TargetType="Button" BasedOn="{StaticResource BaseButtonStyle}">.

</details>

---

### Question 127

What is a Property Trigger in a WPF Style?  

- [ ] **A) A trigger that executes SQL queries upon mouse clicks**
- [x] **B) A rule that applies changes to property values when a specified property condition is met (e.g., IsMouseOver is True)**
- [ ] **C) An event that raises an exception when a property is null**
- [ ] **D) A hardware interrupt mechanism**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A Trigger monitors a dependency property (e.g., IsMouseOver == true) and applies setters while that condition is active, reverting to original values when the condition ceases.

</details>

---

### Question 128

Where should application-wide resources be defined so they are accessible to all windows and pages?  

- [ ] **A) MainWindow.xaml Resources**
- [x] **B) App.xaml Application.Resources**
- [ ] **C) AssemblyInfo.cs**
- [ ] **D) Program.cs**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Resources placed in App.xaml under <Application.Resources> are global across the entire WPF application.

</details>

---

### Question 129

What WPF element is used to present content inside a ControlTemplate where child elements of a ContentControl should appear?  

- [x] **A) ContentPresenter**
- [ ] **B) ItemsPresenter**
- [ ] **C) Viewport3D**
- [ ] **D) DataPresenter**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In a ControlTemplate for a ContentControl (such as a Button), the ContentPresenter acts as the placeholder indicating where the control's Content should be inserted and rendered.

</details>

---

### Question 130

What is a ResourceDictionary in WPF?  

- [ ] **A) A lookup table of SQL connection strings**
- [x] **B) A repository for WPF resources (such as brushes, styles, and templates) that can be merged across files**
- [ ] **C) A dictionary mapping exception codes to error strings**
- [ ] **D) An assembly cache**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A ResourceDictionary holds key-value pairs of WPF resources. It can be organized into standalone XAML files and merged into application resources using MergedDictionaries.

</details>

---

### Question 131

What is an Attached Property in XAML (e.g. Grid.Row="1")?  

- [x] **A) A property defined by a parent layout element that can be attached to child elements to control how they are laid out**
- [ ] **B) A property that attaches to an external database**
- [ ] **C) A property bound to a file attachment**
- [ ] **D) A property generated dynamically by reflection**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Attached properties allow child elements to declare values for properties defined by an ancestor control (such as Grid.Row, Grid.Column, or DockPanel.Dock).

</details>

---

### Question 132

What is the Visual State Manager (VSM) in WPF/XAML?  

- [x] **A) A framework that manages transitions between visual states (like Normal, MouseOver, Pressed, Disabled) on controls**
- [ ] **B) A GPU driver optimizer**
- [ ] **C) A window state manager for minimizing/maximizing**
- [ ] **D) A source control integration tool**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
VisualStateManager enables control template authors to define states (e.g., CommonStates: Normal, MouseOver, Pressed) and smooth transition animations between states.

</details>

---

### Question 133

Where should the default style and control template for a CustomControl be placed by convention?  

- [x] **A) Themes/Generic.xaml**
- [ ] **B) App.xaml**
- [ ] **C) MainWindow.xaml**
- [ ] **D) Assets/Styles.xaml**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
WPF looks for custom control templates in the assembly's 'Themes/Generic.xaml' resource dictionary, which enables lookless templating and OS theme integration.

</details>

---

### Question 134

What class in WPF coordinates timeline animations across multiple UI element properties?  

- [x] **A) Storyboard**
- [ ] **B) AnimationQueue**
- [ ] **C) TimelineManager**
- [ ] **D) KeyframeTrack**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A Storyboard is a container timeline that orchestrates animations (such as DoubleAnimation, ColorAnimation) and applies them to specific targets and properties.

</details>

---

### Question 135

What happens if a WPF Style specifies a TargetType without an explicit x:Key attribute?  

- [x] **A) It becomes an implicit style applied automatically to all controls of that TargetType within its scope**
- [ ] **B) A XAML parsing error occurs requiring an x:Key**
- [ ] **C) The style is ignored**
- [ ] **D) It only applies to the root Window**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A Style with a TargetType and no x:Key implicitly uses the TargetType as its key, automatically styling every matching control within that resource scope.

</details>

---


## Module 10: Performance & Responsiveness

### Question 136

What keyword pair in C# allows writing asynchronous code that looks and behaves like synchronous code without blocking the calling thread?  

- [ ] **A) defer / resume**
- [x] **B) async / await**
- [ ] **C) thread / wait**
- [ ] **D) fork / join**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'async' and 'await' keywords enable asynchronous programming by having the compiler transform the method into a state machine that yields execution while waiting for tasks to complete.

</details>

---

### Question 137

What return type should be used for an async method that does not return any value, except in event handlers?  

- [ ] **A) void**
- [x] **B) Task**
- [ ] **C) Task<void>**
- [ ] **D) Thread**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Async methods should return 'Task' (or 'Task<T>' if returning a value). 'async void' should only be used for top-level event handlers because exceptions in async void methods cannot be caught by callers.

</details>

---

### Question 138

How do you queue a CPU-bound operation to run on a background thread pool thread?  

- [x] **A) Task.Run(() => DoWork());**
- [ ] **B) Thread.Sleep(100);**
- [ ] **C) Task.WaitAll();**
- [ ] **D) GC.Collect();**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Task.Run queues the specified action to execute on the CLR ThreadPool and returns a Task representing that operation.

</details>

---

### Question 139

What mechanism is used in .NET for cooperatively canceling running asynchronous operations and tasks?  

- [ ] **A) Thread.Abort()**
- [x] **B) CancellationToken and CancellationTokenSource**
- [ ] **C) Process.Kill()**
- [ ] **D) Task.Kill()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Cancellation in .NET is cooperative, driven by CancellationTokenSource (which signals cancellation) and CancellationToken (which tasks inspect via token.ThrowIfCancellationRequested()).

</details>

---

### Question 140

What does PLINQ (Parallel LINQ) do when you call .AsParallel() on an IEnumerable?  

- [ ] **A) Converts the data into a binary stream**
- [x] **B) Partitions the data source and executes the query concurrently across multiple processor cores**
- [ ] **C) Makes the collection immutable**
- [ ] **D) Uploads the query to a remote SQL server**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
.AsParallel() binds the query to the PLINQ engine, which partitions the input sequence and processes chunks in parallel across multiple worker threads to maximize CPU utilization.

</details>

---

### Question 141

What does the 'lock' statement in C# accomplish?  

- [ ] **A) Locks a file on disk against write access**
- [x] **B) Obtains a mutual-exclusion lock on a reference object (using Monitor.Enter/Exit) to prevent multiple threads from executing a critical section simultaneously**
- [ ] **C) Encrypts an object in memory**
- [ ] **D) Freezes memory to prevent garbage collection**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'lock' statement obtains an exclusive monitor lock on a given reference object for the duration of the code block, ensuring thread-safe access to shared mutable resources.

</details>

---

### Question 142

What happens if a background thread attempts to directly modify a WPF UI control (like a TextBox.Text)?  

- [ ] **A) The UI updates smoothly without issues**
- [x] **B) An InvalidOperationException is thrown stating that the calling thread cannot access the object because a different thread owns it**
- [ ] **C) The operating system reboots**
- [ ] **D) The control becomes read-only**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
WPF controls have thread affinity and can only be accessed by the thread that created them (the UI thread). Accessing them from another thread throws an InvalidOperationException unless dispatched via Dispatcher.

</details>

---

### Question 143

How can a background worker thread safely update a WPF UI control?  

- [x] **A) Use Dispatcher.Invoke() or Dispatcher.BeginInvoke()**
- [ ] **B) Call Thread.Yield()**
- [ ] **C) Use GC.KeepAlive()**
- [ ] **D) Wrap the assignment in a lock statement**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The Dispatcher associated with the UI thread provides Invoke() (synchronous) and BeginInvoke() (asynchronous) to execute delegates safely on the UI thread.

</details>

---

### Question 144

What class in System.Threading.Tasks is used to run iterations of a loop in parallel?  

- [x] **A) Parallel.For and Parallel.ForEach**
- [ ] **B) ThreadLoop.Run**
- [ ] **C) TaskIterator.Execute**
- [ ] **D) AsyncLoop.Start**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Parallel.For and Parallel.ForEach in System.Threading.Tasks execute loop iterations concurrently using threads from the thread pool.

</details>

---

### Question 145

What is a 'deadlock' in concurrent programming?  

- [ ] **A) When a thread completes its execution successfully**
- [x] **B) A situation where two or more threads are permanently blocked, each waiting for a lock held by the other**
- [ ] **C) When memory leaks cause an application crash**
- [ ] **D) An unhandled NullReferenceException**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A deadlock occurs when two or more threads cannot proceed because each is waiting for the other to release a lock or resource, causing an indefinite freeze.

</details>

---

### Question 146

Why should library developers use '.ConfigureAwait(false)' when awaiting asynchronous calls?  

- [x] **A) It prevents capturing the original SynchronizationContext, avoiding deadlocks when consumer applications synchronously block on async code**
- [ ] **B) It runs the code on the GPU**
- [ ] **C) It disables exception handling**
- [ ] **D) It speeds up internet download speeds**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ConfigureAwait(false) tells the awaiter that the continuation does not need to resume on the original SynchronizationContext (like the UI thread), eliminating deadlocks when callers use .Result or .Wait().

</details>

---

### Question 147

Which class in System.Threading provides lock-free atomic operations like Increment, Decrement, and Exchange on shared variables?  

- [x] **A) Interlocked**
- [ ] **B) Monitor**
- [ ] **C) Mutex**
- [ ] **D) Semaphore**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.Threading.Interlocked provides atomic operations (such as Interlocked.Increment, CompareExchange) executed directly in hardware without thread-locking overhead.

</details>

---

### Question 148

What is the primary difference between Task.WhenAll and Task.WhenAny?  

- [x] **A) WhenAll completes when all supplied tasks complete; WhenAny completes as soon as the first task among them completes**
- [ ] **B) WhenAll is synchronous; WhenAny is asynchronous**
- [ ] **C) WhenAny cancels remaining tasks automatically**
- [ ] **D) WhenAll can only take two tasks**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Task.WhenAll returns a Task that completes only after every task in the collection finishes. Task.WhenAny returns a Task that completes as soon as any single task finishes.

</details>

---

### Question 149

Which synchronization primitive in .NET asynchronously limits the number of threads that can access a resource concurrently?  

- [x] **A) SemaphoreSlim (via WaitAsync)**
- [ ] **B) lock statement**
- [ ] **C) Mutex**
- [ ] **D) Monitor**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SemaphoreSlim is a lightweight throttling construct that supports async-friendly awaiting via 'await semaphore.WaitAsync()', unlike Monitor or lock which block threads.

</details>

---

### Question 150

What is the benefit of returning ValueTask<T> instead of Task<T> in high-throughput asynchronous methods that often complete synchronously?  

- [x] **A) ValueTask<T> is a struct and avoids heap allocation when the operation completes synchronously (e.g. from cache)**
- [ ] **B) ValueTask<T> automatically runs on multiple CPU cores**
- [ ] **C) ValueTask<T> never throws exceptions**
- [ ] **D) ValueTask<T> can only be used with integers**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ValueTask<T> is a value type (struct). If an asynchronous method completes synchronously (e.g. reading from an internal buffer), it avoids allocating a Task object on the heap.

</details>

---


## Module 11: Integrating with Unmanaged Code

### Question 151

What is the role of the 'dynamic' keyword introduced in C# 4.0?  

- [ ] **A) It allows compile-time type verification**
- [x] **B) It bypasses compile-time type checking; operations on dynamic objects are resolved at runtime via the Dynamic Language Runtime (DLR)**
- [ ] **C) It converts value types to pointers**
- [ ] **D) It dynamically allocates memory on the stack**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'dynamic' keyword bypasses compile-time type checking. Member lookups, invocations, and operations are dispatched at runtime by the DLR (Dynamic Language Runtime).

</details>

---

### Question 152

What class in System.Dynamic allows you to dynamically add and remove properties at runtime?  

- [x] **A) ExpandoObject**
- [ ] **B) DynamicObject**
- [ ] **C) FlexibleType**
- [ ] **D) RuntimeClass**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ExpandoObject represents an object whose members can be dynamically added, updated, and removed at runtime, behaving like a dynamic dictionary.

</details>

---

### Question 153

What attribute is used in Platform Invoke (P/Invoke) to call functions exported by unmanaged native DLLs (e.g. Win32 APIs)?  

- [ ] **A) [NativeImport]**
- [x] **B) [DllImport]**
- [ ] **C) [COMImport]**
- [ ] **D) [UnmanagedFunction]**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
System.Runtime.InteropServices.DllImportAttribute is applied to extern static methods to call unmanaged functions exported from native dynamic link libraries (like user32.dll, kernel32.dll).

</details>

---

### Question 154

What wrapper does .NET create to allow managed code to interact with an unmanaged COM component?  

- [ ] **A) COM Callable Wrapper (CCW)**
- [x] **B) Runtime Callable Wrapper (RCW)**
- [ ] **C) Unmanaged Proxy Bridge (UPB)**
- [ ] **D) Native Stub Adapter (NSA)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The CLR creates a Runtime Callable Wrapper (RCW) to proxy calls from managed .NET code to unmanaged COM components, managing reference counting and marshaling.

</details>

---

### Question 155

What interface must a class implement to participate in the standard .NET dispose pattern for releasing unmanaged resources?  

- [ ] **A) IClosable**
- [x] **B) IDisposable**
- [ ] **C) IFinalizable**
- [ ] **D) ICleanable**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
IDisposable requires implementing a single method: 'void Dispose()', which allows deterministic cleanup of unmanaged resources such as handles, sockets, and memory pointers.

</details>

---

### Question 156

What method should be called inside a Dispose() method to inform the Garbage Collector that it does not need to call the object's finalizer?  

- [ ] **A) GC.Collect()**
- [x] **B) GC.SuppressFinalize(this)**
- [ ] **C) GC.WaitForPendingFinalizers()**
- [ ] **D) GC.ReRegisterForFinalize(this)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
GC.SuppressFinalize(this) removes the object from the CLR finalization queue, saving the performance overhead of running the finalizer during garbage collection.

</details>

---

### Question 157

How many generations does the .NET garbage collector manage for the ephemeral managed heap?  

- [ ] **A) 2 (Gen 0, Gen 1)**
- [x] **B) 3 (Gen 0, Gen 1, Gen 2)**
- [ ] **C) 4 (Gen 0, Gen 1, Gen 2, Gen 3)**
- [ ] **D) 5**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The CLR GC divides the managed heap into three generations: Generation 0 (short-lived newly allocated objects), Generation 1 (buffer generation between short-lived and long-lived), and Generation 2 (long-lived objects and LOH).

</details>

---

### Question 158

What syntax is used to define a finalizer (destructor) in C#?  

- [ ] **A) finalize() { }**
- [x] **B) ~ClassName() { }**
- [ ] **C) dispose(bool finalizing) { }**
- [ ] **D) destroy ClassName() { }**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In C#, a finalizer is declared using the tilde symbol followed by the class name: ~ClassName() { }. The compiler translates this into an override of Object.Finalize().

</details>

---

### Question 159

What is marshaling in .NET interop?  

- [x] **A) The process of converting data types between managed and unmanaged representations during cross-boundary calls**
- [ ] **B) Organizing classes into alphabetical order**
- [ ] **C) Converting IL into native machine instructions**
- [ ] **D) Verifying digital signatures**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Marshaling is the process by which the CLR's interop marshaler converts types between managed code representations (e.g. C# string) and native unmanaged formats (e.g. LPWSTR, char*).

</details>

---

### Question 160

What happens when you force a garbage collection using GC.Collect() in production applications without a specific requirement?  

- [ ] **A) It permanently prevents all memory leaks**
- [x] **B) It degrades application performance by suspending active threads and disrupting GC self-tuning heuristics**
- [ ] **C) It frees unmanaged memory buffers automatically**
- [ ] **D) It increases CPU cache efficiency**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Calling GC.Collect() disrupts the GC's self-tuning algorithms, promotes ephemeral objects into older generations prematurely, and pauses threads, hurting overall throughput.

</details>

---

### Question 161

Which class in Microsoft.Win32.SafeHandles is recommended for encapsulating unmanaged operating system handles safely against handle leaks?  

- [x] **A) SafeHandle**
- [ ] **B) IntPtr**
- [ ] **C) NativeHandle**
- [ ] **D) HandleRef**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SafeHandle wraps operating system resource handles (like file handles or window handles), guaranteeing reliable cleanup during garbage collection and preventing recycling attacks.

</details>

---

### Question 162

What keyword in unsafe C# blocks prevents the Garbage Collector from relocating a managed object in memory while an unmanaged pointer references it?  

- [x] **A) fixed**
- [ ] **B) pin**
- [ ] **C) lock**
- [ ] **D) hold**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'fixed' statement pins a movable managed object in memory, fixing its memory address so that pointers can safely reference it without the GC relocating it during compaction.

</details>

---

### Question 163

Which calling convention is the standard default for Windows Win32 API functions in P/Invoke?  

- [x] **A) CallingConvention.StdCall**
- [ ] **B) CallingConvention.Cdecl**
- [ ] **C) CallingConvention.FastCall**
- [ ] **D) CallingConvention.ThisCall**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CallingConvention.StdCall is the standard calling convention for Win32 API calls, where the callee cleans up the stack.

</details>

---

### Question 164

What method in System.GC returns the approximate number of bytes of memory currently allocated in the managed heap?  

- [x] **A) GC.GetTotalMemory(forceFullCollection)**
- [ ] **B) GC.GetAllocatedBytes()**
- [ ] **C) GC.MemoryUsage()**
- [ ] **D) GC.QueryHeapSize()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
GC.GetTotalMemory(bool forceFullCollection) retrieves the estimated number of bytes currently allocated in the managed memory heap.

</details>

---

### Question 165

What interface allows custom dynamic types to participate in the Dynamic Language Runtime (DLR) binding mechanism?  

- [x] **A) IDynamicMetaObjectProvider**
- [ ] **B) IDynamicObject**
- [ ] **C) IDlrBinder**
- [ ] **D) IRuntimeTypeProvider**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Types implementing IDynamicMetaObjectProvider (like DynamicObject and ExpandoObject) can customize their dynamic behavior by returning a DynamicMetaObject that controls operations at runtime.

</details>

---


## Module 12: Reusable Types & Assemblies

### Question 166

What is Reflection in .NET?  

- [ ] **A) Reversing the bits of a byte array**
- [x] **B) The ability to inspect assemblies, modules, types, and metadata at runtime, and dynamically invoke methods or create instances**
- [ ] **C) Automatic UI mirror imaging for right-to-left languages**
- [ ] **D) Backing up database transaction logs**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Reflection (System.Reflection) provides programmatic access to metadata, enabling runtime type discovery, dynamic object instantiation, and member invocation.

</details>

---

### Question 167

How do you obtain a Type object for a known class 'Person' at compile time versus for an instance 'p' at runtime?  

- [x] **A) typeof(Person) and p.GetType()**
- [ ] **B) Person.Type and p.Type**
- [ ] **C) Type.For(Person) and p.TypeOf()**
- [ ] **D) Reflect(Person) and Reflect(p)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'typeof(Person)' is evaluated at compile time on a known type name. 'p.GetType()' is an instance method inherited from System.Object evaluated at runtime.

</details>

---

### Question 168

Which class in System.Reflection is used to dynamically create an instance of a type at runtime?  

- [ ] **A) DynamicFactory**
- [x] **B) Activator.CreateInstance()**
- [ ] **C) InstanceCreator**
- [ ] **D) TypeBuilder**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
System.Activator.CreateInstance() dynamically creates an instance of a specified Type, invoking the appropriate constructor with matching arguments.

</details>

---

### Question 169

What base class must all custom attributes inherit from in C#?  

- [x] **A) System.Attribute**
- [ ] **B) System.Metadata**
- [ ] **C) System.Annotation**
- [ ] **D) System.Decorator**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
All custom attributes in .NET must directly or indirectly derive from System.Attribute. By convention, their class names end with the 'Attribute' suffix.

</details>

---

### Question 170

What attribute is applied to a custom attribute class to define where it can be used (e.g. classes, methods, properties)?  

- [ ] **A) [TargetElements]**
- [x] **B) [AttributeUsage]**
- [ ] **C) [ApplyTo]**
- [ ] **D) [MetaDataScope]**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
[AttributeUsage] specifies the program elements (via AttributeTargets flags enum) on which the attribute is valid, as well as whether multiple instances or inheritance are permitted.

</details>

---

### Question 171

What format does a .NET assembly version number adhere to?  

- [x] **A) Major.Minor.Build.Revision**
- [ ] **B) Year.Month.Day.Patch**
- [ ] **C) Release.Candidate.Beta.Alpha**
- [ ] **D) Generation.Epoch.Iteration.Tag**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
.NET assembly versions are 4-part numbers defined as: MajorVersion.MinorVersion.BuildNumber.RevisionNumber (e.g., 2.0.483.1).

</details>

---

### Question 172

What constitutes a 'Strong-Named' assembly in .NET?  

- [ ] **A) An assembly compiled with 64-bit optimizations**
- [x] **B) An assembly signed with a cryptographic key pair, consisting of its simple text name, version number, culture, and a public key token**
- [ ] **C) An assembly that is password-protected on disk**
- [ ] **D) An assembly stored in the Windows System32 directory**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A strong name consists of the assembly's identity—its simple text name, version number, and culture information—strengthened by a public key and a digital signature generated using a private key.

</details>

---

### Question 173

What tool is used from the Visual Studio Developer Command Prompt to generate key pairs for strong-naming assemblies?  

- [x] **A) sn.exe**
- [ ] **B) sign.exe**
- [ ] **C) gacutil.exe**
- [ ] **D) ildasm.exe**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The Strong Name tool (sn.exe) is used to create cryptographic key pairs (e.g., 'sn.exe -k keypair.snk') and manage signatures for strong-named assemblies.

</details>

---

### Question 174

What is the Global Assembly Cache (GAC)?  

- [x] **A) A central machine-wide cache where strong-named assemblies are registered to be shared by multiple applications**
- [ ] **B) A browser cache for web pages**
- [ ] **C) The L2 cache of the central processor**
- [ ] **D) A cloud storage bucket in Azure**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The Global Assembly Cache (GAC) is a machine-wide CLI code cache where designated strong-named assemblies are installed so they can be shared among multiple applications.

</details>

---

### Question 175

Which method on a Type object retrieves custom attributes applied to that type?  

- [x] **A) type.GetCustomAttributes()**
- [ ] **B) type.FetchAnnotations()**
- [ ] **C) type.ReadDecorators()**
- [ ] **D) type.InspectAttributes()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Type.GetCustomAttributes() (or Attribute.GetCustomAttributes()) queries and instantiates custom attributes applied to an assembly, type, or member.

</details>

---

### Question 176

Which method of System.Reflection.Assembly returns the assembly that contains the code currently executing?  

- [x] **A) Assembly.GetExecutingAssembly()**
- [ ] **B) Assembly.GetCallingAssembly()**
- [ ] **C) Assembly.GetEntryAssembly()**
- [ ] **D) Assembly.LoadCurrent()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Assembly.GetExecutingAssembly() returns the Assembly object representing the assembly that contains the currently executing method.

</details>

---

### Question 177

Which BindingFlags combination is required to reflectively discover private instance members of a class?  

- [x] **A) BindingFlags.NonPublic | BindingFlags.Instance**
- [ ] **B) BindingFlags.Public | BindingFlags.Static**
- [ ] **C) BindingFlags.PrivateOnly**
- [ ] **D) BindingFlags.All**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
To retrieve private instance fields or methods using reflection, you must specify both BindingFlags.NonPublic and BindingFlags.Instance.

</details>

---

### Question 178

What attribute allows internal types and members of an assembly to be visible and accessible to another designated assembly (such as a unit test project)?  

- [x] **A) [InternalsVisibleTo("TestProject")]**
- [ ] **B) [ExposeInternals("TestProject")]**
- [ ] **C) [AllowAssembly("TestProject")]**
- [ ] **D) [PublicTo("TestProject")]**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.Runtime.CompilerServices.InternalsVisibleToAttribute grants a specified friend assembly access to internal types that are otherwise invisible outside the assembly.

</details>

---

### Question 179

What is 'Delay Signing' of a .NET assembly?  

- [x] **A) Reserving space in the PE header for the digital signature and embedding the public key at build time, while postponing private key signing until release**
- [ ] **B) Signing an assembly after it has been deployed to client machines**
- [ ] **C) Signing an assembly with an expired certificate**
- [ ] **D) Encrypting an assembly with a timer**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Delay signing embeds the public key and reserves signature space during everyday development, allowing developers to build and test without exposing the company's secure private key.

</details>

---

### Question 180

What is the difference between AssemblyVersion and AssemblyFileVersion?  

- [x] **A) AssemblyVersion is used by the CLR for assembly binding, strong naming, and compatibility; AssemblyFileVersion is informational for the Windows OS file explorer**
- [ ] **B) AssemblyVersion changes daily; AssemblyFileVersion never changes**
- [ ] **C) AssemblyFileVersion is used by the CLR loader**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
AssemblyVersion is embedded in the assembly identity and checked by the CLR loader during type resolution. AssemblyFileVersion is purely metadata displayed in Windows file properties.

</details>

---


## Module 13: Encrypting and Decrypting Data

### Question 181

What is the key characteristic of symmetric encryption?  

- [ ] **A) It uses two different keys: a public key to encrypt and a private key to decrypt**
- [x] **B) It uses the same shared secret key for both encryption and decryption**
- [ ] **C) It cannot be decrypted once encrypted**
- [ ] **D) It only works on ASCII text**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Symmetric encryption algorithms (such as AES and DES) use the exact same secret key for both encrypting plaintext and decrypting ciphertext.

</details>

---

### Question 182

Which symmetric encryption algorithm is the modern industry standard recommended in .NET?  

- [ ] **A) DES**
- [ ] **B) RC2**
- [x] **C) AES (Advanced Encryption Standard)**
- [ ] **D) TripleDES**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
AES (Advanced Encryption Standard), represented in .NET by Aes or AesManaged, is the worldwide cryptographic standard offering strong security with key sizes up to 256 bits.

</details>

---

### Question 183

What is the purpose of an Initialization Vector (IV) in symmetric block cipher encryption?  

- [x] **A) To ensure that identical plaintext blocks do not produce identical ciphertext blocks when encrypted with the same key**
- [ ] **B) To compress the plaintext before encryption**
- [ ] **C) To verify the digital signature**
- [ ] **D) To store the password in plaintext**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
An Initialization Vector (IV) provides entropy so that encrypting the same plaintext multiple times with the same key produces completely different ciphertext each time.

</details>

---

### Question 184

What is asymmetric (public-key) encryption?  

- [x] **A) An algorithm that uses one key for encryption and a different mathematically-related private key for decryption**
- [ ] **B) An algorithm that only encrypts every second byte**
- [ ] **C) An algorithm that does not use any keys**
- [ ] **D) An algorithm restricted to local network traffic**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Asymmetric encryption uses a key pair: the public key is shared freely to encrypt data or verify signatures, while the private key is kept secret to decrypt data or generate signatures.

</details>

---

### Question 185

Which class in System.Security.Cryptography is standard for implementing asymmetric encryption in .NET?  

- [ ] **A) AesManaged**
- [x] **B) RSACryptoServiceProvider**
- [ ] **C) SHA256Managed**
- [ ] **D) HMACSHA1**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
RSACryptoServiceProvider (or RSA) implements the RSA public-key cryptographic algorithm for asymmetric encryption and digital signatures.

</details>

---

### Question 186

What is a cryptographic hash function?  

- [ ] **A) A reversible function that compresses data into a smaller string**
- [x] **B) A one-way mathematical function that converts arbitrary data into a fixed-size digest, impossible to invert**
- [ ] **C) A symmetric key distribution scheme**
- [ ] **D) A mechanism to verify user UI clicks**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A cryptographic hash function (e.g. SHA-256) is a one-way deterministic algorithm that maps arbitrary data to a fixed-size byte array. It is computationally infeasible to reverse or find collisions.

</details>

---

### Question 187

Why should passwords never be hashed without a 'salt'?  

- [ ] **A) Salt speeds up hashing calculations**
- [x] **B) Salt prevents precomputed dictionary and rainbow table attacks by adding unique random data to each password prior to hashing**
- [ ] **C) Hashing fails without salt**
- [ ] **D) Salt encrypts the password symmetrically**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A cryptographic salt is unique random data appended to a password before hashing. It prevents attackers from using precomputed lookup tables (rainbow tables) to reverse common passwords.

</details>

---

### Question 188

Which stream class in System.Security.Cryptography links a data stream to cryptographic transformations?  

- [x] **A) CryptoStream**
- [ ] **B) SecureStream**
- [ ] **C) CipherStream**
- [ ] **D) HashStream**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CryptoStream defines a stream that links data streams to cryptographic transformations (encryptor or decryptor transforms created from ICryptoTransform).

</details>

---

### Question 189

What does a Digital Signature provide that simple hashing alone cannot provide?  

- [ ] **A) Faster data compression**
- [x] **B) Non-repudiation and sender authentication (proving who signed the message)**
- [ ] **C) Symmetric key exchange**
- [ ] **D) Automatic password recovery**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A digital signature hashes the data and encrypts the hash with the sender's private key. Anyone with the sender's public key can verify integrity AND confirm the sender's authenticity (non-repudiation).

</details>

---

### Question 190

Which class in .NET represents an X.509 public key certificate?  

- [x] **A) X509Certificate2**
- [ ] **B) DigitalCertToken**
- [ ] **C) PKICertificate**
- [ ] **D) SecureCertObject**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.Security.Cryptography.X509Certificates.X509Certificate2 represents an X.509 certificate in .NET, encapsulating the public key, issuer details, validity dates, and optionally private key.

</details>

---

### Question 191

Which class in System.Security.Cryptography is standard for deriving cryptographic keys and password hashes using the PBKDF2 algorithm?  

- [x] **A) Rfc2898DeriveBytes**
- [ ] **B) PasswordDeriveBytes**
- [ ] **C) KeyDerivationService**
- [ ] **D) ShaKeyGenerator**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Rfc2898DeriveBytes implements PBKDF2 (Password-Based Key Derivation Function 2), stretching passwords using HMAC-SHA-1/256 with repeated iterations and salt.

</details>

---

### Question 192

Why is Electronic Codebook (ECB) cipher mode considered insecure and strongly discouraged in symmetric encryption?  

- [x] **A) Identical plaintext blocks are encrypted into identical ciphertext blocks, preserving visual patterns in data**
- [ ] **B) It uses asymmetric keys**
- [ ] **C) It cannot encrypt more than 64 bytes**
- [ ] **D) It does not support AES**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ECB mode encrypts each block independently with the same key. Identical plaintext blocks produce identical ciphertext blocks, leaking structural patterns. Cipher Block Chaining (CBC) is preferred.

</details>

---

### Question 193

What does an HMAC (Hash-based Message Authentication Code) guarantee?  

- [x] **A) Both data integrity and authenticity using a shared secret key combined with a cryptographic hash function**
- [ ] **B) Reversible symmetric data encryption**
- [ ] **C) Automated SSL certificate renewal**
- [ ] **D) User identity anonymity**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
An HMAC (e.g. HMACSHA256) calculates a message digest using a secret key, verifying both that the data has not been altered (integrity) and was created by a party possessing the key (authenticity).

</details>

---

### Question 194

What padding mode is the standard default for symmetric block ciphers in .NET?  

- [x] **A) PaddingMode.PKCS7**
- [ ] **B) PaddingMode.Zeros**
- [ ] **C) PaddingMode.ANSIX923**
- [ ] **D) PaddingMode.None**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
PKCS7 is the standard default padding mode in .NET, padding incomplete data blocks with bytes whose value equals the number of padding bytes added.

</details>

---

### Question 195

What class in .NET builds and validates an X.509 certificate trust chain up to a trusted root Certificate Authority (CA)?  

- [x] **A) X509Chain**
- [ ] **B) CertificateValidator**
- [ ] **C) TrustStoreManager**
- [ ] **D) PKIChainBuilder**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
System.Security.Cryptography.X509Certificates.X509Chain builds a certificate chain from an end-entity certificate up to the root authority, checking revocation lists (CRL) and trust status.

</details>

---

