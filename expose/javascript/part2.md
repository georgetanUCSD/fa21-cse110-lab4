## Data Types ##
12. A. `student.name`  <br>B. `student["Grad year"]`<br>C. `student.greeting()`<br>D. `student["Favorite Teacher"]["name"]` <br>E. `student[courseLoad][0]`<br><br>
## Basic Operators & Type Conversion ##
13.  
     A. '3' + 2 = '32', integer `2` map to string `"2"`<br>
     B. '3' - 2 = 1, Numeric conversion happens in mathematical functions and expressions automatically.<br>
     C. 3 + null = 3. In numeric conversion, null will map to integer `0`<br>
     D. '3' + null = '3null'. In string concatenation, null map to string '"null"'.<br>
     E. true + 3 = 4, In numeric conversion, true map to integer `1`.<br>
     F. false + null, both `false` and `null` map to `0`.<br>
     G. '3' + undefined = 'undefined', string concatenation, `undefined` becomes string `"undefined"`.<br>
     H. '3' - undefined = NaN. Numeric conversion, string `"3"` maps to integer`3` , but `undefined` maps to `NaN`, so final result `NaN`.<br><br>
14.
     A. '2' > 1 --> true, `>` is a math function, so `"2"` maps to integer `2`, <br>
     B. '2' < '12' --> false, math function, `"2"` and `"12"` maps to integer `2` and integer `12`.<br>
     C. 2 == '2' --> true, math function, so `"2"` maps to integer `2`<br>
     D. 2 === '2' --> false, `===` strict equality operator checks equality without type conversion. <br>
     E. true == 2 --> false, math function, so `true` maps to integer `1`.<br>
     F. true === Boolean(2) --> true, `Boolean(2)` return boolan value `true`, which strictly equal to `true`.<br><br>

15. `==` is an normal math operation which allows type conversion, while `===` is so called "Strict equality", which compares two arguement without type conversion. 
16. function `modifyArray([1,2,3],addSomething)` will return array `[2,4,6]`. Function `modifyArray` will iterate the given list, and apply the callback function to each element in the given list. In the given example, `modifyArray` will iterate through`[1,2,3]` and apply `doSomething` to each element in the list.
17. `1,4,3,2`. 

    
