import * as fs from 'fs';
import * as path from 'path';
// import * as fsExtra from 'fs-extra';

const sourceDir = 'W:\\EpicGames\\UE_5.1\\Engine\\Source\\Runtime'; // 指定要遍历的目录
const targetDir = 'M:\\UE\\5.1\\UnrealTSDemo\\Plugins\\UnrealTS\\Source\\SlateTS\\Private\\GlueCode'; // 指定新文件存放的目录

// 遍历目录下的所有.h文件
function enumerateHFiles(dir: string): string[] {
    const files = fs.readdirSync(dir);
    let hFiles: string[] = [];
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            hFiles = hFiles.concat(enumerateHFiles(filePath));
        } else if (path.extname(file) === '.h') {
            hFiles.push(filePath);
        }
    }
    return hFiles;
}

// 检查文件内容是否包含指定的两个字符串，并尝试提取类的父类名称
function checkContentAndExtractParentClass(file: string): {
    hasStrings: boolean,
    myClass?: string,
    parentClass?: string
} {
    try {
        const content = fs.readFileSync(file, 'utf-8');
        const fileName = path.basename(file, ".h")
        if (fileName == "SSlider") {
            console.log("ddddddddddd")
        }
        const hasBeginArgs = content.includes('SLATE_BEGIN_ARGS');
        const hasEndArgs = content.includes('SLATE_END_ARGS');
        if (hasBeginArgs && hasEndArgs) {
            // 简单的正则表达式尝试匹配类定义的父类部分，例如"class MyClass : public BaseClass"
            const classRegex = /class\s+(\w+(_API)?)\s+(\w+)\s*:\s*public\s+([^\s{]+)/;
            const match = content.match(classRegex);// || content.match(/struct\s+(\w+)\s*:\s*public\s+(\w+)/);
            if (match) {
                // 返回匹配到的父类名
                return {hasStrings: true, myClass: match[3], parentClass: match[4]};
            }
        }
        return {hasStrings: false};
    } catch (err) {
        console.error(`Error reading ${file}: ${err}`);
        return {hasStrings: false};
    }
}

// 处理文件并创建新文件
function processFiles() {
    const hFiles = enumerateHFiles(sourceDir);
    const template = getTemplateFile();
    hFiles.forEach((file) => {
        const classInfo = checkContentAndExtractParentClass(file)
        if (classInfo.hasStrings) {
            const baseName = path.basename(file, '.h');
            const newFileName = `$${baseName}.cpp`;
            const newFilePath = path.join(targetDir, newFileName);

            // 检查目标目录中是否已存在同名文件
            if (fs.existsSync(newFilePath)) {
                console.log(`Skip creating because file already exists: ${newFilePath}`);
            } else {
                let codeFile = template;
                codeFile = codeFile.replaceAll("$WidgetClass$", classInfo.myClass);
                codeFile = codeFile.replaceAll("$SuperClass$", classInfo.parentClass);
                // 创建一个空的.cpp文件
                fs.writeFileSync(newFilePath, codeFile);
                console.log(`Created empty file: ${newFilePath}`);
            }
        }
    });
}

//$SET_ARGUMENTS$
//$SET_DTS_ARGS$

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

function getTemplateFile() {
    const file = "M:\\UE\\5.1\\UnrealTSDemo\\Plugins\\UnrealTS\\Source\\SlateTS\\Private\\Template\\Template.txt"
    return fs.readFileSync(file, 'utf-8');
}

processFiles();