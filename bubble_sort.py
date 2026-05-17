def bubble_sort(arr):
    """冒泡排序算法实现
    
    原理：重复遍历待排序序列，依次比较相邻元素，
    如果顺序错误就交换它们，直到没有需要交换的元素为止。
    
    时间复杂度：O(n²)
    空间复杂度：O(1)
    """
    n = len(arr)
    # 外层循环控制遍历轮数
    for i in range(n - 1):
        # 优化：设置标志位，如果某轮没有发生交换，说明已经有序
        swapped = False
        # 内层循环进行相邻元素比较和交换
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # 如果本轮没有交换，提前退出
        if not swapped:
            break
    return arr


if __name__ == "__main__":
    # 测试用例
    test_cases = [
        [64, 34, 25, 12, 22, 11, 90],
        [5, 1, 4, 2, 8],
        [1, 2, 3, 4, 5],        # 已排序
        [5, 4, 3, 2, 1],        # 逆序
        [42],                    # 单元素
        [],                      # 空列表
    ]

    for arr in test_cases:
        original = arr.copy()
        sorted_arr = bubble_sort(arr)
        print(f"排序前: {original}  ->  排序后: {sorted_arr}")
