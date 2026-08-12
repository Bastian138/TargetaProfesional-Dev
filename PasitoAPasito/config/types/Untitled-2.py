class Node:
    def __init__ (self, info):
        self.info: any = info
        self.next = None
    
head = Node(1)
head.next = Node(2)

posicion_actual = head
while posicion_actual:
    print(posicion_actual.info)
    posicion_actual = posicion_actual.next


