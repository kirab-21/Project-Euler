def multiplesOf3Or5(number):
    ans = []
    sum = 0

    for i in range(3, number):
        if i % 3 == 0 or i % 5 == 0:
            ans.append(i)

    for i in ans:
        sum += i

    print(sum)

multiplesOf3Or5(10)