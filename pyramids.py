def pyramids(N):
    length = N
    L = 0
    M = 0
    while L < length :
        print("0"*abs(M), end=" ")
        print("X"*abs(N), end=" ")
        print("0"*abs(M))
        N -= 2
        M = int((length - abs(N))/2)
        L += 1
        if N == 1:
            N -= 2
pyramids(5)
'''only works for odd numbers ask vishak if it has to work for even numbers too'''
