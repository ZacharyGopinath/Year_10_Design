#How to check if an inputted number is odd or even
#Eg when string 8 is inputted, "Your # is even!" is printed
isEven = False
def checkEven(a):
    if int(a)%2==0:
        isEven = True
        print(isEven)
        print("Your # is even!")
    else:
        print(isEven)
        print("Your # is odd!")
a = input("What # would you like to check: ")
checkEven(a)

#How to remove char in string at given index
#Eg if str = microsoft and n = 3, the string "micosoft" is returned (with char at [3] removed)
def missing_char(str, n):
  newString = str.replace(str[n],'')
  return newString