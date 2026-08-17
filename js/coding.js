document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       20 CODING QUESTIONS
    ========================================= */

    const questions = [

        {
            title: "Reverse a Number",
            difficulty: "Easy",
            description: "Write a program to reverse the digits of a given integer.",
            output: "Input: 12345\nOutput: 54321",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int reverse = 0;

        while(n != 0) {
            int digit = n % 10;
            reverse = reverse * 10 + digit;
            n /= 10;
        }

        System.out.println(reverse);
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n, reverse = 0;

    scanf("%d", &n);

    while(n != 0) {
        int digit = n % 10;
        reverse = reverse * 10 + digit;
        n /= 10;
    }

    printf("%d", reverse);

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int reverse = 0;

    while(n != 0) {
        int digit = n % 10;
        reverse = reverse * 10 + digit;
        n /= 10;
    }

    cout << reverse;

    return 0;
}`,

            python: `n = int(input())

reverse = 0

while n != 0:
    digit = n % 10
    reverse = reverse * 10 + digit
    n //= 10

print(reverse)`
        },


        {
            title: "Check Palindrome Number",
            difficulty: "Easy",
            description: "Check whether a given number reads the same from both directions.",
            output: "Input: 121\nOutput: Palindrome",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int original = n;
        int reverse = 0;

        while(n != 0) {
            reverse = reverse * 10 + n % 10;
            n /= 10;
        }

        if(original == reverse)
            System.out.println("Palindrome");
        else
            System.out.println("Not Palindrome");
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n, original, reverse = 0;

    scanf("%d", &n);

    original = n;

    while(n != 0) {
        reverse = reverse * 10 + n % 10;
        n /= 10;
    }

    if(original == reverse)
        printf("Palindrome");
    else
        printf("Not Palindrome");

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int original = n;
    int reverse = 0;

    while(n != 0) {
        reverse = reverse * 10 + n % 10;
        n /= 10;
    }

    if(original == reverse)
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}`,

            python: `n = int(input())

original = n
reverse = 0

while n != 0:
    reverse = reverse * 10 + n % 10
    n //= 10

if original == reverse:
    print("Palindrome")
else:
    print("Not Palindrome")`
        },


        {
            title: "Find Largest Element",
            difficulty: "Easy",
            description: "Find the largest element in an array of integers.",
            output: "Input: 10 25 7 40 15\nOutput: 40",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int max = Integer.MIN_VALUE;

        for(int i = 0; i < n; i++) {

            int x = sc.nextInt();

            if(x > max)
                max = x;
        }

        System.out.println(max);
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n, x;
    int max = -999999;

    scanf("%d", &n);

    for(int i = 0; i < n; i++) {

        scanf("%d", &x);

        if(x > max)
            max = x;
    }

    printf("%d", max);

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int max = -999999;

    for(int i = 0; i < n; i++) {

        int x;
        cin >> x;

        if(x > max)
            max = x;
    }

    cout << max;

    return 0;
}`,

            python: `n = int(input())

arr = list(map(int, input().split()))

print(max(arr))`
        },


        {
            title: "Count Vowels",
            difficulty: "Easy",
            description: "Count the number of vowels present in a given string.",
            output: "Input: programming\nOutput: 3",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        int count = 0;

        for(char ch : str.toLowerCase().toCharArray()) {

            if(ch == 'a' || ch == 'e' ||
               ch == 'i' || ch == 'o' ||
               ch == 'u') {

                count++;
            }
        }

        System.out.println(count);
    }
}`,

            c: `#include <stdio.h>

int main() {

    char str[100];
    int count = 0;

    fgets(str, sizeof(str), stdin);

    for(int i = 0; str[i] != '\\0'; i++) {

        char ch = str[i];

        if(ch=='a'||ch=='e'||ch=='i'||
           ch=='o'||ch=='u'||
           ch=='A'||ch=='E'||ch=='I'||
           ch=='O'||ch=='U') {

            count++;
        }
    }

    printf("%d", count);

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    string str;
    getline(cin, str);

    int count = 0;

    for(char ch : str) {

        ch = tolower(ch);

        if(ch=='a'||ch=='e'||ch=='i'||
           ch=='o'||ch=='u') {

            count++;
        }
    }

    cout << count;

    return 0;
}`,

            python: `text = input()

count = 0

for ch in text.lower():

    if ch in "aeiou":
        count += 1

print(count)`
        },


        {
            title: "Check Prime Number",
            difficulty: "Easy",
            description: "Determine whether a given number is prime.",
            output: "Input: 17\nOutput: Prime",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        boolean prime = n > 1;

        for(int i = 2; i * i <= n; i++) {

            if(n % i == 0) {
                prime = false;
                break;
            }
        }

        System.out.println(
            prime ? "Prime" : "Not Prime"
        );
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n;
    int prime = 1;

    scanf("%d", &n);

    if(n <= 1)
        prime = 0;

    for(int i = 2; i*i <= n; i++) {

        if(n % i == 0) {
            prime = 0;
            break;
        }
    }

    if(prime)
        printf("Prime");
    else
        printf("Not Prime");

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    bool prime = n > 1;

    for(int i = 2; i*i <= n; i++) {

        if(n % i == 0) {
            prime = false;
            break;
        }
    }

    cout << (prime ? "Prime" : "Not Prime");

    return 0;
}`,

            python: `n = int(input())

