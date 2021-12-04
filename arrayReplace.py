def solution(inputArray, elemToReplace, substitutionElem):
    output = []
    for elem in inputArray:
        if(elem == elemToReplace):
            output.append(substitutionElem)
        else:
            output.append(elem)
    return output