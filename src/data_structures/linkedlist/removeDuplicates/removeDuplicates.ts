import { SinglyLinkedListNode } from "../nodes";
import SinglyLinkedList from "../SinglyLinkedList";

const node: SinglyLinkedListNode<Number> = {
    data: 1,
}

const nodeList = new SinglyLinkedList(node);

export function removeDuplicates(head: SinglyLinkedListNode<Number>): SinglyLinkedListNode<Number> {
    if(!head || !head.next) {
        return head
    }
    
    let current = head
    let next = current.next
    
    while(next) {
        if(next.data === current.data) {
            current.next = current.next.next
            next = current.next
        } else {
            current = next
            next = current.next
        }
    }
    return head
}