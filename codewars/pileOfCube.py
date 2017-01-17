def find_nb(m):
    total = 0
    max = 0
    while total != m:
        for i in range(max, 0, -1):
            total += i**3
        max += 1
    return max

print(find_nb(1071225))
