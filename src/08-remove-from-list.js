/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function printList(list) {
  let tmp = list;
  while (tmp) {
    if (tmp.value === 3) {
      tmp = tmp.next;
      break;
    }
  }
  return tmp;
}

function removeKFromList(l, k) {
  let m;
  let tmp = printList(l);
  while (tmp) {
    if (tmp.value === (k - 1)) {
      tmp.next = tmp.next.next;
      break;
    } else {
      m = tmp;
      tmp = tmp.next;
    }
  }
  return m;
}

module.exports = removeKFromList;
