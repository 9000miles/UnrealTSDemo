#!/bin/bash
# 移除指定的子模块，在空白处右键选择Git Bash Here运行该文件，并输入子模块路径

cd "$(dirname "$0")"

SubmodulePath=$1

if [ -z "$SubmodulePath" ]; then
    echo "请输入子模块路径"
    exit 1
fi

git config --file=.gitmodules --remove-section submodule."$SubmodulePath"
git config --remove-section submodule."$SubmodulePath"
git rm --cached "$SubmodulePath"
rm -rf .git/modules/"$SubmodulePath"
rm -rf "$SubmodulePath"