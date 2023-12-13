原版仓库 [SCUI](https://gitee.com/lolicode/scui)

1. 本仓库只是将 vue-cli 替换为 vite(vite版本与官网)，只做了为适配 vite 的必要修改，其它仍与原版一致（除部分静态资源）。
2. 和原SCUI不同的一点就是加入了eslint和prettier，stylelint没必要

### 使用 yarn

```
# 进入项目目录
cd ./scui-restructure

# 安装依赖
yarn

# 启动项目(开发模式)
yarn dev
```

### 使用 npm

```
# 进入项目目录
cd ./scui-restructure

# 安装依赖
npm i

# 启动项目(开发模式)
npm run dev
```


### 升级所有依赖

```
你可以使用以下命令来更新工程里面的所有package：

首先，在项目路径下，执行以下命令安装npm-check-updates包：

npm install -g npm-check-updates
然后，用此工具检查过期的packages，它将会列出所有可更新的包：

ncu
如果你想更新所有的包，运行：

ncu -u
这将升级 package.json 文件中所有版本号。现在只需要运行 npm install 来更新你的 node_modules 目录。

npm install

```

### 本次升级项目

> 包升级关系

```
 @element-plus/icons-vue        2.1.0  →    2.3.1
 @tinymce/tinymce-vue           5.0.0  →    5.1.1
 @vitejs/plugin-vue            ^4.1.0  →   ^4.5.2
 @vue/eslint-config-prettier   ^7.0.0  →   ^8.0.0
 axios                         0.27.2  →    1.6.2
 codemirror                    5.65.5  →  5.65.16
 core-js                       3.24.1  →   3.34.0
 cropperjs                     1.5.12  →    1.6.1
 crypto-js                      4.1.1  →    4.2.0
 echarts                        5.3.3  →    5.4.3
 element-plus                   2.3.0  →    2.4.3
 eslint                        ^8.5.0  →  ^8.55.0
 eslint-plugin-vue             ^9.3.0  →  ^9.19.2
 pinyin-match                  ^1.2.2  →   ^1.2.5
 prettier                      ^2.5.1  →   ^3.1.1
 sass                          1.59.3  →   1.69.5
 sortablejs                    1.15.0  →   1.15.1
 terser                       ^5.15.0  →  ^5.26.0
 tinymce                        6.1.2  →    6.8.2
 vite                          ^4.2.0  →   ^5.0.7
 vue                           3.2.47  →   3.3.11
 vue-i18n                       9.2.2  →    9.8.0
 vue-router                     4.1.3  →    4.2.5
 vuex                           4.0.2  →    4.1.0
 xgplayer                      2.31.7  →   3.0.10
 xgplayer-hls                   2.5.2  →   3.0.10
 ```