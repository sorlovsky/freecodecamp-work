import time

def start():
    start = time.time()
    print(start)
    end = round(start) + 25*60
    while round(time.time()) != end:
        pass
    print time.time()
start()
