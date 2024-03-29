/**
 * leetcode 1418. 点菜展示表
 * 
 * 给你一个数组 orders，表示客户在餐厅中完成的订单，确切地说， orders[i]=[customerNamei,tableNumberi,foodItemi] ，
 * 其中 customerNamei 是客户的姓名，tableNumberi 是客户所在餐桌的桌号，而 foodItemi 是客户点的餐品名称。
 * 
 * 请你返回该餐厅的 点菜展示表 。在这张表中，表中第一行为标题，其第一列为餐桌桌号 “Table” ，后面每一列都是按字母顺序排列的餐品名称。
 * 接下来每一行中的项则表示每张餐桌订购的相应餐品数量，第一列应当填对应的桌号，后面依次填写下单的餐品数量。
 * 
 * 注意：客户姓名不是点菜展示表的一部分。此外，表中的数据行应该按餐桌桌号升序排列。
 * 
 * 输入：orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],
 * ["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
 * 输出：[["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],
 * ["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]] 
 * 解释：点菜展示表如下所示：
 * Table,Beef Burrito,Ceviche,Fried Chicken,Water
 * 3    ,0           ,2      ,1            ,0
 * 5    ,0           ,1      ,0            ,1
 * 10   ,1           ,0      ,0            ,0
 * 对于餐桌 3：David 点了 "Ceviche" 和 "Fried Chicken"，而 Rous 点了 "Ceviche"
 * 而餐桌 5：Carla 点了 "Water" 和 "Ceviche"
 * 餐桌 10：Corina 点了 "Beef Burrito" 
 * 
 * 输入：orders = [["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],
 * ["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]
 * 输出：[["Table","Canadian Waffles","Fried Chicken"],["1","2","0"],["12","0","3"]] 
 * 解释：
 * 对于餐桌 1：Adam 和 Brianna 都点了 "Canadian Waffles"
 * 而餐桌 12：James, Ratesh 和 Amadeus 都点了 "Fried Chicken"
 * 
 * 输入：orders = [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]
 * 输出：[["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]
 */
// 查找表思路，整体难度不高
var displayTable = function(orders) {
  if (orders.length === 0) return [];
  // 大量的数据可以使用map提高性能
  const map = {};
  const items = new Set();
  for (let [_, table, item] of orders) {
    if (!map[table]) map[table] = {};
    items.add(item);
    map[table][item] = map[table][item] ? map[table][item] + 1 : 1;
  }
  // 直接sort就可以对整个字母进行排序
  const tList = [...items].sort();
  tList.unshift('Table');
  const res2 = [];
  for (let i in map) {
    const arr = [i];
    for (let j = 1; j < tList.length; j ++) {
      arr[j] =  map[i][tList[j]] ? String(map[i][tList[j]]) : '0';
    }
    res2.push(arr);
  }
  res2.sort((a, b) => Number(a[0]) - Number(b[0]));
  return [tList].concat(res2);
};
