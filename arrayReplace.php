<?php
function solution($inputArray, $elemToReplace, $substitutionElem) {
    for($i = 0; $i < count($inputArray); $i++) {
        if($inputArray[$i] === $elemToReplace) {
            $inputArray[$i] = $substitutionElem;
        }
    }
    return $inputArray;
}
?>