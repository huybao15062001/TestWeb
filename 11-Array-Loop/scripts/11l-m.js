function minMax(nums) {
    const arrayList = [];
    
    if (nums.length === 0) {
        arrayList.push(null,null);
    } else {
        let max = nums[0];
        let min = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }

            if (nums[i] < min) {
                min = nums[i];
            }
        }

        arrayList.push(min);
        arrayList.push(max);
    }

    console.log(`{min: ${arrayList[0]}, max: ${arrayList[1]}}`);
}