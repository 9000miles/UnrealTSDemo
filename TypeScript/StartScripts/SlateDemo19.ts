
import { STreeView, STextBlock } from 'cpp';

interface TreeNode {
    id: string;
    name: string;
    children?: TreeNode[];
}

class TreeView extends STreeView<TreeNode> {
    constructor(rootNodes: TreeNode[]) {
        super();

        this.TreeItemsSource = rootNodes;
        this.ItemHeight(24);
        this.HeaderRow().Visibility(EVisibility.Hidden);
        this.SetSelectionMode(ESelectionMode.None);

        this.OnGenerateRow.BindRaw(this, this.generateRow);
        this.OnGetChildren.BindRaw(this, this.getChildren);
    }

    private generateRow(treeViewItem: FTreeViewItem<TreeNode>, outRowContents: SWidgetRef) {
        let textBlock = new STextBlock({ Text: treeViewItem.Data.name });
        outRowContents = textBlock;
    }

    private getChildren(parent: TreeNode | null, outChildren: TreeNode[]) {
        if (parent) {
            outChildren = parent.children || [];
        } else {
            outChildren = this.TreeItemsSource;
        }
    }
}

// 使用示例
let treeData: TreeNode[] = [
    {
        id: "root1",
        name: "Folder 1",
        children: [
            { id: "sub1", name: "Subfolder 1" },
            { id: "sub2", name: "Subfolder 2" },
        ],
    },
    {
        id: "root2",
        name: "Folder 2",
    },
];

let treeView = new TreeView(treeData);
// let mainWidget = ...; // 假定的主窗口或面板引用
// mainWidget.AddChild(treeView);