prime = n > 1

for i in range(2, int(n ** 0.5) + 1):

    if n % i == 0:
        prime = False
        break

print("Prime" if prime else "Not Prime")`
        },


        {
            title: "Factorial of a Number",
            difficulty: "Easy",
            description: "Calculate the factorial of a given non-negative integer.",
            output: "Input: 5\nOutput: 120",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        long fact = 1;

        for(int i = 1; i <= n; i++)
            fact *= i;

        System.out.println(fact);
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n;
    long long fact = 1;

    scanf("%d", &n);

    for(int i = 1; i <= n; i++)
        fact *= i;

    printf("%lld", fact);

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    long long fact = 1;

    for(int i = 1; i <= n; i++)
        fact *= i;

    cout << fact;

    return 0;
}`,

            python: `n = int(input())

fact = 1

for i in range(1, n + 1):
    fact *= i

print(fact)`
        },


        {
            title: "Fibonacci Series",
            difficulty: "Easy",
            description: "Print the first N terms of the Fibonacci sequence.",
            output: "Input: 6\nOutput: 0 1 1 2 3 5",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int a = 0, b = 1;

        for(int i = 0; i < n; i++) {

            System.out.print(a + " ");

            int c = a + b;
            a = b;
            b = c;
        }
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int a = 0, b = 1;

    for(int i = 0; i < n; i++) {

        printf("%d ", a);

        int c = a + b;
        a = b;
        b = c;
    }

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int a = 0, b = 1;

    for(int i = 0; i < n; i++) {

        cout << a << " ";

        int c = a + b;
        a = b;
        b = c;
    }

    return 0;
}`,

            python: `n = int(input())

a = 0
b = 1

for i in range(n):

    print(a, end=" ")

    a, b = b, a + b`
        },


        {
            title: "Sum of Array Elements",
            difficulty: "Easy",
            description: "Calculate the sum of all elements in an integer array.",
            output: "Input: 1 2 3 4 5\nOutput: 15",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int sum = 0;

        for(int i = 0; i < n; i++)
            sum += sc.nextInt();

        System.out.println(sum);
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n, x, sum = 0;

    scanf("%d", &n);

    for(int i = 0; i < n; i++) {

        scanf("%d", &x);
        sum += x;
    }

    printf("%d", sum);

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int sum = 0;

    for(int i = 0; i < n; i++) {

        int x;
        cin >> x;

        sum += x;
    }

    cout << sum;

    return 0;
}`,

            python: `n = int(input())

arr = list(map(int, input().split()))

print(sum(arr))`
        },


        {
            title: "Count Even and Odd",
            difficulty: "Easy",
            description: "Count how many even and odd numbers are present in an array.",
            output: "Input: 1 2 3 4 5\nOutput: Even = 2, Odd = 3",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int even = 0;
        int odd = 0;

        for(int i = 0; i < n; i++) {

            int x = sc.nextInt();

            if(x % 2 == 0)
                even++;
            else
                odd++;
        }

        System.out.println("Even = " + even);
        System.out.println("Odd = " + odd);
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n, x;
    int even = 0, odd = 0;

    scanf("%d", &n);

    for(int i = 0; i < n; i++) {

        scanf("%d", &x);

        if(x % 2 == 0)
            even++;
        else
            odd++;
    }

    printf("Even = %d\\n", even);
    printf("Odd = %d", odd);

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int even = 0, odd = 0;

    for(int i = 0; i < n; i++) {

        int x;
        cin >> x;

        if(x % 2 == 0)
            even++;
        else
            odd++;
    }

    cout << "Even = " << even << endl;
    cout << "Odd = " << odd;

    return 0;
}`,

            python: `n = int(input())

