function SequenceFrame(options) {
    //获取参数
    this.options = {
        id: options.id,
        width: options.width,
        height: options.height,
        firstImg: options.firstImg,
        imgArr: options.imgArr,
        speed: options.speed,
        loop: options.loop,
        autoplay: options.autoplay,
        callback: options.callback,
        img_num: options.img_num
    };

    //初始化参数
    this.source = {};
    this.index = 1;
    this.imgNum = 1;
    this.timer = null;
    this.canvas = this.options.id;
    this.canvas.width = this.options.width;
    this.canvas.height = this.options.height;
    this.ctx = this.canvas.getContext('2d');

    //加载图片
    this.imgLoad();
}

SequenceFrame.prototype = {
    constructor: SequenceFrame,
    
    imgLoad: function () {
        this.source[this.index] = new Image();
        this.source[this.index].src = this.options.imgArr[this.index - 1];
        this.source[this.index].onload = function () {
            this.index++;
            if (this.index > this.options.imgArr.length) {
                if(this.options.autoplay == undefined || this.options.autoplay){
                    //是否自动播放
                    this.render();
                }
                if(this.options.firstImg){
                    this.ctx.drawImage(this.source[1], 0, 0, this.options.width, this.options.height);
                }
            } else {
                this.imgLoad();
            }
        }.bind(this);
    },

    render: function () {
        clearInterval(this.timer);
        this.timer = setInterval(this.playing.bind(this), this.options.speed);
    },

    playing: function () {
        
        //计时器绘图函数
        var imgLength = this.options.imgArr.length;
        if(this.imgNum <= imgLength){
            if (typeof this.options.img_num === 'function') {
                this.options.img_num(this.imgNum,imgLength)
            }
            if (this.imgNum == imgLength && this.options.loop) {
                //循环播放
                this.imgNum = 1;
            }else if(this.imgNum == imgLength && !this.options.loop) {
                //播放一次后调用回调函数
                clearInterval(this.timer);
                if (typeof this.options.callback === 'function') {
                    this.options.callback()
                }
            }
            //将图片绘制到canvas上
            this.ctx.clearRect(0, 0, this.options.width, this.options.height);
            this.ctx.drawImage(this.source[this.imgNum], 0, 0, this.options.width, this.options.height);
        }
        this.imgNum++;
    },

    //可调用的API
    replay: function(){
        //停止所有播放,手动调用播放
        clearInterval(this.timer);
        this.imgNum = 1;
        this.timer = setInterval(this.playing.bind(this), this.options.speed);
    },

    play: function () {
        //手动调用播放
        clearInterval(this.timer);
        this.timer = setInterval(this.playing.bind(this), this.options.speed);
    },

    pause: function () {
        //暂停播放
        clearInterval(this.timer);
    },
}
