def fptp():
    num1 = input("Input Number 1:")
    num2 = input("Input Number 2:")
    num3 = input("Input Number 3:")

    nums = {
        'Vote 1':num1,
        'Vote 2':num2,
        'Vote 3':num3,
    }
    numslist = [num1,num2,num3]
    winner = max(numslist)

    print(nums[winner])
fptp()