arr = list(map(int, input().split()))

even = 0
odd = 0

for x in arr:

    if x % 2 == 0:
        even += 1
    else:
        odd += 1

print("Even =", even)
print("Odd =", odd)`
        },


        {
            title: "Linear Search",
            difficulty: "Easy",
            description: "Search for an element in an array using linear search.",
            output: "Input: Array = 10 20 30, Key = 20\nOutput: Found",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] arr = new int[n];

        for(int i = 0; i < n; i++)
            arr[i] = sc.nextInt();

        int key = sc.nextInt();

        boolean found = false;

        for(int x : arr) {

            if(x == key) {
                found = true;
                break;
            }
        }

        System.out.println(
            found ? "Found" : "Not Found"
        );
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n, key;
    scanf("%d", &n);

    int arr[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    scanf("%d", &key);

    int found = 0;

    for(int i = 0; i < n; i++) {

        if(arr[i] == key) {
            found = 1;
            break;
        }
    }

    if(found)
        printf("Found");
    else
        printf("Not Found");

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int arr[n];

    for(int i = 0; i < n; i++)
        cin >> arr[i];

    int key;
    cin >> key;

    bool found = false;

    for(int i = 0; i < n; i++) {

        if(arr[i] == key) {
            found = true;
            break;
        }
    }

    cout << (found ? "Found" : "Not Found");

    return 0;
}`,

            python: `n = int(input())

arr = list(map(int, input().split()))

key = int(input())

if key in arr:
    print("Found")
else:
    print("Not Found")`
        },


        {
            title: "Second Largest Element",
            difficulty: "Medium",
            description: "Find the second largest distinct element in an array.",
            output: "Input: 10 20 30 40\nOutput: 30",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for(int i = 0; i < n; i++) {

            int x = sc.nextInt();

            if(x > largest) {
                second = largest;
                largest = x;
            }
            else if(x > second && x != largest) {
                second = x;
            }
        }

        System.out.println(second);
    }
}`,

            c: `#include <stdio.h>
#include <limits.h>

int main() {

    int n;
    scanf("%d", &n);

    int largest = INT_MIN;
    int second = INT_MIN;

    for(int i = 0; i < n; i++) {

        int x;
        scanf("%d", &x);

        if(x > largest) {
            second = largest;
            largest = x;
        }
        else if(x > second && x != largest) {
            second = x;
        }
    }

    printf("%d", second);

    return 0;
}`,

            cpp: `#include <iostream>
#include <climits>
using namespace std;

int main() {

    int n;
    cin >> n;

    int largest = INT_MIN;
    int second = INT_MIN;

    for(int i = 0; i < n; i++) {

        int x;
        cin >> x;

        if(x > largest) {
            second = largest;
            largest = x;
        }
        else if(x > second && x != largest) {
            second = x;
        }
    }

    cout << second;

    return 0;
}`,

            python: `n = int(input())

arr = list(map(int, input().split()))

unique = sorted(set(arr))

print(unique[-2])`
        },


        {
            title: "Remove Duplicates From Array",
            difficulty: "Medium",
            description: "Remove duplicate elements from an integer array.",
            output: "Input: 1 2 2 3 3 4\nOutput: 1 2 3 4",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        LinkedHashSet<Integer> set =
            new LinkedHashSet<>();

        for(int i = 0; i < n; i++)
            set.add(sc.nextInt());

        for(int x : set)
            System.out.print(x + " ");
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int arr[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for(int i = 0; i < n; i++) {

        int duplicate = 0;

        for(int j = 0; j < i; j++) {

            if(arr[i] == arr[j]) {
                duplicate = 1;
                break;
            }
        }

        if(!duplicate)
            printf("%d ", arr[i]);
    }

    return 0;
}`,

            cpp: `#include <iostream>
#include <set>
using namespace std;

int main() {

    int n;
    cin >> n;

    set<int> s;

    for(int i = 0; i < n; i++) {

        int x;
        cin >> x;

        s.insert(x);
    }

    for(int x : s)
        cout << x << " ";

    return 0;
}`,

            python: `arr = list(map(int, input().split()))

result = list(dict.fromkeys(arr))

print(*result)`
        },


        {
            title: "Reverse a String",
            difficulty: "Easy",
            description: "Reverse a given string without using a built-in reverse function.",
            output: "Input: hello\nOutput: olleh",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        for(int i = str.length() - 1; i >= 0; i--)
            System.out.print(str.charAt(i));
    }
}`,

            c: `#include <stdio.h>
