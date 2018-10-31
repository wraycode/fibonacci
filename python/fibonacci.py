#!/usr/bin/python
#
#  Counts the fibonacci sequence
#  ruby fibonacci.rb
#

def generateFibonacci(sPos = 1, ePos = 100):

  stack = [sPos]
  for i in range(sPos,ePos):
    stackCount = len(stack)
    if (stackCount <= 2):
      stack.append(1)
    else:
      value = stack[len(stack) - 1] + stack[len(stack) - 2]
      stack.append(value)
    print  str(stack[i])

  return stack

generateFibonacci()
