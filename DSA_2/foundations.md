## Time & Space Complexity
    - **Space Complexity:** Memory usage
    - **Time Complexity:** How the no. of operations grows wrt ip size (n)
        - O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)

## Recursion
    - fn calling itself inside until a `base condition`
        1. Base Case(stop)
        2. Work(logic)
        3. Recursive Call
    - execution(calls) -> top - down, output(returns) -> buttom - up
    - **Types:**
        1. Linear - one recursive call per fn - T-O(n), S-O(n)
        2. Tail - last operation is recursive call - no work after call
        3. Head - recursive call first then work - output comes during unwinding
        4. Tree - multiple recursive calls - dangerous because may cause repeated work -> exponential growth - O(2^n)
        5. Backtracking - Try -> Explore -> Undo - O(n!)
    - Complexity Analysis:
        