<template>
  <div class="hello">
    <header class="main-header">
      <div class="header-list">
        <router-link to="/wel/index" class="logo">
          <img src="../assets/logo.svg" alt="vue">
        </router-link>
        <nav class="main-nav">
          <ul class="nav-list">
            <li>
              <ul class="nav-list">
                <li class="nav-list-value"><router-link to="/wel/index" active-class="active-class">首页</router-link></li>
                <li class="nav-list-value"><router-link to="/wel/activities" active-class="active-class">动态</router-link></li>
                <li class="nav-list-value"><router-link to="/wel/topics" active-class="active-class">话题</router-link></li>
                <li class="nav-list-value"><router-link to="/wel/books" active-class="active-class">小册</router-link></li>
                <li class="nav-list-value"><router-link to="/wel/all" active-class="active-class">活动</router-link></li>
              </ul>
            </li>
            <li class="nav-item search">
              <form role="search" class="search-form" :class="{ active: active === true }">
                <input type="text" class="search-input" maxlength='32' @blur="searchBlur" @focus="searchFocus">
                <img src="../assets/serch.svg" alt="搜索" class="search-icon">
              </form>
            </li>
            <li class="nav-item">
              <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            </li>
            <li class="nav-item">
              <router-link to="/index">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-remind_fill"></use>
                </svg>
              </router-link>
            </li>
            <li class="nav-item">
              <el-dropdown trigger='click'>
                <div data-src="https://user-gold-cdn.xitu.io/2019/1/2/1680e0219988700e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" class="lazy avatar avatar loaded immediate el-dropdown-link" style="background-image: url('https://user-gold-cdn.xitu.io/2019/1/2/1680e0219988700e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1')"></div>
                <!-- <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span> -->
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>已购小册</el-dropdown-item>
                  <el-dropdown-item>我的关注</el-dropdown-item>
                  <el-dropdown-item divided>注销</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- 组件测试区域 start-->
    <i-dropdown>
      <div data-src="https://user-gold-cdn.xitu.io/2019/1/2/1680e0219988700e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" class="lazy avatar avatar loaded immediate el-dropdown-link" style="background-image: url('https://user-gold-cdn.xitu.io/2019/1/2/1680e0219988700e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1')"></div>
                
      <i-dropdown-menu slot="dropdown">
        <i-dropdown-item>已购小册</i-dropdown-item>
        <i-dropdown-item>我的关注</i-dropdown-item>
      </i-dropdown-menu>
    </i-dropdown>
    <!-- 组件测试区域 end-->


    <main>
      <!-- 内容区主体 -->
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import Login from '@/api/public/index'
import IDropdown from '@/components/i-dropdown/i-dropdown'
import IDropdownMenu from '@/components/i-dropdown-menu/i-dropdown-menu'
import IDropdownItem from '@/components/i-dropdown-item/i-dropdown-item'
export default {
  name: 'log',
  components: { IDropdown, IDropdownMenu, IDropdownItem},
  data () {
    return {
      active: false,
      msg: ''
    }
  },
  methods: {
    // 搜索框失焦
    searchBlur(){
      this.active = false
    },
    // 搜索框聚焦
    searchFocus(){
      this.active = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../assets/index.scss';
.main-card {
  width: 400px;
  margin: 0 auto;
}
</style>
