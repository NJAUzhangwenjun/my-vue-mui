<template>
  <div>
    <div class="mui-content">
      <!--轮播图区域-->
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="//yun.duiba.com.cn/images/201904/z8yi22b5cj.jpeg?x-oss-process=image/format,webp"
                            alt="">
        </mt-swipe-item>
        <mt-swipe-item><img src="//yun.duiba.com.cn/images/201904/solme38wgw.jpg?x-oss-process=image/format,webp"
                            alt="">
        </mt-swipe-item>
        <mt-swipe-item><img src="//yun.duiba.com.cn/images/201808/fh9iw1evwk.jpg?x-oss-process=image/format,webp"
                            alt="">
        </mt-swipe-item>
      </mt-swipe>

      <!--九宫格区域-->
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          循环
          <div id="Gallery_Toggle" class="mui-switch">
            <div class="mui-switch-handle"></div>
          </div>
        </li>
      </ul>
      <div id="Gallery" class="mui-slider" style="margin-top:15px;">
        <div class="mui-slider-group">
          <div class="mui-slider-item">


            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-new"></span>
                <div class="mui-media-body">新闻资讯</div>
              </a></li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">商品购买</div>
              </a></li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-share"></span>
                <div class="mui-media-body">图片分享</div>
              </a></li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-comment"></span>
                <div class="mui-media-body">留言反馈</div>
              </a></li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-classroom"></span>
                <div class="mui-media-body">视频专区</div>
              </a></li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon-extra mui-icon-extra-peoples"></span>
                <div class="mui-media-body">联系我们</div>
              </a></li>

            </ul>
          </div>

        </div>
        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
      <!--数据图文列表-->
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/shuijiao.jpg">
            <div class="mui-media-body">
              幸福
              <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/shuijiao.jpg">
            <div class="mui-media-body">
              木屋
              <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/shuijiao.jpg">
            <div class="mui-media-body">
              CBD
              <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
          </a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getLunBotu();
    },
    methods: {
      getLunBotu() {
        // GET /someUrl
        this.$http.get('http://api.komavideo.com/news/list').then(response => {

          // get body data
          // console.log(response.body);
          this.list = response.body;

        }, response => {
          // error callback
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      background: #f0ffef;
    }
  }

  img {
    width: 100%;
    height: 100%;
    /*max-width: 100%;*/
    /*max-height: 100%;*/
  }

  .mui-grid-view.mui-grid-9 {
    background-color: rgba(206, 230, 225, 0.46);
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 0;
    padding: 11px 15px;
    vertical-align: top;
    border-right: 0px solid #0e0d0d;
    border-bottom: 0px solid #eee;
  }

  element.style {
    margin-top: 0px;
  }
</style>
