let names = ["iPhone X", "iPhone XS"];
let colors = ["黑色", "白色"];
let storages = ["64g", "256g"];
// 最终需要得到下面这个数组
[
  ["iPhone X", "黑色", "64g"],
  ["iPhone X", "黑色", "256g"],
  ["iPhone X", "白色", "64g"],
  ["iPhone X", "白色", "256g"],
  ["iPhone XS", "黑色", "64g"],
  ["iPhone XS", "黑色", "256g"],
  ["iPhone XS", "白色", "64g"],
  ["iPhone XS", "白色", "256g"],
]

const permute = (...arg) => {
	let res = [];
	const loop = (index, arr) => {
		if (index === arg.length) return res.push(arr);
		for (let i = 0; i < arg[index].length; i ++) {
			loop(index + 1, [...arr, arg[index][i]]);
		}
	};
	loop(0, []);
	return res;
};

console.log(permute(names, colors, storages));