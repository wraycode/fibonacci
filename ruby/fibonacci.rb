#!/usr/bin/ruby
#
#  Counts the fibonacci sequence
#  ruby fibonacci.rb
#


def generateFibonacci(sPos =1, ePos =100)

  stack = [sPos];
  for i in sPos..ePos
    stackCount = stack.length
    if stackCount <= 2
      stack.push(1)
    else
      stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    end
    print "\n #{stack[i]}"

  end # end for loop

    return stack

end


generateFibonacci()
