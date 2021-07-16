### Algorithms for python ###

# REVERSE INTEGERS 
# Given an integer, reverse an integer


def reverseint(x):
    string = str(x)

    if string[0] == '-':
        return int('-' + string[:0:-1])
    else:
        return int(string[::-1])

print(reverseint(12345))
print (reverseint(-12345))


# AVERAGE WORDS LENGTH
# Return average word length for given sentence

sen1 = "Hi all, my name is Tom...I am originally from Australia."
sen2 = "I need to work very hard to learn more about algorithms in Python!"

def senlength(sentence):
    for p in "!.,:?'":
        sentence = sentence.replace(p, '')
    words = sentence.split()
    return round(sum(len(word) for word in words)/len(words),2)

print (senlength(sen1))
print (senlength(sen2))


# ADD STRINGS (integers without conversion)
#return sum of two positive integers (0-9) (no number starting with 0) (cannot convert to integer directly)

num1 = '364'
num2 = '1836'
def sum(num1,num2):
    eval(num1) + eval(num2)
    return str(eval(num1) + eval(num2))

print (sum(num1,num2))


# Tokenizing a string and breaking it down

x = "character and how often it appears"
print(len(x))
print(x[0])
y = x.split(' ')

print(y)
print(y[0])
