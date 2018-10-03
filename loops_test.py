#!/bin/python3
#file for testing loops algo
import sys


n = int(input().strip())

for i in range(1,11):
    result = n*i
    print(str(n)+" x "+str(i)+" = "+str(result))
