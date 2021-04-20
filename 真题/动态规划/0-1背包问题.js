/***
 * leetcode ?
 * 有一个背包，它的容量为C。现在有n种不同的物品，编号为0...n-1，其中每一件物品的重量为w，价值为v。问可以向这个背包中盛放哪些物品，
 * 使得在不超过背包容量的基础上，物品的总价值最大
 * 
 * 
 * 解题思路：
 */
// 这里的w和v都是数组，代表一个物品的重量和价值

// 先用递归的思路来实现
// 状态转移方程 F(i, c) = max(F(i - 1, c), v(i) + F(i - 1, c - w(i)))
const knapsack01 = (w, v, c) => {
	let len = w.length;
	let memo = [];
	const dfs = (w, v, index, c) => {
		if (index < 0 || c <= 0) return 0;
		if (memo[`${index}-${c}`]) return memo[`${index}-${c}`];
		let res = dfs(w, v, index - 1, c);
		if (c >= w[index]) {
			res = Math.max(res, v[index] + dfs(w, v, index - 1, c - w[index]));
		}
		memo[`${index}-${c}`] = res;
		return res;
	};
	return dfs(w, v, len - 1, c);
};

// 动态规划的思路
// 见 0-1背包问题动态规划图解 图片
// 定义一个二维数组，容量c作为x轴，元素个数作为y轴
// 假设现在有个容量为5的背包，有三个物品，
// w[0] = 1  v[0] = 6
// w[1] = 2  v[1] = 10
// w[2] = 3  v[2] = 12
// 我们先定义这个二维数组
// -1 -1 -1 -1 -1 -1
// -1 -1 -1 -1 -1 -1 
// -1 -1 -1 -1 -1 -1
// 然后我们给第一排赋值(当容量为1的时候，才能放下第一个元素)
// 0  6  6  6  6  6
// 然后我们给第二排赋值
// (当容量小于2的时候，放不下，所以按第一个元素的值来。)
// (当容量等于2的时候，因为key放下当前元素，所以需要用v[1]和上面的元素比较，v[1]大，所以取v[1])
// (当容量大于2的时候，10 + 6 > 6, 所以取16)
// 0  6  6  6  6  6
// 0  6  10 16 16 16
// 该解法时间复杂度和空间复杂度都是O(n * c)
const knapsack01 = (w, v, c) => {
	let len = w.length;
	if (len === 0) return 0;
	// 初始化二维数组
	let memo = [];
	for (let i = 0; i < len; i ++) {
		memo.push(new Array(c + 1).fill(0));
	}
	// 设置x为0时的二维数组值
	for (let i = 0; i <= c; i ++) {
		if (i >= w[0]) memo[0][i] = v[0];
	}
	// 遍历二维数组
	for (let i = 1; i < len; i ++) {
		for (let j = 0; j <= c; j ++) {
			memo[i][j] = memo[i - 1][j];
			if (j >= w[i]) {
				// 当容量大于当前节点值时，取memo[i - 1][j]和v[i] + memo[i - 1][j - w[i]]中的较大值
				memo[i][j] = Math.max(memo[i][j], v[i] + memo[i - 1][j - w[i]]);
			}
		}
	}
	return memo[len - 1][c];
};

// 优化思路，空间复杂度的优化
// 每次遍历，只依赖于第i - 1行元素，理论上，只需要保持两行元素，所以，空间复杂度可以优化成O(c)
const knapsack01 = (w, v, c) => { 
	let len = w.length;
	if (len === 0) return 0;
	let memo = [new Array(c + 1).fill(0), new Array(c + 1).fill(0)];
	for (let i = 0; i <= c; i ++) {
		if (i >= w[0]) memo[0][i] = v[0];
	}

	for (let i = 1; i < len; i ++) {
		for (let j = 0; j <= c; j ++) {
			memo[i % 2][j] = memo[(i - 1) % 2][j];
			if (j >= w[i]) {
				memo[i % 2][j] = Math.max(memo[i % 2][j], v[i] + memo[(i - 1) % 2][j - w[i]]);
			}
		}
	}
	return memo[(len - 1) % 2][c];
};

// 进一步优化，只使用一行元素，来遍历。进一步优化空间复杂度
// 因为每次遍历一个元素，只需要使用该元素上面和左边的元素，所以可以只使用一行数组，从右向左遍历。
const knapsack01 = (w, v, c) => {
	let len = w.length;
	if (len === 0) return 0;
	let memo = new Array(c + 1).fill(0);
	for (let i = 0; i <= c; i ++) {
		if (i >= w[0]) memo[i] = v[0];
	}

	for (let i = 1; i < len; i ++) {
		for (let j = c; j >= w[i]; j --) {
			memo[j] = Math.max(memo[j], v[i] + memo[j - w[i]]);
		}
	}
	return memo[c];
};