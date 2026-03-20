export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const result: number[] = []; 
  let i = 0;
  let j = 0; 
  let k = collection_3.length - 1; 

  const totalLength = collection_1.length + collection_2.length + collection_3.length;

  while (result.length < totalLength) {
    let val1: number;
    if (i < collection_1.length) {
      val1 = collection_1[i]!;
    }
    else {
      val1 = Infinity;
    }

    let val2: number;
    if (j < collection_2.length) {
      val2 = collection_2[j]!;
    }
    else {
      val2 = Infinity;
    }

    let val3: number;
    if (k >= 0) {
      val3 = collection_3[k]!;
    }
    else {
      val3 = Infinity;
    }

    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j++;
    } else {
      result.push(val3);
      k--;
    }
  }

  return result;
}