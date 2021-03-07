/***
 * "the sky is blue"
 * "blue is sky the"
 *
 * "a good   example"
 * "example good a"
 * 
 * "  Bob    Loves  Alice   "
 * "Alice Loves Bob"
 * 
 * "Alice does not even like bob"
 * "bob like even not does Alice"
 *
 * s 包含英文大小写字母、数字和空格 ' '
 * s 中 至少存在一个 单词
 */
var reverseWords = function(s) {
  if (s.length < 2) return s;
  s = s.split(' ');
  let i = 0, len = s.length
  while(i < len) {
    if (s[i] === '') {
      s.splice(i, 1);
      len--;
      continue;
    }
    i++;
  }
  let l = 0, r = len - 1;
  while(l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  s = s.join(' ');
  return s;
};
console.log(reverseWords(" M6eAL   RxnYFfCA kibo     oEw    z36tp     kufsBMitF K  sMG A 1 H io"));
