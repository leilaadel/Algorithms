class Solution:
    def rotate(self, nums, k):
        while k > 0:
            nums.insert(0, nums.pop())
            k = k-1
#runtime 216ms