#include <string.h>

int main() {

    char str[100];

    fgets(str, sizeof(str), stdin);

    int len = strlen(str);

    for(int i = len - 1; i >= 0; i--) {

        if(str[i] != '\\n')
            printf("%c", str[i]);
    }

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    string str;
    getline(cin, str);

    for(int i = str.length()-1; i >= 0; i--)
        cout << str[i];

    return 0;
}`,

            python: `text = input()

print(text[::-1])`
        },


        {
            title: "Armstrong Number",
            difficulty: "Medium",
            description: "Check whether a number is an Armstrong number.",
            output: "Input: 153\nOutput: Armstrong",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int original = n;
        int sum = 0;

        while(n != 0) {

            int digit = n % 10;

            sum += digit * digit * digit;

            n /= 10;
        }

        System.out.println(
            sum == original
            ? "Armstrong"
            : "Not Armstrong"
        );
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n, original, sum = 0;

    scanf("%d", &n);

    original = n;

    while(n != 0) {

        int digit = n % 10;

        sum += digit * digit * digit;

        n /= 10;
    }

    if(sum == original)
        printf("Armstrong");
    else
        printf("Not Armstrong");

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int original = n;
    int sum = 0;

    while(n != 0) {

        int digit = n % 10;

        sum += digit * digit * digit;

        n /= 10;
    }

    cout << (sum == original
        ? "Armstrong"
        : "Not Armstrong");

    return 0;
}`,

            python: `n = int(input())

original = n
total = 0

while n != 0:

    digit = n % 10
    total += digit ** 3
    n //= 10

if total == original:
    print("Armstrong")
else:
    print("Not Armstrong")`
        },


        {
            title: "Binary Search",
            difficulty: "Medium",
            description: "Implement binary search on a sorted array.",
            output: "Input: 10 20 30 40, Key = 30\nOutput: Found",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] arr = new int[n];

        for(int i = 0; i < n; i++)
            arr[i] = sc.nextInt();

        int key = sc.nextInt();

        int low = 0;
        int high = n - 1;

        boolean found = false;

        while(low <= high) {

            int mid = (low + high) / 2;

            if(arr[mid] == key) {
                found = true;
                break;
            }

            if(arr[mid] < key)
                low = mid + 1;
            else
                high = mid - 1;
        }

        System.out.println(
            found ? "Found" : "Not Found"
        );
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int arr[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int key;
    scanf("%d", &key);

    int low = 0;
    int high = n - 1;

    int found = 0;

    while(low <= high) {

        int mid = (low + high) / 2;

        if(arr[mid] == key) {
            found = 1;
            break;
        }

        if(arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }

    if(found)
        printf("Found");
    else
        printf("Not Found");

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int arr[n];

    for(int i = 0; i < n; i++)
        cin >> arr[i];

    int key;
    cin >> key;

    int low = 0;
    int high = n - 1;

    bool found = false;

    while(low <= high) {

        int mid = (low + high) / 2;

        if(arr[mid] == key) {
            found = true;
            break;
        }

        if(arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }

    cout << (found ? "Found" : "Not Found");

    return 0;
}`,

            python: `arr = list(map(int, input().split()))

key = int(input())

low = 0
high = len(arr) - 1

found = False

while low <= high:

    mid = (low + high) // 2

    if arr[mid] == key:
        found = True
        break

    if arr[mid] < key:
        low = mid + 1
    else:
        high = mid - 1

print("Found" if found else "Not Found")`
        },


        {
            title: "Sort an Array",
            difficulty: "Medium",
            description: "Sort an array of integers in ascending order.",
            output: "Input: 5 2 8 1 3\nOutput: 1 2 3 5 8",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] arr = new int[n];

        for(int i = 0; i < n; i++)
            arr[i] = sc.nextInt();

        Arrays.sort(arr);

        for(int x : arr)
            System.out.print(x + " ");
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int arr[n];

    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for(int i = 0; i < n; i++) {

        for(int j = i+1; j < n; j++) {

            if(arr[i] > arr[j]) {

                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`,

            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {

    int n;
    cin >> n;

    int arr[n];

    for(int i = 0; i < n; i++)
        cin >> arr[i];

    sort(arr, arr + n);

    for(int i = 0; i < n; i++)
        cout << arr[i] << " ";

    return 0;
}`,

            python: `arr = list(map(int, input().split()))

arr.sort()

print(*arr)`
        },


        {
            title: "Count Frequency of an Element",
            difficulty: "Medium",
            description: "Count how many times a given element occurs in an array.",
            output: "Input: 1 2 2 3 2, Key = 2\nOutput: 3",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] arr = new int[n];

        for(int i = 0; i < n; i++)
            arr[i] = sc.nextInt();

        int key = sc.nextInt();

        int count = 0;

        for(int x : arr) {

            if(x == key)
                count++;
        }

        System.out.println(count);
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n, key;
    scanf("%d", &n);

    int count = 0;

    for(int i = 0; i < n; i++) {

        int x;
        scanf("%d", &x);

        if(i == 0)
            ;
        
        // Count after reading key separately
    }

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int arr[n];

    for(int i = 0; i < n; i++)
        cin >> arr[i];

    int key;
    cin >> key;

    int count = 0;

    for(int x : arr) {

        if(x == key)
            count++;
    }

    cout << count;

    return 0;
}`,

            python: `arr = list(map(int, input().split()))

key = int(input())

print(arr.count(key))`
        },


        {
            title: "Matrix Addition",
            difficulty: "Medium",
            description: "Add two matrices of the same dimensions.",
            output: "Adds corresponding elements of both matrices.",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        int[][] a = {
            {1, 2},
            {3, 4}
        };

        int[][] b = {
            {5, 6},
            {7, 8}
        };

        for(int i = 0; i < 2; i++) {

            for(int j = 0; j < 2; j++) {

                System.out.print(
                    (a[i][j] + b[i][j]) + " "
                );
            }

            System.out.println();
        }
    }
}`,

            c: `#include <stdio.h>

