module.exports = {
  init: function () {
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify([
      {
        id: '0011001',
        name: 'Introduction to Stack',
        title: 'Dynamic Title',
        description: 'The following module give you brief introduction on how stackdata structures are used to keep track of function/subroutines calls',
        steps:0,
        totalsteps:4,
        code:'void  function2(void) { \n\tchar small[12];\n\tfgets(small,12,stdin);\n\tprintf("%s\\n", small);\n}\n\nfunction1() {\n\n\tfunction2();\n\tprintf("Good Bye");\n\n}',
        variants: [
          {
            sku: '0',
            description: 'The following module will give you a brief introduction on how stack data structures are used to keep track of function/subroutine calls, specifically a look at how C/C++ programs save return addresses, parameters and local variables on the stack.',
            type: '',
            stack:{'tag':'','execution':''},
            color:'',
            lineno:{from:'',to:''}
          },
          {
            sku: '1',
            description: 'The CODE window loads a sample C program, which accepts a string input from the user, and prints this value to STDIO. \n\t The main() method is the entry point of the sample C program, which  upon execution, pushes the value of %ebp register on the stack. This is set to NULL',
            type: '0x80484c8 (function 1): pushl %ebp\n0x80484c9 (function 1+1): movl %esp,%ebp',
            stack:{'tag':'EBP','execution':'0x00000000'},
            color:'blue',
            lineno:{from:6,to:7}
          },
          {
            sku: '2',
            description: 'The test() function is then invoked by main() using the "call" instruction.\n\n\t The call instruction, will call the test method which is mapped on address 0x80484a0.  \n\t \n\t However, before branching out to the "test" method, it first saves the next instruction\'s address 0x80484d0 on the stack.  \n\t It saves this address, to branch back to the execution, once test() method has finished execution',
            type: '0x80484cb (function 1+3): call 0x80484a0 (fucntion 2)\n0x80484d0 (function 1+8): call 0x80583c9 (printf)\n0x80484e4 (function 1+13): leave',
            stack:{'tag':'EIP','execution':'0x080484d0'},
            color:'green',
            lineno:{from:8,to:10}
          },
          {
            sku: '3',
            description: 'The test() function stores the stack frame of the calling function on the stack',
            type: '0x80484a0 (function2): pushl %ebp\n0x80484a1 (function2+1): movl %esp,%ebp  ',
            stack:{'tag':'EBP','execution':'0xbffff6d8'},
            color:'red',
            lineno:{from:0,to:0}
          }
        ]
      }
    ]));
  }

};
