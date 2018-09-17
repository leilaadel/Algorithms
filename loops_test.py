#!/bin/python3

import sys


n = int(input().strip())

for i in range(1,11):
    result = n*i
    print(str(n)+" x "+str(i)+" = "+str(result))
