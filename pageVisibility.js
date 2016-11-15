document.addEventListener('visibilitychange', function () {
    if (document.hidden) { //被隐藏
        return document.visibilityState;
    }
})

document.visibilityState

{
    visible; //可见的
    hidden;//被最小化 或非当前tab页
    prerender;//加载中
    unloaded;//暂未支持

}

