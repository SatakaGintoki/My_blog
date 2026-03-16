---
title: "Git 学习"
date: "2026-03-16"
tags: ["Git"]
description: "本人的git学习笔记"
author: "Kuronya"
---

# 📝 学习笔记：Git 版本控制系统 (Missing Semester)

> **导读**：本篇笔记整理自 MIT 的神级课程 _Missing Semester_。相比于死记硬背 Git 命令，理解其底层的“数据模型”和“有向无环图”能让我们在面对版本冲突和报错时更加游刃有余。

## 一、 关键术语说明

在深入 Git 之前，先对核心名词混个眼熟：

- **Version control systems (VCSs)**：版本控制系统
    
- **Source code**：源代码
    
- **Snapshots**：快照（代码版本的完整存档）
    
- **Metadata**：元数据（如作者、时间戳、提交信息等）
    
- **Top-level directory**：顶层目录
    
- **Parallel branches**：并行分支（Git 里最强大、最常用的功能之一）
    
- **Concurrent development**：并发开发 / 多人同时协作开发
    
- **De facto standard**：事实上的标准（Git 目前在业界的地位）
    
- **Revisions**：版本、修订记录
    

---

## 二、 Git 的底层数据模型

Git 并不是简单地记录文件的“差异”，而是将顶级目录中的文件和文件夹作为集合，通过一系列**快照 (Snapshots)** 来管理历史记录。

在 Git 的术语体系中，对象分为以下几类：

1. **Blob（二进制大对象）**：代表单个文件，本质就是一串字节数据（不包含文件名）。
    
2. **Tree（树）**：代表目录，它会建立“名称”与 Blob 或其他 Tree 的映射关系（支持目录嵌套）。
    
3. **Commit（提交）**：一份快照，也就是当前被追踪的顶层 Tree，外加一些元数据（如父辈提交、作者信息等）。
    

**目录结构示例：**

Plaintext

```
<根目录> (tree) 
| 
├─ foo (tree) 
|  |
|  └─ bar.txt (blob, 内容 = "hello world") 
| 
└─ baz.txt (blob, 内容 = "git is wonderful")
```

**用伪代码理解 Git 数据模型：**

JavaScript

```
// 文件就是一组数据
type blob = array<byte>

// 一个包含文件和子目录的目录
type tree = map<string, tree | blob>

// 每个提交都包含父辈节点、元数据和顶层树快照
type commit = struct {
    parents: array<commit>
    author: string
    message: string
    snapshot: tree
}
```

---

## 三、 历史记录与引用

### 1. 有向无环图 (DAG)

在 Git 中，历史记录并不是一条简单的直线，而是一个由快照（Commits）组成的**有向无环图**。每个提交都会指向它的父辈。

**线性历史：**

Plaintext

```
o <-- o <-- o <-- o
```

**包含分支与合并的历史：**

Plaintext

```
o <-- o <-- o <-- o <----  o （合并节点）
            ^            /
             \          v
              --- o <-- o
```

### 2. 引用 (References)

由于快照是用 40 位的 SHA-1 哈希值来索引的，人类根本记不住。**引用**就是指向这些哈希值的指针，相当于给冰冷的哈希值加了一个人类可读的名字（比如 `main` 或 `HEAD`）。

JavaScript

```
references = map<string, string>

def update_reference(name, id):
    references[name] = id

def read_reference(name):
    return references[name]
```

### 3. 暂存区 (Staging Area)

Git 并没有强制你一次性提交工作目录里的所有改动。**暂存区**允许你精确指定下一次快照（Commit）中要包含哪些文件的哪些修改。

---

## 四、 Git 核心命令速查表

### 1. 基础操作

|**命令**|**中文释义 & 核心说明**|
|---|---|
|`git help <command>`|查看指定命令帮助文档（如 `git help commit`）|
|`git init`|创建新版本库，数据存储在 `.git` 目录中|
|`git status`|查看工作区 / 暂存区的状态|
|`git add <filename>`|将指定文件添加到暂存区（可多次执行，筛选内容）|
|`git commit`|基于暂存区内容创建新提交快照。<br><br>  <br><br>⚠️ _好的提交信息能大幅提升历史可读性！_|
|`git log`|以扁平化形式展示提交历史（按时间倒序）|
|`git log --all --graph --decorate`|将提交历史可视化为有向无环图（直观查看分支与合并）|
|`git diff <filename>`|对比「工作目录」与「暂存区」的差异|
|`git diff <revision> <filename>`|对比指定快照与当前版本的差异（revision 可填哈希/分支名）|
|`git checkout <revision>`|更新 HEAD 指向（若检出分支，同时切换当前分支到目标分支）|

### 2. 分支与合并

|**命令**|**中文释义 & 核心说明**|
|---|---|
|`git branch`|列出本地所有分支（带 `*` 的是当前分支）|
|`git branch <name>`|创建名为 `<name>` 的新分支（仅创建，不切换）|
|`git checkout -b <name>`|创建新分支并立即切换。等价于：`git branch <name>; git checkout <name>`|
|`git merge <revision>`|将指定版本/分支的提交合并到当前分支|
|`git mergetool`|启动可视化工具辅助解决合并冲突|
|`git rebase`|将一系列提交“变基”到新的基准上（让历史更线性）|

### 3. 远程仓库协作

|**命令**|**中文释义 & 核心说明**|
|---|---|
|`git remote`|列出已配置的远程仓库（如默认的 `origin`）|
|`git remote add <name> <url>`|添加远程仓库（name 为别名，url 为地址）|
|`git push <remote> <local>:<remote>`|将本地对象推送到远程，并更新远程引用（如 `git push origin main:main`）|
|`git branch --set-upstream-to=<remote>/<branch>`|建立本地与远程分支的关联（后续可直接 pull/push）|
|`git fetch`|从远程拉取对象/引用（仅同步数据，不修改本地工作区）|
|`git pull`|拉取远程数据并合并到当前分支（等价于 `git fetch` + `git merge`）|
|`git clone`|从远程仓库下载完整的版本库到本地|

### 4. 撤销与回退

|**命令**|**中文释义 & 核心说明**|
|---|---|
|`git commit --amend`|编辑最后一次提交的内容/提交信息（⚠️ 仅限未推送到远程的提交）|
|`git reset HEAD <file>`|将指定文件从暂存区撤回（取消 `git add`）|
|`git checkout -- <file>`|丢弃工作目录中该文件的未暂存修改（恢复到最近提交状态）|

### 5. 高级操作与配置

|**命令**|**中文释义 & 核心说明**|
|---|---|
|`git config`|自定义 Git 配置（设置用户名、邮箱、别名等）|
|`git clone --depth=1`|浅克隆（仅拉取最新版本，不下载完整历史，加快速度）|
|`git add -p`|交互式暂存（逐块选择文件中的修改加入暂存区，精准提交）|
|`git rebase -i`|交互式变基（手动编辑、合并、删除提交，重构历史）|
|`git blame <filename>`|溯源：查看文件中每一行最后被谁在什么时间修改|
|`git stash`|临时保存工作目录的修改并清空工作区（后续用 `git stash pop` 恢复）|
|`git bisect`|二分查找提交历史（用于快速定位引入 bug 的那个提交）|
|`.gitignore`|配置文件：指定 Git 忽略的未跟踪文件（如编译产物、IDE 配置等）|
