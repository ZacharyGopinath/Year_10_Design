#This program allows the user to input a string (word or number) 
# and check whether there is a duplicate character within said string

word = input("What word/number would you like to check: ")
sortedWord = sorted(word)
dupChar = False
dupCharStr = ''
for i in range(0,len(sortedWord),1):
    if sortedWord[i] == sortedWord[i-1]:
        dupChar = True
        dupCharStr = dupCharStr+sortedWord[i]
        break
print("Duplicate Character Found:",dupChar,",",dupCharStr)
        