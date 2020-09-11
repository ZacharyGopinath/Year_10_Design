#This program checks whether an inputted number appears in the Fibonacci sequence (0,1,1,2,3,5,8,13,21,34,55,etc.)

import math

#User inputs their #
num = input("What # would you like to check: ")
#Converts # to an int
n = int(num)

#To find whether the # appears in the Fibonacci sequence, first find 
#If it is a perfect square using the isSquare function
def isSquare(n):
    sqr = math.sqrt(n)
    return sqr*sqr==n

#If the # is a perfect square, the program moves on and uses the isFib function to finally find whether
#The # appears in the sequence
def isFib(n):

    if isSquare((5*n*n) + 4) == True or isSquare((5*n*n) - 4) == True:
        print(num,"appears in the Fibonacci sequence!")
    else:
        print(num,"does not appear in the Fibonacci sequence!")
isFib(n)
isSquare(n)