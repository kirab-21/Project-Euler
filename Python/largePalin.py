import math

def isPalindrom(product):
    return str(product) == str(product)[::-1]

def largestPalindromProduct(n):
    maxNo = pow(10, n) - 1
    minNo = pow(10, n-1)

    # print(maxNo, minNo)

    largePalindrome = 0

    for i in range(maxNo, minNo -1, -1):
        for j in range(i, minNo, -1):
            product = i * j

            if product < largePalindrome:
                break

            if isPalindrom(product):
                largePalindrome = max(largePalindrome, product)

    print(largePalindrome)

largestPalindromProduct(2)