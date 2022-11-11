class ImgNode
{
    static next = null;
    constructor(val) {this.val = val;}
}

N1 = new ImgNode(10)
N2 = new ImgNode(1)
N3= new ImgNode(2)
N1.next = N2;
N2.next =N3;
N3.next = null;

/*function Traverse( n) 
{
     temp = n
     if(n != null) 
     {
        do{
        console.log(temp.value);
        temp = n.next
        }
        while(temp!=n)
     }
}
*/
Traverse(N1);