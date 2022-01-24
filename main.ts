// возвращает сумму элементов массива
export function arraySum(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num);
}

// возвращает исходную строку в Title Case
export function toTitleCase(str: string): string {
  return str.replace(/^[A-Za-z]|\s[A-Za-z]/g, (match) => match.toUpperCase());
}

// возвращает Promise, который зарезолвит true, если b больше чем a, и зареджектит, если наоборот
export function promiseCompare(a: number, b: number): Promise<true> {
  const promise: Promise<true> = new Promise((resolve, reject)  => {
    if (b > a)  {
        resolve(true);
    }

      reject(new Error("error"));
  });

  return promise;
}

export async function asyncCompare(): Promise<true> {
  let a: number = 10;
  let b: number = 5;
  let res: any = false;

  do {
    try {
      res = await promiseCompare(a, b);
    }
    catch (e) {
      b++;
    }
  } while (res !== true)

  return res;
}