int main() {

    int a[2][2] = {
        {1,2},
        {3,4}
    };

    int b[2][2] = {
        {5,6},
        {7,8}
    };

    for(int i=0;i<2;i++) {

        for(int j=0;j<2;j++)
            printf("%d ", a[i][j] + b[i][j]);

        printf("\\n");
    }

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int a[2][2] = {{1,2},{3,4}};
    int b[2][2] = {{5,6},{7,8}};

    for(int i=0;i<2;i++) {

        for(int j=0;j<2;j++)
            cout << a[i][j] + b[i][j] << " ";

        cout << endl;
    }

    return 0;
}`,

            python: `a = [
    [1, 2],
    [3, 4]
]

b = [
    [5, 6],
    [7, 8]
]

for i in range(2):

    for j in range(2):
        print(a[i][j] + b[i][j], end=" ")

    print()`
        },


        {
            title: "Find Missing Number",
            difficulty: "Medium",
            description: "An array contains numbers from 1 to N with one number missing. Find the missing number.",
            output: "Input: 1 2 4 5\nOutput: 3",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int sum = n * (n + 1) / 2;

        for(int i = 0; i < n - 1; i++)
            sum -= sc.nextInt();

        System.out.println(sum);
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int sum = n * (n + 1) / 2;

    for(int i = 0; i < n-1; i++) {

        int x;
        scanf("%d", &x);

        sum -= x;
    }

    printf("%d", sum);

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int n;
    cin >> n;

    int sum = n * (n + 1) / 2;

    for(int i = 0; i < n-1; i++) {

        int x;
        cin >> x;

        sum -= x;
    }

    cout << sum;

    return 0;
}`,

            python: `n = int(input())

arr = list(map(int, input().split()))

expected = n * (n + 1) // 2

print(expected - sum(arr))`
        },


        {
            title: "Maximum Subarray Sum",
            difficulty: "Hard",
            description: "Find the maximum possible sum of a contiguous subarray.",
            output: "Input: -2 1 -3 4 -1 2 1 -5 4\nOutput: 6",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int current = 0;
        int best = Integer.MIN_VALUE;

        for(int i = 0; i < n; i++) {

            int x = sc.nextInt();

            current = Math.max(x, current + x);

            best = Math.max(best, current);
        }

        System.out.println(best);
    }
}`,

            c: `#include <stdio.h>

