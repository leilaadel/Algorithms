#!/bin/python3

import sys


n = int(input().strip())

def staircase(n):
    j = n-1
    i = 1
    while i <= n:
        print(j*" ", end='')
        print(i*"#")
        i+=1
        j-=1

staircase(n)
#test comment
