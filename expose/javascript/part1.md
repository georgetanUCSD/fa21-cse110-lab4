## Part 1. A Quick Introduction. ##
1. 20
2. 0
3. 10
4. return an error. Variable declared by 'let' is function-scoped, which means that result can only be accessed within the if statement.
5. return an error. const varible can not be modified after declaration.
6. return an error. Line 13 won't be excuted because the complier capture an error at line 7. Also, `result` is within `if` scope, and undefined in function `sumValues` scope.
## Part 2. A Little More of a Challenge. ##
1. console print out `3`. variable that are declared by `var` dont have block-scoped, which means that `i` is actually declared within function `discountPrices` scope and still accessable after the `for` loop.
2. console print out `150`. Again, discountedPrice is declared within within function `discountPrices` scope because of the `var` keyword. So it can store the value assigned by the last around of the `for` loop excution, which is 150.
3. console print out `150`. `finalPrice` is defined within function `discountPrices` scope, so it is accessable and  store the value assigned by the last around of the `for` loop excution, which is 150.
4. return list: `[50, 100, 150]`. function `discountPrices` will loop through the list `price` and calculate the discount Price and store them in list `discounted`.
5. return an error. `i` is defined within the `for` loop scope because of the `let` keyword, no longer accessable after the `for` loop excuted.
6. return an error. `discountedPrice` is defined within the `for` loop scope because of the `let` keyword, no longer accessable after the `for` loop excuted.
7. console print out `150`. `finalPrice` is defined within function `discountPrices` scope, so it is accessable and store the value assigned by the last around of the `for` loop excution, which is 150.
8. return list: `[50, 100, 150]`. function `discountPrices` will loop through the list `price` and calculate the discount Price and store them in list `discounted`.
9. return an error. line 11 wont be excuted because the `for` loop above try to reassgin value into `const discountedPrice`. Therefore, the complier will complain about that first before excute line 11. Besides, `i` is not defined in funtion `discountPrice` scope.
10. return `3`. `length` is only assigned once. So it wont cause any error.
11. return list: `[50, 100, 150]`. Because `let` keyword declares `discountedPrice` within the `for` loop, and will "refresh" within each around of looping excution. 