int main() {

    int n;
    scanf("%d", &n);

    int current = 0;
    int best = -999999;

    for(int i = 0; i < n; i++) {

        int x;
        scanf("%d", &x);

        current = current + x;

        if(current < x)
            current = x;

        if(current > best)
            best = current;
    }

    printf("%d", best);

    return 0;
}`,

            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {

    int n;
    cin >> n;

    int current = 0;
    int best = -1000000000;

    for(int i = 0; i < n; i++) {

        int x;
        cin >> x;

        current = max(x, current + x);
        best = max(best, current);
    }

    cout << best;

    return 0;
}`,

            python: `arr = list(map(int, input().split()))

current = arr[0]
best = arr[0]

for x in arr[1:]:

    current = max(x, current + x)

    best = max(best, current)

print(best)`
        },


        {
            title: "Check Anagram",
            difficulty: "Medium",
            description: "Check whether two strings are anagrams of each other.",
            output: "Input: listen, silent\nOutput: Anagram",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String a = sc.nextLine();
        String b = sc.nextLine();

        char[] x = a.toCharArray();
        char[] y = b.toCharArray();

        Arrays.sort(x);
        Arrays.sort(y);

        System.out.println(
            Arrays.equals(x, y)
            ? "Anagram"
            : "Not Anagram"
        );
    }
}`,

            c: `#include <stdio.h>
#include <string.h>

int main() {

    char a[100], b[100];

    scanf("%s %s", a, b);

    int count[256] = {0};

    for(int i=0; a[i]; i++)
        count[(unsigned char)a[i]]++;

    for(int i=0; b[i]; i++)
        count[(unsigned char)b[i]]--;

    int anagram = 1;

    for(int i=0;i<256;i++) {

        if(count[i] != 0) {
            anagram = 0;
            break;
        }
    }

    printf(
        anagram ? "Anagram" : "Not Anagram"
    );

    return 0;
}`,

            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {

    string a, b;

    cin >> a >> b;

    sort(a.begin(), a.end());
    sort(b.begin(), b.end());

    cout << (a == b
        ? "Anagram"
        : "Not Anagram");

    return 0;
}`,

            python: `a = input()
b = input()

if sorted(a) == sorted(b):
    print("Anagram")
else:
    print("Not Anagram")`
        },


        {
            title: "Balanced Parentheses",
            difficulty: "Hard",
            description: "Check whether brackets in a string are properly balanced.",
            output: "Input: {[()]}\nOutput: Balanced",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        Stack<Character> stack = new Stack<>();

        boolean valid = true;

        for(char ch : str.toCharArray()) {

            if(ch == '(' || ch == '[' || ch == '{') {

                stack.push(ch);

            } else {

                if(stack.empty()) {
                    valid = false;
                    break;
                }

                char top = stack.pop();

                if((ch == ')' && top != '(') ||
                   (ch == ']' && top != '[') ||
                   (ch == '}' && top != '{')) {

                    valid = false;
                    break;
                }
            }
        }

        if(!stack.empty())
            valid = false;

        System.out.println(
            valid ? "Balanced" : "Not Balanced"
        );
    }
}`,

            c: `#include <stdio.h>

int main() {

    char str[100];
    char stack[100];

    int top = -1;
    int valid = 1;

    scanf("%s", str);

    for(int i=0; str[i]; i++) {

        char ch = str[i];

        if(ch=='(' || ch=='[' || ch=='{') {

            stack[++top] = ch;

        } else {

            if(top == -1) {
                valid = 0;
                break;
            }

            char t = stack[top--];

            if((ch==')' && t!='(') ||
               (ch==']' && t!='[') ||
               (ch=='}' && t!='{')) {

                valid = 0;
                break;
            }
        }
    }

    if(top != -1)
        valid = 0;

    printf(
        valid ? "Balanced" : "Not Balanced"
    );

    return 0;
}`,

            cpp: `#include <iostream>
#include <stack>
using namespace std;

int main() {

    string str;
    cin >> str;

    stack<char> st;

    bool valid = true;

    for(char ch : str) {

        if(ch=='(' || ch=='[' || ch=='{') {

            st.push(ch);

        } else {

            if(st.empty()) {
                valid = false;
                break;
            }

            char top = st.top();
            st.pop();

            if((ch==')' && top!='(') ||
               (ch==']' && top!='[') ||
               (ch=='}' && top!='{')) {

                valid = false;
                break;
            }
        }
    }

    if(!st.empty())
        valid = false;

    cout << (valid ? "Balanced" : "Not Balanced");

    return 0;
}`,

            python: `text = input()

stack = []

pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
}

valid = True

