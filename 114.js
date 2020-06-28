var flatten = function(root) {
    var stack = [];
    var p = root;

    while(p !== null || stack.length !== 0){
        if(p.right  !== null){
            stack.push(p.right);
        }

        if(p.left !== null){ 
            p.right = p.left;
            p.left = null;
        } else if(stack.length !== 0){
            var node = stack.pop();
            p.right = node;
        }

        p = p.right;
    }
};