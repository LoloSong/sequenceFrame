# SequenceFrame

### canvas绘制序列帧插件
[项目地址](https://github.com/LoloSong/sequenceFrame)

### npm下载
```
npm install sequence-frame

```

##### 配置参数

```
//以下参数中带*必须填写

var frame = new SequenceFrame({
    id: document.getElementBy('id'),    //*canvas的DOM节点
    width: 640,                         //*canvas高度
    height: 1040,                       //*canvas宽度
    firstImg: url                       //默认显示的图片
    imgArr: [],                         //*图片路径数组
    speed: 100,                         //*绘制的间隔时间
    loop: true,                         //是否循环
    autoplay: ture,                     //图片加载完后是否播放(默认为true)
    callback: function(){}              //动画结束后的回调函数
    img_num: function(num,allNum){}     //返回当前帧数，和总帧数
})

```
创建实例后,只有等所有图片加载完毕后才会播放序列帧,可以设置autoplay为false, 等图片加载完毕后,调用play()方法播放序列帧

### 方法
##### play
播放序列帧
```
//创建实力后可调用
frame.play()
```
##### replay
停止当前播放的序列帧,从头开始播放
```
//创建实力后可调用
frame.replay()
```

##### pause
暂停播放(当不使用实力时，调用此方法，停止定时器!!!)
```
//创建实力后可调用
frame.pause()
```
