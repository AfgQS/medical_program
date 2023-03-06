<template>
  <div>
     <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" unique-opened="true">
          <el-submenu index="1" class="nav-item">
            <template slot="title">标题三</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2" class="nav-item">
            <template slot="title">业务平台</template>
            <el-menu-item index="2-1"><router-link to="/business">商务主页</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/developing">发展主页</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/">Hello</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="3" class="nav-item">
            <template slot="title">标题一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
     </el-menu>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        activeIndex: '1'
      }
    }
  }
</script>

<style>
 .nav-item{
   float: right!important;
 }
 
</style>
