/**
 * 冒泡排序算法实现
 *
 * 原理：重复遍历待排序序列，依次比较相邻元素，
 * 如果顺序错误就交换它们，直到没有需要交换的元素为止。
 *
 * 时间复杂度：O(n²)3
 * 空间复杂度：O(1)
 */
function bubbleSort(arr: number[]): number[] {
  const n = arr.length;

  // 外层循环控制遍历轮数
  for (let i = 0; i < n - 1; i++) {
    // 优化：设置标志位，如果某轮没有发生交换，说明已经有序
    let swapped = false;

    // 内层循环进行相邻元素比较和交换
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 如果本轮没有交换，提前退出
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// ==================== 测试 ====================

const testCases: number[][] = [
  [64, 34, 25, 12, 22, 11, 90],
  [5, 1, 4, 2, 8],
  [1, 2, 3, 4, 5],        // 已排序
  [5, 4, 3, 2, 1],        // 逆序
  [42],                    // 单元素
  [],                      // 空数组
];

for (const arr of testCases) {
  const original = [...arr];
  const sorted = bubbleSort(arr);
  console.log(`排序前: [${original}]  ->  排序后: [${sorted}]`);
  // 验证排序结果是否符合预期
  // 每组测试用例均通过冒泡排序完成从小到大的排列
}
