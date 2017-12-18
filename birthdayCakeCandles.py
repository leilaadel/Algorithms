#Code to calculate number of occurances of a max value

import sys

def birthdayCakeCandles(n, ar):
    max = 0
    sum = 0
    for i in range(len(ar)):
        if ar[i] > max:
            max = ar[i]
    for i in range(len(ar)):
        if ar[i] == max:
            sum += 1
    return sum


n = int(input().strip())
ar = list(map(int, input().strip().split(' ')))
result = birthdayCakeCandles(n, ar)
print(result)
