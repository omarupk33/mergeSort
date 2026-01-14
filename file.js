function isSorted(list) {
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] > list[i + 1]) {
      return false
    }
  }
  return true
}

// list1 and list2 Should be sorted 
function swap_and_sort(list1, list2){
  let pointer1 = 0
  let pointer2 = 0
  let result_list = []
  while (pointer1 !== list1.length && pointer2 !== list2.length){

      if (list1[pointer1] < list2[pointer2]){
        result_list.push(list1[pointer1])
        pointer1+=1
      }

      else if(list1[pointer1] > list2[pointer2]){
        result_list.push(list2[pointer2])
        pointer2+=1
      }
      else{

        if(list1[pointer1] === list2[pointer2]){
          result_list.push(list1[pointer1])
          result_list.push(list2[pointer2])
        }
        pointer1 +=1
        pointer2 +=1
      }
  }
    if(pointer1 === list1.length){
      result_list.push(...list2.slice(pointer2))
      return result_list
    }
    if (pointer2 === list2.length){
      result_list.push(...list1.slice(pointer1))
      return result_list
    }

  return result_list
}

function mergeSort(list){
    // We check if sorted
    if (isSorted(list) || list.length < 2){
        return list
    }
    else{
    let middle_index = Math.ceil(list.length/2)
    let first_half = list.slice(0,middle_index)
    let second_half = list.slice(middle_index)
    let solution = swap_and_sort(mergeSort(first_half), mergeSort(second_half))
    return solution

    }
}


console.log(mergeSort([105, 79, 100, 110]))