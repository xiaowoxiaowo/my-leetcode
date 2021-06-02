/***
 * leetcode 146
 * 
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。实现 LRUCache 类：
 * 
 * - LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * - int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * - void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
 *   当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 
 * 输入 ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 *      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出  [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
 * 
 * ["LRUCache","put","put","get","put","put","get"]
 * [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]
 * 
 * [null,null,null,2,null,null,undefined]
 */
// 要做的内容其实很清楚，需要维护一个存放值的对象，维护一个有顺序的数据集合。在每次get或者put时，需要更新数据集合的顺序。
// 如果使用对象来维护key和value，用数组来维护key的顺序。每次更新数据集合时需要获取key的顺序来进行插入和删除的操作，都是O(n)的时间复杂度
// 所以我们可以使用链表来优化改变数据集合顺序的时间复杂度，为了方便的利用链表，这里我们使用双向链表以及查找表来完成解题。
// 双向链表里存储key和value，查找表存储key和对应链表节点
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // 使用Map数据结构
    this.cache = new Map();
    // 定义一个链表头，一个链表尾，初始化的时候将它们连起来
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    const item = this.cache.get(key);
    // 如果查找表中不存在该key，返回-1
    if (item === undefined) return -1;
    // 如果存在，需要将该key值对应的链表节点移动到链表头部
    this.moveToHead(item);
    // 返回链表值
    return item.value;
  }

  put(key, value) {
    const item = this.cache.get(key);
    if (item === undefined) {
      // 如果节点不存在
      // 查找表中的节点数量已经是最大了，需要先删除最不常用的那个节点，即链表尾的上一个节点
      if (this.cache.size === this.capacity) this.removeLRUItem();
      // 新建链表节点，设置查找表，并把该链表移动到链表头部
      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this.addToHead(newNode);
    } else {
      // 如果节点存在，重新赋值，然后将该链表节点移动到链表头部
      item.value = value;
      this.moveToHead(item);
    }
  }
  // 更新一个链表节点,需要先删除该节点，再移动到头部
  moveToHead(node) {
    this.removeFromList(node);
    this.addToHead(node);
  }
  // 将一个链表节点从链表中删除
  removeFromList(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }
 // 将一个节点移到链表头部
  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }
 // 删除最久不更新的节点
  removeLRUItem() {
    let tail = this.dummyTail.prev;
    this.removeFromList(tail);
    this.cache.delete(tail.key);
  }
}
