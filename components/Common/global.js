export const backend = `http://ec2-3-35-204-10.ap-northeast-2.compute.amazonaws.com:3000`;
export const newUrl = `http://ec2-3-37-120-204.ap-northeast-2.compute.amazonaws.com:3000`;

export const localhost = (value) => {
  return `${newUrl}/${value}`;
};

export const isLoadMorePosts = () => {
  return window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 50;
}

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
