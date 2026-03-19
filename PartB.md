## Part B – Short Answer

**B1. Explain the difference between props and state in React. When would you use each?**  
- Props are data passed from parent to child components ,they are read-only (immutable), meaning a child component cannot modify the props it receives , Props help make components reusable.  Use props to Pass data from parent → child


- State is data managed within a component It is mutable, meaning it can change over time using functions like setState or useState .State is used to handle dynamic data and control what is rendered on the UI.   Use state to manage dynamic data such as user input or UI changes.

---

**B2. What is responsive web design? Name two CSS techniques used to achieve it**  
Responsive web design is an approach that ensures a website looks good on all devices (mobile, tablet, desktop).  
- Media queries (`@media`)  
- Flexbox or CSS Grid  

---

**B3. Describe the difference between a native mobile app and a cross-platform mobile app (e.g., React Native / Flutter). What are the trade-offs?**  
- Native apps are built specifically for one platform (iOS or Android) and offer better performance.  
- Cross-platform apps use a single codebase for multiple platforms, saving time and cost.  
- Trade-offs: Native has higher performance but more development effort, while cross-platform is faster to build but may have performance limitations.

---

**B4. What is the Virtual DOM in React and why is it beneficial?**  
The Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares changes, then updates only the necessary parts of the real DOM.  
- Improves performance  
- Reduces direct DOM manipulation  

---

**B5. Explain what Git version control is and name at least 3 common Git commands you use in daily development.**  
Git is a version control system used to track changes in code and collaborate with others.  
Common commands:  
- `git clone`  
- `git commit`  
- `git push`  
- `git pull`  
- `git branch`  