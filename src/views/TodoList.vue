<template>
  <div>
    输入待办事项：
    <input type="text" @keyup="addItem($event)" v-model="inputTitle" />
    按回车键添加
    <div>
      <h4>进行中</h4>
      <ul>
        <li v-for="(item,index) in list" :key="item.title" v-show="!item.checked">
          <input type="checkbox" v-model="item.checked" @change="saveList()" />
          {{item.title}}---
          <button @click="removeItem(index)">删除</button>
        </li>
      </ul>
    </div>
    <div>
      <h4>已完成</h4>
      <ul>
        <li v-for="(item,index) in list" :key="item.title" v-show="item.checked">
          <input type="checkbox" v-model="item.checked" @change="saveList()" />
          {{item.title}}---
          <button @click="removeItem(index)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/**
 * TodoList待办事项Demo
 * @author LongTeng 2019-12-03
 */
import storage from "../model/storage";

export default {
  name: "TodoList",

  data() {
    return {
      //输入框中输入的内容
      inputTitle: "",
      //默认显示的列表
      list: [
        { title: "学习React", checked: true },
        { title: "学习Vue", checked: true },
        { title: "学习Angular", checked: false },
        { title: "学习Node", checked: false }
      ]
    };
  },

  methods: {
    //删除列表中元素方法
    removeItem(index) {
      this.list.splice(index, 1);
      storage.set("list", this.list);
    },

    //在列表中添加元素方法，在输入框中按下回车键时，将绑定的输入框中的内容添加到列表中，并清空输入框
    addItem(e) {
      if (e.keyCode == 13) {
        this.list.push({ title: this.inputTitle, checked: false });
        this.inputTitle = "";
        storage.set("list", this.list);
      }
    },

    //当点击checkbox改变时保存数据
    saveList() {
      storage.set("list", this.list);
    }
  },
  mounted() {
    //页面刷新就会加载
    let list = storage.get("list");
    if (list) {
      this.list = list;
    }
  }
};
</script>

<style lang="less" scoped>
</style>