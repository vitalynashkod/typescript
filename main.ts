// возвращает сумму элементов массива
export function arraySum(arr: number[]): number {
}

// возвращает исходную строку в Title Case
export function toTitleCase(str: string[]): string {
}

// возвращает Promise, который зарезолвит true, если b больше чем a, и зареджектит, если наоборот
export function promiseCompare(a: number, b: number): Promise<true> {
}

export async function asyncCompare(): Promise<true> {
  let a: number = 10;
  let b: number = 5;
  let res: any = false;

  while (res !== true) {
    try {
      res = promiseCompare(a, b);
    }
    catch (e) {
      b--;
    }
  }

  return res;
}
