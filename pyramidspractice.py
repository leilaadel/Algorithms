def printing(M,N):
    print("0"*abs(M), end=" ")
    print("X"*abs(N), end=" ")
    print("0"*abs(M))

def pyramids(N):
    length = N
    L = -1
    M = 0
    while L < length :
        printing(M,N)
        N -= 2
        M = length - abs(N)
        L += 1
        if N == -1:
            continue
        '''if N <-1:

            N += 2
            M -= 1
        elif N == -1:
            N -= 2
        else:

            N -= 2
            M += 1
        L += 1'''

'''def pyramids(N):
    M = 0
    X = 0
    Y = 0
    for i in range(N):
        X = N - abs(M)
        Y = 0 + abs(M)
        M += 1
        printing(Y,X)'''

pyramids(7)
