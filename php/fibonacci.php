<?php
//
//  Counts the fibonacci sequence
//  node fibonacci.js
//

generateFibonacci();

function generateFibonacci($start = 1, $end = 100) {

    $stack = [$start];

    for ($i=$start; $i<$end; $i++) {

        $stackCount = count($stack);

        if ($stackCount <= 2) {

            array_push($stack,1);

        } else  {

            array_push($stack,$stack[count($stack) - 2] + $stack[count($stack) - 1]);
        }

      print "\n$stack[$i]";

    }

    return $stack;

}