for ch in text:

    if ch in "([{":
        stack.append(ch)

    elif ch in ")]}":

        if not stack or stack.pop() != pairs[ch]:
            valid = False
            break

if stack:
    valid = False

print("Balanced" if valid else "Not Balanced")`
        },


        {
            title: "Merge Two Sorted Arrays",
            difficulty: "Hard",
            description: "Merge two sorted arrays into one sorted array.",
            output: "Input: 1 3 5 and 2 4 6\nOutput: 1 2 3 4 5 6",

            java: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        int[] a = {1,3,5};
        int[] b = {2,4,6};

        int i = 0, j = 0;

        while(i < a.length && j < b.length) {

            if(a[i] < b[j])
                System.out.print(a[i++] + " ");
            else
                System.out.print(b[j++] + " ");
        }

        while(i < a.length)
            System.out.print(a[i++] + " ");

        while(j < b.length)
            System.out.print(b[j++] + " ");
    }
}`,

            c: `#include <stdio.h>

int main() {

    int a[] = {1,3,5};
    int b[] = {2,4,6};

    int i=0, j=0;

    while(i<3 && j<3) {

        if(a[i] < b[j])
            printf("%d ", a[i++]);
        else
            printf("%d ", b[j++]);
    }

    while(i<3)
        printf("%d ", a[i++]);

    while(j<3)
        printf("%d ", b[j++]);

    return 0;
}`,

            cpp: `#include <iostream>
using namespace std;

int main() {

    int a[] = {1,3,5};
    int b[] = {2,4,6};

    int i=0, j=0;

    while(i<3 && j<3) {

        if(a[i] < b[j])
            cout << a[i++] << " ";
        else
            cout << b[j++] << " ";
    }

    while(i<3)
        cout << a[i++] << " ";

    while(j<3)
        cout << b[j++] << " ";

    return 0;
}`,

            python: `a = [1, 3, 5]
b = [2, 4, 6]

result = []
i = 0
j = 0

while i < len(a) and j < len(b):

    if a[i] < b[j]:
        result.append(a[i])
        i += 1
    else:
        result.append(b[j])
        j += 1

result += a[i:]
result += b[j:]

print(*result)`
        }
    ];


    /* =========================================
       DOM ELEMENTS
    ========================================= */

    const questionsGrid =
        document.getElementById("questionsGrid");

    const searchInput =
        document.getElementById("searchInput");

    const difficultyFilter =
        document.getElementById("difficultyFilter");

    const solverOverlay =
        document.getElementById("solverOverlay");

    const closeSolver =
        document.getElementById("closeSolver");

    const solverTitle =
        document.getElementById("solverTitle");

    const solverDescription =
        document.getElementById("solverDescription");

    const solverDifficulty =
        document.getElementById("solverDifficulty");

    const codeEditor =
        document.getElementById("codeEditor");

    const currentLanguage =
        document.getElementById("currentLanguage");

    const output =
        document.getElementById("output");

    const questionNumber =
        document.getElementById("questionNumber");


    let currentQuestion = 0;
    let currentLanguageValue = "java";


    /* =========================================
       DISPLAY QUESTIONS
    ========================================= */

    function displayQuestions() {

        const search =
            searchInput.value.toLowerCase();

        const difficulty =
            difficultyFilter.value;

        questionsGrid.innerHTML = "";

        questions.forEach((question, index) => {

            if(
                !question.title
                    .toLowerCase()
                    .includes(search)
            ) {
                return;
            }

            if(
                difficulty !== "all" &&
                question.difficulty !== difficulty
            ) {
                return;
            }


            const card =
                document.createElement("div");

            card.className = "question-card";


            card.innerHTML = `

                <div class="question-top">

                    <div class="question-number">
                        ${index + 1}
                    </div>

                    <span class="difficulty ${question.difficulty.toLowerCase()}">
                        ${question.difficulty}
                    </span>

                </div>

                <h3>
                    ${question.title}
                </h3>

                <p>
                    ${question.description}
                </p>

                <button
                    class="practice-btn"
                    data-index="${index}"
                >
                    <i class="fa-solid fa-code"></i>
                    Practice Problem
                </button>

            `;


            questionsGrid.appendChild(card);

        });


        document
            .querySelectorAll(".practice-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    function() {

                        openSolver(
                            Number(
                                this.dataset.index
                            )
                        );

                    }
                );

            });

    }


    /* =========================================
       OPEN SOLVER
    ========================================= */

    function openSolver(index) {

        currentQuestion = index;

        const question =
            questions[currentQuestion];

        solverTitle.textContent =
            question.title;

        solverDescription.textContent =
            question.description;

        solverDifficulty.textContent =
            question.difficulty;

        solverDifficulty.className =
            question.difficulty.toLowerCase();


        loadLanguageCode();


        output.textContent =
            "Run your code to see the output...";


        updateQuestionNumber();


        solverOverlay.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    /* =========================================
       LANGUAGE CODE
    ========================================= */

    function loadLanguageCode() {

        const question =
            questions[currentQuestion];

        codeEditor.value =
            question[currentLanguageValue];


        currentLanguage.textContent =
            getLanguageName(
                currentLanguageValue
            );

    }


    function getLanguageName(language) {

        const names = {

            java: "Java",

            c: "C",

            cpp: "C++",

            python: "Python"

        };

        return names[language];

    }


    /* =========================================
       LANGUAGE BUTTONS
    ========================================= */

    document
        .querySelectorAll(".language-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll(".language-btn")
                        .forEach(btn =>
                            btn.classList.remove("active")
                        );

                    this.classList.add("active");

                    currentLanguageValue =
                        this.dataset.language;

                    loadLanguageCode();

                }
            );

        });


    /* =========================================
       CLOSE SOLVER
    ========================================= */

    closeSolver.addEventListener(
        "click",
        closeSolverWindow
    );


    solverOverlay.addEventListener(
        "click",
        function(event) {

            if(event.target === solverOverlay)
                closeSolverWindow();

        }
    );


    function closeSolverWindow() {

        solverOverlay.classList.remove("show");

        document.body.style.overflow = "";

    }


    /* =========================================
       RUN CODE
    ========================================= */

    document
        .getElementById("runCode")
        .addEventListener(
            "click",
            function() {

                const question =
                    questions[currentQuestion];

                output.textContent =
`✓ Code submitted successfully!

Language: ${getLanguageName(currentLanguageValue)}

Expected Output:
${question.output}

Note:
This browser version displays the expected
output. For actual compiler execution, connect
the editor to a backend/compiler API.`;

            }
        );


    /* =========================================
       RESET CODE
    ========================================= */

    document
        .getElementById("resetCode")
        .addEventListener(
            "click",
            function() {

                loadLanguageCode();

                output.textContent =
                    "Code reset successfully.";

            }
        );


    /* =========================================
       CLEAR OUTPUT
    ========================================= */

    document
        .getElementById("clearOutput")
        .addEventListener(
            "click",
            function() {

                output.textContent = "";

            }
        );


    /* =========================================
       NEXT QUESTION
    ========================================= */

    document
        .getElementById("nextQuestion")
        .addEventListener(
            "click",
            function() {

                if(
                    currentQuestion <
                    questions.length - 1
                ) {

                    currentQuestion++;

                    updateSolver();

                }

            }
        );


    /* =========================================
       PREVIOUS QUESTION
    ========================================= */

    document
        .getElementById("previousQuestion")
        .addEventListener(
            "click",
            function() {

                if(currentQuestion > 0) {

                    currentQuestion--;

                    updateSolver();

                }

            }
        );


    function updateSolver() {

        const question =
            questions[currentQuestion];

        solverTitle.textContent =
            question.title;

        solverDescription.textContent =
            question.description;

        solverDifficulty.textContent =
            question.difficulty;

        loadLanguageCode();

        output.textContent =
            "Run your code to see the output...";

        updateQuestionNumber();

    }


    /* =========================================
       QUESTION NUMBER
    ========================================= */

    function updateQuestionNumber() {

        questionNumber.textContent =
            `Question ${currentQuestion + 1} / ${questions.length}`;

        document.getElementById(
            "previousQuestion"
        ).disabled =
            currentQuestion === 0;

        document.getElementById(
            "nextQuestion"
        ).disabled =
            currentQuestion === questions.length - 1;

    }


    /* =========================================
       SEARCH
    ========================================= */

    searchInput.addEventListener(
        "input",
        displayQuestions
    );


    difficultyFilter.addEventListener(
        "change",
        displayQuestions
    );


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn =
        document.getElementById("menuBtn");

    const nav =
        document.querySelector(".main-nav");

    if(menuBtn) {

        menuBtn.addEventListener(
            "click",
            function() {

                nav.classList.toggle("mobile-open");

            }
        );

    }


    /* =========================================
       INITIAL LOAD
    ========================================= */

    displayQuestions();

});