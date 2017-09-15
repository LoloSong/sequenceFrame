# SequenceFrame

### canvas绘制序列帧插件
[项目地址](https://github.com/LoloSong/sequenceFrame)

### npm下载
```
npm install sequence-fram

```

##### 配置参数

```
//以下参数中id,width,height,speed,imgArr必须填写
var frame = new SequenceFrame({
    id: document.getElementBy('id'),    //canvas的DOM节点
    width: 640,                         //canvas高度
    height: 1040,                       //canvas宽度
    speed: 100,                         //绘制的间隔时间
    imgArr: [],                         //图片路径数组
    loop: true,                         //是否循环
    autoplay: ture,                     //图片加载完后是否播放
    callback: function(){}              //动画结束后的回调函数
})

```
创建实例后,只有等所有图片加载完毕后才会播放序列帧,可以设置autoplay为false, 等图片加载完毕后,调用play()方法播放序列帧

#### 对外的接口
##### play
停止当前播放的序列帧,从头开始播放
```
//创建实力后可调用
frame.play()

```
