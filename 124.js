var maxPathSum = function(root) {
    var maxVal = -Infinity;
    findMaxPath(root);
    return maxVal;
    
    function findMaxPath(node) {
        if(!node) {
            return 0;
        }
        
        var leftVal = Math.max(findMaxPath(node.left), 0);
        var rightVal = Math.max(findMaxPath(node.right), 0);
        
        var ps1 = node.val + Math.max(leftVal, rightVal);
    
        var ps2 = node.val + leftVal + rightVal;
        
       
        maxVal = Math.max.apply(null, [maxVal, ps1, ps2]);

       
        return ps1;
    }
};