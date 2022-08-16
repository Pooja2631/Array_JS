a=int(input("enter the number1:-"))
b=int(input("enter the number2:-"))
if (b==0):
    print(a)
else:
    print(b,a and b)


a=int(input("enter the number1:-"))
b=int(input("enter the number2:-"))
if a>b:
    greater=a
else:
    greater=b
while (True):
    if((greater%a==0) and (greater%b==0)):
        lcm=greater
        break
    greater=greater+1

print("least common multiple=",lcm)
