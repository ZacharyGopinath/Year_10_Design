from tkinter import *

def process(*args):
    val = entValue.get()
    check = check01(val)
    if (check == True):
        val = remove0(val)

        result = base2to10(val)

        labResults.config(text = str(val) + " --> " + str(result))
    else:
        labResults.config(text = val + " Is Not A Valid Input!")
    entValue.delete(0,END)

def check01(str):
    num0 = str.count("0")
    num1 = str.count("1")
    if num0 + num1 == len(str):
        return True
    return False

def remove0(str):
    for i in range(0,len(str),1):
        if (str[i] == "1"):
            return str[i:]

def base2to10(str):
    n = 0
    total = 0
    for i in range(len(str) - 1, -1, -1):
        total = total + int(str[i]) * 2**n
        n = n +1 
    return total

root = Tk()
root.title("Binary To Base 10")

labInstructions = Label(root, text = "Enter Binary #")
entValue = Entry(root)
labResults = Label(root, text = "--")

labInstructions.pack()
entValue.pack()
labResults.pack()

root.bind("<Return>", process)

root.mainloop()