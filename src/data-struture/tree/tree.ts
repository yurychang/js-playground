class TreeNode {
    value: any;
    children: TreeNode[] = [];

    constructor(value?: any) {
        this.value = value;
    }

    addChild(node: TreeNode) {
        this.children.push(node);
    }

    removeChild(node: TreeNode) {
        this.children = this.children.filter((n) => n !== node);
    }

    insertChild(node: TreeNode, index: number) {
        this.children.splice(index, 0, node);
    }
}
