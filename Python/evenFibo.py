def evenFiboSum(n):
    arr = [1, 2]
    sum = 2

    while True:
        nextNo = arr[-1] + arr[-2]

        if nextNo > n:
            break

        arr.append(nextNo)

        if nextNo % 2 == 0:
            sum = sum+ nextNo
    
    print(sum) 



evenFiboSum(34)