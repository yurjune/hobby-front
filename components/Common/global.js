export const backend = `http://ec2-3-35-203-10.ap.northeast-2.compute.amazonaws.com:3000`;

export const localhost = (value) => {
  return `${backend}/${value}`;
};

// 선택정렬
export function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex].id > array[j].id) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let swap = array[minIndex];
      array[minIndex] = array[i];
      array[i] = swap;
    }
  }
  return array;
}
